import React, { useState } from 'react';
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
import { commentContext } from './shared/context/commentContext';

function AppComponent() {
  const [commentValue, setCommentValue] = useState('');

  const [token] = useToken();
  const { Provider } = tokenContext;

  const CommentProvider = commentContext.Provider;

  return (
    <CommentProvider
      value={{
        value: commentValue,
        onChange: setCommentValue,
      }}
    >
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
    </CommentProvider>
  );
}

export const App = hot(() => <AppComponent />);
