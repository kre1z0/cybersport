import getConnector from './connector';
import {OBJECTS_SERVICE, getAuthUrl, transformResponseData, } from './helpers';

export const fetchObjects = ({filter, orderBy}) => getConnector().api.getObjects({
    serviceName: OBJECTS_SERVICE,
    condition: filter ? filter.join(' && ') : undefined,
    startIndex: 0,
    count: 100,
    orderBy: orderBy ? [`${orderBy.column} ${orderBy.order}`] : undefined,
    getGeometry: false
}).then(({data, totalObjects}) => ({
    data: transformResponseData(data),
    totalObjects,
    cacheKey: Math.random().toString(36).substring(3)
}));

let authConfigUrl = process.env.NODE_ENV === 'development' ? '/auth.dev.json' : '/auth.json';

export const getSession = () =>
    fetch(authConfigUrl)
        .then(response => response.json())
        .then(({url, authUrl = getAuthUrl(url), ...opts}) =>
            getConnector(url, authUrl, opts).initializationPromise
                .then(sessionId => ({
                    login: opts.login,
                    sessionId
                }))
        );
