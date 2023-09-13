import React, { useEffect } from "react";
import Hero from "../../components/Hero";
import { useMovie } from "../../hook/useMovie";
import MovieList from "../../components/MovieList";

export default function Home() {
  const { movie, mediaError: error, mediaLoading: loading } = useMovie();

  return (
    <div>
      {error && <p className="error">{error}</p>}
      {loading && <p className="loading">Loading...</p>}
      {movie && <Hero movie={movie} loading={loading} />}
      {movie && <MovieList movie={movie} />}
    </div>
  );
}
