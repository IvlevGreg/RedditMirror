import { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { tokenContext } from '../shared/context/tokenContext';
import { RootState } from '../redux';
import { useSelector } from 'react-redux';

interface IUserData {
  name?: string;
  iconImg?: string;
}
export function useUserData(): [IUserData] {
  const [data, setData] = useState<IUserData>({});
  // const token = useContext(tokenContext);

  const token = useSelector<RootState, string>(
    (state) => state.tokenReducer.token
  );

  useEffect(() => {
    if (token && token.length > 0 && token !== 'undefined') {
      axios
        .get('https://oauth.reddit.com/api/v1/me.json', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((resp) => {
          console.log(token);
          const userData = resp.data;
          console.log(resp.data);
          setData({ name: userData.name, iconImg: userData.icon_img });
        })
        .catch((err) => {
          console.log(token);

          console.log(err);
        });
    }
  }, [token]);

  return [data];
}
