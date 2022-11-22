import React from 'react';
import { IconAnon } from '../../../Icons';
import styles from './userblock.css';

interface IUserBlockProps {
  avatarSrc?: string;
  username?: string;
  loading?: boolean;
}

export function UserBlock({
  avatarSrc,
  username,
  loading = false,
}: IUserBlockProps) {
  return (
    <a
      href="https://www.reddit.com/api/v1/authorize?client_id=UhnQm3RN9V7OfxDfCYCvhQ&response_type=code&state=random_string&redirect_uri=https://react-app-reddit-mirror.herokuapp.com/auth&duration=permanent&scope=read submit identity"
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
      {loading ? (
        <div className={styles.username}>{'Загрузка...'}</div>
      ) : (
        <div className={styles.username}>{username || 'Аноним'}</div>
      )}
    </a>
  );
}
