import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import './index.css'
import App from './App.jsx'


const root = createRoot(document.getElementById("root"))

root.render(
    <HashRouter>
        <App />
    </HashRouter>
);