import React from "react";
import useFetch from "../hooks/useFetch";

type Props = {
  bikeType: string;
};

const ScraperService = (props: Props) => {
  const { bikeType } = props;

  //   const api = async () => {
  //     const fetchdata = await fetch("http://localhost:3000/scraper/", {
  //       method: "GET",
  //     });
  //     const jsonData = await fetchdata.json();
  //     setData(jsonData.message);
  //   };
  //   console.log("inside");
  //   api();
  // }, []);

  return <div>ScraperService</div>;
};

export default ScraperService;
