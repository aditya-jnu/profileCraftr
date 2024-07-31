import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import AppContextProvider from './context/AppContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppContextProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </AppContextProvider>
);

