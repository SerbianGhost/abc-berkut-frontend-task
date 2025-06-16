import { useState } from "react";
import Header from "../components/common/header";
import Photos from "../components/common/photos";
import SearchSection from "../components/homePageComponents/searchSection";
const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Header />
      <main className="main">
        <SearchSection onSearch={setSearchTerm} />
        <Photos searchTerm={searchTerm} />
      </main>
    </>
  );
};
export default Home;
