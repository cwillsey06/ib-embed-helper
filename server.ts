/*

    ib-embed-helper
    2023-01-03 [17:12]
    
    Reformats Inkbunny submission embeds to
    be similar to that of e621.net's scheme

    Contributors:
        cwillsey06

*/

import * as secrets from "./secrets.js";
import express from "express";

const username = secrets.default.username;
const password = secrets.default.password;
const port = 8080;

const app = express();
app.get("/", (req, res) => {
  res.write(`username: ${username}\n`);
  res.write(`password: ${password}\n`);
  res.end();
});

app.listen(port);
