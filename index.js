const express = require("express");
const bunyan = require("bunyan");
const app = express();
const port = 3000;
const log = bunyan.createLogger({name: "test_app"});

app.get("/", (req, res) => {
  log.info(req.headers);
  res.send("Hello World!");
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});