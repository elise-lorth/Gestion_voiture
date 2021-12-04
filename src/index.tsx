import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import FooterAffichage from "./components/Footer";

ReactDOM.render(
    <React.StrictMode>
        <App/>
        <FooterAffichage/>
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();
