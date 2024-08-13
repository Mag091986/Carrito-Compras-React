import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { CarritoApp } from './CarritoApp';
import Searchbox from "./components/Searchbox"; // Asegúrate de que Searchbox es exportado por defecto si lo usas así

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      <CarritoApp />
      <Searchbox />
    </React.StrictMode>,
  </BrowserRouter>
)