import React from 'react';
import { LogoRedditIcon } from '../../Icons/LogoReddit';
import styles from './sortblock.css';

export function SortBlock() {
  return (
    <div className={styles.sortBlock}>
      <a className={styles.link}>
        <LogoRedditIcon />
      </a>
    </div>
  );
}
