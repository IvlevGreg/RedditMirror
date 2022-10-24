import React from 'react';
import {
  DropdownCommentsIcon,
  DropdownComplainIcon,
  DropdownHideIcon,
  DropdownSaveIcon,
  DropdownShareIcon,
} from '../../../../Icons';
import styles from './menuitemslist.css';

export function MenuItemsList() {
  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItem + ' ' + styles.menuItemDekstop}>
        <DropdownCommentsIcon />
        <span>Комментарии</span>
      </li>
      <div className={styles.divider}></div>
      <li className={styles.menuItem + ' ' + styles.menuItemDekstop}>
        <DropdownShareIcon />
        <span>Поделиться</span>
      </li>
      <div className={styles.divider}></div>
      <li className={styles.menuItem}>
        <DropdownHideIcon />
        <span>Скрыть</span>
      </li>
      <div className={styles.divider}></div>
      <li className={styles.menuItem + ' ' + styles.menuItemDekstop}>
        <DropdownSaveIcon />
        <span>Сохранить</span>
      </li>
      <div className={styles.divider}></div>
      <li className={styles.menuItem}>
        <DropdownComplainIcon />
        <span>Пожаловаться</span>
      </li>
    </ul>
  );
}
