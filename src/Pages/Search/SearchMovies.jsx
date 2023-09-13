import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useFetch } from "../../hook/useFetch";

import MovieList from "../../components/MovieList";

export default function SearchMovies() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setTerm("");
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${term}`);
    setTerm("");
  };

  const handleChange = (e) => {
    setTerm(e.target.value);
    navigate(`?q=${e.target.value}`);
  };

  const querystring = useLocation();
  const queryParams = new URLSearchParams(querystring.search);
  const query = queryParams.get("q");
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${API_KEY}`;
  const { data, isPending, error } = useFetch(url);
  console.log(data?.results);

  const movie = data?.results;

  return (
    <div className="mt-28">
      <div className="h-fit w-[90%] md:w-3/4 bg-white shadow-xl p-7 mb-14 mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="search flex border-[3px] border-red-500 rounded-2xl px-4">
            <input
              type="text"
              placeholder="Search Movies"
              id="search"
              //   onChange={handleChange}
              onKeyUp={handleChange}
              //   onInput={handleChange}
              className="w-full min-h-full py-4 border-none bg-transparent outline-none text-xl"
            />
          </div>
        </form>
      </div>

      {isPending && <p className="loading">Loading......</p>}
      {error && <p className="error">{error}</p>}
      {data && <MovieList movie={movie} />}
    </div>
  );
}
