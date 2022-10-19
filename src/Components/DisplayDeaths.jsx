import React from "react";

const DisplayDeaths = ({ items, fetchDeaths }) => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-2xl">
      <figure>
        <img src={items.img} alt="characters" className="object-cover h-70 w-96"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{items.death}</h2>
        <p>Cause of deeath: {items.cause}</p>
        <p>Season: {items.season}</p>
        <p>Episode: {items.episode}</p>
        <p>Responsible: {items.responsible}</p>
        <p>Last words: {items.last_words}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary" onClick={fetchDeaths}>Death!</button>
        </div>
      </div>
    </div>
  );
};

export default DisplayDeaths;
