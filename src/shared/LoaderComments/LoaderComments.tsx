import { useSelector } from 'react-redux';
import { Comment } from 'react-loader-spinner';
import styles from './loadercomments.css';
import React from 'react';
import { RootState } from '../../redux';

export function LoaderComments() {
  const commentsLoader = useSelector<RootState, boolean>(
    (state) => state.commentsLoaderReducer.loading
  );

  return (
    <div className={styles.loaderStyles}>
      <Comment
        visible={commentsLoader}
        height="120"
        width="120"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        color="#fff"
        backgroundColor="#CC6633"
      />
    </div>
  );
}
