import { createAction, createReducer } from 'redux-act';
import { Map } from 'immutable';

import {
    fetchObjectsAttributeDefinition,
    fetchEmployees,
} from '../evergis/api';

const fetch = createAction('domains/fetch');
const fetchSuccess = createAction('domains/fetch-success');
const fetchError = createAction('domains/fetch-error');

export const getDomains = () => dispatch => {
    dispatch(fetch);
    return Promise.all([fetchObjectsAttributeDefinition(), fetchEmployees({})])
        .then(([domains, employees]) =>
            dispatch(
                fetchSuccess({
                    ...domains,
                    responsible_employee_name: employees.data &&
                        employees.data.map(({ full_name }) => full_name),
                }),
            ),
        )
        .catch(error => dispatch(fetchError(error)));
};

const shouldFetch = ({ domains }) =>
    !domains.get('valid') && !domains.get('loading');

export const getDomainsIfNeeded = () => (dispatch, getState) =>
    shouldFetch(getState()) ? dispatch(getDomains()) : Promise.resolve();

const initState = new Map({});

export default createReducer(
    {
        [fetch]: (state, payload) =>
            state.set('loading', true).set('error', false).set('valid', false),
        [fetchSuccess]: (state, payload) =>
            state
                .merge(payload)
                .set('loading', false)
                .set('error', false)
                .set('valid', true),
        [fetchError]: (state, payload) =>
            state
                .set('loading', false)
                .set('error', payload)
                .set('valid', false),
    },
    initState,
);
