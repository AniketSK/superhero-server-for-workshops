const allData = require("./single_data_file").allData;
const urlLib = require("url");
const missingIdError = require("./errors").missingIdError;
/**
 * Handling a request for a single hero from the list
 */
getSingleHeroId = url => {
  console.log(`Url is ${url}`);
  let id = getId(url);
  const result = allData.find(i => i.id == id);
  return result ? result : missingIdError;
};

getId = url => {
  let query = urlLib.parse(url, true);
  let splitPaths = query.pathname.split("/");
  if (
    splitPaths.length == 3 &&
    splitPaths[1] == "api" &&
    Number.isInteger(Number(splitPaths[2]))
  ) {
    return Number(splitPaths[2]);
  }
};

exports.getSingleHeroId = getSingleHeroId;
