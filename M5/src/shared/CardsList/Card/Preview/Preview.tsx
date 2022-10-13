import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <div className={styles.preview}>
      <img
        src="https://i.postimg.cc/NLvtL2GC/Rectangle-14.jpg"
        alt=""
        className={styles.previewImg}
      />
    </div>
  );
}
