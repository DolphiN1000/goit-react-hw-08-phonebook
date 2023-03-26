import LoginForm from 'components/Phonebook/LoginForm/LoginForm';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';

import styles from './loginPage.module.scss';

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleLogin = data => {
    dispatch(login(data));
  };
  return (
    <div className={styles.container}>
      <h1>Login page</h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
