// All superhero info is contained in single_data_file as an array of objects, each representing one SH
const allData = require("./single_data_file").allData;
const urlLib = require("url");
const stripUnusedFields = require('./apishape').stripUnusedFields

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
  var hid1 = h1.id;
  var hid2 = h2.id;
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

exports.handleReqAll = handleReqAll