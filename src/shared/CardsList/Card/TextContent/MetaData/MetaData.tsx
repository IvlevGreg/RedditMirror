import React from 'react';
import styles from './metadata.css';
import { UserLink } from './UserLink';

interface IMetaData {
  imgLink: string;
  userName: string;
  publishedDate: string;
  isPublished?: boolean;
  isReverse?: boolean;
}

export function MetaData({
  imgLink,
  userName,
  publishedDate,
  isPublished = true,
  isReverse = false,
}: IMetaData) {
  return (
    <div
      className={styles.metaData + ' ' + (isReverse && styles.metaDataNoRevers)}
    >
      <UserLink imgLink={imgLink} userName={userName} isReverse={isReverse} />
      <span className={styles.createdAt}>
        {isPublished ? (
          <span className={styles.publishedLabel}>опубликовано </span>
        ) : null}
        {publishedDate}
      </span>
    </div>
  );
}
