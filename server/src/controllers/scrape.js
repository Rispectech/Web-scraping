const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const { scrapeConfig } = require("../utils/scrapeConfig");

const scrapeLink = async (req, res) => {
  const link = req.body.link;
  console.log(link);
  try {
    const EMAIL_SELECTOR = "#username";
    const PASSWORD_SELECTOR = "#password";
    const SUBMIT_SELECTOR = "#organic-div > form > div.login__form_action_container > button";
    const LINKEDIN_LOGIN_URL = "https://www.linkedin.com/uas/login";

    const browser = await puppeteer.launch({ headless: true }); // i tried to do this with headless : false , but apart from external signin i am not able to get it between the redirect and the signin to get the data
    let page = await browser.newPage();
    page.setViewport({ width: 1366, height: 768 });
    await page.goto(LINKEDIN_LOGIN_URL, { waitUntil: "domcontentloaded" });
    await page.click(EMAIL_SELECTOR);
    await page.keyboard.type(process.env.USER_EMAIL);
    await page.click(PASSWORD_SELECTOR);
    await page.keyboard.type([process.env.USER_PASSWORD]);
    await page.click(SUBMIT_SELECTOR);
    await page.goto(link, {
      waitUntil: "domcontentloaded",
    });

    const content = await page.content();
    // console.log(scrapeConfig);

    const $ = cheerio.load(content); //this always redirects to the signup page and since we cant delay the process i am not able to redirect it  /

    const scrapedData = {};
    for (const [key, value] of Object.entries(scrapeConfig)) {
      // console.log(key, value);

      if (key === "description") {
        // Do stuff
        let descScrapeData = [];
        for (var i = 0; i < 5; i++) {
          let str_value = value + `> p:nth-child(${i})`;
          const textExtracted = $(str_value).text();

          if (textExtracted !== undefined) {
            const extractedWords = textExtracted.trim().split(" ");
            console.log(extractedWords);
            descScrapeData.append(extractedWords);
          } else {
            console.log("Unable to fetch results. Please try again!");
          }
        }
        scrapedData[key] = descScrapeData;
      }

      const textExtracted = $(key).text();

      if (textExtracted !== undefined) {
        const extractedWords = textExtracted.trim().split(" ");
        console.log(extractedWords);
        scrapedData[key] = extractedWords;
      } else {
        console.log("Unable to fetch results. Please try again!");
      }
    }

    res.status(200).json({ status: "success", data: scrapedData });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  scrapeLink,
};
