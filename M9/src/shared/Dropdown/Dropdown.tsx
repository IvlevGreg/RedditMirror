import React, { BaseSyntheticEvent } from 'react';
import styles from './dropdown.css';
import { DropdownContent } from './DropdownContent';

interface IDropdownProps {
  button: React.ReactNode;
  children: React.ReactNode;
  isOpen?: boolean;
  dropdownContentRootId: string;
  onOpen?: () => void;
  onClose?: () => void;
}

const NOOP = () => {};

export function Dropdown({
  button,
  children,
  isOpen,
  dropdownContentRootId,
  onOpen = NOOP,
  onClose = NOOP,
}: IDropdownProps) {
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(isOpen);
  React.useEffect(() => setIsDropdownOpen(isOpen), [isOpen]);
  React.useEffect(
    () => (isDropdownOpen ? onOpen() : onClose()),
    [isDropdownOpen]
  );
  const handleOpen = (e: React.MouseEvent) => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.container}>
      <div onClick={handleOpen}>{button}</div>
      {isDropdownOpen && (
        <DropdownContent
          children={children}
          setIsDropdownOpen={setIsDropdownOpen}
          dropdownContentRootId={dropdownContentRootId}
        />
      )}
    </div>
  );
}
