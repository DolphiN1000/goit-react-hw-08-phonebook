import styles from './loginForm.module.scss';
import Button from 'shared/components/Button/Button';
import TextField from 'shared/components/TextField/TextField';

import useForm from 'shared/hoks/useForm';
import fields from './fields';
import initialState from './initialState';


const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { email, password } = state;
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <TextField value={email} handleChange={handleChange} {...fields.email} />
      <TextField value={password} handleChange={handleChange} {...fields.password} />
      <Button>Login</Button>
    </form>
  );
};
export default LoginForm;
