import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hook/useFetch";

export default function MovieDetails() {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const { id } = useParams();
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&append_to_response=videos`;
  const { data, isPending, error } = useFetch(url);

  return (
    <div>
      {isPending && <p className="loading">Loading....</p>}
      {error && <p className="error">{error}</p>}
      {data && (
        <div>
          <img
            src={`https://image.tmdb.org/t/p/original${data.poster_path}`}
            alt={data.title}
            className="w-full h-[400px] md:h-[600px]"
          />
          <div className="h-fit w-[90%] bg-slate-300 px-8 py-14 mx-auto shadow-2xl my-8">
            <h3
              data-testid="movie-title"
              className="text-center text-2xl font-medium mb-4"
            >
              {data.title}
            </h3>
            <div className="w-fit h-fit mx-auto">
              <span
                data-testid="movie-release_date"
                className="mr-5 text-xl font-mono font-semibold"
              >
                {data.release_date}
              </span>
              <span
                data-testid="movie-runtime"
                className="text-xl font-mono font-semibold"
              >
                {data.runtime} mins
              </span>
            </div>
            <ul className="flex max-w-full flex-wrap h-fit mx-auto justify-center mt-4">
              {data.genres.map((genre) => (
                <li className="bg-white px-4 text-xl w-fit shadow-lg mr-2 mb-5 rounded-lg">
                  {genre.name}
                </li>
              ))}
            </ul>
            <p
              data-testid="movie-overview"
              className="text-xl font-medium tracking-wide leading-8 mt-5"
            >
              {data.overview}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
