export const isUserLogin = ({ auth }) => auth.isUserLogin;
export const getAuth = ({ auth }) => {
  const { isLogin, token } = auth;
  return { isLogin, token };
};

export const getUser = ({ auth }) => auth.user;