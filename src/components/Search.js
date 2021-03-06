import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "./MovieList";
import NominationDisplay from "./NominationDisplay";

const Search = () => {
  const [searchTerm, updateSearchTerm] = useState("");
  const [debouncedTerm, updateDebouncedTerm] = useState(searchTerm);
  const [searchResults, setSearchResults] = useState([]);
  const [nominations, updateNominations] = useState([]);

  const addNomination = (newNomination) => {
    let arr = [...nominations];
    arr.push([newNomination]);
    updateNominations(arr);
  };

  const removeNomination = (nom) => {
    let index = -1;
    let i;
    if (nominations.length === 0) {
      return;
    }
    for (i = 0; i < nominations.length; i++) {
      if (nominations[i][0] === nom) {
        index = i;
        break;
      }
    }

    let arr = [...nominations];
    if (index > -1) {
      arr.splice(index, 1);
    }
    console.log(arr);
    updateNominations(arr);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (searchTerm) {
        updateDebouncedTerm(searchTerm.replace(/\s*$/, ""));
      }
    }, 500);
    return () => {
      clearTimeout(timeout);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedTerm !== "") {
      const getResults = async () => {
        const data = await axios.get(
          "https://www.omdbapi.com/?i=tt3896198&apikey=fb6dc498",
          {
            params: {
              s: debouncedTerm,
              type: "movie",
            },
          }
        );
        console.log(data);
        if (data.data.Response === "False") {
          setSearchResults(data.data.Error);
        } else {
          setSearchResults(data);
        }
      };
      getResults();
    }
  }, [debouncedTerm]);

  return (
    <div className="row">
      <div className="col-sm-12 m-4 p-3 bg-dark">
        <h3 className="text-white">Search for a movie</h3>
        <div className="form-group">
          <label className="text-white" htmlFor="name">Name</label>
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
      <div className="col-sm-8">
        <MovieList movies={searchResults} nominations={addNomination} />
      </div>
      <div className="col-sm-4">
        <NominationDisplay
          nominations={nominations}
          removeNoms={removeNomination}
        />
      </div>
    </div>
  );
};

export default Search;
