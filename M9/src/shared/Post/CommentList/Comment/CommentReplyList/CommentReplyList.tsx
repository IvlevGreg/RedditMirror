import React from 'react';
import {
  DropdownCommentsIcon,
  DropdownComplainIcon,
  DropdownShareIcon,
} from '../../../../Icons';
import styles from './commentreplylist.css';

export function CommentReplyList() {
  return (
    <ul className={styles.CommentReplysList}>
      <li className={styles.CommentReplyItem}>
        <button
          className={styles.CommentReply + ' ' + styles.CommentReplyDekstop}
        >
          <DropdownCommentsIcon />
          <span className={styles.CommentReplyText}>Ответить</span>
        </button>
      </li>
      <li className={styles.CommentReplyItem}>
        <button
          className={styles.CommentReply + ' ' + styles.CommentReplyDekstop}
        >
          <DropdownShareIcon />
          <span className={styles.CommentReplyText}>Поделиться</span>
        </button>
      </li>

      <li className={styles.CommentReplyItem}>
        <button className={styles.CommentReply}>
          <DropdownComplainIcon />
          <span className={styles.CommentReplyText}>Пожаловаться</span>
        </button>
      </li>
    </ul>
  );
}
