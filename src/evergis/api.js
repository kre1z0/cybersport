import getConnector from './connector';
import getDataAccessService from './data-access';
import SberController from './sber-controller';
import getMap, { getMapPoint, addFeatureLayer, symbolizeFeatures } from './map';

import {
    OBJECTS_SERVICE,
    EMPLOYEES_SERVICE,
    OFFICES_SERVICE,
    STATIC_SERVICE,
    AUDITS_SERVICE,
    getAuthUrl,
    transformResponseData,
    initService,
    transformAttributeDefinition,
    transformPointsToObjects,
    guid,
    joinManager,
    joinProgress,
    getFileExtension,
    fullBbox,
    addRandomImage,
} from './helpers';

import EmployeePin from '../assets/images/pin_home.png';
import OfficePin from '../assets/images/pin_pmz.png';

const sourceImages = {
    [EMPLOYEES_SERVICE]: EmployeePin,
    [OFFICES_SERVICE]: OfficePin,
};

export const fetchObjects = ({ filter, sort } = {}) =>
    getConnector().api
        .getObjects({
            serviceName: OBJECTS_SERVICE,
            condition: filter ? filter : undefined,
            startIndex: 0,
            count: 3000,
            orderBy: sort ? sort : undefined,
            getGeometry: false,
        })
        .then(({ data, totalObjects }) => ({
            data: transformResponseData(data),
            totalObjects,
        }));

export const fetchEmployeesNames = ({ filter, sort } = {}) =>
    getConnector().api
        .getObjects({
            serviceName: EMPLOYEES_SERVICE,
            condition: filter ? filter : undefined,
            startIndex: 0,
            count: 500,
            orderBy: sort ? sort : undefined,
            getGeometry: false,
        })
        .then(({ data, totalObjects }) => ({
            data: addRandomImage(transformResponseData(data)),
            totalObjects,
        }));

export const fetchEmployees = ({ filter, sort } = {}) =>
    Promise.all([
        getConnector().api.getObjects({
            serviceName: EMPLOYEES_SERVICE,
            condition: filter ? filter : undefined,
            startIndex: 0,
            count: 500,
            orderBy: sort ? sort : undefined,
            getGeometry: false,
        }),
        fetchAudits(),
    ]).then(([{ data, totalObjects }, audits]) => ({
        data: addRandomImage(
            joinManager(joinProgress(transformResponseData(data), audits.data)),
        ),
        totalObjects,
    }));

export const fetchAudits = ({ filter, sort } = {}) =>
    getConnector().api
        .getObjects({
            serviceName: AUDITS_SERVICE,
            condition: filter ? filter : undefined,
            startIndex: 0,
            count: 3000,
            orderBy: sort ? sort : undefined,
            getGeometry: false,
        })
        .then(({ data, totalObjects }) => ({
            data: transformResponseData(data),
            totalObjects,
        }));

let authConfigUrl = process.env.NODE_ENV === 'development'
    ? '/auth.dev.json'
    : '/auth.json';

export const fetchSession = () =>
    fetch(authConfigUrl)
        .then(response => response.json())
        .then(({ url, authUrl = getAuthUrl(url), ...opts }) =>
            getConnector(
                url,
                authUrl,
                opts,
            ).initializationPromise.then(sessionId => ({
                login: opts.login,
                sessionId,
            })),
        );

export const fetchUserInfo = ({ login }) =>
    getConnector().api
        .getObjects({
            serviceName: EMPLOYEES_SERVICE,
            startIndex: 0,
            count: 1,
            condition: 'gid == 14',
            getGeometry: false,
        })
        .then(({ data }) => ({
            data: data && data[0] && transformResponseData(data)[0],
        }));

export const fetchAttributeDefinition = name =>
    initService(getConnector(), name).then(service =>
        transformAttributeDefinition(service.attributesDefinition),
    );

export const fetchObjectsAttributeDefinition = () =>
    fetchAttributeDefinition(OBJECTS_SERVICE);
export const fetchEmployeesAttributeDefinition = () =>
    fetchAttributeDefinition(EMPLOYEES_SERVICE);

export const createFeature = (
    attributes,
    serviceName,
    geometry = getMapPoint(),
) =>
    getDataAccessService(getConnector()).createFeature({
        attributes,
        serviceName,
        geometry,
    });

export const deleteFeature = (ids, serviceName) =>
    getDataAccessService(getConnector()).deleteFeatures({
        ids,
        serviceName,
    });

export const createObjectFeature = attributes =>
    createFeature(attributes, OBJECTS_SERVICE);

export const createEmployerFeature = attributes =>
    createFeature(attributes, EMPLOYEES_SERVICE);

export const deleteObjectFeatures = ids => deleteFeature(ids, OBJECTS_SERVICE);

export const deleteEmployerFeature = ids =>
    deleteFeature(ids, EMPLOYEES_SERVICE);

export const uploadImages = images =>
    fetchStaticService().then(service => {
        !service && Promise.reject(new Error('static service not found'));
        let names = images.map(
            ({ name }) => `${guid()}.${getFileExtension(name)}`,
        );

        return Promise.all(
            images.map((img, i) => service.upload(names[i], img)),
        ).then(() => {
            return { names };
        });
    });

export const fetchStaticService = () =>
    initService(getConnector(), STATIC_SERVICE);

export const pickByGeometry = point =>
    getDataAccessService(getConnector())
        .queryByGeometry({
            geometry: point,
            serviceName: OBJECTS_SERVICE,
            resolution: getMap({}).resolution,
        })
        .then(features => transformPointsToObjects(features));

export const pickById = objectIds =>
    getDataAccessService(getConnector())
        .queryById({
            serviceName: OBJECTS_SERVICE,
            objectIds,
        })
        .then(features => transformPointsToObjects(features));

export const getScalarValue = (query, serviceName) =>
    getDataAccessService(getConnector()).getScalarValue({ query, serviceName });

export const getEmployeesList = () =>
    getScalarValue('gid,full_name order by gid', EMPLOYEES_SERVICE);

export const initFeatureLayers = names =>
    Promise.all(
        names.map(name => createFeatureLayer(name)),
    ).then(featuresArrays => {
        return featuresArrays.map((features, i) =>
            addFeatureLayer(
                symbolizeFeatures(features, sourceImages[names[i]]),
                names[i],
            ),
        );
    });

export const createFeatureLayer = serviceName =>
    getDataAccessService(getConnector()).queryByGeometry({
        serviceName,
        geometry: fullBbox,
    });

export const makeAuditsPlan = ({ startDate, endDate, employeeIds = [19] }) => {
    const controller = new SberController(getConnector());
    return controller.makeAuditPlan({
        startDate,
        endDate,
        employeeIds,
    });
};
