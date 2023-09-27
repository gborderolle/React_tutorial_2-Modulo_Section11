import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthContextProvider } from './store/auth-context'; // Asegúrate de importar AuthContextProvider
import App from './App';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <App />
  </AuthContextProvider>
);
