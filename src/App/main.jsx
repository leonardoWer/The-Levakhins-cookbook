import 's/styles/main.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import {BrowserRouter} from "react-router-dom";

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter basename="/The-Levakhins-cookbook">
          <App />
      </BrowserRouter>
  </StrictMode>,
)
