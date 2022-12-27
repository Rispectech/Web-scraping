const express = require("express");
const { scrapeLink } = require("../controllers/scrape");
const scrapeRouter = express.Router();

scrapeRouter.route("/api/scrape").post(scrapeLink);

module.exports = {
  scrapeRouter,
};
