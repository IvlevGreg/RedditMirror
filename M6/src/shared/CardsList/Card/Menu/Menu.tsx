import React from 'react';
import { Dropdown } from '../../../Dropdown';
import { MenuIcon } from '../../../Icons';
import styles from './menu.css';
import { MenuItemsList } from './MenuItemsList';

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown
        onClose={() => console.log('closed')}
        onOpen={() => console.log('Open')}
        isOpen={true}
        button={
          <button className={styles.menuButton}>
            <MenuIcon />
          </button>
        }
      >
        <div className={styles.dropdown}>
          <MenuItemsList />
          <button className={styles.closeButton}>Закрыть</button>
        </div>
      </Dropdown>
    </div>
  );
}
