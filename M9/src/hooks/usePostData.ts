import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { tokenContext } from '../shared/context/tokenContext';

// export type IPostData = {
//   data: {
//     subreddit: string;
//     sr_detail: {
//       icon_img: string;
//     };
//     created: number;
//     title: string;
//     permalink: string;
//     url: string;
//     id: string;
//   };
// };
// type IPostsData = Array<IPostData>;

// const FirstLoadArray: IPostsData = [
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
// `https://oauth.reddit.com/${subreddit}/comments/${postId}`

export function usePostData(postId: string) {
  const [data, setData] = useState();
  const token = useContext(tokenContext);

  useEffect(() => {
    axios
      .get(`https://oauth.reddit.com/r/meirl/comments/yipt7s`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        const postsList = resp.data.data.children;
        console.log(postsList);
        setData(postsList);
      })
      .catch(console.log);
  }, [token]);

  return [data];
}
