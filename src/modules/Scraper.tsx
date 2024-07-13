import React, { useState } from "react";
import { Button } from "../components/button";
import ScraperService from "../services/ScraperService";
import useFetch from "../hooks/useFetch";
import BikeList from "./BikeList";

type Props = {};

const Scraper = (props: Props) => {
  const baseUrl = "http://localhost:3000/scraper/roadBikes/";
  const trekUrl = "http://localhost:3000/scraper/trek/";
  const [bikeType, setBikeType] = React.useState<string>();

  const [fetchProps, setFetchProps] = React.useState({
    url: baseUrl,
    method: "GET",
  });

  const { data, isPending, error } = useFetch(fetchProps);
  console.log(data);
  const clickHandler = (data: string) => {
    setFetchProps((fetchProps) => ({ ...fetchProps, url: baseUrl }));
    // setBikeType(data);
  };

  return (
    <div className="container">
      <div className="container">
        <div className="box">
          <Button
            text="Road"
            onClickHandler={() => clickHandler("road")}
          ></Button>
          <Button
            text="Gravel"
            onClickHandler={() => clickHandler("gravel")}
          ></Button>
          <Button
            text="Mountain"
            onClickHandler={() => clickHandler("hardtail")}
          ></Button>
        </div>
      </div>
      <div
        className="container
      "
      >
        <div className="box">
          {isPending && data ? (
            <div> Loading...</div>
          ) : (
            <BikeList bikeList={data} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Scraper;
