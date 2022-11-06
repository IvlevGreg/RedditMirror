import React from 'react';
import styles from './dropdowncontent.css';
import ReactDOM from 'react-dom';

interface IDropdownContent {
  children: React.ReactNode;
}
export function DropdownContent({ children }: IDropdownContent) {
  const node = document.getElementById('dropdown_root');
  if (!node) return null;
  return ReactDOM.createPortal(<>{children}</>, node);
}
