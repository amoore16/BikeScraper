import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const api = async () => {
      const fetchdata = await fetch("http://localhost:3000/hello", {
        method: "GET",
      });
      const jsonData = await fetchdata.json();
      console.log(jsonData);
      setData(jsonData.message);
    };

    api();
  }, []);

  console.log(data);

  return (
    <div className="App">
      <div>{data ? data : "Loading..."}</div>
    </div>
  );
}

export default App;
