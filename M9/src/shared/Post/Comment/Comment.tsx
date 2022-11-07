import React from 'react';
import { KarmaCounter } from '../../CardsList/Card/Controls/KarmaCounter';
import { MetaData } from '../../CardsList/Card/TextContent/MetaData';
import { CommentList } from '../CommentList';
import styles from './comment.css';
import { CommentReplyList } from './CommentReplyList';

interface IComment {
  author: string;
  body: string;
  publishedDate: string;
  children?: JSX.Element;
}

export function Comment({ author, body, publishedDate, children }: IComment) {
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
      <CommentReplyList />
      {children}
      {/* <CommentList postData={children}/> */}
    </li>
  );
}
