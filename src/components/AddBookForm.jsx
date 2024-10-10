import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/booksSlice';
import { useNavigate } from 'react-router-dom';

const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate that rating is a number and within a valid range
    const ratingValue = Number(rating);
    if (title && author && description && ratingValue >= 1 && ratingValue <= 5) {
      dispatch(addBook({ title, author, description, rating: ratingValue }));
      // Reset form fields
      setTitle('');
      setAuthor('');
      setDescription('');
      setRating('');
      navigate('/books');
    } else {
      alert("Please fill out all fields correctly, and make sure the rating is between 1 and 5.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full"
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="border p-2 w-full"
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 w-full"
        required
      />
      <input
        type="number"
        placeholder="Rating (1-5)"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        className="border p-2 w-full"
        min="1"
        max="5"
        required
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Add Book</button>
    </form>
  );
};

export default AddBookForm;
