import { UPDATE_COMMENT } from './commentsReducer';

export const updateComment = (commentText: string, id: string) => ({
  type: UPDATE_COMMENT,
  commentText,
  id,
});
