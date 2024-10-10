import AddBookForm from '../components/AddBookForm';

const AddBookPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Add a New Book</h1>
      <AddBookForm />
    </div>
  );
};

export default AddBookPage;
