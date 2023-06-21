import AppRoutes from './routes';

// Styles
import './App.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
);
