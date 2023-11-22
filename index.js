const request = require("request-promise");
const cheerio = require("cheerio");
const fs = require("fs");

const main = async () => {
  const html = await request.get("https://serecode.com");

  fs.writeFileSync("./content.html", html);
};

main();
