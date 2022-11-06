import React, { BaseSyntheticEvent } from 'react';
import styles from './dropdown.css';
import { DropdownContent } from './DropdownContent';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => {};

export function Dropdown({
  button,
  children,
  isOpen,
  onOpen = NOOP,
  onClose = NOOP,
}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  React.useEffect(
    () => (isDropdownOpen ? onOpen() : onClose()),
    [isDropdownOpen]
  );
  const handleOpen = (e: any) => {
    const node = document.getElementById('dropdown_root');
    if (!node) return null;
    node.style.position = 'absolute';
    node.style.top = `${e.pageY}px`;
    node.style.left = `${e.pageX}px`;

    setIsDropdownOpen(!isDropdownOpen);
    // if (isOpen === undefined) {
    //   setIsDropdownOpen(!isDropdownOpen);
    // }
  };

  return (
    <div className={styles.container}>
      <div onClick={handleOpen}>{button}</div>
      {isDropdownOpen && (
        <div className={styles.listContainer}>
          <div className={styles.list} onClick={() => setIsDropdownOpen(false)}>
            <DropdownContent children={children} />
          </div>
        </div>
      )}
    </div>
  );
}
