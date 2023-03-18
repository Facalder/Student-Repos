import '../public/assets/css/tailwind.css';
import 'remixicon/fonts/remixicon.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as BaseRouter } from 'react-router-dom';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BaseRouter>
      <App />
    </BaseRouter>
  </React.StrictMode>,
);
