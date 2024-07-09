import React, { useEffect, useState } from "react";

import "./App.css";
import { Button } from "../components/button";
import Scraper from "../modules/Scraper";

function App() {
  const [data, setData] = useState<any>([]);

  // useEffect(() => {
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

  return <Scraper />;
}

export default App;
