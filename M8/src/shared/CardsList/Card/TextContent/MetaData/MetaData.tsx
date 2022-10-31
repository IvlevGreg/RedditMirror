import React from 'react';
import styles from './metadata.css';
import { UserLink } from './UserLink';

interface IMetaData {
  imgLink: string;
  userName: string;
  publishedDate: string;
}

export function MetaData({ imgLink, userName, publishedDate }: IMetaData) {
  return (
    <div className={styles.metaData}>
      <UserLink imgLink={imgLink} userName={userName} />
      <span className={styles.createdAt}>
        <span className={styles.publishedLabel}>опубликовано </span>
        {publishedDate}
      </span>
    </div>
  );
}