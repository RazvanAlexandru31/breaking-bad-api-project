import React from "react";

const CharacterCard = ({ item }) => {
  return (
    <div className="relative group w-96 h-96 overflow-hidden bg-black m-auto mt-36 shadow-2xl">
      <img
        className="object-cover w-full h-full transform duration-700 backdrop-opacity-100"
        src={item.img}
        alt="character"
      />
      <div className="absolute w-full h-full shadow-2xl opacity-100 transform duration-500 inset-y-full group-hover:-inset-y-0"></div>
      <div className="absolute bg-gradient-to-t from-black w-full h-full transform duration-500 inset-y-3/4 group-hover:-inset-y-0">
        <div className="absolute w-full flex place-content-center">
          <p className="capitalize font-serif font-bold text-3xl text-center shadow-2xl text-white">
            {item.name}
          </p>
        </div>
        <div className="flex flex-col absolute w-full flex place-content-center mt-20">
          <p className="font-sans ml-3 w-4/5 text-white mt-5">
            Actor Name : {item.portrayed}
          </p>
          <p className="font-sans ml-3 w-4/5 text-white mt-5">
            Nickname : {item.nickname}
          </p>
          <p className="font-sans ml-3 w-4/5 text-white mt-5">
            Birthday: {item.birthday}
          </p>
          <p className="font-sans ml-3 w-4/5 text-white mt-5">
            Status: {item.status}
          </p>
          <p className="font-sans ml-3 w-4/5 text-white mt-5">
            Occupation : {item.occupation[0]}
          </p>
        </div>
        
          <a href={`https://breakingbad.fandom.com/wiki/${item.name}`} target="_blank" rel="noreferrer">
          <button className="absolute left-1/4 bottom-4 bg-white text-black font-bold rounded-lg h-10 w-48">
            More Info
          </button>
          </a>

      </div>
    </div>
  );
};

export default CharacterCard;
