import React from 'react';
import styles from './userlink.css';

interface IUserLink {
  imgLink: string;
  userName: string;
  isReverse: boolean;
}

const URL_UESER_PREFIX = 'https://www.reddit.com/user/';

export function UserLink({ imgLink, userName, isReverse }: IUserLink) {
  return (
    <div
      className={styles.userLink + ' ' + (isReverse && styles.userLinkNoRevers)}
    >
      <img src={imgLink} alt="avatar" className={styles.avatar} />
      <a href={URL_UESER_PREFIX + userName} className={styles.username}>
        {userName}
      </a>
    </div>
  );
}
