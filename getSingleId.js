const http = require("http");
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

exports.handleSuperheroApi = handleSuperheroApi;
