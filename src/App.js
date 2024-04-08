// App.js

import React from 'react';

import ProductsScreen from './Components/Products/ProductsScreen';
import Cart from './Components/Cart/Cart';
import { CartProvider } from './Store/CartContext';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Ecommerce App</h1>
       
      </header>
      <main>
        <CartProvider>
        <Cart />
          <ProductsScreen />
        </CartProvider>
      </main>
    </div>
  );
}

export default App;
