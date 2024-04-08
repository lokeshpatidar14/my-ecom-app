// ProductsScreen.js

import React, { useContext } from 'react';
import CartContext from '../../Store/CartContext';

const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  }
];

function ProductsScreen() {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="products-container">
      {productsArr.map((product, index) => (
        <div key={index} className="product-card">
          <h3>{product.title}</h3>
          <p>Price: ${product.price}</p>
          <img src={product.imageUrl} alt={product.title} className="product-image" />
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductsScreen;
