require("dotenv").config({ path: "./config.env" });
const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");
const { response } = require("express");
const fs = require("fs");
const PDFDocument = require("pdfkit");

const app = express();
const PORT = 8000;
const url = "https://www.larazon.es/";

const pdfDoc = new PDFDocument();
pdfDoc.pipe(fs.createWriteStream("./pages/Scraped.pdf"));

//Get HTML using axios API
try {
  axios(url).then((response) => {
    const html = response.data;
    const cheerioHtml = cheerio.load(html);

    //Get HTML item using its class
    cheerioHtml(".card", html).each(function () {
      const title = cheerioHtml(this).find(".card__headline").text();
      const subtitle = cheerioHtml(this).find(".card__subheadline").text();
      const link = cheerioHtml(this)
        .find(".card__headline")
        .find("a")
        .attr("href");
      pdfDoc
        .font("Helvetica-Bold")
        .text(title, {
          align: "justify",
        })
        .font("Helvetica");
      pdfDoc.text(subtitle, {
        align: "justify",
      });
      pdfDoc
        .fillColor("blue")
        .text(link, {
          link: `${link}`,
          align: "justify",
        })
        .fillColor("black");
      pdfDoc.moveDown();
    });
    pdfDoc.end();
  });
} catch (err) {
  console.log(err);
}

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
