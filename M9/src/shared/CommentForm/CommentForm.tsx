import React, {
  ChangeEvent,
  FormEvent,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { RootState } from '../../redux/types';
import { createComment, updateComment } from '../../redux';

import { CommentAdditionalButtons } from './CommentAdditionalButtons';
import styles from './commentform.css';

interface IcommentForm {
  userName: string;
  postId: string;
}

export function CommentForm({ userName, postId }: IcommentForm) {
  // const [commentText, setCommentText] = useState(userName);

  const dispatch = useDispatch();
  // dispatch(createComment(`${userName},`, postId));

  const value = useSelector<RootState, string>((state) => {
    const itemIndex = state.commentsReducer.comments.findIndex(
      (res) => res.id === postId
    );
    console.log(itemIndex);
    if (itemIndex === -1) {
      console.log(`${userName},`);

      // dispatch(createComment(`${userName},`, postId));
      return `${userName},`;
    }
    return state.commentsReducer.comments[itemIndex].commentText;
  });
  console.log('value');
  console.log(value);

  function handleChange(e: ChangeEvent<HTMLTextAreaElement>) {
    // console.log(postId);
    dispatch(updateComment(e.target.value, postId));
  }

  // if (userName) {
  //   console.log('111');
  //   dispatch(updateComment(`${userName},`));
  // }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // dispatch(commentCreate(commentText, postId));
  }

  function handleCommentClick() {
    // console.log(`comment:  ${commentText}`);
    // setCommentText('');
  }

  // useEffect(() => {
  //   dispatch(dispatch(commentUpdate(`${userName},`)));
  // }, []);

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
        <button className={styles.button} onClick={handleCommentClick}>
          Комментировать
        </button>
      </div>
    </form>
  );
}
