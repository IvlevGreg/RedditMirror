import React from 'react';
import { hot } from 'react-hot-loader/root';
import styles from './app.css';
import './main.global.css';
import { CardsList } from './shared/CardsList';
import { Content } from './shared/Content';
import { Dropdown } from './shared/Dropdown';
import { Header } from './shared/Header';
import { Layout } from './shared/Layout';

function AppComponent() {
  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
      </Content>
      <Dropdown
        onClose={() => console.log('closed')}
        onOpen={() => console.log('Open')}
        isOpen={false}
        button={<button>Test</button>}
      >
        <CardsList />
      </Dropdown>
    </Layout>
  );
}

export const App = hot(AppComponent);
