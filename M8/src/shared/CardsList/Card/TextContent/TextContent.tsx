import React from 'react';
import { MetaData } from './MetaData';
import styles from './textcontent.css';
import { Title } from './Title';

interface ITextContent {
  imgLink: string;
  userName: string;
  publishedDate: string;
  title: string;
  postPermaLink: string;
}

export function TextContent({
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
      <Title title={title} postPermaLink={postPermaLink} />
    </div>
  );
}
