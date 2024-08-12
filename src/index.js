import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './global/store';
import { Provider } from 'react-redux';
import { CssBaseline, SnackbarContent } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ModeContextProvider } from './global/modeContext/modeContext'
import { AuthProvider } from './global/authContext/authContext';
import "aos/dist/aos.css";




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <ModeContextProvider>
        <Provider store={store}>
          <CssBaseline />
          <App />
        </Provider>
    </ModeContextProvider>
  </AuthProvider>
);

reportWebVitals();
