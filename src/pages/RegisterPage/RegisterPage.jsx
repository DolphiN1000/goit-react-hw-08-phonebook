import RegisterForm from 'components/Phonebook/RegisterForm/RegisterForm';
import { useDispatch } from 'react-redux';
import { signup } from 'redux/auth/auth-operations';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const handleSignup = data => {
    dispatch(signup(data));
  };

  return (
    <div className="container">
      <h1 className="pageTitle">Register Page</h1>
      <RegisterForm onSubmit={handleSignup} />
    </div>
  );
};

export default RegisterPage;
