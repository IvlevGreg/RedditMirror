import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { usePostData } from '../../hooks/usePostData';
import { usePostEffect } from '../../hooks/usePostEffect';
import { CommentForm } from '../CommentForm';
import styles from './post.css';

export interface IPost {
  postId: string;
  onClose?: () => void;
}

export function Post(props: IPost) {
  const [ref] = usePostEffect(props);
  const [data] = usePostData(props.postId);
  console.log(data);

  const node = document.getElementById('modal_root');
  if (!node) return null;

  return ReactDOM.createPortal(
    <div className={styles.modal} ref={ref}>
      <h2>Заголовок</h2>
      <div className={styles.content}>
        <p>Абзац</p>
        <p>Абзац</p>
        <p>Абзац</p>
      </div>
      <CommentForm />
    </div>,
    node
  );
}
