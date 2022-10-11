import React from 'react';
import { hot } from 'react-hot-loader/root';
import styles from './app.css';
import stylesGlobal from './main.global.css';
import { CardsList } from './shared/CardsList';
import { Content } from './shared/Content';
import { Header } from './shared/Header';
import { Layout } from './shared/Layout';

function AppComponent() {
  return (
    <Layout>
      {/* удалить потом подключение */}
      <div className={stylesGlobal.w}></div>
      <Header />
      <Content>
        <CardsList />
      </Content>
    </Layout>
  );
}

export const App = hot(AppComponent);
