import { NavLink } from 'react-router-dom';
import styles from './navbarAuth.module.scss'
const NavbarAuth = () => {
  return (
    <div>
      <NavLink to="/register" className={styles.link}>Register</NavLink> |
      <NavLink to="/login"className={styles.link}>login</NavLink>
      <button>add</button>
    </div>
  );
};
export default NavbarAuth;
