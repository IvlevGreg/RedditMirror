import React, { useEffect, useRef, useState } from 'react';
import { IPostData, IPostsData, usePostsData } from '../../hooks/usePostsData';
import { getPublishedTimeFromNow } from '../../modules';
import { Card } from './Card/Card';
import styles from './cardslist.css';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { LoaderSpinner } from '../LoaderSpinner';

export function CardsList() {
  const [nextAfter, setNextAfter] = useState<string>('');
  const { data, after } = usePostsData(nextAfter);
  const [postsData, setPostsData] = useState<IPostsData>([]);

  useEffect(() => {
    setPostsData((prevChildren) => prevChildren.concat(data));
  }, [data]);

  const spinner = useSelector<RootState, boolean>(
    (state) => state.appReducer.loading
  );
  const isError = useSelector<RootState, boolean>(
    (state) => state.appReducer.isError
  );
  const error = useSelector<RootState, null | Error>(
    (state) => state.appReducer.error
  );

  const bottomOfList = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // if (entries[0].isIntersecting) return;
        console.log('111');
        const { data, after } = usePostsData(nextAfter);
        setNextAfter(after);
      },
      {
        rootMargin: '100px',
      }
    );
    if (bottomOfList.current) {
      observer.observe(bottomOfList.current);
    }
    return () => {
      if (bottomOfList.current) {
        observer.unobserve(bottomOfList.current);
      }
    };
  }, [bottomOfList.current, nextAfter]);

  return (
    <>
      <LoaderSpinner />
      {error && (
        <p
          className={styles.errorLoading}
        >{`Упс... ${error.name}: ${error.message}`}</p>
      )}
      <ul className={styles.cardsList}>
        {postsData.map((card: IPostData): JSX.Element => {
          return (
            <Card
              key={card.data.id}
              postId={card.data.id}
              imgLink={
                card.data.sr_detail.icon_img !== '' &&
                card.data.sr_detail.icon_img !== undefined
                  ? card.data.sr_detail.icon_img
                  : 'https://imageup.ru/img211/4055371/pngwingcom.png'
              }
              userName={card.data.subreddit}
              publishedDate={getPublishedTimeFromNow(card.data.created)}
              title={card.data.title}
              postPermaLink={card.data.permalink}
              previewLink={card.data.url}
              karmaValue={card.data.score}
            />
          );
        })}
      </ul>
      <div ref={bottomOfList} />
    </>
  );
}
