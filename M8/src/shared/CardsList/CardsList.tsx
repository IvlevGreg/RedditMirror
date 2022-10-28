import React from 'react';
import { usePostsData } from '../../hooks/usePostsData';
import { Card } from './Card/Card';
import styles from './cardslist.css';

export function CardsList() {
  const [data] = usePostsData();

  return (
    <ul className={styles.cardsList}>
      <Card />
    </ul>
  );
}
