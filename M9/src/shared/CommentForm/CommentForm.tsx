import React, {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { RootState } from '../../redux/types';
import { commentCreate, commentUpdate } from '../../redux/actions';

import { CommentAdditionalButtons } from './CommentAdditionalButtons';
import styles from './commentform.css';

interface IcommentForm {
  userName?: string;
  postId: string;
}

export function CommentForm({ userName = '', postId }: IcommentForm) {
  const [commentText, setCommentText] = useState(userName);

  // const value = useSelector<RootState, string>(
  //   (state) => state.commentsReducer.commentText
  // );
  const dispatch = useDispatch();

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setCommentText(e.target.value);
  }

  // if (userName) {
  //   console.log('111');
  //   dispatch(updateComment(`${userName},`));
  // }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    dispatch(commentCreate(commentText, postId));
  }

  function handleCommentClick() {
    console.log(`comment:  ${commentText}`);
    setCommentText('');
  }

  useEffect(() => {
    dispatch(dispatch(commentUpdate(`${userName},`, postId)));
  }, []);

  return (
    <form action="" className={styles.form} onSubmit={handleSubmit}>
      <textarea
        // ref={ref}
        value={commentText}
        onChange={handleChange}
        // name=""
        // id=""
        // cols="30"
        // rows="10"
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
