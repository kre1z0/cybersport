import sGis from '../assets/sgis';

let initedSGis;
const getMap = ({ wrapper, position, resolution}) =>{
    if (initedSGis) {
        initedSGis.painter.wrapper = wrapper;
        return initedSGis.map;
    }
    
    initedSGis = sGis.init({
        wrapper,
        position,
        resolution,
    });
    
    return initedSGis.map;
};

export default getMap;


