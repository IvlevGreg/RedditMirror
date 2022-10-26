import React from 'react';
import { IconAnon } from '../../../Icons';
import styles from './userblock.css';

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
}

export function UserBlock({ avatarSrc, username }: IUserBlockProps) {
  return (
    <a
      href="https://www.reddit.com/api/v1/authorize?client_id=6GjP-1ayBsFeHWVql35igA&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
      className={styles.userBox}
    >
      <div className={styles.avatarBox}>
        {avatarSrc ? (
          <img
            src={avatarSrc}
            alt="avatar"
            className={styles.avatarImage}
          ></img>
        ) : (
          <IconAnon />
        )}
      </div>

      <div className={styles.username}>{username || 'Аноним'}</div>
    </a>
  );
}
