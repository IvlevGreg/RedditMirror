import React from 'react';
import styles from './title.css';

interface ITitle {
  title: string;
  postPermaLink: string;
}

const URL_PERMA_LINK_PREFIX = 'https://www.reddit.com/';

export function Title({ title, postPermaLink }: ITitle) {
  return (
    <h2 className={styles.title}>
      <a
        target="_blank"
        href={URL_PERMA_LINK_PREFIX + postPermaLink}
        className={styles.postLink}
      >
        {title}
      </a>
    </h2>
  );
}
