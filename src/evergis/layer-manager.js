import sGis from '../assets/sgis';

let layerManager;
const getLayerManager = (connector, map) => {
    if (layerManager) return layerManager;
    
    layerManager = new sGis.sp.LayerManager(connector, map);
    return layerManager;
};

export default getLayerManager;
