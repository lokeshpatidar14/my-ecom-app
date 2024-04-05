// Cart.js

import React from 'react';

const cartElements = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
  }
];

function Cart() {
  const handleRemove = (index) => {
    // Remove item from cartElements array
    const updatedCartElements = [...cartElements];
    updatedCartElements.splice(index, 1);
    // Update state or perform further actions as needed
    console.log('Removed item from cart:', cartElements[index]);
  };

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartElements.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.imageUrl} alt={item.title} />
          <div className="item-details">
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => handleRemove(index)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
