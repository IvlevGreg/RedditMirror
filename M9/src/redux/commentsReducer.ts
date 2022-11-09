// import { Reducer } from 'redux';
// import {
//   COMMENTS_LOAD,
//   COMMENT_CREATE,
//   COMMENT_DELETE,
//   COMMENT_UPDATE,
//   RootCommentsState,
// } from './types';

// const initialState: RootCommentsState = {
//   comments: [
//     {
//       text: '',
//       id: '',
//     },
//   ],
// };

// export const commentsReducer: Reducer<RootCommentsState> = (
//   state = initialState,
//   action
// ) => {
//   switch (action.type) {
//     case COMMENT_CREATE:
//       return {
//         ...state,
//         comments: [...state.comments, action.data],
//       };

//     case COMMENTS_LOAD:
//       const commentsNew = action.data.map(
//         (res: { name: string; id: string }) => {
//           return {
//             text: res.name,
//             id: res.id,
//           };
//         }
//       );
//       return {
//         ...state,
//         comments: commentsNew,
//       };

//     case COMMENT_UPDATE:
//       const { data } = action;
//       const { comments } = state;
//       const itemIndex = comments.findIndex((res) => res.id === data.id);

//       const nextComments = [
//         ...comments.slice(0, itemIndex),
//         data,
//         ...comments.slice(itemIndex + 1),
//       ];

//       return {
//         ...state,
//         comments: nextComments,
//       };

//     // case COMMENT_DELETE:
//     //   return (() => {
//     //     const { id } = action;
//     //     const { comments } = state;
//     //     const itemIndex = comments.findIndex((res) => res.id === id);

//     //     const nextComments = [
//     //       ...comments.slice(0, itemIndex),
//     //       ...comments.slice(itemIndex + 1),
//     //     ];

//     //     return {
//     //       ...state,
//     //       comments: nextComments,
//     //     };
//     //   })();

//     default:
//       return state;
//   }
// };

import { ActionCreator, AnyAction, Reducer } from 'redux';
import { COMMENT_CREATE, RootCommentsState } from './types';

const UPDATE_COMMENT = 'UPDATE_COMMENT';
const CREATE_COMMENT = 'CREATE_COMMENT';

export const updateComment = (commentText: string, id: string) => ({
  type: UPDATE_COMMENT,
  commentText,
  id,
});

export const createComment = (commentText: string, id: string) => ({
  type: CREATE_COMMENT,
  commentText,
  id,
});

type RootCommentsAction = {
  type: string;
  data: {
    commentText: string;
    id: string;
  };
};

const initialState: RootCommentsState = {
  comments: [
    {
      commentText: '',
      id: '1',
    },
  ],
};

export const commentsReducer: Reducer<RootCommentsState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case COMMENT_CREATE:
      return (() => {
        // const { data } = action;
        const { data } = action;
        const { comments } = state;
        const nextComments = [...comments.slice(), data];
        return { ...state, comments: nextComments };
      })();
    // return {
    //   ...state,
    //   comments: [...state.comments],
    // };

    case UPDATE_COMMENT:
      const { comments } = state;
      console.log(action.id);
      const itemIndex = comments.findIndex((res) => {
        console.log(res.id);
        return res.id === action.id;
      });
      console.log(itemIndex);
      const nextComments = [
        ...comments.slice(0, itemIndex),
        { commentText: action.commentText, id: action.id },
        ...comments.slice(itemIndex + 1),
      ];
      return { ...state, comments: nextComments };

    default:
      return state;
  }
};
