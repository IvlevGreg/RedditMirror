import React from 'react';
import ReactDOM from 'react-dom';
import { usePostData, ICommentData } from '../../hooks/usePostData';
import { usePostEffect } from '../../hooks/usePostEffect';
import { getPublishedTimeFromNow } from '../../modules';
import { CommentForm } from '../CommentForm';
import { Comment } from './Comment';
import { PostContent } from './Comment/PostContent';
import { CommentList } from './CommentList';

import styles from './post.css';

export interface IPost {
  postId: string;
  userName: string;
  title: string;
  previewLink: string;
  onClose?: () => void;
}

export function Post(props: IPost) {
  const [ref] = usePostEffect(props);
  const [postData] = usePostData(props.postId, props.userName);

  const node = document.getElementById('modal_root');
  if (!node) return null;

  return ReactDOM.createPortal(
    <div className={styles.modal} ref={ref}>
      <h2 className={styles.title}>{props.title}</h2>
      <PostContent previewLink={props.previewLink} />
      <CommentForm />
      <CommentList postData={postData} />
    </div>,
    node
  );
}
