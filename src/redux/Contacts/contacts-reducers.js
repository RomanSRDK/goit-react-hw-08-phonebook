import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { checkContact, get, add, remove } from './contacts-actions';

const items = createReducer([], {
  [get.fulfilled]: (_, { payload }) => payload,
  [add.fulfilled]: (state, { payload }) => [...state, payload],

  [remove.fulfilled]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});
const error = createReducer(null, {
  [get.pending]: () => null,
  [get.rejected]: (_, { payload }) => payload,
  [add.pending]: () => null,
  [add.rejected]: (_, { payload }) => payload,
  [remove.pending]: () => null,
  [remove.rejected]: (_, { payload }) => payload,
});

const filter = createReducer('', {
  [checkContact]: (_, { payload }) => payload,
});

export const contactsReducer = combineReducers({
  items,
  error,
  filter,
});
