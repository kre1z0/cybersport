import { setCenter, resetMap, setResolution } from './map';
import { RESET_MAP, SET_CENTER, SET_RESOLUTION } from '../reducers/map'

describe('map actions', () => {
    it('should create an action to set center', () => {
        expect(setCenter([0, 0])).toMatchSnapshot();
        expect(setCenter([500, 100])).toMatchSnapshot();
        expect(setCenter([100, 500])).toMatchSnapshot();
    });
    
    it('should create an action to set resolution', () => {
        expect(setResolution(0)).toMatchSnapshot();
        expect(setResolution(5)).toMatchSnapshot();
        expect(setResolution(100)).toMatchSnapshot();
    });
    
    it('should create an action to reset center', () => {
        expect(resetMap()).toMatchSnapshot();
    })
});
