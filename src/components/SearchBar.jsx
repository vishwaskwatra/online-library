/* eslint-disable react/prop-types */
const SearchBar = ({ onSearch }) => (
    <input
      type="text"
      placeholder="Search by title or author"
      onChange={(e) => onSearch(e.target.value)}
      className="border rounded p-2 w-full"
    />
  );
  
  export default SearchBar;
  