import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  currentId: 1,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        ...action.payload,
        id: String(state.currentId).padStart(5, '0'),
      };
      state.books.push(newBook);
      state.currentId += 1;
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;