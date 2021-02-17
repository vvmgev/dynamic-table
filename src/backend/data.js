export default {
    car : {
        config : {
            brand : {
                type: 'string',
                sortable: false,
                title : 'Brand',
                include: false,
            },
            engine : {
                type: 'number',
                sortable: true,
                title : 'Engine',
                include: true,
            },
            type : {
                type: 'string',
                sortable: true,
                title : 'Type',
                include: true,
            },
            color : {
                type: 'string',
                sortable: false,
                title : 'Color',
                include: true,
            },
            doors : {
                type: 'number',
                sortable: false,
                title : 'Doors',
                include: true,
            },
            year : {
                type: 'number',
                sortable: true,
                title : 'Year',
                include: true,
            }
        },
        items : [
            {
                brand : 'BMW',
                engine: 3.0,
                type: 'Sedan',
                color: 'Red',
                doors: 4,
                year: 2000
            },
            {
                brand : 'Ford',
                engine: 4.0,
                type: 'Sedan',
                color: 'Blue',
                doors: 4,
                year: 2014
            },
            {
                brand : 'Honda',
                engine: 3.0,
                type: 'Coupe',
                color: 'Red',
                doors: 2,
                year: 2021
            },
            {
                brand : 'Kia',
                engine: 2.5,
                type: 'Hatchback',
                color: 'Green',
                doors: 4,
                year: 2005
            },
            {
                brand : 'GMC',
                engine: 5.0,
                type: 'Pickup',
                color: 'Red',
                doors: 4,
                year: 2015
            },
            {
                brand : 'Mercedes',
                engine: 3.7,
                type: 'Sedan',
                color: 'Blue',
                doors: 4,
                year: 2014
            },
            {
                brand : 'Shelby',
                engine: 5.2,
                type: 'Coupe',
                color: 'Red',
                doors: 2,
                year: 2021
            },
            {
                brand : 'Porsche',
                engine: 5.6,
                type: 'Sedan',
                color: 'Green',
                doors: 4,
                year: 2005
            },
            {
                brand : 'Jeep',
                engine: 3.0,
                type: 'Suv',
                color: 'Red',
                doors: 4,
                year: 2000
            },
            {
                brand : 'Ford',
                engine: 4.0,
                type: 'Wagon',
                color: 'Blue',
                doors: 4,
                year: 2014
            },
            {
                brand : 'Honda',
                engine: 3.0,
                type: 'Coupe',
                color: 'Red',
                doors: 2,
                year: 2021
            },
            {
                brand : 'Kia',
                engine: 2.5,
                type: 'Hatchback',
                color: 'Green',
                doors: 4,
                year: 2005
            },
            {
                brand : 'BMW',
                engine: 3.0,
                type: 'Sedan',
                color: 'Red',
                doors: 4,
                year: 2000
            },
            {
                brand : 'Ford',
                engine: 4.0,
                type: 'Sedan',
                color: 'Blue',
                doors: 4,
                year: 2014
            },
            {
                brand : 'Honda',
                engine: 3.0,
                type: 'Coupe',
                color: 'Red',
                doors: 2,
                year: 2021
            },
            {
                brand : 'Kia',
                engine: 2.5,
                type: 'Hatchback',
                color: 'Green',
                doors: 4,
                year: 2005
            },
            {
                brand : 'BMW',
                engine: 3.0,
                type: 'Sedan',
                color: 'Red',
                doors: 4,
                year: 2000
            },
            {
                brand : 'Ford',
                engine: 4.0,
                type: 'Sedan',
                color: 'Blue',
                doors: 4,
                year: 2014
            },
            {
                brand : 'Honda',
                engine: 3.0,
                type: 'Coupe',
                color: 'Red',
                doors: 2,
                year: 2021
            },
            {
                brand : 'Kia',
                engine: 2.5,
                type: 'Hatchback',
                color: 'Green',
                doors: 4,
                year: 2005
            },
            {
                brand : 'Nissan',
                engine: 1.8,
                type: 'Sedan',
                color: 'White',
                doors: 4,
                year: 2009
            },
        ]
    },
    phone : {
        config : {
            brand : {
                type: 'string',
                sortable: true,
                title : 'Brand',
                include: true,
            },
            color : {
                type: 'string',
                sortable: true,
                title : 'Type',
                include: true,
            },
            year : {
                type: 'number',
                sortable: true,
                title : 'Year',
                include: true,
            },
            processor : {
                type: 'string',
                sortable: false,
                title : 'Proccessor',
                include: true,
            },
            connectionType : {
                type: 'string',
                sortable: false,
                title : 'Connection Type',
                include: true,
            }
        },
        items : [
            {
                brand: 'Samsung',
                color: 'Black',
                year : 2020,
                processor : 'Exynos 580',
                connectionType : '3g'
            },
            {
                brand: 'Iphone',
                color: 'Red',
                year : 2020,
                processor : 'M1',
                connectionType : '4g'
            },
            {
                brand: 'LG',
                color: 'Blue',
                year : 2015,
                processor : 'Exynos 430',
                connectionType : '2g'
            },
            {
                brand: 'Xiaomi',
                color: 'Green',
                year : 2015,
                processor : 'Exynos 430',
                connectionType : '4g'
            },
        ],
    }
}