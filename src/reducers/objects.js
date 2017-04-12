import data, {columns} from '../stories/objects-mock-data';

const initState = {
  data,
  columns
};

export default (state = initState, {type, ...payload}) => {
    switch (type) {
        default: return state;
    }
}
