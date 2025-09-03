import { useState, useEffect } from "react";
import Hero from "./assets/hero.png";
import BackG from "./assets/bg.png";
// c2099c26 API Key
const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=c2099c26";
function App() {
  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovie("spiderman");
  }, []);

  return (
    <>
      <div className="w-full h-full bg-[url(E:\ReactPracticeRevision\BasicReact\src\assets\bg.png)]">
        {/* <img className="z-20" src={BackG} alt="BackGround" /> */}
        <div className="w-full h-lvh flex flex-col">
          <div className=" h-[70%]  flex place-content-center">
            <img className=" w-auto h-auto" src={Hero} alt="" />
          </div>
          <div className="h-[30%]  flex flex-col items-center gap-10">
            <h1 className="w-[50%] text-center text-white text-6xl  font-semibold">
              Find{" "}
              <span className="bg-gradient-to-r from-[#d6c7ff]  to-[#ab8bff] bg-clip-text text-transparent inline-block text-6xl font-bold">
                Movies
              </span>{" "}
              You'll Enjoy Without the Hassle
            </h1>
            <div className="border-2 border-white">
              <input
                className=" text-white w-full h-[10%] p-10"
                type="text"
                placeholder="Search Movies Here!!"
                value="SuperMan"
                name=""
                id=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
