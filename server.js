/*

    ib-embed-helper
    2023-01-03 [17:12]
    
    Reformats Inkbunny submission embeds to
    be similar to that of e621.net's scheme

    Contributors:
        cwillsey06

*/

const express = require("express");
const app = express();

const port = 3000;
const username = "",
  password = "";

app.get("/", (req, res) => {
  console.log("Here");
  res.status(500).json({
    message: "Invalid credentials",
  });
});

app.listen(port);
