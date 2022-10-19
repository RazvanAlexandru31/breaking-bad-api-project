import React from "react";
import { useState, useEffect } from "react";
import DisplayDeaths from "./DisplayDeaths";
import { RotateLoader } from "react-spinners";

const RandomDeaths = () => {
  const [items, setItems] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const url = "https://www.breakingbadapi.com/api/random-death";
  const fetchDeaths = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setItems(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchDeaths();
  }, []);

  return (
    <div className="grid place-items-center">
      {isLoading && <RotateLoader color="#8be6e3" size={20}/>}
      {!isLoading && <DisplayDeaths items={items} fetchDeaths={fetchDeaths} />}
    </div>
  );
};

export default RandomDeaths;
