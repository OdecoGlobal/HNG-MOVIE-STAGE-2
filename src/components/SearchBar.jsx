import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import search from "../assets/SearchSearchIcon.svg";

export default function SearchBar() {
  const navigate = useNavigate();

  // functions
  const handleClick = () => {
    navigate("/search");
  };
  return (
    <div
      className="flex  md:border-[3px] md:border-white rounded-2xl px-4 items-center cursor-pointer"
      onClick={handleClick}
      aria-disabled
    >
      <span className="hidden md:block mr-4 text-white opacity-80">
        Search Movies
      </span>
      <img src={search} alt="search icon" />
    </div>
  );
}
