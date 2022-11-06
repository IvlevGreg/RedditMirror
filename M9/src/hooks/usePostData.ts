import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { tokenContext } from '../shared/context/tokenContext';

export type ICommentData = {
  data: {
    children: [
      {
        data: {
          author: string;
          body?: string;
          id: string;
          created: number;
          replies?: {
            data: {
              children: Array<ICommentData>;
            };
          };
        };
      }
    ];
  };
};
export type ICommentsData = ICommentData;

// const FirstLoadArray: ICommentsData = [
//   {
//     data: {
//       //for UserLink
//       subreddit: 'Дмитрий Гришин',
//       sr_detail: {
//         icon_img: 'https://i.postimg.cc/Z5Y04X9k/Ellipse-1.png',
//       },
//       //for MetaData
//       created: 1666977358,
//       //for Title
//       title: 'Следует отметить, что новая модель организационной',
//       permalink: '#post-url',
//       // for Preview
//       url: 'https://i.postimg.cc/NLvtL2GC/Rectangle-14.jpg',
//       // for card
//       id: '123',
//     },
//   },
// ];

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
  });
  const token = useContext(tokenContext);

  useEffect(() => {
    axios
      .get(`https://api.reddit.com/r/${userName}/comments/${postId}`)
      .then((resp) => {
        const postsList = resp.data[1];
        console.log(postsList);
        setData(postsList);
      })
      .catch(console.log);
  }, [token]);

  return [data];
}
