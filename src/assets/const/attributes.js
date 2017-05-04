export default [
    {
        name: 'control',
        alias: '',
        type: 'control'
    },
    {
        name: 'image_name',
        alias: 'Фото',
        type: 'img',
        editorType: 'img-loader',
        isEditable: true
    },
    {
        name: 'gid',
        alias: 'ID',
        type: 'text',
        filterable: true
    },
    {
        name: 'object_name',
        alias: '№ в исходных данных',
        type: 'text'
    },
    {
        name: 'department',
        alias: 'ТБ',
        type: 'text',
        editorType: 'select',
        isEditable: true,
        filterable: true
    },
    {
        name: 'target_segment',
        alias: 'Целевой клиентский сегмент',
        type: 'text',
        editorType: 'select',
        isEditable: true
    },
    {
        name: 'responsible_employee_name',
        alias: 'Ответственный сотрудник ПМЗ',
        type: 'text',
        editorType: 'select',
        isEditable: true
    },
    {
        name: 'object_description',
        alias: 'Описание',
        type: 'text',
        editorType: 'text-area',
        isEditable: true
    },
    {
        name: 'address_region',
        alias: 'Регион расположения объекта',
        type: 'text',
        editorType: 'text',
        isEditable: true
    },
    {
        name: 'address_combined',
        alias: 'Адрес объекта (по договору)',
        type: 'text',
        editorType: 'text',
        isEditable: true
    },
    {
        name: 'address_adjusted',
        alias: 'Адрес объекта (скорректированный)',
        type: 'address',
        editorType: 'address'
    },
    {
        name: 'classifier1',
        alias: 'Вид обеспечения по классификатору (1 уровень)',
        type: 'text',
        editorType: 'select',
        isEditable: true
    },
    {
        name: 'classifier2',
        alias: 'Вид обеспечения по классификатору (2 уровень)',
        type: 'text',
        editorType: 'select',
        isEditable: true,
        filterable: true
    },
    {
        name: 'classifier3',
        alias: 'Вид обеспечения по классификатору (3 уровень)',
        type: 'text',
        editorType: 'select',
        isEditable: true,
        filterable: true
    },
    {
        name: 'classifier4',
        alias: 'Вид обеспечения по классификатору (4 уровень)',
        type: 'text',
        editorType: 'select',
        isEditable: true
    },
    {
        name: 'cadastr_no',
        alias: 'Кадастровый номер',
        type: 'text',
        editorType: 'text',
        isEditable: true
    },
    {
        name: 'building_type',
        alias: 'Тип',
        type: 'text',
        editorType: 'text',
        isEditable: true
    },
    {
        name: 'wall_material',
        alias: 'Материалы стен',
        type: 'text',
        editorType: 'text',
        isEditable: true
    },
    {
        name: 'construction_year',
        alias: 'Год постройки',
        type: 'text',
        editorType: 'text',
        isEditable: true
    },
    {
        name: 'red_line_position',
        alias: 'Расположен вблизи "красной линии',
        type: 'text',
        editorType: 'text',
        isEditable: true
    },
    {
        name: 'area',
        alias: 'Площадь, м2',
        type: 'text',
        editorType: 'text',
        isEditable: true
    },
    {
        name: 'floor_no',
        alias: 'Этаж расположения залога',
        type: 'text',
        editorType: 'text',
        isEditable: true
    },
    {
        name: 'separate_entrance',
        alias: 'Наличие отдельного входа',
        type: 'text',
        editorType: 'text',
        isEditable: true
    },
    {
        name: 'floor_qty',
        alias: 'Количество этажей в здании',
        type: 'text',
        editorType: 'text',
        isEditable: true
    },
    {
        name: 'room_qty',
        alias: 'Количество комнат',
        type: 'text',
        editorType: 'text',
        isEditable: true
    },
    {
        name: 'monthly_volume',
        alias: 'Среднемесячный пролив, л',
        type: 'text',
        editorType: 'text',
        isEditable: true
    },
    {
        name: 'has_store',
        alias: 'Наличие магазина',
        type: 'text',
        editorType: 'text',
        isEditable: true
    },
    {
        name: 'petrol_station_qty',
        alias: 'Количество заправочных островков',
        type: 'text',
        editorType: 'text',
        isEditable: true
    },
    {
        name: 'owner_name',
        alias: 'Наименование залогодателя',
        type: 'text',
        editorType: 'text',
        isEditable: true
    },
    {
        name: 'owner_inn',
        alias: 'ИНН залогодателя',
        type: 'text',
        editorType: 'text',
        isEditable: true,
        filterable: true
    },
    {
        name: 'contacts',
        alias: 'Контактное лицо залогодателя',
        type: 'text',
        editorType: 'text',
        isEditable: true
    },
    {
        name: 'contract_no',
        alias: '№ договора залога',
        type: 'text',
        editorType: 'text',
        isEditable: true,
        filterable: true
    },
    {
        name: 'contract_start_date',
        alias: 'Дата начала договора залога',
        type: 'text',
        editorType: 'text',
        isEditable: true
    },
    {
        name: 'contract_start_date',
        alias: 'Дата начала договора залога',
        type: 'text',
        editorType: 'text',
        isEditable: true
    },
    {
        name: 'contract_end_date',
        alias: 'Дата окончания договора залога',
        type: 'text',
        editorType: 'text',
        isEditable: true
    },
    {
        name: 'contract_end_date',
        alias: 'Дата окончания договора залога',
        type: 'text',
        editorType: 'text',
        isEditable: true
    },
    {
        name: 'credit_inspector',
        alias: 'Кредитный инспектор',
        type: 'text',
        editorType: 'text',
        isEditable: true
    },
    {
        name: 'object_quality_category',
        alias: 'Категория качества (по договору)',
        type: 'text',
        editorType: 'text',
        isEditable: true
    },
    {
        name: 'actual_quality_category',
        alias: 'Категория качества (по итогам последней актуализации)',
        type: 'text',
        editorType: 'text',
        isEditable: true
    },
    {
        name: 'liquidity',
        alias: 'Ликвидность (по договору)',
        type: 'text',
        editorType: 'text',
        isEditable: true
    },
    {
        name: 'liquidity',
        alias: 'Ликвидность (по итогам последней актуализации)',
        type: 'text',
        editorType: 'text',
        isEditable: true
    },
    {
        name: 'value_type',
        alias: 'Вид стоимости',
        type: 'text',
        editorType: 'text',
        isEditable: true
    },
    {
        name: 'original_full_value',
        alias: 'Оценочная стоимость (по договору), руб.',
        type: 'text',
        editorType: 'text',
        isEditable: true
    },
    {
        name: 'actual_full_value',
        alias: 'Оценочная стоимость (по итогам последней актуализации), руб.',
        type: 'text',
        editorType: 'text',
        isEditable: true
    },
    {
        name: 'original_mortgage_value',
        alias: 'Залоговая стоимость (по договору), руб.',
        type: 'text',
        editorType: 'text',
        isEditable: true
    },
    {
        name: 'actual_mortgage_value',
        alias: 'Залоговая стоимость (о итогам последней актуализации), руб.',
        type: 'text',
        editorType: 'text',
        isEditable: true
    },
    {
        name: 'check_interval',
        alias: 'Периодичность выездной проверки, дн.',
        type: 'text',
        editorType: 'text',
        isEditable: true
    },
    {
        name: 'actualization_interval',
        alias: 'Периодичность актуализации, дн.',
        type: 'text',
        editorType: 'text',
        isEditable: true
    },
    {
        name: 'last_check_date',
        alias: 'Дата последней проверки',
        type: 'text',
        editorType: 'text'
    },
    {
        name: 'last_actualization_date',
        alias: 'Дата последней актуализации',
        type: 'text',
        editorType: 'text'
    },
    {
        name: 'check_result_code',
        alias: 'Коды результатов последнего мониторинга',
        type: 'text',
        editorType: 'text',
        isEditable: true
    }
];
