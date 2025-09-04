import { useState, useEffect } from "react";
import Hero from "./assets/hero.png";
import BackG from "./assets/bg.png";
import Moviecard from "./assets/Components/Moviecard";
// c2099c26 API Key
const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=c2099c26";
const App = () => {
  const [movies, setMovie] = useState([]);

  const searchMovie = async (title) => {
    if (!title) return; // avoid empty searches
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovie(data.Search || []); // fallback to empty array
  };

  useEffect(() => {
    searchMovie();
  }, []);

  return (
    <div
      className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${BackG})` }}
    >
      <div className="w-full h-screen mx-auto text-center text-white flex flex-col justify-center">
        <div className="">
          <img className=" mx-auto rounded-lg" src={Hero} alt="Hero" />
        </div>
        <div className=" flex flex-col gap-5">
          <h1 className="w-[100%] lg:w-[50%] mx-auto  text-5xl md:text-6xl font-bold leading-tight">
            Find{" "}
            <span className="bg-gradient-to-r from-[#d6c7ff] to-[#ab8bff] bg-clip-text text-transparent">
              Movies
            </span>{" "}
            You'll Enjoy Without the Hassle
          </h1>
          <div className="w-full   mx-auto">
            <input
              type="text"
              placeholder="Search Movies Here!!"
              className="w-[50%] px-6 py-5 rounded-2xl bg-[#1c1529] text-[#b29ce9] focus:outline-none"
              onChange={(e) => searchMovie(e.target.value)}
            />
          </div>
        </div>
      </div>

      {movies?.length > 0 ? (
        <div className="w-[90%] h-full mx-auto flex flex-wrap justify-center my-10  gap-6">
          {movies.map((movie) => (
            <Moviecard key={movie.imdbID} movie={movie} /> // add key and return JSX
          ))}
        </div>
      ) : (
        <div>
          <h3>No Movie Found</h3>
        </div>
      )}
    </div>
  );
};

export default App;
