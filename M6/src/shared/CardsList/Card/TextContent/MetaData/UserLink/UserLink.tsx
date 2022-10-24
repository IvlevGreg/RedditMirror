import React from 'react';
import styles from './userlink.css';

export function UserLink() {
  return (
    <div className={styles.userLink}>
      <img
        src="https://i.postimg.cc/Z5Y04X9k/Ellipse-1.png"
        alt="avatar"
        className={styles.avatar}
      />
      <a href="#user-url" className={styles.username}>
        Дмитрий Гришин
      </a>
    </div>
  );
}
