import { useSelector } from 'react-redux';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';

const BrowseBooksPage = () => {
  const books = useSelector((state) => state.books.books);
  const [search, setSearch] = useState('');

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">Browse Books</h1>
      
      <div className="mb-8 flex justify-center">
        <SearchBar onSearch={setSearch} />
      </div>
      
      <div className="container mx-auto">
        <BookList books={filteredBooks} />
      </div>
    </div>
  );
};

export default BrowseBooksPage;
