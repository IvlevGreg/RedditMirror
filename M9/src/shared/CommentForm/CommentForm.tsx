import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { RootState } from '../../redux/types';
import { updateComment } from '../../redux/actions';

import { CommentAdditionalButtons } from './CommentAdditionalButtons';
import styles from './commentform.css';

interface IcommentForm {
  userName?: string;
}

export function CommentForm({ userName }: IcommentForm) {
  const value = useSelector<RootState, string>(
    (state) => state.commentsReducer.commentText
  );
  const dispatch = useDispatch();

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    dispatch(updateComment(event.target.value));
  }

  // if (userName) {
  //   console.log('111');
  //   dispatch(updateComment(`${userName},`));
  // }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    // console.log(ref.current?.value);
  }

  return (
    <form action="" className={styles.form} onSubmit={handleSubmit}>
      <textarea
        // ref={ref}
        value={value}
        onChange={handleChange}
        // name=""
        // id=""
        // cols="30"
        // rows="10"
        className={styles.input}
      ></textarea>
      <div className={styles.buttonsContainer}>
        <CommentAdditionalButtons />
        <button className={styles.button}>Комментировать</button>
      </div>
    </form>
  );
}
