import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getContacts,
  addNewContact,
  deleteContact,
} from '../../API/contactsAPI';

export const get = createAsyncThunk('contacts/get', async () => {
  const response = await getContacts();
  return response.data;
});
export const add = createAsyncThunk('contacts/add', async contact => {
  const response = await addNewContact(contact);
  return response.data;
});

export const remove = createAsyncThunk('contacts/remove', async id => {
  await deleteContact(id);
  return id;
});
export const checkContact = createAction('contacts/filter');
