import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/tvlogo.svg";
import burger from "../assets/burger.svg";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <nav className="z-100 absolute top-0 left-0 w-full h-fit py-6 display flex items-center px-3 md:px-9 bg-slate-500 bg-opacity-40 justify-between overflow-x-hidden">
      <Link to="/">
        <div className="flex items-center w-fit">
          <img src={logo} alt="movie logo" className="w-10 mr-2" />
          <h3 className="text-white text-2xl font-semibold">MovieBox</h3>
        </div>
      </Link>

      <SearchBar />

      <div className="flex items-center  w-fit ">
        <Link to="/" className="text-white text-base font-light">
          Sign In
        </Link>
        <div className="ml-3 bg-red-600 w-fit p-2 rounded-[50%]">
          <img src={burger} alt="burger menu" />
        </div>
      </div>
    </nav>
  );
}
