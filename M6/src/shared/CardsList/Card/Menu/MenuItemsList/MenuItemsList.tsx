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
        <span className={styles.menuItemText}>Комментарии</span>
      </li>
      <div className={styles.divider}></div>
      <li className={styles.menuItem + ' ' + styles.menuItemDekstop}>
        <DropdownShareIcon />
        <span className={styles.menuItemText}>Поделиться</span>
      </li>
      <div className={styles.divider}></div>
      <li className={styles.menuItem}>
        <DropdownHideIcon />
        <span className={styles.menuItemText}>Скрыть</span>
      </li>
      <div className={styles.divider}></div>
      <li className={styles.menuItem + ' ' + styles.menuItemDekstop}>
        <DropdownSaveIcon />
        <span className={styles.menuItemText}>Сохранить</span>
      </li>
      <div className={styles.divider}></div>
      <li className={styles.menuItem}>
        <DropdownComplainIcon />
        <span className={styles.menuItemText}>Пожаловаться</span>
      </li>
    </ul>
  );
}
