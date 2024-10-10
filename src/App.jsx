import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BrowseBooksPage from './pages/BrowseBooksPage';
import BookDetailsPage from './pages/BookDetailsPage';
import AddBookPage from './pages/AddBookPage';
import NotFoundPage from './pages/NotFoundPage';
import NavBar from './components/NavBar';



function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/books" element={<BrowseBooksPage />} />
        <Route path="/books/details/:id" element={<BookDetailsPage />} />
        <Route path="/add-book" element={<AddBookPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
