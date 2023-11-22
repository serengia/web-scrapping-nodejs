const request = require("request-promise");
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const main = async () => {
  //   const html = await request.get("https://serecode.com");
  const html = await request.get(
    "https://www.istockphoto.com/search/2/image-film?family=creative&phrase=wedding"
  );
  //   const res = await axios.get("https://serecode.com");
  //   const html = res.data;

  //   const $ = cheerio.load(html);

  //   $("p").each((_, el) => {
  //     console.log($(el).text());
  //   });

  fs.writeFileSync("./content.html", html);
};

main();
