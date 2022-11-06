import React from 'react';
import { MetaData } from '../../CardsList/Card/TextContent/MetaData';
import styles from './comment.css';
import { CommentReplyList } from './CommentReplyList';

interface IComment {
  author: string;
  body: string;
  publishedDate: string;
}

export function Comment({ author, body, publishedDate }: IComment) {
  return (
    <li className={styles.item}>
      <MetaData
        imgLink={'https://imageup.ru/img211/4055371/pngwingcom.png'}
        userName={author}
        publishedDate={publishedDate}
        isPublished={false}
      />
      {/* <span>{}</span> */}
      {/* <span>{publishedDate}</span> */}
      <p className={styles.CommentText}>{body}</p>
      <CommentReplyList />
    </li>
  );
}
