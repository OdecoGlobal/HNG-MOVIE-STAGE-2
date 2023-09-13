import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Hero from "./components/Hero";
import Home from "./Pages/Home/Home";
import Navbar from "./components/Navbar";
import MovieDetails from "./Pages/MovieDetails/MovieDetails";
import SearchMovies from "./Pages/Search/SearchMovies";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/search" element={<SearchMovies />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
