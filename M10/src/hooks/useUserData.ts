import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux';
import { userRequestAsync } from '../redux/userReducer';

export interface IUserData {
  name?: string;
  iconImg?: string;
}

interface IUseUserData {
  data: IUserData;
  loading: boolean;
}

export function useUserData(): IUseUserData {
  const data = useSelector<RootState, IUserData>(
    (state) => state.userReducer.data
  );
  const loading = useSelector<RootState, boolean>(
    (state) => state.userReducer.loading
  );
  const token = useSelector<RootState, string>(
    (state) => state.tokenReducer.token
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (token && token.length > 0 && token !== 'undefined') {
      dispatch(userRequestAsync());
    }
  }, [token]);

  return { data, loading };
}
