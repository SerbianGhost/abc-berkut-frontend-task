import Search from "../common/search";
const SearchSection = ({onSearch}) => {
  return (
    <section className="search-section">
      <Search className="search-section__input container" onSearch={onSearch}/>
    </section>
  );
};
export default SearchSection;