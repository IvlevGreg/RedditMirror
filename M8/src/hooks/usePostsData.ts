import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { tokenContext } from '../shared/context/tokenContext';

interface IUserData {
  name?: string;
  iconImg?: string;
}
export function usePostsData(): [IUserData] {
  const [data, setData] = useState<IUserData>({});
  const token = useContext(tokenContext);

  useEffect(() => {
    axios
      .get('https://oauth.reddit.com/best', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        // console.log(resp);
        // const userData = resp.data;
        console.log(resp);
        // setData(resp);
      })
      .catch(console.log);
  }, [token]);

  return [data];
}
