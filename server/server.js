const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

//use middleware
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => res.send("Hello"));
//mongodb connection
const con = require("./db/connection");
con
  .then((db) => {
    if (!db) return process.exit(1);

    //litsen to http port
    app.listen(port, () => {
      console.log("Server is running");
    });

    app.on("error", (err) => {
      console.log(`Failed to connect to the server ${err}`);
    });
  })
  .catch("error", (err) => console.log(`Connection Failed ! ...${err}`));

//using routes
app.use(require("./routes/route"));
