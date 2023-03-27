import { nanoid } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import styles from './button.module.scss';

const Button = ({ children, type = 'submit', id, onClick }) => {
  const idGen = useMemo(() => nanoid(), []);
  if (!id) {
    id = idGen;
  }
  return (
    <button type={type} id={id} onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
