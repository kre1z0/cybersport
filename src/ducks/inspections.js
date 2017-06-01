import { createAction, createReducer } from 'redux-act';
import { Record } from 'immutable';

import {
    makeAuditsPlan,
    fetchEmployeesNames,
    fetchAudits,
} from '../evergis/api';

const InspectionsState = Record({
    audits: [],
    employees: [],
    loading: false,
    error: false,
});

const initState = new InspectionsState();

export const make = createAction('inspections/make');
export const makeSuccess = createAction('inspections/make-success');
export const makeError = createAction('inspections/make-error');
export const setEmployees = createAction('inspections/set-employees');

export const calculateAudits = props => (dispatch, getState) => {
    dispatch(make());
    dispatch(setEmployees([]));
    const { user: { employee_id } } = getState();

    return fetchEmployeesNames({
        //todo
        filter: `manager_id == ${employee_id}`,
    })
        .then(({ data }) => {
            dispatch(setEmployees(data));
            return data.map(({ gid }) => gid);
        })
        .then(ids => {
            const operation = makeAuditsPlan({ ...props, employeeIds: ids });
            operation.on(
                'progressUpdate',
                ({ progress: { processed, total } }) => {
                    console.log({ processed, total });
                },
            );
            return operation.then(() =>
                fetchAudits({
                    filter: ids.map(id => `employee_id === ${id}`).join(' || '),
                }).then(({ data }) => dispatch(makeSuccess(data))),
            );
        })
        .catch(error => dispatch(makeError(error)));
};

export default createReducer(
    {
        [make]: (state, payload) =>
            state.set('loading', true).set('error', false),

        [makeSuccess]: (state, payload) =>
            state
                .set('audits', payload)
                .set('loading', false)
                .set('error', false),

        [makeError]: (state, payload) =>
            state.set('loading', false).set('error', payload),

        [setEmployees]: (state, payload) => state.set('employees', payload),
    },
    initState,
);
