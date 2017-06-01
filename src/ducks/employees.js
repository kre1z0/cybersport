import { createAction, createReducer } from 'redux-act';
import {
    fetchEmployees,
    deleteEmployerFeature,
    uploadImages,
    createEmployerFeature,
} from '../evergis/api';
import { tranformQuery } from '../evergis/helpers';
import { Record, List } from 'immutable';
import initAttributesArray from '../assets/const/employeeAttributes';

const Attribute = Record({
    name: undefined,
    alias: undefined,
    type: undefined,
    editorType: undefined,
    isEditable: undefined,
    filterable: undefined,
    sortable: undefined,
    isVisible: undefined,
});

const EmployeesState = Record({
    totalObjects: undefined,
    data: undefined,
    attributes: undefined,
    loading: undefined,
    error: undefined,
});

const initAttributes = List(initAttributesArray.map(attr => Attribute(attr)));

const initState = new EmployeesState({
    totalObjects: 0,
    data: List([]),
    attributes: initAttributes,
    loading: false,
    error: false,
});

export const fetch = createAction('employees/fetch');
export const fetchSuccess = createAction('employees/fetch-success');
export const fetchError = createAction('employees/fetch-error');

export const del = createAction('employees/delete');
export const delSuccess = createAction('employees/delete-success');
export const delError = createAction('employees/delete-error');

export const create = createAction('employees/create');
export const createSuccess = createAction('employees/create-success');
export const createError = createAction('employees/create-error');

export const updateAttributes = createAction('employees/update-attributes');

export const getEmployees = (query = {}) => (dispatch, getState) => {
    dispatch(fetch());
    return fetchEmployees(
        /*addEmployeeToQuery(*/ tranformQuery(
            query,
        ) /*, state.user.employee_id)*/,
    )
        .then(objects => dispatch(fetchSuccess(objects)))
        .catch(error => dispatch(fetchError(error)));
};

export const addEmployer = (attributes, files) => dispatch => {
    return uploadImages(files || [])
        .then(({ names }) => {
            attributes.image_name = names && names.join(';');
            return createEmployerFeature(attributes);
        })
        .then(response => {
            dispatch(create({ attributes, response }));
            // dispatch(createSuccess(response))
        });
};

export const deleteEmployer = ids => dispatch => {
    dispatch(del());
    return deleteEmployerFeature(ids)
        .then(response => dispatch(delSuccess({ ids })))
        .catch(error => dispatch(delError(error)));
};

export default createReducer(
    {
        [create]: (state, payload) =>
            state.set(
                'data',
                state.get('data').push({
                    gid: payload.response.Id * 1,
                    ...payload.attributes,
                }),
            ),

        [createSuccess]: (state, payload) => state.set('error', false),

        [createError]: (state, payload) => state.set('error', payload),

        [fetch]: (state, payload) => state.set('loading', true),

        [fetchSuccess]: (state, { totalObjects, data }) =>
            state
                .set('loading', false)
                .set('error', false)
                .set('totalObjects', totalObjects)
                .set('data', List(data)),

        [fetchError]: (state, payload) =>
            state.set('loading', false).set('error', true),

        [updateAttributes]: (state, payload) =>
            state.set(
                'attributes',
                state.attributes.mergeDeepWith(
                    (oldVal, newVal) =>
                        newVal === undefined ? oldVal : newVal,
                    payload,
                ),
            ), //TODO
        [del]: (state, payload) => state,

        [delSuccess]: (state, { ids }) => {
            const index = state
                .get('data')
                .findIndex(({ gid }) => gid === ids[0]);
            return state
                .set('error', false)
                .set('data', state.get('data').delete(index));
        },
        [delError]: (state, payload) => state.set('error', payload),
    },
    initState,
);
