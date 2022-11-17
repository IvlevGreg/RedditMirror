import React from 'react';
import { ICommentData, ICommentsData } from '../../../hooks/usePostData';
import { getPublishedTimeFromNow } from '../../../modules';
import { Comment } from './Comment';

import styles from './commentlist.css';

interface ICommentList {
  postData: ICommentData;
  postId: string;
}

function commentCreate(postData: ICommentData): (JSX.Element | null)[] {
  return postData.data.children.map((comment): JSX.Element | null => {
    if (comment.data.body) {
      return (
        <Comment
          key={comment.data.id}
          author={comment.data.author}
          body={comment.data.body}
          postId={comment.data.id}
          publishedDate={getPublishedTimeFromNow(comment.data.created)}
          // рекурсия
          children={
            comment.data.replies && comment.data.replies.kind !== 'more' ? (
              <CommentList
                postId={comment.data.id}
                postData={comment.data.replies}
              />
            ) : undefined
          }
        />
      );
    } else {
      return null;
    }
  });
}

export function CommentList({ postData, postId }: ICommentList) {
  return (
    <ul className={styles.commentsList}>
      {commentCreate(postData).map((comment): JSX.Element | null => comment)}
    </ul>
  );
}
