const Search = ({ className = "", onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };
  return (
    <input
      type="search"
      placeholder="Поиск"
      className={`search-input ${className}`}
      onChange={handleChange}
    />
  );
};

export default Search;
