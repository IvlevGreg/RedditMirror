import React from 'react';
import styles from './card.css';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';

interface ICard {
  imgLink: string;
  userName: string;
  publishedDate: string;
  title: string;
  postPermaLink: string;
  previewLink: string;
}

export function Card({
  imgLink,
  userName,
  publishedDate,
  title,
  postPermaLink,
  previewLink,
}: ICard) {
  return (
    <li className={styles.card}>
      <TextContent
        imgLink={imgLink}
        userName={userName}
        publishedDate={publishedDate}
        title={title}
        postPermaLink={postPermaLink}
      />
      <Preview previewLink={previewLink} />
      <Menu />
      <Controls />
    </li>
  );
}
