const cheerio = require("cheerio");
const puppeteer = require("puppeteer");
const cors = require("cors");
const express = require("express");
const data = require("./data/db.json");

const url = "https://www.viamobilidade.com.br/";
const port = 8080;

const app = express();
app.use(cors());

app.get("/trens", function (req, res) {
  res.json(data.lines);
});

app.get("/trens/status", function (req, res) {
  (async () => {
    const result = await getWebData();
    res.json(result);
  })();
});

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

async function getWebData() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(url);

  const pageData = await page.evaluate(() => {
    return {
      html: document.documentElement.innerHTML,
    };
  });

  const $ = cheerio.load(pageData.html);

  const statusesLines = $(".line-wrapper li");

  const lines = [];
  statusesLines.each((index, element) => {
    const title = $(element).find("span").attr("title");
    const color = $(element).find("span").css("background-color");
    const status = $(element).find(".status").text();

    const result = {
      title,
      status,
      color,
    };

    lines.push(result);
  });

  await browser.close();

  return lines;
}
