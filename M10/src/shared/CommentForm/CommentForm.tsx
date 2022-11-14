import React, { ChangeEvent, FormEvent, useEffect, useRef } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { RootState } from '../../redux';
import { updateComment } from '../../redux/commentsReducer';

import { CommentAdditionalButtons } from './CommentAdditionalButtons';
import styles from './commentform.css';

interface IcommentForm {
  userName: string;
  postId: string;
  onClose?: () => void;
}
const NOOP = () => {};

export function CommentForm({
  userName,
  postId,
  onClose = NOOP,
}: IcommentForm) {
  const dispatch = useDispatch();

  const value = useSelector<RootState, string>((state) => {
    const itemIndex = state.commentsReducer.comments.findIndex(
      (res) => res.id === postId
    );
    if (itemIndex === -1) {
      dispatch(updateComment(`${userName},`, postId));
      return `${userName},`;
    }
    return state.commentsReducer.comments[itemIndex].commentText;
  });

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(e.target.value, postId));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    dispatch(updateComment(`${userName},`, postId));
    onClose();
  }

  function handleCommentClick(e: FormEvent) {
    alert(`Вы оставили комментарий: '${value}'`);
  }

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, []);

  function moveCaretAtEnd(e: { target: { value: string } }) {
    const temp_value = e.target.value;
    e.target.value = '';
    e.target.value = temp_value;
  }

  return (
    <form action="" className={styles.form} onSubmit={handleSubmit}>
      <textarea
        ref={textAreaRef}
        value={value}
        onChange={handleChange}
        // name=""
        // id=""
        // cols="30"
        // rows="10"
        onFocus={moveCaretAtEnd}
        className={styles.input}
      ></textarea>
      <div className={styles.buttonsContainer}>
        <CommentAdditionalButtons />
        <button className={styles.button} onClick={handleCommentClick}>
          Комментировать
        </button>
      </div>
    </form>
  );
}
