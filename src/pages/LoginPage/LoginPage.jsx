import LoginForm from 'components/Phonebook/LoginForm/LoginForm';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleLogin = data => {
    dispatch(login(data));
  };
  return (
    <div className="container">
      <h1 className="pageTitle">Login page</h1>
      <LoginForm onSubmit={handleLogin} />
    </div>
  );
};

export default LoginPage;
