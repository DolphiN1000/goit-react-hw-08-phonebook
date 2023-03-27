import { useSelector, useDispatch } from 'react-redux';

import { logout } from 'redux/auth/auth-operations';

import { getUser } from 'redux/auth/auth-selectors';

import Button from 'shared/components/Button/Button';

const NavbarUser = () => {
  const { name } = useSelector(getUser);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {name}, <Button onClick={onLogout}>Logout</Button>
    </div>
  );
};

export default NavbarUser;
