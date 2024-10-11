import { useSelector } from 'react-redux';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';
import { Link, useParams } from 'react-router-dom';

const BrowseBooksPage = () => {
  const { category } = useParams();
  const books = useSelector((state) => state.books.books);
  const [search, setSearch] = useState('');

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()) ||
    book.author.toLowerCase().includes(search.toLowerCase()) &&
    (!category || book.category === category)
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">Browse Books</h1>
      
      <div className="mb-8 flex flex-col items-center space-y-4">
        <SearchBar onSearch={setSearch} />
        <div className="flex flex-col items-center space-y-2">
          <Link to="/books" className="text-blue-500 hover:text-blue-700">All Categories</Link>
          <Link to="/books/Fiction" className="text-blue-500 hover:text-blue-700">Fiction</Link>
          <Link to="/books/Non-Fiction" className="text-blue-500 hover:text-blue-700">Non-Fiction</Link>
        </div>
      </div>
      
      <div className="container mx-auto">
        <BookList books={filteredBooks} />
      </div>
    </div>
  );
  
};

export default BrowseBooksPage;
