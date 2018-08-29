//Load HTTP module
const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {
  let responseContent = "";
  console.log("req url is: ", req.url);
  //Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  if (req.url.startsWith("/all")) {
    responseContent = handleReqAll(req.query);
    res.end(JSON.stringify(responseContent));
  } else {
    handleSuperheroApi(req.url).then(responseContent =>
      res.end(JSON.stringify(responseContent))
    );
  }
  //   res.end('{"name":"Hello World"}');
});

handleSuperheroApi = async url => {
  const options = {
    host: "superheroapi.com",
    path: url,
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  };
  const externalCallPromise = new Promise((resolve, reject) =>
    http.get(options, res => {

      let rawData = "";
      res.on("data", chunk => {
        rawData += chunk;
      });
      res.on("end", () => {
        try {
          const parsedData = JSON.parse(rawData);
          console.log(parsedData);
          resolve(parsedData);
        } catch (e) {
          console.error(e.message);
          reject(e)
        }
      });

    })
  );
  const reply = await externalCallPromise;
  console.log("Got a reply: ", reply);
  return reply;
};

handleReqAll = queryParams => {
  console.log(queryParams);
  return {
    whoa: "getting all"
  };
};

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
