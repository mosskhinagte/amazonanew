import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Product from './components/Product';
import data from './data';
import HomeScreen from './screens/HomeScreen';
import ProductSceen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">amazona</a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <Route path="/product/:id" component={ProductSceen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
          
        </main>
        <footer className="row center">All right reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
