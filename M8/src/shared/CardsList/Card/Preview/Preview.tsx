import React from 'react';
import styles from './preview.css';

interface IPreview {
  previewLink: string;
}

export function Preview({ previewLink }: IPreview) {
  return (
    <div className={styles.preview}>
      <img src={previewLink} alt="preview" className={styles.previewImg} />
    </div>
  );
}
