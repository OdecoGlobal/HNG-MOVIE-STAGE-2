import React from "react";
import { Link } from "react-router-dom";

export default function MovieList({ movie }) {
  const poster = movie.filter((post) => post.poster_path !== null);

  const feature = poster?.slice(0, 12);
  console.log(feature);
  return (
    <div>
      <h3 className="w-fit mx-auto font-bold text-xl md:text-3xl mb-6">
        Top 10 Movies
      </h3>
      <div
        data-testid="movie-card"
        className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-7 px-5 auto-rows-[minmax(200px,_1fr)]"
      >
        {feature.map((mov, i) => (
          <Link key={mov.id} to={`/movies/${mov.id}`}>
            <div className="border-2 bg-slate-100 shadow-xl rounded-xl overflow-hidden ">
              <img
                src={`https://image.tmdb.org/t/p/original${mov.poster_path}`}
                data-testid="movie-poster"
              />
              <h3
                data-testid="movie-title"
                className="ml-3 my-2 font-medium leading-5 text-lg"
              >
                {mov.title}
              </h3>

              <p
                data-testid="movie-release-date"
                className="ml-3 mb-2 text-base  font-normal"
              >
                {mov.release_date}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
