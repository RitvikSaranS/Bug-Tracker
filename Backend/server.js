const express = require("express");
const cors = require("cors");
const usersQuery = require("./db/db-controllers/usersDbController");
const bugsQuery = require("./db/db-controllers/bugsDbController");

const app = express();
const port = 3000;

app.use(cors());

app.get("/users", (req, res) => {
  usersQuery("SELECT", "SELECT * FROM Users")
    .then(
      (x) => res.json(x),
      (err) => console.log(err)
    )
    .catch((error) => {
      console.error(error);
    });
});

app.get("/bugs", (req, res) => {
  bugsQuery("SELECT", "SELECT * FROM Bugs")
    .then(
      (x) => res.json(x),
      (err) => console.log(err)
    )
    .catch((error) => {
      console.error(error);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
