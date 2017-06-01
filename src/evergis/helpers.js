import sGis from '../assets/sgis';
import addSberSymbol from '../assets/sgis/SberObjectSymbol';

export const OBJECTS_SERVICE = 'sber_objects';
export const EMPLOYEES_SERVICE = 'sber_employees_pin';
export const OFFICES_SERVICE = 'sber_offices_pin';
export const AUDITS_SERVICE = 'sber_audits';
export const OSM = 'osm';
export const GIS = '2gis';
export const STATIC_SERVICE = 'sber_objects_static';

export const BASEMAPS = [OSM, GIS];

export const keyValueArrayToObject = array =>
    array.reduce((prev, { Key, Value }) => {
        prev[Key] = Value;
        return prev;
    }, {});

export const normalizeData = data =>
    data.map(
        ({ attributes }) => attributes && keyValueArrayToObject(attributes),
    );

export const normalizeAttributeDefinition = attributeDefinition =>
    attributeDefinition.attributes
        .filter(({ domainsValues }) => !!domainsValues)
        .map(({ name, domainsValues }) => ({
            Key: name,
            Value: domainsValues,
        }));

export const transformResponseData = data => data && normalizeData(data);

export const joinManager = employees =>
    employees.map(employee => {
        if (employee.manager_id) {
            const manager = employees.find(
                ({ gid }) => gid === employee.manager_id,
            );
            employee.manager_full_name = manager && manager.full_name;

            return employee;
        } else {
            return employee;
        }
    });

export const transformAttributeDefinition = attributeDefinition =>
    attributeDefinition &&
    keyValueArrayToObject(normalizeAttributeDefinition(attributeDefinition));

export const transformPointAttributesToObject = attributes =>
    attributes &&
    Object.keys(attributes).reduce((prev, key) => {
        prev[key] = attributes[key].value;
        return prev;
    }, {});

export const transformPointsToObjects = points =>
    points &&
    points.map(({ attributes }) =>
        transformPointAttributesToObject(attributes),
    );

export const getAuthUrl = spUrl =>
    spUrl.replace(
        'SpatialProcessor/IIS/',
        'Strategis.Server.Authorization/Authorize.svc/Login',
    );

export const tranformQuery = query => {
    const columns = Object.keys(query);

    const sort = columns
        .map(column => {
            const sortType = query[column].sort;
            if (!sortType || sortType === 0) return;
            return `${column} ${sortType > 0 ? 'asc' : 'desc'}`;
        })
        .filter(i => !!i);

    const filter = columns
        .map(column => {
            const filterString = query[column].filter;
            const isString = query[column].type !== 'number';
            if (!filterString || filterString.length === 0) return;
            return `${column} ${isString ? 'like' : '=='} ${isString ? `'%${filterString}%'` : filterString}`;
        })
        .filter(i => !!i);

    return {
        sort: sort.length !== 0 ? sort : undefined,
        filter: filter.length !== 0 ? filter.join(' && ') : undefined,
    };
};

