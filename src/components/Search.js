import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [searchTerm, updateSearchTerm] = useState("");
  const [debouncedTerm, updateDebouncedTerm] = useState(searchTerm);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchTerm) {
        updateDebouncedTerm(searchTerm)
      }
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }
, [searchResults, searchTerm]);

  useEffect(() => {
    const getResults = async () => {
      const data = await axios.get(
        "http://www.omdbapi.com/?i=tt3896198&apikey=f9c3273",
        {
          params: {
            s: debouncedTerm,
            type: "movie",
          },
        }
      );
      setSearchResults(data);
      console.log(data.data.Search)
    };
    getResults()
  }, [debouncedTerm]);

  return (
    <div>
      <h3>Search for a movie</h3>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          className="form-control"
          value={searchTerm}
          onChange={(e) => updateSearchTerm(e.target.value)}
          type="text"
          id="search"
          placeholder="Enter movie name"
        ></input>
      </div>
    </div>
  );
};

export default Search;

