import React from 'react';
import { IPostData, usePostsData } from '../../hooks/usePostsData';
import { getPublishedTimeFromNow } from '../../modules';
import { Card } from './Card/Card';
import styles from './cardslist.css';

export function CardsList() {
  const [data] = usePostsData();

  return (
    <ul className={styles.cardsList}>
      {data.map((card: IPostData): JSX.Element => {
        return (
          <Card
            key={card.data.id}
            postId={card.data.id}
            imgLink={
              card.data.sr_detail.icon_img
              // !== '' &&
              // card.data.sr_detail.icon_img !== undefined
              //   ? card.data.sr_detail.icon_img
              //   : 'https://imageup.ru/img211/4055371/pngwingcom.png'
            }
            userName={card.data.subreddit}
            publishedDate={getPublishedTimeFromNow(card.data.created)}
            title={card.data.title}
            postPermaLink={card.data.permalink}
            previewLink={card.data.url}
          />
        );
      })}
    </ul>
  );
}
