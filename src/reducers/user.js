const initState = {
    name: 'Константинопольский К. К.',
    office: 'ЦА ПАО Сбербанк',
    post: 'Руководитель ПМЗ'
};

export default (state = initState, {type, ...payload}) => {
    switch (type) {
        default: return state;
    }
}
