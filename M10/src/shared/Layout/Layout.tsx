import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useToken } from '../../hooks/useToken';
import { setToken } from '../../redux';
import styles from './layout.css';

interface IlayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: IlayoutProps) {
  const [token] = useToken();

  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      dispatch(setToken(token));
    }
  }, [token]);

  return <div className={styles.layout}>{children}</div>;
}
