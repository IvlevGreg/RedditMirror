import React from 'react';
import { hot } from 'react-hot-loader/root';
import './main.global.css';
import { useToken } from './hooks/useToken';
import { CardsList } from './shared/CardsList';
import { Content } from './shared/Content';
import { Header } from './shared/Header';
import { Layout } from './shared/Layout';
import { tokenContext } from './shared/context/tokenContext';
import { createStore } from 'redux';
import { Provider, useSelector } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './redux/rootReducer';
import { LoaderSpinner } from './shared/LoaderSpinner';

const store = createStore(rootReducer, composeWithDevTools());

function AppComponent() {
  const [token] = useToken();

  const TokenProvider = tokenContext.Provider;

  return (
    <Provider store={store}>
      <TokenProvider value={token}>
        <Layout>
          <Header />
          <Content>
            <CardsList />
          </Content>
        </Layout>
      </TokenProvider>
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);
