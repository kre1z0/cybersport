export const OBJECTS_SERVICE = 'sber_objects';
export const EMPLOYEES_SERVICE = 'sber_employees';

export const keyValueArrayToObject = (array) =>
    array.reduce((prev, {Key, Value}) => {
        prev[Key] = Value;
        return prev;
    }, {});

export const normalizeData = (data) =>
    data.map(({attributes}) =>
    attributes && keyValueArrayToObject(attributes));

export const transformResponseData = (data) =>
    data && normalizeData(data);


export const getAuthUrl = (spUrl) =>
    spUrl.replace('SpatialProcessor/IIS/', 'Strategis.Server.Authorization/Authorize.svc/Login');
