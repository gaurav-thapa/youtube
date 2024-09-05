import React, { useRef, useState } from "react";
import { getSearchSuggestionsURL } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const Searchbar = () => {
  const textInput = useRef();
  const navigate = useNavigate();
  const [searchSuggestions, setSearchSuggestions] = useState(null);
  async function getSearchSuggestions(searchTerm) {
    try {
      const res = await fetch(getSearchSuggestionsURL(searchTerm));
      const data = await res.json();
      setSearchSuggestions(data[1]);
    } catch (error) {
      console.error(error);
    }
  }
  const inputChangeHandler = () => {
    const searchTerm = textInput.current.value;
    if (searchTerm.trim() === "") {
      setSearchSuggestions(null);
    } else {
      getSearchSuggestions(searchTerm);
    }
  };
  const onSearchHandler = (searchQuery) => {
    navigate('search?searchTerm='+searchQuery);
    setSearchSuggestions(null);
    textInput.current.value = '';
  }
  const onSubmitHandler = (e) =>{
    e.preventDefault();
    onSearchHandler(textInput.current.value)
  }
  return (
    <form className="flex items-center" onSubmit={onSubmitHandler}>
      <div className="relative">
        <div>
          <input
            onChange={inputChangeHandler}
            className="border-2 dark:bg-gray-900 dark:border-gray-900 py-2 px-6 sm:w-96 rounded-s-3xl"
            ref={textInput}
          />
        </div>
        {searchSuggestions && (
          <div className="bg-white absolute mt-1 rounded-xl dark:bg-gray-900 shadow-xl w-full px-6 py-3">
            {searchSuggestions.map((item) => (
              <div key={item} onClick={()=>onSearchHandler(item)} className=" hover:cursor-pointer mb-2">
                <i className="me-3 bi bi-search"></i>
                {item}
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        <button className="bg-gray-200 dark:bg-gray-800 dark:border-gray-800 border-2 px-5 py-2 rounded-e-3xl">
          <i className="bi bi-search"></i>
        </button>
      </div>
    </form>
  );
};

export default Searchbar;
