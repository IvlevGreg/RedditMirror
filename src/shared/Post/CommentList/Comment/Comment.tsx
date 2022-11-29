import React, { LegacyRef } from 'react';
import { KarmaCounter } from '../../../CardsList/Card/Controls/KarmaCounter';
import { MetaData } from '../../../CardsList/Card/TextContent/MetaData';
import styles from './comment.css';
import { CommentReplyList } from './CommentReplyList';

interface IComment {
  author: string;
  body: string;
  publishedDate: string;
  children?: JSX.Element;
  postId: string;
}

export function Comment({
  author,
  body,
  publishedDate,
  children,
  postId,
}: IComment) {
  return (
    <li className={styles.item}>
      <div className={styles.karmaCounterContainer}>
        <KarmaCounter isKarmaValue={false} />
        <div className={styles.leftBorder}></div>
      </div>
      <MetaData
        imgLink={'https://imageup.ru/img211/4055371/pngwingcom.png'}
        userName={author}
        publishedDate={publishedDate}
        isPublished={false}
        isReverse={true}
      />

      <p className={styles.CommentText}>{body}</p>
      <CommentReplyList userName={author} postId={postId} />
      {children}
    </li>
  );
}
