import phonebookInstance from './auth';

export const getAllContacts = async () => {
  const { data } = await phonebookInstance.get('/contacts');
  return data;
};

export const addContact = async data => {
  const { data: result } = await phonebookInstance.post('/contacts', data);
  return result;
};

export const deleteContact = async id => {
  const { data } = await phonebookInstance.delete(`/contacts/${id}`);
  return data;
};
