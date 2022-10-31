import React from 'react';
import styles from './searchblock.css';
import { UserBlock } from './UserBlock';
import { useUserData } from '../../../hooks/useUserData';

export function SearchBlock() {
  const [data] = useUserData();
  console.log(data);
  return (
    <div className={styles.searchBlock}>
      <UserBlock avatarSrc={data.iconImg} username={data.name} />
    </div>
  );
}
// const [data] = useUserData();
// console.log(data);
