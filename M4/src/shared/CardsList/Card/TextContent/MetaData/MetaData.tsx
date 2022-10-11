import React from 'react';
import styles from './metadata.css';
import { UserLink } from './UserLink';

export function MetaData() {
  return (
    <div className={styles.metaData}>
      <UserLink />
      <span className={styles.createdAt}>
        <span className={styles.publishedLabel}>опубликовано</span>4 часа назад
      </span>
    </div>
  );
}
