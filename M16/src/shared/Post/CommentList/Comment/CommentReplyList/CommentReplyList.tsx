import React, { useEffect, useRef } from 'react';
import { CommentForm } from '../../../../CommentForm';
import {
  DropdownCommentsIcon,
  DropdownComplainIcon,
  DropdownShareIcon,
} from '../../../../Icons';
import styles from './commentreplylist.css';

interface ICommentReplyList {
  userName: string;
  postId: string;
}

export function CommentReplyList({ userName, postId }: ICommentReplyList) {
  const [isCommentFormOpen, setIsCommentFormOpen] = React.useState(false);

  const handleOpen = (e: React.MouseEvent) => {
    setIsCommentFormOpen(!isCommentFormOpen);
  };

  function onClose() {
    console.log(1);
    setIsCommentFormOpen(!isCommentFormOpen);
  }

  return (
    <>
      <ul className={styles.CommentReplysList}>
        <li className={styles.CommentReplyItem}>
          <button
            onClick={handleOpen}
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
      {isCommentFormOpen && <CommentForm postId={postId} userName={userName} />}
    </>
  );
}
