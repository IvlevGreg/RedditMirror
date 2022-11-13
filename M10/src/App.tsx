import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import './main.global.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './redux/rootReducer';
import { AppComponent } from './shared/AppComponent';

const store = createStore(rootReducer, composeWithDevTools());

export const App = hot(() => (
  <Provider store={store}>
    <AppComponent />
  </Provider>
));
