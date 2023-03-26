import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';
import { isUserLogin } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

import styles from './navbar.module.scss'

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);
  return (
    <div className={styles.container}>
      {!isLogin && <NavbarAuth />}
      {isLogin && <NavbarUser />}
    </div>
  );
};

export default Navbar;
