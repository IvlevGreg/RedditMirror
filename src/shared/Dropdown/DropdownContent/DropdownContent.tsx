import React from 'react';
import styles from './dropdowncontent.css';
import ReactDOM from 'react-dom';

interface IDropdownContent {
  children: React.ReactNode;
  setIsDropdownOpen: (a: boolean) => void;
  dropdownContentRootId: string;
}
export function DropdownContent({
  children,
  setIsDropdownOpen,
  dropdownContentRootId,
}: IDropdownContent) {
  const node = document.getElementById(dropdownContentRootId);
  if (!node) return null;
  return ReactDOM.createPortal(
    <>
      <div className={styles.listContainer}>
        <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
          {children}
        </div>
      </div>
    </>,
    node
  );
}
