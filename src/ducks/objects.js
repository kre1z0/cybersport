import {createAction, createReducer} from 'redux-act';
import {fetchObjects, fetchObjectsAttributeDefinition} from '../evergis/api';
import {tranformQuery} from '../evergis/helpers';
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
    error: undefined
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

const addEmployeeToQuery = (query, id) => {
    if (query.filter) {
        query.filter += `&& responsible_employee_id == ${id}`
    } else {
        query.filter = `responsible_employee_id == ${id}`
    }
    return query;
};

export const getObjects = (query = {}) => (dispatch, getState) => {
    const state = getState();
    dispatch(fetch());
    return Promise.all([
        fetchObjects(addEmployeeToQuery(tranformQuery(query), state.user.employee_id)),
        fetchObjectsAttributeDefinition()
    ])
    .then(([objectsRes, defRes]) => {
        dispatch(fetchSuccess(objectsRes));
        dispatch(setDomens(defRes))
    })
    .catch(error => dispatch(fetchError()));
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
        state.set('attributes', payload instanceof List ? payload : payload.map(attr=>Attribute(attr))), //TODO
    
    [setDomens]: (state, payload) =>
        state.set(
            'attributes',
            state.attributes.map(attribute =>
                attribute.set('domain', payload[attribute.name])
            )
        )
}, initState)



