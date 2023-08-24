const cheerio = require("cheerio");

const url = "https://www.viamobilidade.com.br/";

async function getWebData() {
  return fetch(url)
    .then((response) => response.text())
    .then((html) => {
      const $ = cheerio.load(html);
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

      return lines;
    });
}

module.exports = {
  getWebData,
};
