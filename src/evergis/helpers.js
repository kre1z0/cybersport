import sGis from '../assets/sgis';
import addSberSymbol from '../assets/sgis/SberObjectSymbol';

export const OBJECTS_SERVICE = 'sber_objects';
export const EMPLOYEES_SERVICE = 'sber_employees';
export const OSM = 'osm';
export const GIS = '2gis';

export const BASEMAPS = [OSM, GIS];

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

export const applyObjectsStyle = service => {
    if (!service) return;
    addSberSymbol(sGis);
    let filterText = '{"Title":null,"Symbol":null,"Condition":null,"Labeling":null,"MaxResolution":0,"MinResolution":0,"ChildFilters":[],"SerializationData":"{\\"serializationData\\":[{\\"classifierType\\":null,\\"propertyName\\":\\"clusterSize\\",\\"propertyType\\":\\"numberFunc\\",\\"attributeName\\":\\"objectCount\\",\\"values\\":[{\\"attributeValue\\":0,\\"propertyValue\\":30},{\\"attributeValue\\":1963,\\"propertyValue\\":70}]},{\\"classifierType\\":\\"unique\\",\\"propertyName\\":\\"fillColor\\",\\"propertyType\\":\\"color\\",\\"attributeName\\":\\"status\\",\\"values\\":[{\\"attributeValue\\":1,\\"propertyValue\\":\\"rgba(38,255,0,1)\\"},{\\"attributeValue\\":2,\\"propertyValue\\":\\"rgba(255,208,0,1)\\"},{\\"attributeValue\\":3,\\"propertyValue\\":\\"rgba(255,0,0,1)\\"},{\\"attributeValue\\":4,\\"propertyValue\\":\\"rgba(188,188,188,1)\\"}]}],\\"clusterSymbol\\":{\\"size\\":50,\\"fillColor\\":\\"rgba(255,255,255,1)\\",\\"strokeColor\\":\\"rgba(255,255,255,0)\\",\\"strokeWidth\\":0,\\"clusterSize\\":6,\\"minSize\\":30,\\"maxSize\\":70,\\"sizeAggregationIndex\\":-1,\\"sizeAggregationMaxValue\\":1963,\\"pieAggregationIndex\\":0,\\"_pieGroups\\":{\\"1\\":\\"rgba(38,255,0,1)\\",\\"2\\":\\"rgba(255,208,0,1)\\",\\"3\\":\\"rgba(255,0,0,1)\\",\\"4\\":\\"rgba(188,188,188,1)\\",\\"Жилая недвижимость\\":\\"rgba(255,0,0,1)\\",\\"Коммерческая недвижимость\\":\\"rgba(128,255,0,1)\\",\\"Права собственности и аренды на земельные участки\\":\\"rgba(0,255,255,1)\\",\\"Промышленная недвижимость\\":\\"rgba(0,128,255,1)\\"},\\"labelText\\":\\"{__qty}\\",\\"singleObjectSymbol\\":{\\"symbolName\\":\\"sberObject\\",\\"_aggregationIndex\\":0,\\"_typeAggregationIndex\\":2}},\\"clusterLabel\\":null,\\"aggregations\\":[\\"distinct(status)\\",\\"distinct(classifier2)\\",\\"distinct(classifier2)\\"]}"}';
    let filter = sGis.sp.DataFilter.deserialize(JSON.parse(filterText));
    
    service.service.setDataFilter(filter);
    
    return service;
};
