import React, { useEffect, useState } from 'react';
import { CardsList } from '../CardsList';
import { Content } from '../Content';
import { Header } from '../Header';
import { Layout } from '../Layout';
import { useDispatch } from 'react-redux';
import { useToken } from '../../hooks/useToken';
import { BrowserRouter } from 'react-router-dom';
import { Link, Route, Routes } from 'react-router-dom';

import styles from './appcomponent.css';
import { setToken } from '../../redux/tokenReducer/actions';
import { Post } from '../Post/Post';

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
            <CardsList />

            <Routes>
              <Route path={`/post/:id`} element={
              <Post              postId={postId}
              userName={userName}
              title={title}
              previewLink={previewLink}
              
              }}
            />} />
            </Routes>
          </Content>
        </Layout>
      </BrowserRouter>
    )
  );
}
