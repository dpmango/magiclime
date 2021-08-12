import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import moment from 'moment';
import './i18n';
import { store, persistor } from './store/store';
import 'moment/locale/ru';
import App from './components/App';
import GlobalStyles from './assets/globalStyles';

moment.locale('ru');

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
      <GlobalStyles />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
