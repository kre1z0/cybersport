export default [
    {
        name: 'control',
        alias: '',
        type: 'control',
        isVisible: true,
    },
    {
        name: 'image_name',
        alias: 'Фото',
        type: 'img',
        editorType: 'img-loader',
        isEditable: true,
        isVisible: true,
    },
    {
        name: 'gid',
        alias: 'ID',
        type: 'number',
        filterable: true,
        isVisible: true,
    },
    {
        name: 'object_name',
        alias: '№ в исходных данных',
        type: 'number',
        isVisible: true,
    },
    {
        name: 'department',
        alias: 'ТБ',
        type: 'text',
        editorType: 'select',
        isEditable: true,
        filterable: true,
        isVisible: true,
    },
    {
        name: 'target_segment',
        alias: 'Клиентский сегмент',
        type: 'text',
        editorType: 'select',
        isEditable: true,
        isVisible: true,
    },
    {
        name: 'responsible_employee_name',
        alias: 'Ответственный',
        type: 'text',
        editorType: 'text',
        filterable: true,
        isEditable: true,
        isVisible: true,
    },
    {
        name: 'object_description',
        alias: 'Описание',
        type: 'text',
        editorType: 'text-area',
        isEditable: true,
        isVisible: true,
    },
    {
        name: 'address_region',
        alias: 'Регион объекта',
        type: 'text',
        editorType: 'select',
        isEditable: true,
        isVisible: true,
    },
    {
        name: 'address_combined',
        alias: 'Адрес объекта (договор)',
        type: 'address',
        editorType: 'address',
        isEditable: true,
        isVisible: true,
    },
    {
        name: 'address_adjusted',
        alias: 'Адрес объекта (исправленный)',
        type: 'address',
        editorType: 'address',
        isVisible: true,
    },
    {
        name: 'classifier1',
        alias: '1 уровень классификатора',
        type: 'text',
        editorType: 'select',
        isEditable: true,
        isVisible: true,
    },
    {
        name: 'classifier2',
        alias: '2 уровень классификатора',
        type: 'text',
        editorType: 'select',
        isEditable: true,
        filterable: true,
        isVisible: true,
    },
    {
        name: 'classifier3',
        alias: '3 уровень классификатора',
        type: 'text',
        editorType: 'select',
        isEditable: true,
        filterable: true,
        isVisible: true,
    },
    {
        name: 'classifier4',
        alias: '4 уровень классификатора',
        type: 'text',
        editorType: 'select',
        isEditable: true,
        isVisible: true,
    },
    {
        name: 'cadastr_no',
        alias: 'Кадастровый номер',
        type: 'text',
        editorType: 'text',
        isEditable: true,
        isVisible: true,
    },
    {
        name: 'building_type',
        alias: 'Тип',
        type: 'text',
        editorType: 'select',
        isEditable: true,
        isVisible: true,
    },
    {
        name: 'wall_material',
        alias: 'Материал',
        type: 'text',
        editorType: 'select',
        isEditable: true,
        isVisible: true,
    },
    {
        name: 'construction_year',
        alias: 'Год',
        type: 'text',
        editorType: 'text',
        isEditable: true,
        isVisible: true,
    },
    {
        name: 'red_line_position',
        alias: 'Близость к "красной линии"',
        type: 'text',
        editorType: 'text',
        isEditable: true,
        isVisible: true,
    },
    {
        name: 'area',
        alias: 'Площадь, м2',
        type: 'number',
        editorType: 'number',
        isEditable: true,
        isVisible: true,
    },
    {
        name: 'floor_no',
        alias: 'Этаж',
        type: 'text',
        editorType: 'text',
        isEditable: true,
        isVisible: true,
        validation: {
            type: [Number, 'Здание целиком', 'Подвал', 'Цокольный этаж'],
            min: 1,
            max: 20,
        },
    },
    {
        name: 'separate_entrance',
        alias: 'Отдельный вход',
        type: 'text',
        editorType: 'text',
        isEditable: true,
        isVisible: true,
    },
    {
        name: 'floor_qty',
        alias: 'Этажность',
        type: 'text',
        editorType: 'text',
        isEditable: true,
        isVisible: true,
        validation: {
            type: Number,
            min: 1,
            max: 100,
        },
    },
    {
        name: 'room_qty',
        alias: 'Комнаты',
        type: 'text',
        editorType: 'text',
        isEditable: true,
        isVisible: true,
        validation: {
            type: [Number, 'Студия'],
            min: 1,
            max: 20,
        },
    },
    {
        name: 'monthly_volume',
        alias: 'Пролив, л/мес.',
        type: 'text',
        editorType: 'text',
        isEditable: true,
        isVisible: true,
    },
    {
        name: 'has_store',
        alias: 'Магазин',
        type: 'text',
        editorType: 'text',
        isEditable: true,
        isVisible: true,
    },
    {
        name: 'petrol_station_qty',
        alias: 'Заправочные островки',
        type: 'text',
        editorType: 'text',
        isEditable: true,
        isVisible: true,
        validation: {
            type: Number,
            min: 1,
            max: 15,
        },
    },
    {
        name: 'owner_name',
        alias: 'Залогодатель',
        type: 'text',
        editorType: 'text',
        isEditable: true,
        isVisible: true,
    },
    {
        name: 'owner_inn',
        alias: 'ИНН',
        type: 'text',
        editorType: 'text',
        isEditable: true,
        filterable: true,
        isVisible: true,
    },
    {
        name: 'contacts',
        alias: 'Контактное лицо',
        type: 'text',
        editorType: 'text',
        isEditable: true,
        isVisible: true,
    },
    {
        name: 'contract_no',
        alias: '№ договора',
        type: 'text',
        editorType: 'text',
        isEditable: true,
        filterable: true,
        isVisible: true,
    },
    {
        name: 'contract_start_date',
        alias: 'Начало договора',
        type: 'date',
        editorType: 'date',
        isEditable: true,
        isVisible: true,
    },
    {
        name: 'contract_end_date',
        alias: 'Окончание договора',
        type: 'date',
        editorType: 'date',
        isEditable: true,
        isVisible: true,
    },
    {
        name: 'credit_inspector',
        alias: 'Кредитный инспектор',
        type: 'text',
        editorType: 'text',
        isEditable: true,
        isVisible: true,
    },
    {
        name: 'object_quality_category',
        alias: 'Категория (договор)',
        type: 'text',
        editorType: 'select',
        isEditable: true,
        isVisible: true,
    },
    {
        name: 'actual_quality_category',
        alias: 'Категория (актуализация)',
        type: 'text',
        editorType: 'select',
        isEditable: true,
        isVisible: true,
    },
    {
        name: 'liquidity',
        alias: 'Ликвидность (договор)',
        type: 'text',
        editorType: 'select',
        isEditable: true,
        isVisible: true,
    },
    {
        name: 'actual_liquidity',
        alias: 'Ликвидность (актуализация)',
        type: 'text',
        editorType: 'select',
        isEditable: true,
        isVisible: true,
    },
    {
        name: 'value_type',
        alias: 'Вид стоимости',
        type: 'text',
        editorType: 'select',
        isEditable: true,
        isVisible: true,
    },
    {
        name: 'original_full_value',
        alias: 'Оценочная стоимость (договор), руб.',
        type: 'number',
        editorType: 'number',
        isEditable: true,
        isVisible: true,
    },
    {
        name: 'actual_full_value',
        alias: 'Оценочная стоимость (актуализация), руб.',
        type: 'number',
        editorType: 'number',
        isEditable: true,
        isVisible: true,
    },
    {
        name: 'original_mortgage_value',
        alias: 'Залоговая стоимость (договор), руб.',
        type: 'number',
        editorType: 'number',
        isEditable: true,
        isVisible: true,
    },
    {
        name: 'actual_mortgage_value',
        alias: 'Залоговая стоимость (актуализация), руб.',
        type: 'number',
        editorType: 'number',
        isEditable: true,
        isVisible: true,
    },
    {
        name: 'check_interval',
        alias: 'Период проверки, дн.',
        type: 'number',
        editorType: 'select',
        isEditable: true,
        isVisible: true,
    },
    {
        name: 'actualization_interval',
        alias: 'Период актуализации, дн.',
        type: 'number',
        editorType: 'number',
        isEditable: true,
        isVisible: true,
    },
    {
        name: 'last_check_date',
        alias: 'Последняя проверка',
        type: 'date',
        editorType: 'date',
        isVisible: true,
        isEditable: true,
    },
    {
        name: 'last_actualization_date',
        alias: 'Последняя актуализация',
        type: 'date',
        editorType: 'date',
        isVisible: true,
        isEditable: true,
    },
    {
        name: 'check_result_code',
        alias: 'Коды мониторинга',
        type: 'text',
        editorType: 'select',
        isEditable: true,
        isVisible: true,
    },
    {
        name: 'planned_audit_date',
        alias: 'Плановая проверка',
        type: 'date',
        isVisible: true,
        filterable: true,
    },
];
