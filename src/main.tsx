import './main.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { GlobalProvaider } from './shared/components/hooks/useGlobalContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <GlobalProvaider>
            <App />
        </GlobalProvaider>
    </React.StrictMode>,
);
