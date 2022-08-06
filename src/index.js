import React from "react";
import ReactDOM  from "react-dom/client";
import './index.css';
import ReturnMessage from './ReturnMessage';
import ReturnMessageConst from './ReturnMessageConst';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
    <React.StrictMode>
        <ReturnMessage/>
        <ReturnMessageConst/>
    </React.StrictMode>
)
