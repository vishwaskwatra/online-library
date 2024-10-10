import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
    <h1 className="text-4xl font-bold mb-6 text-blue-600">Welcome to the Online Library</h1>
    <h2 className="text-2xl font-semibold mb-4">Popular Categories</h2>
    
    <ul className="space-y-1 flex justify-center space-x-6">
      <li>
        <Link
          to="/books/fiction"
          className="text-xl font-medium text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded transition duration-300"
        >
          Fiction
        </Link>
      </li>
      <li>
        <Link
          to="/books/non-fiction"
          className="text-xl font-medium text-white bg-green-500 hover:bg-green-700 py-2 px-4 rounded transition duration-300"
        >
          Non-Fiction
        </Link>
      </li>
      <li>
        <Link
          to="/books/sci-fi"
          className="text-xl font-medium text-white bg-purple-500 hover:bg-purple-700 py-2 px-4 rounded transition duration-300"
        >
          Sci-Fi
        </Link>
      </li>
    </ul>
  </div>
);

export default HomePage;

  