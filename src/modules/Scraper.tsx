import React, { useState } from "react";
import { Button } from "../components/button";
import ScraperService from "../services/ScraperService";
import useFetch from "../hooks/useFetch";

type Props = {};

const Scraper = (props: Props) => {
  const baseUrl = "http://localhost:3000/scraper/bikesOnline/";
  const [bikeType, setBikeType] = React.useState<string>();

  const [fetchProps, setFetchProps] = React.useState({
    url: baseUrl + "road",
    method: "GET",
  });

  const { data, isPending, error } = useFetch(fetchProps);
  console.log(data, isPending, error);

  const clickHandler = (data: string) => {
    setFetchProps((fetchProps) => ({ ...fetchProps, url: baseUrl + data }));
    setBikeType(data);
  };

  return (
    <>
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
          {isPending ? (
            <div> Loading...</div>
          ) : (
            <div> {JSON.stringify(data)}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Scraper;
