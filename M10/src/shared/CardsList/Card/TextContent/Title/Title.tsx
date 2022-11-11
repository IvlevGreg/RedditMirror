import React, { useState } from 'react';
import { Post } from '../../../../Post';
import styles from './title.css';

interface ITitle {
  postId: string;
  title: string;
  userName: string;
  postPermaLink: string;
  previewLink: string;
}

export function Title({
  postId,
  title,
  postPermaLink,
  userName,
  previewLink,
}: ITitle) {
  const URL_PERMA_LINK_PREFIX = 'https://www.reddit.com/';

  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <h2 className={styles.title}>
      <button
        // target="_blank"
        // href={URL_PERMA_LINK_PREFIX + postPermaLink}
        className={styles.postLink}
        onClick={() => {
          setIsModalOpen(!isModalOpen);

          isModalOpen
            ? (document.body.style.overflow = 'initial')
            : (document.body.style.overflow = 'hidden');
        }}
      >
        {title}
      </button>

      {isModalOpen && (
        <Post
          postId={postId}
          userName={userName}
          title={title}
          previewLink={previewLink}
          onClose={() => {
            document.body.style.overflow = 'initial';
            setIsModalOpen(false);
          }}
        />
      )}
    </h2>
  );
}
