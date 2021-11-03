/*
4. Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
    1. Получить все товары, у которых есть фотографии,
можете использовать метод filter https://mzl.la/2qROQkT
    2. Отсортируйте товары по цене (от низкой цены к высокой),
можете использовать метод sort https://mzl.la/2Y79hbZ ,
как устроен sort можно посмотреть например здесь https://youtu.be/O2pusOp0gC0
или в дополнительных видео в материалах урока.
*/

const products_2 = [
    {
        id: 3,
        price: 127,
        photos: [
            "1.jpg",
            "2.jpg",
        ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
            "3.jpg"
        ]
    },
    {
        id: 8,
        price: 78,
    },
];

const products_photo = products_2.filter(item => 'photos' in item && item.photos.length > 0);
console.log(products_photo);

const sort_products_price = products_2.sort(function (item_1, item_2) {
    return item_1.price - item_2.price
});
console.log(sort_products_price)
