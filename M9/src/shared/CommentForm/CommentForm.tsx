import React, { ChangeEvent, FormEvent, useContext, useState } from 'react';
import { commentContext } from '../context/commentContext';
import { CommentAdditionalButtons } from './CommentAdditionalButtons';
import styles from './commentform.css';

export function CommentForm() {
  // const ref = useRef<HTMLTextAreaElement>(null);
  const { value, onChange } = useContext(commentContext);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }

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
