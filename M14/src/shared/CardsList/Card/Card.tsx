import React, { useState } from 'react';
import styles from './card.css';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { TextContent } from './TextContent';
import { Link, Route, Routes } from 'react-router-dom';
import { Post } from '../../Post';

interface ICard {
  postId: string;
  imgLink: string;
  userName: string;
  publishedDate: string;
  title: string;
  postPermaLink: string;
  previewLink: string;
  karmaValue: number;
}

export function Card({
  postId,
  imgLink,
  userName,
  publishedDate,
  title,
  postPermaLink,
  previewLink,
  karmaValue,
}: ICard) {
  return (
    <li className={styles.card}>
      <TextContent
        postId={postId}
        imgLink={imgLink}
        userName={userName}
        publishedDate={publishedDate}
        title={title}
        postPermaLink={postPermaLink}
        previewLink={previewLink}
      />
      <Preview previewLink={previewLink} />

      <Menu />
      <Controls karmaValue={karmaValue} />

      {/* <Routes>
        <Route
          path={`/post/:id`}
          element={
            <Post
              postId={postId}
              userName={userName}
              title={title}
              previewLink={previewLink}
              onClose={() => {
                document.body.style.overflow = 'initial';
                // setIsModalOpen(false);
              }}
            />
          }
        />
      </Routes> */}
    </li>
  );
}
