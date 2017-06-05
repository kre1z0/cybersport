export default [
    {
        name: 'control',
        alias: '',
        type: 'control',
        isVisible: true,
    },
    {
        name: 'image_name',
        type: 'img',
        alias: 'Фото',
        editorType: 'img-loader',
        isVisible: true,
    },
    {
        alias: 'ФИО',
        name: 'full_name',
        isVisible: true,
    },
    {
        name: 'progress',
        alias: 'Выполнение плана',
        isVisible: true,
        type: 'progress',
    },
    {
        name: 'gid',
        alias: 'ID',
    },
    {
        name: 'employee_id',
        alias: '№ в исходных данных',
    },
    {
        name: 'tb_name',
        alias: 'ТБ',
        isVisible: true,
        editorType: 'select',
    },
    {
        name: 'gosb',
        alias: 'ГОСБ',
    },
    {
        name: 'osb',
        alias: 'ОСБ',
    },
    {
        name: 'department',
        alias: 'Подразделение',
    },
    {
        name: 'role_name',
        alias: 'Роль',
        isVisible: true,
        editorType: 'select',
    },
    {
        name: 'office_address_region',
        alias: 'Регион места работы',
        editorType: 'select',
    },
    {
        name: 'office_address_details',
        alias: 'Адрес места работы',
    },
    {
        name: 'home_address_exist',
        alias: 'Наличие дополнительного адреса',
    },
    {
        name: 'home_address_region',
        alias: 'Регион дополнительного адреса',
    },
    {
        name: 'home_address_details',
        alias: 'Дополнительный адрес',
    },
    {
        name: 'manager_full_name',
        alias: 'Руководитель',
        isVisible: true,
        editorType: 'autocomplete',
    },
    {
        name: 'email',
        alias: 'E-mail',
        isVisible: true,
    },
];
