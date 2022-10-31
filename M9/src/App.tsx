import React from 'react';
import { hot } from 'react-hot-loader/root';
import './main.global.css';
import styles from './app.css';
import { useToken } from './hooks/useToken';
import { CardsList } from './shared/CardsList';
import { Content } from './shared/Content';
import { Dropdown } from './shared/Dropdown';
import { Header } from './shared/Header';
import { Layout } from './shared/Layout';
import { tokenContext } from './shared/context/tokenContext';

function AppComponent() {
  const [token] = useToken();
  const { Provider } = tokenContext;
  return (
    <Provider value={token}>
      <Layout>
        <Header />
        <Content>
          <CardsList />
        </Content>
        {/* <Dropdown
        onClose={() => console.log('closed')}
        onOpen={() => console.log('Open')}
        isOpen={false}
        button={<button>Test</button>}
      >
        <CardsList />
      </Dropdown> */}
      </Layout>
    </Provider>
  );
}

export const App = hot(() => <AppComponent />);
