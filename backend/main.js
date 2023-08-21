const rp = require("request-promise");
const cheerio = require("cheerio");
const url = "https://www.viamobilidade.com.br/";
const puppeteer = require("puppeteer");
const cors = require("cors");

const express = require("express");
const app = express();
const port = 3000;

app.use(cors());

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
    const lineTitle = $(element).find("span").attr("title");
    const status = $(element).find(".status").text();

    const result = {
      title: lineTitle,
      status: status,
    };

    lines.push(result);
  });

  await browser.close();

  return lines;
}

app.get("/trens", function (req, res) {
  const trens = [
    { title: "Linha 1 - Azul" },
    { title: "Linha 2 - Verde" },
    { title: "Linha 3 - Vermelha" },
    { title: "Linha 4-Amarela" },
    { title: "Linha 5-Lilás" },
    { title: "RUBI" },
    { title: "Linha 8-Diamante" },
    { title: "Linha 9-Esmeralda" },
    { title: "TURQUESA" },
    { title: "CORAL" },
    { title: "SAFIRA" },
    { title: "JADE" },
    { title: "Linha 15 - Prata" },
  ];

  res.json(trens);
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
