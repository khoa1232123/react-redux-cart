var initialState = [
  {
    id: 1,
    name: 'Iphone 7 plus',
    image: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
    description: 'Sản phẩm do apple sản xuất',
    price: 500,
    inventory: 10,
    rating: 4
  },
  {
    id: 2,
    name: 'Samsung galaxy S7',
    image: 'https://www.kickmobiles.com/images/thumbs/0008375_samsung-galaxy-s7-edge-sm-g935f-32gb-white_610.jpeg',
    description: 'Sản phẩm do samsung sản xuất',
    price: 400,
    inventory: 10,
    rating: 5
  },
  {
    id: 3,
    name: 'Blackberry keyOne',
    image: 'https://cdn.tgdd.vn/Products/Images/42/194834/blackberry-keyone-3gb-600x600.jpg',
    description: 'Sản phẩm do Hà Lan sản xuất',
    price: 1500,
    inventory: 10,
    rating: 3
  }
];

const products = (state = initialState, action) => {
  switch (action.type) {
    default: return [...state];
  }
}

export default products;