const path = require("path");
const fs = require("fs");

// retrieve contents from a JSON file
function loadJSONFile(filename) {
  const jsonPath = path.join(__dirname, "data", filename);
  const jsonData = fs.readFileSync(jsonPath, "utf8");
  const jsonParsed = JSON.parse(jsonData);
  return jsonParsed;
}

// get data from JSON
const artists = loadJSONFile("artists.json");
const galleries = loadJSONFile("galleries.json");
const paintingsNested = loadJSONFile("paintings-nested.json");

module.exports = {
  artists: artists,
  galleries: galleries,
  paintingsNested: paintingsNested,
};
