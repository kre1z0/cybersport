import { setCenter, resetMap, setResolution } from './map';
import { RESET_MAP, SET_CENTER, SET_RESOLUTION } from '../reducers/map'

describe('actions', () => {
    it('should create an action to set center', () => {
        const center = [0, 1];
        const expectedAction = {
            type: SET_CENTER,
            center
        };
        expect(setCenter(center)).toEqual(expectedAction)
    });
    
    it('should create an action to set resolution', () => {
        const resolution = 100;
        const expectedAction = {
            type: SET_RESOLUTION,
            resolution
        };
        expect(setResolution(resolution)).toEqual(expectedAction)
    });
    
    it('should create an action to reset center', () => {
        const expectedAction = {
            type: RESET_MAP,
        };
        expect(resetMap()).toEqual(expectedAction)
    })
});
