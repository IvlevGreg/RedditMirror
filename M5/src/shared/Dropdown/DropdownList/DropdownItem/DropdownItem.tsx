import React, { ReactElement } from 'react';
import styles from './dropdownitem.css';

interface DropdownItem {
  svgElement: ReactElement;
  text: string;
}

export function DropdownItem({ svgElement, text }: DropdownItem) {
  return (
    <button onClick={() => console.log(text)} className={styles.container}>
      {svgElement}
      <div>{text}</div>
    </button>
  );
}
