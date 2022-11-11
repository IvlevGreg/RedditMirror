import React from 'react';
import { MetaData } from './MetaData';
import styles from './textcontent.css';
import { Title } from './Title';

interface ITextContent {
  postId: string;
  imgLink: string;
  userName: string;
  publishedDate: string;
  title: string;
  postPermaLink: string;
  previewLink: string;
}

export function TextContent({
  postId,
  imgLink,
  userName,
  publishedDate,
  title,
  postPermaLink,
  previewLink,
}: ITextContent) {
  return (
    <div className={styles.textContent}>
      <MetaData
        imgLink={imgLink}
        userName={userName}
        publishedDate={publishedDate}
      />
      <Title
        postId={postId}
        title={title}
        userName={userName}
        postPermaLink={postPermaLink}
        previewLink={previewLink}
      />
    </div>
  );
}
