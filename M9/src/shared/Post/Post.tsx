import React from 'react';
import ReactDOM from 'react-dom';
import { usePostData, ICommentData } from '../../hooks/usePostData';
import { usePostEffect } from '../../hooks/usePostEffect';
import { getPublishedTimeFromNow } from '../../modules';
import { CommentForm } from '../CommentForm';
import { Comment } from './Comment';
import { PostContent } from './Comment/PostContent';
import { CommentList } from './CommentList';

import styles from './post.css';

export interface IPost {
  postId: string;
  userName: string;
  title: string;
  previewLink: string;
  onClose?: () => void;
}

export function Post(props: IPost) {
  const [ref] = usePostEffect(props);
  const [postData] = usePostData(props.postId, props.userName);

  const node = document.getElementById('modal_root');
  if (!node) return null;

  function commentCreate(postData: ICommentData): (JSX.Element | null)[] {
    return postData.data.children.map((comment): JSX.Element | null => {
      if (comment.data.body) {
        return (
          <Comment
            key={comment.data.id}
            author={comment.data.author}
            body={comment.data.body}
            publishedDate={getPublishedTimeFromNow(comment.data.created)}
          />
        );
      } else {
        return null;
      }
    });
  }

  return ReactDOM.createPortal(
    <div className={styles.modal} ref={ref}>
      <h2 className={styles.title}>{props.title}</h2>
      <PostContent previewLink={props.previewLink} />
      <CommentForm />
      {/* {data.map((tree): (JSX.Element | null)[] => {
        return tree.data.children.map((comment): JSX.Element | null => {
          if (comment.data.body) {
            return (
              <Comment author={comment.data.author} body={comment.data.body} />
            );
          } else {
            return null;
          }
        });
      })} */}

      {/* {postData.data.children.map((comment): JSX.Element | null => {
        if (comment.data.body) {
          return (
            <Comment
              key={comment.data.id}
              author={comment.data.author}
              body={comment.data.body}
              publishedDate={getPublishedTimeFromNow(comment.data.created)}
            />
          );
        } else {
          return null;
        }
      })} */}
      <CommentList postData={postData} />
      {/* {commentCreate(postData).map((comment): JSX.Element | null => comment)} */}
    </div>,
    node
  );
}

// function commentCreate(data: ICommentsData) {
//   return data.map((tree) => {
//     tree.data.children.forEach((comment) => {
//       if (comment.data.body) {
//         return (
//           <Comment author={comment.data.author} body={comment.data.body} />
//         );
//       }
//     });
//   });
// }
