import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './notfoundpage.css';

export function NotFoundPage() {
  const navigate = useNavigate();
  function handle() {
    navigate('/posts');
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>Oops...</h2>
      <h1 className={styles.title}>Not Found</h1>
      <h2 className={styles.subtitle}>404</h2>
      <button onClick={handle} className={styles.button}>
        На главную
      </button>
    </div>
  );
}
