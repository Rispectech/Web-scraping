const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { scrapeRouter } = require("./src/routes/scrape");

const port = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(cors());
app.use(scrapeRouter);

const start = async () => {
  try {
    app.listen(port, () => console.log(`Server is listening at port ${port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
