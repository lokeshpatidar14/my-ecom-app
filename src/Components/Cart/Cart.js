import React, { useContext } from 'react';
import CartContext from '../../Store/CartContext';
import "../Cart/Cart.css"

function Cart() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.imageUrl} alt={item.title} />
          <div className="item-details">
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
