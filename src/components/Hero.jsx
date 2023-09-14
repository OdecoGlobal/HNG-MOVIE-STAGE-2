import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

export default function Hero({ movie, loading }) {
  const [intervalId, setIntervalId] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {}, [movie]);
  useEffect(() => {
    if (!loading && movie.length > 0) {
      const carouselInterval = setInterval(() => {
        setCurrentIndex((prevImage) => (prevImage + 1) % movie?.length);
      }, 15000);
      setIntervalId(carouselInterval);
    }
    return () => clearInterval(intervalId);
  }, [movie]);

  //   functions
  const handleTrailer = (trailerKey) => {
    if (trailerKey) {
      window.open(`https://www.youtube.com/watch?v=${trailerKey}`, "_blank");
    }
  };

  return (
    <div className="relative w-full bg-white h-[360px] md:h-[500px] -z-10 mb-9">
      {loading && (
        <p className="loading fixed top-20 left-[40vw]">Loading...</p>
      )}
      {movie.map((mov, i) => (
        <div
          key={i}
          className={` absolute top-0 left-0 w-full h-full flex items-end md:items-center  ${
            i === currentIndex ? "block" : "hidden"
          }`}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${mov.backdrop_path})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
          <div className="h-fit mb-5 w-fit md:w-[400px] px-2 md:ml-7 z-10">
            <h2 className="text-white text-2xl font-bold">{mov.title}</h2>
            <p className="text-white text-sm leading-4 mt-1 mb-3">
              {mov.overview}
            </p>
            <div
              onClick={handleTrailer}
              className="flex bg-red-700 items-center justify-center w-fit rounded-full py-2 px-3 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z"
                  fill="white"
                />
              </svg>
              <span className="text-white ml-1">Watch Trailer</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
