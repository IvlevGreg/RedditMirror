import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux';
import { tokenRequestAsync } from '../redux/tokenReducer';
import { userRequestAsync } from '../redux/userReducer';

export function useToken() {
  const token = useSelector<RootState, string>(
    (state) => state.tokenReducer.token
  );
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(token);
    dispatch(tokenRequestAsync());
  }, []);

  return [token];
}
