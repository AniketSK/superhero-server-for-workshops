const allData = require("./single_data_file").allData;
const urlLib = require("url");

/**
 * Handling a request for a single hero from the list
 */
handleSuperheroApi = url => {
    console.log(`Url is ${url}`)
    let id = getId(url)
    console.log(`Id is ${id}`)
    return allData.find(i => i.id == id);
}

getId = (url) => {
    let query = urlLib.parse(url, true);
    let splitPaths = query.pathname.split('/')
    if (splitPaths.length == 3 && splitPaths[1] == 'api' && Number.isInteger(Number(splitPaths[2]))) {
        return Number(splitPaths[2])
    }
}

exports.handleSuperheroApi = handleSuperheroApi;
