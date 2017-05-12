import {createAction, createReducer} from 'redux-act';
import {Record, Map} from 'immutable';
import getLayerManager from '../evergis/layer-manager';
import getMap from '../evergis/map';
import getConnector from '../evergis/connector';
import {OBJECTS_SERVICE, EMPLOYEES_SERVICE, OSM, GIS, BASEMAPS, applyObjectsStyle} from '../evergis/helpers';

const Service = Record({
    name: undefined,
    isVisible: undefined,
    order: undefined
});

const MapState = Record({
    center: [4194282.0079564173, 7506654.32236642],
    resolution: 76.43702828515632,
    loading: false,
    error: false,
    services: new Map(),
    basemap: GIS
});

const initState = new MapState();

export const setCenter = createAction('map/set-center');
export const resetMap = createAction('map/reset-map');
export const setResolution = createAction('map/set-resolution');
export const loadServices = createAction('map/load-services');
export const loadServicesSuccess = createAction('map/load-services-success');
export const loadServicesError = createAction('map/load-services-error');

const isVisible = (name, {basemap}) => (BASEMAPS.includes(name) && basemap === name) || !BASEMAPS.includes(name);

export const loadMapServices = (names = [OSM, GIS, OBJECTS_SERVICE, EMPLOYEES_SERVICE]) => (dispatch, getState)=> {
    dispatch(loadServices);
    const map = getMap({});
    const connector = getConnector();
    const layerManager = getLayerManager(connector, map);
    
    return Promise.all(names.map(name => layerManager.loadWithPromise(name)))
        .then(containers => {
            
            applyObjectsStyle(containers.find(({name}) => name === OBJECTS_SERVICE));
            
            const state = getState();
            const containersState = containers.map(({name}) => ({name, isVisible: isVisible(name, state.map)}));
            dispatch(loadServicesSuccess(containersState));
            return containersState;
        })
        .catch(error => dispatch(loadServicesError()));
};

export default createReducer({
    [setCenter]: (state, payload) =>
        state.set('center', payload),
    
    [resetMap]: (state, payload) =>
        initState,
    
    [setResolution]: (state, payload) =>
        state.set('resolution', payload),
    
    [loadServices]: (state, payload) =>
        state.set('loading', true)
            .set('error', false),
    
    [loadServicesSuccess]: (state, payload) =>
        state.set('loading', false)
            .set('error', false)
            .set(
                'services',
                new Map(payload.map(
                    ({name, isVisible}, order) => [name, new Service({name, order, isVisible})]
                ))),
    
    [loadServicesError]: (state, payload) =>
        state.set('loading', false)
            .set('error', payload),
    
}, initState)