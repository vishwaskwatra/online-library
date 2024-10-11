import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';

const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [category, setCategory] = useState(''); 
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const ratingValue = Number(rating);
    if (title && author && description && ratingValue >= 1 && ratingValue <= 5 && category) {
      dispatch(addBook({ id: Date.now(), title, author, description, rating: ratingValue, category }));
      setTitle('');
      setAuthor('');
      setDescription('');
      setRating('');
      setCategory(''); 
      navigate('/books');
    } else {
      alert("Please fill out all fields correctly.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} className="border p-2 w-full" required />
      <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} className="border p-2 w-full" required />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="border p-2 w-full" required />
      <input type="number" placeholder="Rating (1-5)" value={rating} onChange={(e) => setRating(e.target.value)} className="border p-2 w-full" required />
      
      <select value={category} onChange={(e) => setCategory(e.target.value)} className="border p-2 w-full" required>
        <option value="">Select Category</option>
        <option value="Fiction">Fiction</option>
        <option value="Non-Fiction">Non-Fiction</option>
        <option value="Science">Science</option>
        <option value="History">History</option>
      </select>
      
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Book</button>
    </form>
  );
};

export default AddBookForm;
