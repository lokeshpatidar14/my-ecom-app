// App.js

import React from "react";

import ProductsScreen from "./Components/Products/ProductsScreen";
import Cart from "./Components/Cart/Cart";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Ecommerce App</h1>
        <Cart />
      </header>
      <main>
        <ProductsScreen />
      </main>
    </div>
  );
}

export default App;
