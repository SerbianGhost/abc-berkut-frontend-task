import { useState } from "react";
import Header from "../components/common/header";
import Photos from "../components/common/photos";
const FavoritesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Header withSearch onSearch={setSearchTerm}/>
      <main className="main">
        <h1 className="favotites__title">Избранное</h1>
        <Photos searchTerm={searchTerm}/>
      </main>
    </>
  );
};
export default FavoritesPage;
