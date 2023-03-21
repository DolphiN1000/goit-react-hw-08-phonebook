const fields = {
  name: {
    type: 'text',
    name: 'name',
    require: true,
    label: 'User name',
    placeholder: 'User name',
  },
  email: {
    type: 'email',
    name: 'email',
    require: true,
    label: 'User email',
    placeholder: 'User email',
  },
  password: {
    type: 'password',
    name: 'password',
    require: true,
    label: 'User password',
    placeholder: 'User password',
  },
};

export default fields;
