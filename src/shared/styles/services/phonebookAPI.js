import phonebookInstance from './auth';

export const getAllContacts = async () => {
  const { data } = await phonebookInstance.get('/');
  return data;
};

export const addContact = async data => {
  const { data: result } = await phonebookInstance.post('/', data);
  return result;
};

export const deleteContact = async id => {
  const { data } = await phonebookInstance.delete(`/${id}`);
  return data;
};
