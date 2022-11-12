import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import './main.global.css';
import { CardsList } from './shared/CardsList';
import { Content } from './shared/Content';
import { Header } from './shared/Header';
import { Layout } from './shared/Layout';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './redux/rootReducer';

const store = createStore(rootReducer, composeWithDevTools());

function AppComponent() {
  return (
    <Provider store={store}>
      <Layout>
        <Header />
        <Content>
          <CardsList />
        </Content>
      </Layout>
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);
