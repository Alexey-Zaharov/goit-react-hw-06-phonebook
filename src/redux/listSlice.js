import { createSlice } from '@reduxjs/toolkit';

const listInitState = [];

const listSlice = createSlice({
  name: 'contacts',
  initialState: listInitState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, number, id }) {
        return {
          payload: {
            name,
            number,
            id,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = listSlice.actions;
export const listReducer = listSlice.reducer;
