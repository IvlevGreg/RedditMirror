import React from 'react';
import { Actions } from './Actions';
import { CommentButton } from './CommentButton';
import styles from './controls.css';
import { KarmaCounter } from './KarmaCounter';

export function Controls() {
  return (
    <div className={styles.controls}>
      <KarmaCounter />
      <CommentButton />
      <Actions />
    </div>
  );
}
