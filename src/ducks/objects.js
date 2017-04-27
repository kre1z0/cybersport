import {createAction, createReducer} from 'redux-act';
import {fetchObjects} from '../evergis/api';

const initAttributes = [
    {name: 'control', alias: '', type: 'control'},
    {name: 'object_name', alias: 'ID', type: 'text'},
    {name: 'image_name', alias: 'Фото', type: 'img', editorType: 'img-loader', isEditable: true},
    {name: 'object_description', alias: 'Описание', type: 'text', editorType: 'text-area', isEditable: true},
    {name: 'target_segment', alias: 'Целевой клиентский сегмент', type: 'text', editorType: 'select', isEditable: true},
    {name: 'department', alias: 'ТБ', type: 'text', editorType: 'select', isEditable: true},
    {name: 'responsible_employee_name', alias: 'Ответственный сотрудник ПМЗ', type: 'text', editorType: 'select', isEditable: true},
    {name: 'address_region', alias: 'Регион расположения объекта', type: 'text', editorType: 'text', isEditable: true},
    {name: 'address_combined', alias: 'Адрес объекта (по договору)', type: 'text', editorType: 'text', isEditable: true},
    {name: 'address_adjusted', alias: 'Адрес объекта (скорректированный)', type: 'address', editorType: 'address', isEditable: true},
    {name: 'classifier1', alias: 'Вид обеспечения по классификатору (1 уровень)', type: 'text',  editorType: 'select', isEditable: true},
    {name: 'classifier2', alias: 'Вид обеспечения по классификатору (2 уровень)', type: 'text',  editorType: 'select', isEditable: true},
    {name: 'classifier3', alias: 'Вид обеспечения по классификатору (3 уровень)', type: 'text',  editorType: 'select', isEditable: true}
];

const initState = {
    totalObjects: 0,
    data: [],
    attributes: initAttributes,
    loading: false,
    error: false
};

export const fetch = createAction('objects/fetch');
export const fetchSuccess = createAction('objects/fetch-success');
export const fetchError = createAction('objects/fetch-error');

export const getObjects = () => (dispatch) => {
    dispatch(fetch());
    fetchObjects({})
        .then(response => dispatch(fetchSuccess(response)))
        .catch(error => dispatch(fetchError()));
};

export default createReducer({
    [fetch]: (state, payload) => ({
        ...state,
        loading: true
    }),
    
    [fetchSuccess]: (state, payload) => ({
        ...state,
        loading: false,
        error: false,
        ...payload
    }),
    
    [fetchError]: (state, payload) => ({
        loading: false,
        error: payload
    })
}, initState)



