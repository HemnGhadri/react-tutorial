import React from 'react';
import ReactDOM from 'react-dom/client'
import App from "./api-data/app";
import {BrowserRouter} from "react-router-dom"
// import App from "./learning/app";
import 'bootstrap/dist/css/bootstrap.css';
// const element = <h1>React element</h1>

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>
)