import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetailsPage = () => {
  const { id } = useParams();
  const book = useSelector((state) =>
    state.books.books.find((book) => book.id === id) // No conversion needed, ID is a string
  );

  if (!book) return <div className="text-center text-2xl font-bold mt-20">Book not found</div>;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">{book.title}</h1>
        <p className="text-xl font-medium text-gray-700 mb-4">Author: <span className="font-semibold">{book.author}</span></p>
        <p className="text-gray-600 mb-6">{book.description}</p>
        <p className="text-lg font-semibold text-gray-800 mb-6">Rating: <span className="text-yellow-500">{book.rating}/5</span></p>
        
        <Link
          to="/books"
          className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300"
        >
          Back to Browse
        </Link>
      </div>
    </div>
  );
};

export default BookDetailsPage;
