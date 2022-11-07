import React from 'react';
import styles from './postcontent.css';

interface IPostContent {
  previewLink: string;
}

const PREVIEW_LINK_SAMPLE =
  'https://siri-cdn.appadvice.com/wp-content/appadvice-v2-media/2016/11/nqyB2SI_714d31b83beb69928132796f3f4d818f-m.jpg';

export function PostContent({ previewLink }: IPostContent) {
  const getPreviewLink = (previewLink: string): string => {
    return previewLink.includes('.png') ||
      previewLink.includes('.jpg') ||
      previewLink.includes('.jpeg')
      ? previewLink
      : PREVIEW_LINK_SAMPLE;
  };
  return (
    <div className={styles.postContent}>
      <img
        src={getPreviewLink(previewLink)}
        alt="preview"
        className={styles.postContentImg}
      />
    </div>
  );
}
