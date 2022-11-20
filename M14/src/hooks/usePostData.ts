import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { tokenContext } from '../shared/context/tokenContext';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux';
import {
  loaderCommentsOn,
  loaderCommentsOff,
} from '../redux/commentsLoaderReducer';
import { ICommentsData } from './usePostCommentData';

export type IPostData = {
  id: string;
  // userName
  subreddit: string;
  //
  title: string;
  //
  url: string;
};

export function usePostData(postId: string) {
  const [postData, setPostData] = useState<IPostData>({
    id: '',
    subreddit: '',
    title: '',
    url: '',
  });

  const [commentsData, setCommentsData] = useState<ICommentsData>({
    data: {
      children: [
        {
          data: {
            author: 'string',
            id: '1',
            created: 1667637204,
          },
        },
      ],
    },
    kind: 'Listining',
  });

  // const token = useContext(tokenContext);
  const dispatch = useDispatch();

  const token = useSelector<RootState, string>(
    (state) => state.tokenReducer.token
  );

  useEffect(() => {
    if (!postData.subreddit) {
      axios
        .get(`https://api.reddit.com/by_id/t3_${postId}`)
        .then((resp) => {
          const postData = resp.data.data.children[0].data;
          setPostData(postData);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    //

    if (!postData.subreddit) return;
    dispatch(loaderCommentsOn());
    axios
      .get(`https://api.reddit.com/r/${postData.subreddit}/comments/${postId}`)
      .then((resp) => {
        const postsList = resp.data[1];
        setCommentsData(postsList);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        dispatch(loaderCommentsOff());
      });
  }, [token, postData]);

  return { postData, commentsData };
}
