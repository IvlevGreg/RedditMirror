import React from 'react';
import { MetaData } from './MetaData';
import styles from './textcontent.css';
import { Title } from './Title';

export function TextContent() {
  return (
    <div className={styles.textContent}>
      <MetaData />
      <Title />
    </div>
  );
}
