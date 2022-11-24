import { atom } from 'recoil';

export const textState = atom({
  key: 'Comments',
  default: [
    {
      id: '1',
      commentText: '1',
    },
  ],
});
