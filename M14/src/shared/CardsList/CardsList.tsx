import React, { useEffect, useRef, useState } from 'react';
import { IPostData, IPostsData, usePostsData } from '../../hooks/usePostsData';
import { getPublishedTimeFromNow } from '../../modules';
import { Card } from './Card/Card';
import styles from './cardslist.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux';
import { LoaderSpinner } from '../LoaderSpinner';
import axios from 'axios';
import {
  loaderAppOff,
  loaderAppOn,
  loaderErrorOn,
} from '../../redux/appReducer';
import { concat } from '../../../webpack.config';
import { Outlet } from 'react-router-dom';

export function CardsList() {
  const [nextAfter, setNextAfter] = useState<string>('');
  const [loadAmount, setLoadAmount] = useState<number>(1);

  const [postsData, setPostsData] = useState<IPostsData>([]);
  const token = useSelector<RootState, string>(
    (state) => state.tokenReducer.token
  );

  const spinner = useSelector<RootState, boolean>(
    (state) => state.appReducer.loading
  );

  const error = useSelector<RootState, null | Error>(
    (state) => state.appReducer.error
  );

  const bottomOfList = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();

  async function load(currentAfter: string) {
    dispatch(loaderAppOn());
    try {
      const resp = await axios.get(
        'https://oauth.reddit.com/best.json?sr_detail=true',
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            limit: 13,
            after: currentAfter,
          },
        }
      );

      const postsList = resp.data.data.children;
      setNextAfter(resp.data.data.after);
      setPostsData((prevChildren) => prevChildren.concat(...postsList));
    } catch (err) {
      dispatch(loaderErrorOn(err as Error));

      console.log(err);
    }
    dispatch(loaderAppOff());
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !spinner && loadAmount % 4 !== 0) {
          load(nextAfter);
          setLoadAmount(loadAmount + 1);
        }
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
  }, [nextAfter, spinner, loadAmount]);

  return (
    <>
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
        <LoaderSpinner visibleSpinner={spinner} />

        {error && (
          <p
            className={styles.errorLoading}
          >{`Упс... ${error.name}: ${error.message}`}</p>
        )}
        {loadAmount % 4 === 0 && !spinner && (
          <button
            className={styles.buttonMore}
            onClick={() => setLoadAmount(1)}
          >
            Показать еще
          </button>
        )}
      </ul>
      <div ref={bottomOfList} />
      <Outlet />
    </>
  );
}
