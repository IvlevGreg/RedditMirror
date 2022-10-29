import React from 'react';
import { IPostData, usePostsData } from '../../hooks/usePostsData';
import { Card } from './Card/Card';
import styles from './cardslist.css';
import moment from 'moment';
import 'moment/locale/ru';

export function CardsList() {
  const [data] = usePostsData();
  // console.log(data);
  function getPublishedTimeFromNow(): string {
    moment.locale('ru');
    return moment(String(data[0].data.created), 'X').fromNow();
  }

  return (
    <ul className={styles.cardsList}>
      {data.map((card: IPostData): JSX.Element => {
        return (
          <Card
            imgLink={card.data.sr_detail.icon_img}
            userName={card.data.subreddit}
            publishedDate={getPublishedTimeFromNow()}
            title={card.data.title}
            postPermaLink={card.data.permalink}
            previewLink={card.data.url}
          />
        );
      })}
    </ul>
  );
}
