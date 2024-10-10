import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="bg-gray-800 p-4">
    <ul className="flex space-x-4">
      <li><Link to="/" className="text-white">Home</Link></li>
      <li><Link to="/books" className="text-white">Browse Books</Link></li>
      <li><Link to="/add-book" className="text-white">Add Book</Link></li>
    </ul>
  </nav>
);

export default NavBar;
