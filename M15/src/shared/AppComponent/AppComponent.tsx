import React, { useEffect, useState } from 'react';
import { CardsList } from '../CardsList';
import { Content } from '../Content';
import { Header } from '../Header';
import { Layout } from '../Layout';
import { useDispatch } from 'react-redux';
import { useToken } from '../../hooks/useToken';
import { BrowserRouter, Navigate } from 'react-router-dom';
import { Link, Route, Routes } from 'react-router-dom';

import styles from './appcomponent.css';
import { setToken } from '../../redux/tokenReducer/actions';
import { Post } from '../Post/Post';
import { NotFoundPage } from '../NotFoundPage';

export function AppComponent() {
  const dispatch = useDispatch();

  const [token] = useToken();

  const [mounted, setMounted] = useState<null | true>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    mounted && (
      <BrowserRouter>
        <Layout>
          <Header />
          <Content>
            <Routes>
              <Route path="*" element={<Navigate to="/404" replace />} />
              <Route path="/404" element={<NotFoundPage />} />

              {/* redirect */}
              <Route path={`/`} element={<Navigate to="/posts" replace />} />
              <Route path={`/auth`} element={<CardsList />} />
              <Route path={`/posts`} element={<CardsList />}>
                <Route path={`:id`} element={<Post />} />
              </Route>
            </Routes>
          </Content>
        </Layout>
      </BrowserRouter>
    )
  );
}
