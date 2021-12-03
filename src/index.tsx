import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FooterAffichage from "./components/Footer";

if (process.env.NODE_ENV === 'development') {
    const {worker} = require('./mocks/browser')
    worker.start()
}
ReactDOM.render(
    <React.StrictMode>
        <App/>
        <FooterAffichage/>
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();
