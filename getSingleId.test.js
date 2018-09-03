const handleSuperheroApi = require('./getSingleId').handleSuperheroApi

/**
 * Testing with promises
 * https://jestjs.io/docs/en/asynchronous#promises
 */
test("returns a single hero object for an api request", ( done ) => {
    const url = "http://superheroapi.com/api/10156060182406596/12"
    expect.assertions(1)
    return handleSuperheroApi(url).then(data => expect(data).toEqual(expectedData))
})

const expectedData = {
    response: "success",
    id: 12,
    name: "Air-Walker",
    powerstats: {
      intelligence: 50,
      strength: 85,
      speed: 100,
      durability: 85,
      power: 100,
      combat: 40
    },
    biography: {
      "full-name": "Gabriel Lan",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth":
        "Xandar, a planet in the Tranta system, Andromeda galaxy",
      "first-appearance": "Fantastic Four #120",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'2", "188 cm"],
      weight: ["240 lb", "108 kg"],
      "eye-color": "Blue",
      "hair-color": "White"
    },
    work: {
      occupation: "Former starship captain, Herald of Galactus",
      base: "-"
    },
    connections: {
      "group-affiliation": "Former member of Nova Corps, Heralds of Galactus",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1358.jpg"
    }
  }