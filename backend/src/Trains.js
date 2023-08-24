const cheerio = require("cheerio");
const dayjs = require("dayjs");
const customParserFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParserFormat);
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
        const locale = "pt-br";
        const dateOption = {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        };
        const updated_at = new Date().toLocaleDateString(locale, dateOption);

        const result = {
          title,
          status,
          color,
          updated_at,
        };

        lines.push(result);
      });

      return lines;
    });
}

module.exports = {
  getWebData,
};
