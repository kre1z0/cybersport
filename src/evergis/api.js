import getConnector from './connector';
import {
    OBJECTS_SERVICE,
    EMPLOYEES_SERVICE,
    getAuthUrl,
    transformResponseData,
    initService,
    transformAttributeDefinition
} from './helpers';

export const fetchObjects = ({filter, sort} = {}) =>
    getConnector().api.getObjects({
        serviceName: OBJECTS_SERVICE,
        condition: filter ? filter : undefined,
        startIndex: 0,
        count: 3000,
        orderBy: sort ? sort : undefined,
        getGeometry: false
    }).then(({data, totalObjects}) => ({
        data: transformResponseData(data),
        totalObjects
    }));

let authConfigUrl = process.env.NODE_ENV === 'development' ? '/auth.dev.json' : '/auth.json';

export const fetchSession = () =>
    fetch(authConfigUrl)
        .then(response => response.json())
        .then(({url, authUrl = getAuthUrl(url), ...opts}) =>
            getConnector(url, authUrl, opts).initializationPromise
                .then(sessionId => ({
                    login: opts.login,
                    sessionId
                }))
        );
export const fetchUserInfo = ({login}) =>
    getConnector().api.getObjects({
        serviceName: EMPLOYEES_SERVICE,
        startIndex: 0,
        count: 1,
        getGeometry: false
    }).then(({data}) => ({
        data: data && data[0] && transformResponseData(data)[0]
    }));

export const fetchAttributeDefinition = (name) =>
    initService(getConnector(), name)
        .then(service => transformAttributeDefinition(service.attributesDefinition));

export const fetchObjectsAttributeDefinition = () => fetchAttributeDefinition(OBJECTS_SERVICE);
