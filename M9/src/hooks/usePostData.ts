import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { tokenContext } from '../shared/context/tokenContext';
import { useDispatch } from 'react-redux';
import { loaderCommentsOff, loaderCommentsOn } from '../redux/actions';

export type ICommentData = {
  data: {
    children: [
      {
        data: {
          author: string;
          body?: string;
          id: string;
          created: number;
          replies?: ICommentData;
        };
      }
    ];
  };
  kind: string;
};
export type ICommentsData = ICommentData;

export function usePostData(postId: string, userName: string) {
  const [data, setData] = useState<ICommentsData>({
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
  const token = useContext(tokenContext);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loaderCommentsOn());
    axios
      .get(`https://api.reddit.com/r/${userName}/comments/${postId}`)
      .then((resp) => {
        const postsList = resp.data[1];
        console.log(postsList);
        setData(postsList);
        dispatch(loaderCommentsOff());
      })
      .catch(console.log);
  }, [token]);

  return [data];
}
