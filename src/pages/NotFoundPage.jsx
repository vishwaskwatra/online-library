import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
    <h1 className="text-6xl font-bold text-red-600 mb-4 animate-bounce">404</h1>
    <p className="text-2xl font-medium text-gray-700 mb-8">Oops! Page Not Found</p>
    
    <Link
      to="/"
      className="text-lg font-semibold text-white bg-blue-500 hover:bg-blue-700 py-3 px-6 rounded-lg transition duration-300 shadow-lg"
    >
      Go Back to Home
    </Link>
  </div>
);

export default NotFoundPage;
