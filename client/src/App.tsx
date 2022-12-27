import React, { useEffect, useState } from "react";
import Form from "./Components/Form";
import "./App.css";
import Scrape from "./Components/Scrape";
import axios from "axios";

function App() {
  const [scrapData, setScrapeData] = useState({
    profile: "",
    company: "",
    location: "",
    workingType: "",
    type: "",
    description: [""],
  });
  const [loading, setLoading] = useState(false);

  const getScrapeData = async (link: string) => {
    if (loading === false) {
      try {
        console.log("sending request");
        setLoading(true);
        const res = await axios.post("http://localhost:8000/api/scrape", {
          link,
        });
        console.log(res);
        setScrapeData(res.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="App">
      <Form getScrapeData={getScrapeData} />
      <Scrape scrapeData={scrapData} />
    </div>
  );
}

export default App;
