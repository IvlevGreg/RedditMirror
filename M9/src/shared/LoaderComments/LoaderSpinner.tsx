import { useSelector } from 'react-redux';
import { Comment } from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import styles from './loaderspinner.css';
import React from 'react';
import { RootState } from '../../redux';

export function LoaderSpinner() {
  const spinner = useSelector<RootState, boolean>(
    (state) => state.appReducer.loading
  );

  return (
    <div className={styles.loaderStyles}>
      <Comment
        visible={true}
        height="80"
        width="80"
        ariaLabel="comment-loading"
        wrapperStyle={{}}
        wrapperClass="comment-wrapper"
        color="#fff"
        backgroundColor="#F4442E"
      />
    </div>
  );
}
