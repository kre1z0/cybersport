import { setCenter, resetMap } from './map';
import { RESET_MAP, SET_CENTER } from '../reducers/map'

describe('actions', () => {
    it('should create an action to set center', () => {
        const center = [0, 1];
        const expectedAction = {
            type: SET_CENTER,
            center
        };
        expect(setCenter(center)).toEqual(expectedAction)
    });
    
    it('should create an action to reset center', () => {
        const expectedAction = {
            type: RESET_MAP,
        };
        expect(resetMap()).toEqual(expectedAction)
    })
});
