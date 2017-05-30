import { createAction, createReducer } from 'redux-act';
import { fetchEmployees, fetchAudits } from '../evergis/api';
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

export const updateAttributes = createAction('employees/update-attributes');

export const getEmployees = (query = {}) => (dispatch, getState) => {
    const state = getState();
    dispatch(fetch());
    return Promise.all([
        fetchEmployees(
            /*addEmployeeToQuery(*/ tranformQuery(
                query,
            ) /*, state.user.employee_id)*/,
        ),
        fetchAudits(),
    ])
        .then(([objects, audits]) => dispatch(fetchSuccess(objects)))
        .catch(error => dispatch(fetchError(error)));
};

export default createReducer(
    {
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
    },
    initState,
);
