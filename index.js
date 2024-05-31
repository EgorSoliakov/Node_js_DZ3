const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");

const dataFile = path.join(__dirname, "counter.json");
const obj = JSON.parse(fs.readFileSync(dataFile));
let count1 = obj.main;
let count2 = obj.about;
app.get("/", (req, res) => {
  res.send(
    `<h1>Главная страница.</h1><h2>Количество просмотров: ${count1}</h2><a href="/about">about</a>`
  );
  obj.main = count1++;
  fs.writeFileSync(dataFile, JSON.stringify(obj, null, 2));
});
app.get("/about", (req, res) => {
  res.send(
    `<h1>Страница "О нас".</h1><h2>Количество просмотров: ${count2}</h2><a href="/">Главная</a>`
  );
  obj.about = count2++;
  fs.writeFileSync(dataFile, JSON.stringify(obj, null, 2));
});

fs.writeFileSync(dataFile, JSON.stringify(obj, null, 2));
/*
`<h1>Главная страница.</h1><h2>Количество просмотров: ${count}</h2><a href="/about">about</a>`
`<h1>Страница "О нас".</h1><h2>Количество просмотров: ${count}</h2><a href="/">Главная</a>
*/
const port = 3001;

app.listen(port, () => {
  console.log(`Server started fo port ${port}`);
});
