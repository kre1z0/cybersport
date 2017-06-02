import sGis from '../assets/sgis';

let initedSGis;
const getMap = ({ wrapper, position, resolution }) => {
    if (initedSGis) {
        if (resolution && wrapper && position) {
            initedSGis.map.resolution = resolution;
            initedSGis.map.position = position;
            initedSGis.painter.wrapper = wrapper;
        }
        return initedSGis.map;
    }

    initedSGis = sGis.init({
        wrapper,
        position,
        resolution,
    });

    return initedSGis.map;
};

export const getMapPoint = (position = [0, 0]) =>
    new sGis.feature.Point(position, { crs: sGis.CRS.webMercator });

export const pointToScreen = position =>
    initedSGis.painter.getPxPosition(position);

export const symbolizeFeatures = (features, source) => {
    features.forEach(feature => {
        feature.symbol = new sGis.symbol.point.Image({
            source,
            height: 49,
            width: 42,
        });
    });
    return features;
};

export const addFeatureLayer = (features, name) => {
    const layer = new sGis.FeatureLayer({ features });
    initedSGis.map.insertLayer(layer, -1);
    initedSGis.map._featureLayers = {
        ...initedSGis.map._featureLayers,
        [name]: layer,
    };
    return layer;
};

export const getFeatureLayer = name =>
    initedSGis.map && initedSGis.map._featureLayers[name];

export default getMap;
