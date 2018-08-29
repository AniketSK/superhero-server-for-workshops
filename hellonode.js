const allData = require("./single_data_file").allData;

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
    responseContent = handleReqAll(req.url);
    res.end(JSON.stringify(responseContent));
  } else if (req.url == "/favicon.ico") {
    /* no favicons */
  } else {
    handleSuperheroApi(req.url).then(responseContent =>
      res.end(JSON.stringify(responseContent))
    );
  }
});

handleSuperheroApi = async url => {
  const options = {
    host: "superheroapi.com",
    path: url.replace("/api", "/api.php"),
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
          resolve(parsedData);
        } catch (e) {
          console.error(e.message);
          reject(e);
        }
      });
    })
  );
  const reply = await externalCallPromise;
  return reply;
};

handleReqAll = url => {
  let max = getMax(url);
  return {
    superheroes: allData.slice(0, max)
  };
};

getMax = url => {
  const regex1 = /max=([0-9]*)/;
  const match = regex1.exec(url);
  if (match != null) {
    return match[1];
  }
};

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/
  Useage:
  1. To get a list of all superheroes:
  http://${hostname}:${port}/all

  2. To get a limited number of them:
  http://${hostname}:${port}/all?max=10

  3. To get a hero by their id:
  http://${hostname}:${port}/<your access token>/1`);
});
