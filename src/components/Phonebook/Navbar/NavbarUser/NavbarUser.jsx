import { useSelector, useDispatch } from 'react-redux';

import { logout } from 'redux/auth/auth-operations';

import { getUser } from 'redux/auth/auth-selectors';

import styles from './navbarUser.module.scss';

const NavbarUser = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {name}, <button onClick={onLogout} className={styles.link}>Logout</button>
    </div>
  );
};

export default NavbarUser;
