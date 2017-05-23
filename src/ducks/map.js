import { createAction, createReducer } from 'redux-act';
import { Record, Map } from 'immutable';
import getLayerManager from '../evergis/layer-manager';
import getMap from '../evergis/map';
import getConnector from '../evergis/connector';
import {
    OBJECTS_SERVICE,
    EMPLOYEES_SERVICE,
    OSM,
    GIS,
    BASEMAPS,
    OFFICES_SERVICE,
    applyObjectsStyle,
    applyClusterEvents,
} from '../evergis/helpers';
import { pickByGeometry } from '../evergis/api';

const Service = Record({
    name: undefined,
    isVisible: undefined,
    order: undefined,
});

const MapState = Record({
    center: [5477310.877466004, 7517826.314514717],
    resolution: 76.43702828515632,
    loading: false,
    error: false,
    services: new Map(),
    basemap: GIS,
    objectsDataFilter: new Map({
        1: true,
        2: true,
        3: true,
        4: true,
        5: true,
    }),
    showOffices: true,
    showHomeAddress: true,
    selectedObjects: [],
});

const initState = new MapState();

export const setCenter = createAction('map/set-center');
export const resetMap = createAction('map/reset-map');
export const setResolution = createAction('map/set-resolution');
export const loadServices = createAction('map/load-services');
export const loadServicesSuccess = createAction('map/load-services-success');
export const loadServicesError = createAction('map/load-services-error');
export const setObjectsDataFilter = createAction('map/set-object-data-filter');
export const setShowOffices = createAction('map/set-show-offices');
export const setShowHomeAddress = createAction('map/set-show-home-address');

export const selectObject = createAction('map/select-object');

const isVisible = (name, { basemap }) =>
    (BASEMAPS.includes(name) && basemap === name) || !BASEMAPS.includes(name);

export const loadMapServices = (
    names = [OSM, GIS, EMPLOYEES_SERVICE, OFFICES_SERVICE, OBJECTS_SERVICE],
) => (dispatch, getState) => {
    dispatch(loadServices);
    const map = getMap({});
    const connector = getConnector();
    const layerManager = getLayerManager(connector, map);

    return Promise.all(names.map(name => layerManager.loadWithPromise(name)))
        .then(containers => {
            const objectsService = containers.find(
                ({ name }) => name === OBJECTS_SERVICE,
            );
            applyObjectsStyle(objectsService);

            applyClusterEvents(objectsService);

            const state = getState();
            const containersState = containers.map(({ name }) => ({
                name,
                isVisible: isVisible(name, state.map),
            }));
            dispatch(loadServicesSuccess(containersState));
            return containersState;
        })
        .catch(error => dispatch(loadServicesError()));
};

export const pickObject = point => dispatch =>
    pickByGeometry(point)
        .then(response => dispatch(selectObject(response)))
        .catch(error => dispatch(selectObject([])));

export default createReducer(
    {
        [setCenter]: (state, payload) => state.set('center', payload),

        [resetMap]: (state, payload) => initState,

        [setResolution]: (state, payload) => state.set('resolution', payload),

        [loadServices]: (state, payload) =>
            state.set('loading', true).set('error', false),

        [loadServicesSuccess]: (state, payload) =>
            state
                .set('loading', false)
                .set('error', false)
                .set(
                    'services',
                    new Map(
                        payload.map(({ name, isVisible }, order) => [
                            name,
                            new Service({ name, order, isVisible }),
                        ]),
                    ),
                ),

        [loadServicesError]: (state, payload) =>
            state.set('loading', false).set('error', payload),

        [setObjectsDataFilter]: (state, { layerNumber, checked }) =>
            state.setIn(['objectsDataFilter', layerNumber.toString()], checked),

        [setShowOffices]: (state, payload) =>
            state.set('showOffices', payload.checked),

        [setShowHomeAddress]: (state, payload) =>
            state.set('showHomeAddress', payload.checked),

        [selectObject]: (state, payload) =>
            state.set('selectedObjects', payload),
    },
    initState,
);
