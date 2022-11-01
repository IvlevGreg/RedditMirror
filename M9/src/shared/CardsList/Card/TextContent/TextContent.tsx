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
}

export function TextContent({
  postId,
  imgLink,
  userName,
  publishedDate,
  title,
  postPermaLink,
}: ITextContent) {
  return (
    <div className={styles.textContent}>
      <MetaData
        imgLink={imgLink}
        userName={userName}
        publishedDate={publishedDate}
      />
      <Title postId={postId} title={title} postPermaLink={postPermaLink} />
    </div>
  );
}
