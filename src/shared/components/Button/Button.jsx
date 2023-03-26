import { nanoid } from '@reduxjs/toolkit';
import { memo } from 'react';
import styles from './button.module.scss';

const Button = ({children, type = 'submit', id, onClick}) => {
  if (!id) id = memo(nanoid())
  return (
    <button type={type} 
    id={id} onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
