import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import { useNavigate } from 'react-router-dom';

import { CommentForm } from '../CommentForm';
import { PostContent } from './CommentList/Comment/PostContent';
import { CommentList } from './CommentList';
import { LoaderComments } from '../LoaderComments';

import styles from './post.css';
import { usePostData } from '../../hooks/usePostData';
import { useParams } from 'react-router-dom';
import { LoaderSpinner } from '../LoaderSpinner';
import { CommentAdditionalButtons } from '../CommentForm/CommentAdditionalButtons';

export function Post() {
  const navigate = useNavigate();

  let { id } = useParams<string>();
  if (!id) return null;

  const { postData, commentsData } = usePostData(id);
  const [isSpinner, setIsSpinner] = useState<boolean>(true);

  useEffect(() => {
    if (postData.subreddit) setIsSpinner(false);
  }, [postData]);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !ref.current?.contains(event.target)
      ) {
        navigate('/posts');
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [postData]);

  const node = document.getElementById('modal_root');
  if (!node) return null;

  return ReactDOM.createPortal(
    // ref={ref}
    <div className={styles.modal} ref={ref}>
      <h2 className={styles.title}>{postData.title}</h2>
      <div className={styles.spinnerContainer}>
        <LoaderSpinner visibleSpinner={isSpinner} />
      </div>
      <PostContent previewLink={postData.url} />
      <CommentForm userName={postData.subreddit} postId={id} />
      <LoaderComments />
      <CommentList postData={commentsData} postId={id} />
    </div>,
    node
  );
}
