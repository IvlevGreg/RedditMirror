import React from 'react';
import styles from './userlink.css';

interface IUserLink {
  imgLink: string;
  userName: string;
}

const URL_UESER_PREFIX = 'https://www.reddit.com/user/';

export function UserLink({ imgLink, userName }: IUserLink) {
  return (
    <div className={styles.userLink}>
      <img src={imgLink} alt="avatar" className={styles.avatar} />
      <a href={URL_UESER_PREFIX + userName} className={styles.username}>
        {userName}
      </a>
    </div>
  );
}
