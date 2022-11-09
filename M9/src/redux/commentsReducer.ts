import { Reducer } from 'redux';
import {
  COMMENTS_LOAD,
  COMMENT_CREATE,
  COMMENT_DELETE,
  COMMENT_UPDATE,
  RootCommentsState,
} from './types';

const initialState: RootCommentsState = {
  comments: [
    {
      text: '',
      id: '',
    },
  ],
};

type RootCommentsActionState = {
  type: string;
  data: [
    {
      name: string;
      id: string;
    }
  ];
};

export const commentsReducer: Reducer<RootCommentsState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case COMMENT_CREATE:
      return {
        ...state,
        comments: [...state.comments, action.data],
      };

    case COMMENTS_LOAD:
      const commentsNew = action.data.map(
        (res: { name: string; id: string }) => {
          return {
            text: res.name,
            id: res.id,
          };
        }
      );
      return {
        ...state,
        comments: commentsNew,
      };

    case COMMENT_UPDATE:
      const { data } = action;
      const { comments } = state;
      const itemIndex = comments.findIndex((res) => res.id === data.id);

      const nextComments = [
        ...comments.slice(0, itemIndex),
        data,
        ...comments.slice(itemIndex + 1),
      ];

      return {
        ...state,
        comments: nextComments,
      };

    // case COMMENT_DELETE:
    //   return (() => {
    //     const { id } = action;
    //     const { comments } = state;
    //     const itemIndex = comments.findIndex((res) => res.id === id);

    //     const nextComments = [
    //       ...comments.slice(0, itemIndex),
    //       ...comments.slice(itemIndex + 1),
    //     ];

    //     return {
    //       ...state,
    //       comments: nextComments,
    //     };
    //   })();

    default:
      return state;
  }
};
