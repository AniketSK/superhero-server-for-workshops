const allData = require("./single_data_file").allData;

test("all required fields present", () => {
  const numNulls = allData.filter(
    h =>
      h.powerstats.intelligence == null ||
      h.powerstats.combat == null ||
      h.powerstats.durability == null ||
      h.powerstats.power == null ||
      h.powerstats.speed == null ||
      h.powerstats.strength == null ||
      h.name == null ||
      h.image.url == null
  );
  expect(numNulls.length).toBe(0);
});

/**
 * This test is misused to set random values for the superheroes who had missing stats!
 */
test.skip("generate random values for missing powers", () => {
  const maybeAssigned = allData.map(h => {
    h.powerstats = assignIfNull(h.powerstats);
    return h;
  });

  const numNulls = maybeAssigned.filter(
    h =>
      h.powerstats.intelligence == null ||
      h.powerstats.combat == null ||
      h.powerstats.durability == null ||
      h.powerstats.power == null ||
      h.powerstats.speed == null ||
      h.powerstats.strength == null ||
      h.name == null ||
      h.image.url == null
  );
  expect(numNulls.length).toBe(0);
  expect(maybeAssigned[0].powerstats.intelligence).toBe(100)
  expect(maybeAssigned[0].powerstats.strength).toBe(14)
  expect(maybeAssigned[0].powerstats.speed).toBe(30)
  expect(maybeAssigned[0].powerstats.durability).toBe(9)
  expect(maybeAssigned[0].powerstats.power).toBe(25)
  expect(maybeAssigned[0].powerstats.combat).toBe(70)
  var json = JSON.stringify(maybeAssigned)
  var fs = require('fs')
  fs.writeFileSync('replacement_single_data_file.js', json, 'utf8')
});

assignIfNull = powerstats => {
  for (val in powerstats) {
    if (!powerstats[val]) {
      powerstats[val] = Math.floor(Math.random() * 100);
    //   console.log(`assigning ${val} to ${powerstats[val]}`)
    }
  }
  return powerstats;
};
