import React from 'react';
import { Actions } from './Actions';
import { CommentButton } from './CommentButton';
import styles from './controls.css';
import { KarmaCounter } from './KarmaCounter';

interface IControls {
  karmaValue: number;
}

export function Controls({ karmaValue }: IControls) {
  return (
    <div className={styles.controls}>
      <KarmaCounter karmaValue={karmaValue} />
      <CommentButton />
      <Actions />
    </div>
  );
}
