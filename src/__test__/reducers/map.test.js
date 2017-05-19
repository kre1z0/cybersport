import reducer from '../../ducks/map';
import { setResolution, setCenter, resetMap } from '../../ducks/map';

describe('map reducers', () => {
    it('should return initial state', () => {
        expect(reducer(undefined, {})).toMatchSnapshot();
        expect(reducer(undefined, resetMap())).toMatchSnapshot();
    });

    it('should return state with new center', () => {
        expect(reducer(undefined, setCenter([0, 0]))).toMatchSnapshot();
        expect(reducer(undefined, setCenter([10, -10]))).toMatchSnapshot();
        expect(reducer(undefined, setCenter([5000, -5000]))).toMatchSnapshot();
    });

    it('should return state with new resolution', () => {
        expect(reducer(undefined, setResolution(0))).toMatchSnapshot();
        expect(reducer(undefined, setResolution(100))).toMatchSnapshot();
        expect(reducer(undefined, setResolution(76))).toMatchSnapshot();
    });
});
