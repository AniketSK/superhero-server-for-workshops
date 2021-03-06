const handleReqAll = require("./localrequests").handleReqAll;
const getSingleHeroId = require("./getSingleId").getSingleHeroId;
const stripUnusedFields = require("./apishape").stripUnusedFields;
const imageHandling = require("./imageHandler").imageHandling
//Load HTTP module
const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

// What to tell people in both the console and the root of the webserver when no api is called.
const useageInfo = `Server running
Useage:
1. To get a list of all superheroes:
http://${hostname}:${port}/all

2. To get a limited number of them:
http://${hostname}:${port}/all?max=10

3. To get a hero by their id:
http://${hostname}:${port}/api/1

`;

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {
  let responseContent = "";
  console.log("req url is: ", req.url);
  //Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  // Cross Origin Resource Sharing headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  if (req.url.startsWith("/all")) {
    responseContent = handleReqAll(req.url);
    res.end(JSON.stringify(responseContent));
  } else if (req.url == "/favicon.ico") {
    /* no favicons */
  } else if (req.url == "/") {
    res.end(useageInfo);
  } else if (req.url.startsWith("/api")) {
    res.end(JSON.stringify(stripUnusedFields(getSingleHeroId(req.url))));
  } else {
    imageHandling(req, res);
  }
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(useageInfo);
});
