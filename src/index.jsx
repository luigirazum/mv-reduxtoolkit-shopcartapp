import React from 'react';
import { createRoot } from 'react-dom/client';
import store from './redux/app/store';
import { Provider } from 'react-redux';
import App from './components/App/App';
import './styles/index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
