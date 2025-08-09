import 's/styles/main.css'

import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import React from 'react';
import {BrowserRouter} from "react-router-dom";

import App from './App.jsx'


const basePath = import.meta.env.BASE_URL || '/The-Levakhins-cookbook';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter basename={basePath}>
            <App/>
        </BrowserRouter>
    </StrictMode>,
)
