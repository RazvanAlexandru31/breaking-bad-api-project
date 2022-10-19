import { useState, useEffect } from "react";
import CharacterCard from "./CharacterCard";
import CharactersSearch from "./CharactersSearch";
import { RotateLoader } from "react-spinners";
// import Pagination from "./Pagination";

const CharactersList = () => {
  const [items, setItems] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postsPerPage] = useState(4);

  const baseUrl = "https://www.breakingbadapi.com/api/";

  const fetchItems = async (query) => {
    try {
      setLoading(true);
      const response = await fetch(`${baseUrl}characters?name=${query}`);
      const data = await response.json();
      console.log(data);
      if (data.length === 0) {
        setMessage("Ops...we couldn't find what you were looking for");
      } else {
        setMessage("");
      }
      setItems(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchItems(query);
  }, [query]);

  const getUserInput = (input) => {
    console.log(input);
    setQuery(input);
  };

  const loaderStyle = "grid place-content-center mt-10";
  const cardsStyle = "grid p-10 xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1";

  // get current post
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirsPost = indexOfLastPost - postsPerPage;
  // const currentPost = items.slice(indexOfFirsPost, indexOfLastPost);

  // change page
  // const paginate = (number) => {
  //   setCurrentPage(number)
  // }

  return (
    <>
      <CharactersSearch getUserInput={getUserInput} />
      <div className="grid place-content-center font-bold text-2xl mt-1">
        {message}
      </div>
      <div className={loading ? loaderStyle : cardsStyle}>
        {loading && <RotateLoader color="#8be6e3" size={20} />}
        {!loading &&
          items.map((item) => {
            return <CharacterCard key={item.char_id} item={item} />;
          })}
      </div>
      {/* <div className="centered-pages">
        <Pagination postsPerPage={postsPerPage} totalPosts={items.length} paginate={paginate}/>
      </div> */}
    </>
  );
};

export default CharactersList;
