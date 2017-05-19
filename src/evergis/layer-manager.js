import sGis from '../assets/sgis';
import { OBJECTS_SERVICE } from './helpers';

let layerManager;
const getLayerManager = (connector, map) => {
    if (layerManager) return layerManager;

    layerManager = new sGis.sp.LayerManager(connector, map);
    return layerManager;
};

export const isServicesLoaded = () => {
    return layerManager && layerManager.children.length > 0;
};

export const getServiceDefinition = name => {
    const service = layerManager && layerManager.getService(name, true);
    return service && service.attributesDefinition;
};

export const getObjectsDefinition = () => getServiceDefinition(OBJECTS_SERVICE);

export default getLayerManager;
