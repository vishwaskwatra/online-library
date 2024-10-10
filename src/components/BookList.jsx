/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const BookList = ({ books }) => (
  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {books.map((book) => (
      <li key={book.id} className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-2">{book.title || 'No Title Available'}</h3>
        <p className="text-gray-700 mb-4">{book.author ? `by ${book.author}` : 'Unknown Author'}</p>
        <p className="text-sm text-gray-500 mb-4">{book.description || 'No Description Available'}</p>
        
        <Link
          to={`/books/details/${book.id}`}
          className="text-blue-500 hover:text-blue-700 font-semibold"
          aria-label={`View details for ${book.title || 'this book'}`}
        >
          View Details
        </Link>
      </li>
    ))}
  </ul>
);

export default BookList;
