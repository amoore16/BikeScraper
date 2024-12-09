import React, { useEffect, useState } from "react";

import "./App.css";
import { Button } from "../components/button";
import Scraper from "../modules/Scraper";

function App() {
  const [data, setData] = useState<any>([]);

  return <Scraper />;
}

export default App;
