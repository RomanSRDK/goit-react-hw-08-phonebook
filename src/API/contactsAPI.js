import axios from 'axios';

// axios.defaults.baseURL = 'https://64e38322bac46e480e78e518.mockapi.io';

export const getContacts = async () => {
  return await axios.get('/contacts');
};

export const addNewContact = async contact => {
  console.log(contact);
  return axios.post('/contacts', contact);
};

export const deleteContact = async id => {
  return axios.delete(`/contacts/${id}`);
};
