import React, { useEffect } from 'react';
import { CardsList } from '../CardsList';
import { Content } from '../Content';
import { Header } from '../Header';
import { Layout } from '../Layout';
import { useDispatch } from 'react-redux';
import { useToken } from '../../hooks/useToken';

import styles from './appcomponent.css';
import { setToken } from '../../redux/tokenReducer/actions';

export function AppComponent() {
  const dispatch = useDispatch();

  const [token] = useToken();

  return (
    <Layout>
      <Header />
      <Content>
        <CardsList />
      </Content>
    </Layout>
  );
}
