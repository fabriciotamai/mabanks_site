import AppRoutes from './routes';

// Styles
import './App.css';

import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

// ContextProvider
import { AppProvider } from './context';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  </React.StrictMode>,
);
