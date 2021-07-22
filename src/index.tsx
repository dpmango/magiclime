import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store/store';
import moment from 'moment';
import 'moment/locale/ru';
import App from './components/App';
import GlobalStyles from './assets/globalStyles';

moment.locale('ru');

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Theme preset={presetGpnDefault}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Theme>
      <GlobalStyles />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);
