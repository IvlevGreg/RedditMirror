import React, { useEffect, useRef } from 'react';
import { IPost } from '../shared/Post';

export function usePostEffect(props: IPost) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handeleClick(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !ref.current?.contains(event.target)
      ) {
        props.onClose?.();
      }
    }

    document.addEventListener('click', handeleClick);
    return () => {
      document.removeEventListener('click', handeleClick);
    };
  }, []);
  return [ref];
}
