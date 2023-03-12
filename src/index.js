
import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App/App';
import './index.css';

import { Provider } from "react-redux";
import { store, persistor } from "../src/redux/store";

import { BrowserRouter } from 'react-router-dom';
import AuthLayout from './components/AuthLayout/AuthLayout';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthLayout>
          <BrowserRouter basename="https://github.com/AnnaKostyanaya/goit-react-hw-08-phonebook">
              <App />
          </BrowserRouter>
        </AuthLayout>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
