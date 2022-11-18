import React, { useEffect, useState } from 'react';
import { hot } from 'react-hot-loader/root';
import './main.global.css';

import { applyMiddleware, createStore, Middleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './redux/rootReducer';
import { AppComponent } from './shared/AppComponent';
import thunk from 'redux-thunk';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export const App = hot(() => (
  <Provider store={store}>
    <AppComponent />
  </Provider>
));
