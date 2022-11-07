import React, { Children } from 'react';
import { ICommentData, ICommentsData } from '../../../hooks/usePostData';
import { getPublishedTimeFromNow } from '../../../modules';
import { KarmaCounter } from '../../CardsList/Card/Controls/KarmaCounter';
import { Comment } from './Comment';

import styles from './commentlist.css';

interface ICommentList {
  postData: ICommentData;
}

function commentCreate(postData: ICommentData): (JSX.Element | null)[] {
  return postData.data.children.map((comment): JSX.Element | null => {
    if (comment.data.body) {
      return (
        <Comment
          key={comment.data.id}
          author={comment.data.author}
          body={comment.data.body}
          publishedDate={getPublishedTimeFromNow(comment.data.created)}
          // рекурсия
          children={
            comment.data.replies && comment.data.replies.kind !== 'more' ? (
              <CommentList postData={comment.data.replies} />
            ) : undefined
          }
        />
      );
    } else {
      return null;
    }
  });
}

export function CommentList({ postData }: ICommentList) {
  return (
    <ul className={styles.commentsList}>
      {commentCreate(postData).map((comment): JSX.Element | null => comment)}
    </ul>
  );
}
