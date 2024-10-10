import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [],
  currentId: 1, // Start the ID from 1
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        ...action.payload,
        id: String(state.currentId).padStart(5, '0'), // Generate a 5-digit ID
      };
      state.books.push(newBook);
      state.currentId += 1; // Increment the ID
    },
  },
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;