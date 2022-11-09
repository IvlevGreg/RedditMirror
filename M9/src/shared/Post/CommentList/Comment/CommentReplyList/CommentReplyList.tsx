import React, { LegacyRef } from 'react';
import { useDispatch } from 'react-redux';
import { commentUpdate } from '../../../../../redux';
import { CommentForm } from '../../../../CommentForm';
import {
  DropdownCommentsIcon,
  DropdownComplainIcon,
  DropdownShareIcon,
} from '../../../../Icons';
import styles from './commentreplylist.css';

interface ICommentReplyList {
  userName?: string;
  postId: string;
}

export function CommentReplyList({ userName, postId }: ICommentReplyList) {
  let isOpen = false;
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  const dispatch = useDispatch();

  const handleOpen = (e: React.MouseEvent) => {
    setIsDropdownOpen(!isDropdownOpen);
    dispatch(commentUpdate(`${userName},`, postId));
  };

  return (
    <>
      <ul className={styles.CommentReplysList}>
        <li className={styles.CommentReplyItem}>
          {/* <button
          className={styles.CommentReply + ' ' + styles.CommentReplyDekstop}
        >
          <DropdownCommentsIcon />
          <span className={styles.CommentReplyText}>Ответить</span>
        </button> */}

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
      {isDropdownOpen && <CommentForm postId={postId} />}
    </>
  );
}
