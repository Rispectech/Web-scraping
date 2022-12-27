import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles.css";

const Scrape = ({ scrapeData }: ScrapeDataType) => {
  return (
    <section className="tasks-container">
      {scrapeData["profile"] === "" ? (
        <div className="tasks">No data scrap found</div>
      ) : (
        <section>
          {Object.keys(scrapeData).map((onekey, i) => {
            return (
              <div>
                {onekey} : {onekey[i]}
              </div>
            );
          })}
        </section>
      )}
    </section>
  );
};

export default Scrape;
