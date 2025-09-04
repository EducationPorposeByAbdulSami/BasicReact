import React from "react";

const Card = ({ movie }) => {
  return (
    <div className="h-[32rem] w-[20rem] bg-[#1c1529] rounded-xl relative group flex flex-col">
      <div className="h-[70%] w-full overflow-hidden rounded-t-xl">
        <img
          className="w-full h-full object-cover"
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}
        />
      </div>
      <div className="mx-5 mt-4 flex flex-col gap-2 flex-1">
        <p className="text-white text-xl font-semibold">{movie.Title}</p>
        <p className="text-gray-400 text-base">{movie.Year}</p>
      </div>
    </div>
  );
};

export default Card;
