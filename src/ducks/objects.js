import {createAction, createReducer} from 'redux-act';
import {fetchObjects} from '../evergis/api';
import {Record, List} from 'immutable';

const Attribute = Record({
    name: undefined,
    alias: undefined,
    type: undefined,
    editorType: undefined,
    isEditable: undefined,
    filterable: undefined
});

const ObjectsState = Record({
    totalObjects: undefined,
    data: undefined,
    attributes: undefined,
    loading: undefined,
    error: undefined
});

const initAttributesArray = [
    {name: 'control', alias: '', type: 'control'},
    {name: 'object_name', alias: 'ID', type: 'text'},
    {name: 'image_name', alias: 'Фото', type: 'img', editorType: 'img-loader', isEditable: true},
    {name: 'object_description', alias: 'Описание', type: 'text', editorType: 'text-area', isEditable: true, filterable: true},
    {name: 'target_segment', alias: 'Целевой клиентский сегмент', type: 'text', editorType: 'select', isEditable: true, filterable: true},
    {name: 'department', alias: 'ТБ', type: 'text', editorType: 'select', isEditable: true, filterable: true},
    {name: 'responsible_employee_name', alias: 'Ответственный сотрудник ПМЗ', type: 'text', editorType: 'select', isEditable: true, filterable: true},
    {name: 'address_region', alias: 'Регион расположения объекта', type: 'text', editorType: 'text', isEditable: true, filterable: true},
    {name: 'address_combined', alias: 'Адрес объекта (по договору)', type: 'text', editorType: 'text', isEditable: true},
    {name: 'address_adjusted', alias: 'Адрес объекта (скорректированный)', type: 'address', editorType: 'address', isEditable: true},
    {name: 'classifier1', alias: 'Вид обеспечения по классификатору (1 уровень)', type: 'text',  editorType: 'select', isEditable: true, filterable: true},
    {name: 'classifier2', alias: 'Вид обеспечения по классификатору (2 уровень)', type: 'text',  editorType: 'select', isEditable: true, filterable: true},
    {name: 'classifier3', alias: 'Вид обеспечения по классификатору (3 уровень)', type: 'text',  editorType: 'select', isEditable: true, filterable: true}
];

const initAttributes = List(initAttributesArray.map(attr=>Attribute(attr)));

const initState = new ObjectsState({
    totalObjects: 0,
    data: List([]),
    attributes: initAttributes,
    loading: false,
    error: false
});

export const fetch = createAction('objects/fetch');
export const fetchSuccess = createAction('objects/fetch-success');
export const fetchError = createAction('objects/fetch-error');

const addEmployeeToQuery = (query, id) => {
    if (query.filter) {
        query.filter += `&& responsible_employee_id == ${id}`
    } else {
        query.filter = `responsible_employee_id == ${id}`
    }
    return query;
};

export const getObjects = (query = {}) => (dispatch, getState) => {
    const state = getState();
    dispatch(fetch());
    fetchObjects(addEmployeeToQuery(query, state.user.employee_id))
        .then(response => dispatch(fetchSuccess(response)))
        .catch(error => dispatch(fetchError()));
};

export default createReducer({
    [fetch]: (state, payload) =>
        state.set('loading', true),
    
    [fetchSuccess]: (state, {totalObjects, data}) =>
        state.set('loading', false)
             .set('error', false)
             .set('totalObjects', totalObjects)
             .set('data', List(data)),
    
    [fetchError]: (state, payload) =>
        state.set('loading', false)
             .set('error', true)
    
}, initState)



