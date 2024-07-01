import React, { useEffect, useState } from "react";

import "./App.css";

import Button from "./button";

function App() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const api = async () => {
      const fetchdata = await fetch("http://localhost:3000/scraper", {
        method: "GET",
      });
      const jsonData = await fetchdata.json();
      setData(jsonData.message);
    };
    console.log("inside");
    api();
  }, []);

  console.log("outside");

  return (
    <div className="container">
      <div className="box">
        {data ? data : "Loading..."}
        <Button></Button>
      </div>
    </div>
  );
}

export default App;
