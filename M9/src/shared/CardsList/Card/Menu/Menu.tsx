import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { Dropdown } from '../../../Dropdown';
import { MenuIcon } from '../../../Icons';
import styles from './menu.css';
import { MenuItemsList } from './MenuItemsList';

export function Menu() {
  return (
    <div className={styles.menu}>
      <Dropdown
        onOpen={() => console.log('open')}
        onClose={() => console.log('closed')}
        isOpen={false}
        dropdownContentRootId={'dropdown_root'}
        button={
          <button
            onClick={(e: React.MouseEvent) => {
              const node = document.getElementById('dropdown_root');
              if (!node) return;
              node.style.position = 'absolute';
              node.style.top = `${e.pageY}px`;
              node.style.left = `${e.pageX}px`;
            }}
            className={styles.menuButton}
          >
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
