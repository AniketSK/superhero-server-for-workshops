// All superhero info is contained in single_data_file as an array of objects, each representing one SH
const allData = require("./single_data_file").allData;

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
  let max = getMax(url);
  return {
    superheroes: allData.slice(0, max).map(stripUnusedFields)
  };
};

/**
 * Get the number value for the url-parameter 'max'
 */
getMax = url => {
  // in a url like /all?max=100, look for the word 'max=' and find all the numbers after the equals.
  const regex1 = /max=([0-9]*)/;
  const match = regex1.exec(url);
  // it's possible that max isn't present in the url at all, for instance in the url /all
  if (match != null) {
    return match[1];
  }
};

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(useageInfo);
});
