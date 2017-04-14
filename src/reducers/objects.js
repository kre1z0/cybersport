export const FETCH = 'objects/fetch';
export const FETCH_SUCCESS = 'objects/fetch-success';
export const FETCH_ERROR = 'objects/fetch-error';

const initAttributes = [
    {name: 'object_name', alias: 'ID', type: 'text'},
    {name: 'image_name', alias: 'Фото', type: 'img'},
    {name: 'object_description', alias: 'Описание', type: 'text'},
    {name: 'target_segment', alias: 'Целевой клиентский сегмент', type: 'text'},
    {name: 'department', alias: 'ТБ', type: 'text'},
    {name: 'responsible_employee_name', alias: 'Ответственный сотрудник ПМЗ', type: 'text'},
    {name: 'address_region', alias: 'Регион расположения объекта', type: 'text'},
    {name: 'address_combined', alias: 'Адрес объекта (по договору)', type: 'text'},
    {name: 'address_adjusted', alias: 'Адрес объекта (скорректированный)', type: 'address'},
    {name: 'classifier1', alias: 'Вид обеспечения по классификатору (1 уровень)', type: 'text'},
    {name: 'classifier2', alias: 'Вид обеспечения по классификатору (2 уровень)', type: 'text'},
    {name: 'classifier3', alias: 'Вид обеспечения по классификатору (3 уровень)', type: 'text'}
];

const initState = {
    totalObjects: 0,
    data: [],
    attributes: initAttributes,
    loading: false,
    error: false
};

export default (state = initState, {type, ...payload}) => {
    switch (type) {
        case FETCH:
            return {
                ...state,
                loading: true
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                ...payload
            };
        case FETCH_ERROR:
            return {
                ...state,
                loading: false,
                error: payload.error
            };
        default: return state;
    }
}