export const applyObjectsStyle = service => {
    if (!service) return;
    addSberSymbol(sGis);
    let filterText = {
        Title: null,
        Symbol: null,
        Condition: null,
        Labeling: null,
        MaxResolution: 0,
        MinResolution: 0,
        ChildFilters: [],
        SerializationData: `{
            "serializationData": [{
                "classifierType": null,
                "propertyName": "clusterSize",
                "propertyType": "numberFunc",
                "attributeName": "objectCount",
                "values": [{"attributeValue": 0, "propertyValue": 30}, {"attributeValue": 1963, "propertyValue": 70}]
            }, {
                "classifierType": "unique",
                "propertyName": "fillColor",
                "propertyType": "color",
                "attributeName": "status",
                "values": [
                    {"attributeValue": 1, "propertyValue": "#64c76c"},
                    {"attributeValue": 2, "propertyValue": "#ffad2b"},
                    {"attributeValue": 3, "propertyValue": "#ff4057"},
                    {"attributeValue": 4, "propertyValue": "#98a1ab"},
                    {"attributeValue": 5, "propertyValue": "#df5dff"}]
            }],
            "clusterSymbol": {
                "size": 50,
                "fillColor": "rgba(255,255,255,1)",
                "strokeColor": "rgba(255,255,255,0)",
                "strokeWidth": 0,
                "clusterSize": 8,
                "minSize": 30,
                "maxSize": 70,
                "gridSize":60,
                "minSize": 50,
                "maxSize": 50,
                "sizeAggregationIndex": -1,
                "sizeAggregationMaxValue": 1963,
                "pieAggregationIndex": 0,
                "_pieGroups": {
                    "1": "#64c76c",
                    "2": "#ffad2b",
                    "3": "#ff4057",
                    "4": "#98a1ab",
                    "5": "#df5dff",
                    "Жилая недвижимость": "rgba(255,0,0,1)",
                    "Коммерческая недвижимость": "rgba(128,255,0,1)",
                    "Права собственности и аренды на земельные участки": "rgba(0,255,255,1)",
                    "Промышленная недвижимость": "rgba(0,128,255,1)"
                },
                "labelText": "{__qty}",
                "singleObjectSymbol": {"symbolName": "sberObject", "_aggregationIndex": 0, "_typeAggregationIndex": 2}
            },
            "clusterLabel": null,
            "aggregations": ["distinct(status)", "distinct(classifier2)", "distinct(classifier2)"]
        }`,
    };
    let filter = sGis.sp.DataFilter.deserialize(filterText);

    service.service.setDataFilter(filter);

    return service;
};

export const initService = (connector, name) => {
    const container = new sGis.sp.services.ServiceContainer(connector, name);
    return new Promise((res, rej) => {
        container.once('stateUpdate', () => {
            if (container.error) rej(container.error);
            res(container.service);
        });
    });
};

export const addEmployeeToQuery = (query, id) => {
    if (query.filter) {
        query.filter += `&& responsible_employee_id == ${id}`;
    } else {
        query.filter = `responsible_employee_id == ${id}`;
    }
    return query;
};

export const updateClusterListeners = (container, action) => {
    const clusterLayers = container.layer.childLayers.filter(
        layer => layer instanceof sGis.sp.ClusterLayer,
    );

    clusterLayers.forEach(layer => {
        layer.on('propertyChange', ev => {
            if (ev.property !== 'features') return;
            layer._features.forEach(feature =>
                feature.on(
                    'click',
                    ({
                        mouseOffset,
                        sourceObject: { ids, position },
                        stopPropagation,
                    }) => {
                        stopPropagation();
                        action({ mouseOffset, ids, position });
                    },
                ),
            );
        });
    });
};

export const applyClusterEvents = (container, action) => {
    updateClusterListeners(container, action);

    container.service.on('dataFilterChange', () => {
        updateClusterListeners(container, action);
    });

    return container;
};

export const applyFeatureEvents = (layer, action) =>
    layer._features &&
    layer._features.map(feature => {
        feature.on(
            'click',
            ({
                mouseOffset,
                sourceObject: { attributes, position },
                stopPropagation,
            }) => {
                stopPropagation();
                const object = transformPointAttributesToObject(attributes);
                object.image = getRandomImg();
                action({ mouseOffset, object, position });
            },
        );
    });

export const guid = sGis.utils.getGuid;

export const getFileExtension = filename => {
    return filename.slice(((filename.lastIndexOf('.') - 1) >>> 0) + 2);
};

export const getEmployeeProgress = (employeeId, audits) => {
    const status2Count = audits.filter(({ status_code }) => status_code === 2)
        .length;

    const employeeAuditsCount = audits.filter(
        ({ employee_id }) => employee_id === employeeId,
    ).length;

    return Math.round(status2Count / (employeeAuditsCount / 100));
};

export const joinProgress = (objects, audits) =>
    objects &&
    objects.map(object => {
        object.progress = getEmployeeProgress(object.gid, audits);
        return object;
    });

export const fullBbox = new sGis.Bbox([-85, -180], [85, 180]).projectTo(
    sGis.CRS.webMercator,
);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomSex() {
    return Math.random() > 0.5 ? 'women' : 'men';
}

export const getRandomImg = () =>
    `https://randomuser.me/api/portraits/${getRandomSex()}/${getRandomInt(1, 99)}.jpg`;

export const addRandomImage = items =>
    items.map(item => {
        item.image = getRandomImg();
        return item;
    });
