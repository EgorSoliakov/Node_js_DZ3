const fs = require("fs");
const path = require("path");

const dataFile = path.join(__dirname, "counter.json");

const obj = {
  main: 0,
  about: 0,
};

fs.writeFileSync(dataFile, JSON.stringify(obj, null, 2));
