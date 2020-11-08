import React from 'react';
import { Provider } from 'react-redux';
import createStore from 'store';
import GlobalStyle from 'globleStyle';
import './App.less';
import Main from 'pages/Main';

import loader from '@ibsheet/loader';

// define loader config options
const loaderOptions = {
  registry: [
    {
      name: 'ibsheet',
      // baseUrl: 'https://www.ibsheet.com/ibsheet8/customer-sample/assets/ibsheet/',
      baseUrl: '/ibsheet',
      locales: ['ko', 'en'],
      plugins: ['common', 'excel'],
    },
  ],
  ready: function () {
    console.log('[DEBUG] IBSheetLoader configuration complete.')
  },
  debug: false 
}

//  IBSheet Loader config
loader.config(loaderOptions);

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Main />
    </Provider>
  );
}

export default App;
