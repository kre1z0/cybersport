const initState = [
    {
        id: 111111,
        photo: 'https://topstroy-remont.ru/wp-content/uploads/2016/07/proekt-rekonstrukcii-zdaniya.jpg',
        description: 'Торговый центр площадью 2500 м2',
        segment: 'Крупный бизнес',
        tb: 'Московский банк',
        response: 'Иванов И.И',
        region: 'Московская область',
        address_doc: 'г. Королев ул. Ленина, д1',
        address_edit: 'г. Королев ул. Ленина, д1 стр2',
        type_one: 'Недвижимость',
        type_two: 'Коммерческая недвижимость',
        type_three: 'Офисные здания и помещения'
    },
    {
        id: 111112,
        photo: 'http://buildvision.com/images/officebuilding-1a.jpg',
        description: 'Торговый центр площадью 3500 м2',
        segment: 'Крупный бизнес',
        tb: 'Московский банк',
        response: 'Иванов И.И',
        region: 'Московская область',
        address_doc: 'г. Королев ул. Ленина, д1',
        address_edit: 'г. Королев ул. Ленина, д1 стр2',
        type_one: 'Недвижимость',
        type_two: 'Коммерческая недвижимость',
        type_three: 'Офисные здания и помещения'
    },
    {
        id: 111113,
        photo: 'http://www.donbass-info.com/images/stories/memorial_plaques/donetsk/school_architectural_mon_2.jpg',
        description: 'Торговый центр площадью 4500 м2',
        segment: 'Крупный бизнес',
        tb: 'Московский банк',
        response: 'Иванов И.И',
        region: 'Московская область',
        address_doc: 'г. Королев ул. Ленина, д1',
        address_edit: 'г. Королев ул. Ленина, д1 стр2',
        type_one: 'Недвижимость',
        type_two: 'Коммерческая недвижимость',
        type_three: 'Офисные здания и помещения'
    },
    {
        id: 111114,
        photo: 'http://www.donbass-info.com/images/stories/memorial_plaques/donetsk/school_architectural_mon_2.jpg',
        description: 'Торговый центр площадью 4500 м2',
        segment: 'Крупный бизнес',
        tb: 'Московский банк',
        response: 'Иванов И.И',
        region: 'Московская область',
        address_doc: 'г. Королев ул. Ленина, д1',
        address_edit: 'г. Королев ул. Ленина, д1 стр2',
        type_one: 'Недвижимость',
        type_two: 'Коммерческая недвижимость',
        type_three: 'Офисные здания и помещения'
    }
];

export default (state = initState, {type, ...payload}) => {
    switch (type) {
        default: return state;
    }
}
