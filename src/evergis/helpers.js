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

export const tranformQuery = query => {
    const columns = Object.keys(query);
    
    const sort = columns
        .map(column => {
            const sortType = query[column].sort;
            if (!sortType || sortType === 0) return;
            return `${column} ${sortType > 0 ? 'asc' : 'desc'}`;
        })
        .filter(i=>!!i);
    
    const filter = columns
        .map(column => {
            const filterString = query[column].filter;
            if (!filterString || filterString.length === 0) return;
            return `${column} like '%${filterString}%'`;
        })
        .filter(i=>!!i);
    
    return ({
        sort: sort.length !== 0 ? sort : undefined,
        filter: filter.length !== 0 ? filter.join(' && ') : undefined
    });
};
