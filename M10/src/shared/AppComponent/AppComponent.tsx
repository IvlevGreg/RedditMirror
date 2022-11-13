import React, { useEffect } from 'react';
import { CardsList } from '../CardsList';
import { Content } from '../Content';
import { Header } from '../Header';
import { Layout } from '../Layout';
import { useDispatch } from 'react-redux';
import { useToken } from '../../hooks/useToken';
import { setToken } from '../../redux';

import styles from './appcomponent.css';

export function AppComponent() {
  const [token] = useToken();

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(setToken(token));
    }
  }, [token]);

  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
      </Content>
    </Layout>
  );
}
