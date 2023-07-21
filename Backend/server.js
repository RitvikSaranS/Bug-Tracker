const express = require("express");
const usersQuery = require("./db/db-controllers/usersDbController");

const app = express();
const port = 3000;

app.get("/users", (req, res) => {
  res.json(usersQuery("SELECT", "SELECT * FROM Users"));
  res.end();
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
