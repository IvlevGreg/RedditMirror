import React from 'react';
import styles from './metadata.css';
import { UserLink } from './UserLink';

interface IMetaData {
  imgLink: string;
  userName: string;
  publishedDate: string;
  isPublished?: boolean;
}

export function MetaData({
  imgLink,
  userName,
  publishedDate,
  isPublished = true,
}: IMetaData) {
  return (
    <div className={styles.metaData}>
      <UserLink imgLink={imgLink} userName={userName} />
      <span className={styles.createdAt}>
        {isPublished ? (
          <span className={styles.publishedLabel}>опубликовано </span>
        ) : null}
        {publishedDate}
      </span>
    </div>
  );
}
