import React from 'react';
import ReactDOM from 'react-dom/client'
// import App from './app';
// import AppFunc from './app-func';
// import Products from './components/product'
// import Products from './components/functional/product'
import Products from './components/products'
import 'bootstrap/dist/css/bootstrap.css';
// const element = <h1>React element</h1>

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<Products></Products>)