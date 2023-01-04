/*

    ib-embed-helper
    2023-01-03 [17:12]
    
    Reformats Inkbunny submission embeds to
    be similar to that of e621.net's scheme

    Contributors:
        cwillsey06

*/

import http from "http";
// import secrets from "./secrets.json";

const port = 8080;

const server = http.createServer((req, res) => {
  res.write("Hello, world!");
  res.end();
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
