import React, { ChangeEvent, FormEvent, useEffect, useRef } from 'react';
import { atom, useRecoilState, useSetRecoilState } from 'recoil';
import { textState } from '../../recoil';

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
  const [commentsArray, setCommentsArray] = useRecoilState(textState);

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

  const userNameTemplate = userName ? `${userName},` : '';

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    updateCommentsArray(commentsArray, postId, userNameTemplate);
    onClose();
  }

  function handleCommentClick(e: FormEvent) {
    alert(
      `Вы оставили комментарий: '${getCommentText(commentsArray, postId)}'`
    );
  }

  interface Comments {
    id: string;
    commentText: string;
  }

  function updateCommentsArray(
    prev: Array<Comments>,
    id: string,
    text: string
  ) {
    const itemIndex = prev.findIndex((res) => res.id === id);
    if (itemIndex === -1) {
      const nextComments = [...prev, { commentText: text, id: id }];
      setCommentsArray(nextComments);
    } else {
      const nextComments = [
        ...prev.slice(0, itemIndex),
        { commentText: text, id: id },
        ...prev.slice(itemIndex + 1),
      ];
      setCommentsArray(nextComments);
    }
    console.log(commentsArray);
  }

  function getCommentText(arr: Array<Comments>, id: string): string {
    const itemIndex = arr.findIndex((res) => res.id === id);

    return itemIndex === -1 ? userNameTemplate : arr[itemIndex].commentText;
  }

  const onChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    updateCommentsArray(commentsArray, postId, event.target.value);
  };

  return (
    <form action="" className={styles.form} onSubmit={handleSubmit}>
      <textarea
        ref={textAreaRef}
        value={getCommentText(commentsArray, postId)}
        onChange={onChange}
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
