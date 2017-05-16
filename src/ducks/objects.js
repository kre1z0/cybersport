import {createAction, createReducer} from 'redux-act';
import {
    fetchObjects,
    fetchObjectsAttributeDefinition,
    createObjectFeature,
    fetchStaticService
} from '../evergis/api';
import {tranformQuery, addEmployeeToQuery} from '../evergis/helpers';
import {Record, List} from 'immutable';
import initAttributesArray from '../assets/const/attributes';

const Attribute = Record({
    name: undefined,
    alias: undefined,
    type: undefined,
    editorType: undefined,
    isEditable: undefined,
    filterable: undefined,
    isVisible: undefined,
    domain: undefined
});

const ObjectsState = Record({
    totalObjects: undefined,
    data: undefined,
    attributes: undefined,
    loading: undefined,
    error: undefined,
    staticServiceUrl: undefined
});

const initAttributes = List(initAttributesArray.map(attr=>Attribute(attr)));

const initState = new ObjectsState({
    totalObjects: 0,
    data: List([]),
    attributes: initAttributes,
    loading: false,
    error: false
});

export const fetch = createAction('objects/fetch');
export const fetchSuccess = createAction('objects/fetch-success');
export const fetchError = createAction('objects/fetch-error');

export const setDomens = createAction('objects/set-domens');

export const updateAttributes = createAction('objects/update-attributes');

export const setStaticServiceURL = createAction('objects/set-static-service-url');

export const commonError = createAction('objects/common-error');

export const create = createAction('objects/create');
export const createSuccess = createAction('objects/create-success');
export const createError = createAction('objects/create-error');

export const addObject = (attributes) => dispatch => {
    dispatch(create());
    return createObjectFeature(attributes)
        .then(response => dispatch(createSuccess(response)))
        .catch(error => dispatch(createError(error)));
};

export const getObjects = (query = {}) => (dispatch, getState) => {
    const state = getState();
    dispatch(fetch());
    return Promise.all([
        fetchObjectsAttributeDefinition()
            .then(definition => dispatch(setDomens(definition)))
            .catch(error => dispatch(fetchError(error))),
        fetchStaticService()
            .then((staticService) =>
                dispatch(setStaticServiceURL(staticService && staticService.getSourceUrl('{{filename}}')))),
        fetchObjects(addEmployeeToQuery(tranformQuery(query), state.user.employee_id))
            .then((objects) => dispatch(fetchSuccess(objects))),
    ])
    .catch(error => dispatch(commonError(error)));
};

export default createReducer({
    [fetch]: (state, payload) =>
        state.set('loading', true),
    
    [fetchSuccess]: (state, {totalObjects, data}) =>
        state.set('loading', false)
            .set('error', false)
            .set('totalObjects', totalObjects)
            .set('data', List(data)),
    
    [fetchError]: (state, payload) =>
        state.set('loading', false)
            .set('error', true),
    
    [updateAttributes]: (state, payload) =>
        state.set(
            'attributes',
            state.attributes.mergeDeepWith(
                (oldVal, newVal) => newVal === undefined ? oldVal : newVal,
                payload
            )
        ), //TODO
    
    [setDomens]: (state, payload) =>
        state.set(
            'attributes',
            state.attributes.map(attribute =>
                attribute.set('domain', payload[attribute.name])
            )
        ),
    
    [setStaticServiceURL]: (state, payload) =>
        state.set('staticServiceUrl', payload),
    
    [commonError]: (state, payload) =>
        state.set('loading', false)
            .set('error', true),
    
    [create]: (state, payload) =>
        state,
    
    [createSuccess]: (state, payload) =>
        state,
    
    [createError]: (state, payload) =>
        state
}, initState);



