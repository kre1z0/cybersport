import { createAction, createReducer } from 'redux-act';
import { Record, Map } from 'immutable';
import getLayerManager, { isServicesLoaded } from '../evergis/layer-manager';
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
    applyFeatureEvents,
} from '../evergis/helpers';
import { pickByGeometry, pickById, initFeatureLayers } from '../evergis/api';

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
    domainsFilter: null,
    showOffices: true,
    showHomeAddress: true,
    selectedObjects: [],
    anchorPosition: null,
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
export const setDomainsFilter = createAction('map/set-domain-filter');

export const changeBaseMap = createAction('map/change-base-map');

const isVisible = (name, { basemap }) =>
    (BASEMAPS.includes(name) && basemap === name) || !BASEMAPS.includes(name);

export const loadMapServices = (names = [OSM, GIS, OBJECTS_SERVICE]) => (
    dispatch,
    getState,
) => {
    dispatch(loadServices);
    const map = getMap({});
    const connector = getConnector();
    const layerManager = getLayerManager(connector, map);

    return Promise.all([
        Promise.all(names.map(name => layerManager.loadWithPromise(name))),
        initFeatureLayers([OFFICES_SERVICE, EMPLOYEES_SERVICE]),
    ])
        .then(([containers, featureLayers]) => {
            const objectsService = containers.find(
                ({ name }) => name === OBJECTS_SERVICE,
            );
            applyObjectsStyle(objectsService);

            featureLayers.forEach(layer =>
                applyFeatureEvents(layer, ({ object, position }) => {
                    dispatch(selectObject({ objects: [object], position }));
                }),
            );

            applyClusterEvents(objectsService, ({ ids, position }) => {
                dispatch(pickObjectsById({ ids, position }));
            });

            const state = getState();
            const containersState = containers.map(({ name }) => ({
                name,
                isVisible: isVisible(name, state.map),
            }));
            dispatch(loadServicesSuccess(containersState));
            return containersState;
        })
        .catch(error => dispatch(loadServicesError(error)));
};

export const loadMapServicesIfNeeded = () => dispatch =>
    isServicesLoaded() ? Promise.resolve() : dispatch(loadMapServices());

export const pickObject = point => dispatch =>
    pickByGeometry(point)
        .then(response => dispatch(selectObject(response)))
        .catch(error => dispatch(selectObject([])));

export const pickObjectsById = ({ ids, position }) => dispatch =>
    pickById(ids)
        .then(response =>
            dispatch(selectObject({ objects: response, position })),
        )
        .catch(error => dispatch(selectObject({ objects: [] })));

export const changeMap = map => dispatch => {
    dispatch(changeBaseMap(map));
};

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

        [selectObject]: (state, { objects, position }) =>
            state
                .set('selectedObjects', objects)
                .set('anchorPosition', position),

        [setDomainsFilter]: (state, payload) =>
            state.set('domainsFilter', payload),

        [changeBaseMap]: (state, payload) => state.set('basemap', payload),
    },
    initState,
);
