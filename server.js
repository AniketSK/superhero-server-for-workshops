// All superhero info is contained in single_data_file as an array of objects, each representing one SH
const allData = require("./single_data_file").allData;

//Load HTTP module
const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;
const urlLib = require("url");

// What to tell people in both the console and the root of the webserver when no api is called.
const useageInfo = `Server running
Useage:
1. To get a list of all superheroes:
http://${hostname}:${port}/all

2. To get a limited number of them:
http://${hostname}:${port}/all?max=10

3. To get a hero by their id:
http://${hostname}:${port}/<your access token>/1`;

/**
 * The hero object contains a lot of data, returning all of this can make the json more difficult to read and complicate
 * learning.
 * Decide which fields to keep so the response is uncluttered and easy to read.
 * @param {id, name, image, powerstats, ...} hero
 */
const stripUnusedFields = hero => {
  // All the fields mentioned here are just the ones to keep.
  const { id, name, image, powerstats } = hero;
  return { id, name, image, powerstats };
};

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {
  let responseContent = "";
  console.log("req url is: ", req.url);
  //Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  // Cross Origin Resource Sharing headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  if (req.url.startsWith("/all")) {
    responseContent = handleReqAll(req.url);
    res.end(JSON.stringify(responseContent));
  } else if (req.url == "/favicon.ico") {
    /* no favicons */
  } else if (req.url == "/") {
    res.end(useageInfo);
  } else {
    handleSuperheroApi(req.url).then(responseContent =>
      res.end(JSON.stringify(stripUnusedFields(responseContent)))
    );
  }
});

/**
 * Response for when a request has to be forwarded to the suberheroapi.com and that response should be passed back
 * to the caller.
 * This is achived by:
 * 1. Preparing a Promise that represents the external call.
 * 2. Waiting until the promise completes.
 * 3. Then returning that data.
 */
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

/**
 * Response for a request for all characters.
 */
handleReqAll = url => {
  let max = getParam("max", url);
  let start = getParam("start", url);
  let end = getParam("end", url);
  let gender = getParam("gender", url);
  return {
    superheroes: allData
      .sort(compare)
      .filter( h => gender ? h.appearance.gender.toLowerCase() == gender.toLowerCase() : true)
      .slice(start, max ? max : end)
      .map(stripUnusedFields)
  };
};

compare = (h1, h2) => {
  var hid1 = Number(h1.id);
  var hid2 = Number(h2.id);
  if (hid1 == hid2) {
    return 0;
  } else if (hid1 < hid2) {
    return -1;
  } else {
    return 1;
  }
};

/**
 * Get the value for url-parameters.
 * Each param is assiged a regex and it's looked for in the url.
 * Beware of params that are partial matches.
 */
getParam = (param, url) => {
  let query = urlLib.parse(url, true).query;
  return query[param];
};

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(useageInfo);
});
