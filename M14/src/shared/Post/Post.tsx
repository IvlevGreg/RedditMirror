import React from 'react';
import ReactDOM from 'react-dom';
import { usePostData, ICommentData } from '../../hooks/usePostData';
import { usePostEffect } from '../../hooks/usePostEffect';
import { CommentForm } from '../CommentForm';
import { PostContent } from './CommentList/Comment/PostContent';
import { CommentList } from './CommentList';
import { LoaderComments } from '../LoaderComments';

import styles from './post.css';

export interface IPost {
  postId: string;
  userName: string;
  title: string;
  previewLink: string;
  onClose?: () => void;
}

export function Post() {
  const props: IPost = {
    postId: 'yzp591',
    userName: 'AskReddit',
    title:
      'If there was a vote for one person to receive immortality, who would win?',
    previewLink:
      'https://www.reddit.com/r/AskReddit/comments/yzp591/if_there_was_a_vote_for_one_person_to_receive/',
  };
  const [ref] = usePostEffect(props);
  const [postData] = usePostData(props.postId, props.userName);

  const node = document.getElementById('modal_root');
  if (!node) return null;

  return ReactDOM.createPortal(
    <div className={styles.modal} ref={ref}>
      <h2 className={styles.title}>{props.title}</h2>
      <PostContent previewLink={props.previewLink} />
      <CommentForm userName={props.userName} postId={props.postId} />
      <LoaderComments />
      <CommentList postData={postData} postId={props.postId} />
    </div>,
    node
  );
}
