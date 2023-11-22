const request = require("request-promise");
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const main = async () => {
  //   const html = await request.get("https://serecode.com");
  const res = await axios.get("https://serecode.com");
  const html = res.data;

  fs.writeFileSync("./content.html", html);
};

main();
