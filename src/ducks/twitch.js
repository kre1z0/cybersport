import { createAction, createReducer } from 'redux-act';
import { Record } from 'immutable';

import {
    makeAuditsPlan,
    fetchEmployeesNames,
    fetchAudits,
} from '../evergis/api';

import { ROLES } from '../evergis/helpers';

const InspectionsState = Record({
    audits: [],
    employees: [],
    loading: false,
    error: false,
    calculating: false,
    progress: 0,
});

const initState = new InspectionsState();

export const make = createAction('inspections/make');
export const makeSuccess = createAction('inspections/make-success');
export const makeError = createAction('inspections/make-error');
export const makeProgress = createAction('inspections/make-progress');

export const setEmployees = createAction('inspections/set-employees');

export const fetchAuditsStart = createAction('inspections/fetch-audits-start');
export const fetchAuditsSuccess = createAction(
    'inspections/fetch-audits-success',
);
export const fetchAuditsError = createAction('inspections/fetch-audits-error');

const checkAuditsPermission = ({ employee_id, role_name }, ids) => {
    if (role_name === ROLES.EMPLOYEE) {
        return [employee_id];
    } else if (role_name === ROLES.MANAGER) {
        return ids;
    } else if (role_name === ROLES.CENTRAL) {
        return;
    } else {
        return [employee_id];
    }
};

const createEmployeeFilter = filterArray =>
    filterArray && filterArray.map(id => `employee_id == ${id}`).join(' || ');

const getManagerFilter = ({ role_name, employee_id }) => {
    if (role_name === ROLES.MANAGER) {
        return `manager_id == ${employee_id}`;
    } else if (role_name === ROLES.CENTRAL) {
        return `role_name === '${ROLES.EMPLOYEE}'`;
    } else if (role_name === ROLES.EMPLOYEE) {
        return `gid === ${employee_id}`;
    }
};

export const shouldFetchAudits = ({ inspections: { audits, employees } }) =>
    audits.length === 0 && employees.length === 0;

export const getAuditsWithEmployeesIfNeeded = () => (dispatch, getState) =>
    shouldFetchAudits(getState()) ? dispatch(getAudits()) : Promise.resolve();

export const getAudits = ({ ids } = {}) => (dispatch, getState) => {
    dispatch(fetchAuditsStart());

    const { user } = getState();

    fetchEmployeesNames({
        filter: getManagerFilter(user),
    })
        .then(({ data }) => {
            dispatch(setEmployees(data));

            return data.map(({ gid }) => gid);
        })
        .then(ids => {
            return fetchAudits({
                filter: createEmployeeFilter(checkAuditsPermission(user, ids)),
            });
        })
        .then(({ data }) => {
            dispatch(fetchAuditsSuccess(data));
        })
        .catch(error => dispatch(fetchAuditsError(error)));
};

export const calculateAudits = props => (dispatch, getState) => {
    dispatch(make());
    dispatch(makeProgress(0));
    const { user: { role_name }, inspections: { employees } } = getState();

    if (role_name !== ROLES.MANAGER && role_name !== ROLES.CENTRAL) {
        const error = new Error('Access denied');
        dispatch(makeError(error));
        return Promise.reject(error);
    }
    const ids = employees.map(({ gid }) => gid);
    const operation = makeAuditsPlan({
        ...props,
        employeeIds: ids,
    });

    operation.on('progressUpdate', ({ progress: { processed, total } }) => {
        dispatch(makeProgress(Math.round(processed / (total / 100))));
    });

    return operation
        .then(() => {
            dispatch(makeSuccess());
            dispatch(getAudits({ ids }));
        })
        .catch(error => dispatch(makeError(error)));
};

export default createReducer(
    {
        [make]: (state, payload) =>
            state
                .set('calculating', true)
                .set('error', false)
                .set('progress', 0),

        [makeSuccess]: (state, payload) =>
            state.set('calculating', false).set('error', false),

        [makeError]: (state, payload) =>
            state.set('calculating', false).set('error', payload),

        [makeProgress]: (state, payload) => state.set('progress', payload),

        [setEmployees]: (state, payload) => state.set('employees', payload),

        [fetchAuditsStart]: (state, payload) =>
            state.set('loading', true).set('error', false),

        [fetchAuditsSuccess]: (state, payload) =>
            state
                .set('audits', payload)
                .set('loading', false)
                .set('error', false),

        [fetchAuditsError]: (state, payload) =>
            state.set('loading', false).set('error', payload),
    },
    initState,
);
