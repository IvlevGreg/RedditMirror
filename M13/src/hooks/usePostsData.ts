import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { tokenContext } from '../shared/context/tokenContext';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux';
import { loaderAppOff, loaderErrorOn } from '../redux/appReducer';

export type IPostData = {
  data: {
    subreddit: string;
    sr_detail: {
      icon_img: string;
    };
    created: number;
    title: string;
    permalink: string;
    url: string;
    id: string;
    score: number;
  };
};
export type IPostsData = Array<IPostData>;

const FirstLoadArray: IPostsData = [
  {
    data: {
      //for UserLink
      subreddit: 'Дмитрий Гришин',
      sr_detail: {
        icon_img: 'https://i.postimg.cc/Z5Y04X9k/Ellipse-1.png',
      },
      //for MetaData
      created: 1666977358,

      //for Title
      title: 'Следует отметить, что новая модель организационной',
      permalink: '#post-url',
      // for Preview
      url: 'https://i.postimg.cc/NLvtL2GC/Rectangle-14.jpg',
      // for card
      id: '123',
      // KarmaCounter
      score: 150,
    },
  },
];

interface IUsePostsData {
  data: IPostsData;
  after: string;
}

export function usePostsData(previousAfter: string): IUsePostsData {
  const [data, setData] = useState<IPostsData>([]);
  const [after, setAfter] = useState<string>('');

  const dispatch = useDispatch();
  const token = useSelector<RootState, string>(
    (state) => state.tokenReducer.token
  );

  useEffect(() => {
    axios
      .get('https://oauth.reddit.com/best.json?sr_detail=true', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          after: previousAfter,
        },
      })
      .then((resp) => {
        const postsList = resp.data.data.children;
        // console.log(resp.data.data.after);
        setData(postsList);
        dispatch(loaderAppOff());
      })
      .catch((err) => {
        dispatch(loaderAppOff());
        dispatch(loaderErrorOn(err));

        console.log('error');
        console.log(err);
      });
  }, []);

  return { data, after };
}
