const stripUnusedFields = require("./apishape").stripUnusedFields;

it("strips the fields that aren't used", () => {
  expect(stripUnusedFields(sampleData)).toEqual({
    id: "1",
    name: "Shuri",
    powerstats: {
      intelligence: "100",
      strength: "14",
      speed: "30",
      durability: "9",
      power: "25",
      combat: "70"
    },
    image: {
      url: "https://image.ibb.co/hFrbCp/shuri.jpg"
    }
  });
});

const sampleData = {
  response: "success",
  id: "1",
  name: "Shuri",
  powerstats: {
    intelligence: "100",
    strength: "14",
    speed: "30",
    durability: "9",
    power: "25",
    combat: "70"
  },
  biography: {
    "full-name": "Shrui",
    "alter-egos": "Black Panther",
    aliases: ["Shuri, Griot"],
    "place-of-birth": "Wakanda",
    "first-appearance": "Black Panther #2 (May, 2005)",
    publisher: "Marvel Comics",
    alignment: "good"
  },
  appearance: {
    gender: "Female",
    race: "Human",
    height: ["5'9", "175 cm"],
    weight: ["150 lb", "68 kg"],
    "eye-color": "Brown",
    "hair-color": "Black"
  },
  work: {
    occupation: "Head of the Science and Information Exchange.",
    base: "Wakanda"
  },
  connections: {
    "group-affiliation": "Wakandan Design Group",
    relatives:
      "T'Challa (brother), Bashenga (paternal ancestor, deceased), Azzuri the Wise (paternal grandfather, deceased), Nanali (paternal grandmother, deceased), Chanda (paternal grandfather, presumably deceased), T?Chaka (father, deceased), S'Yan (uncle, deceased), N?Yami (mother, deceased), Ramonda (stepmother), Hunter (adopted brother), Jakarra (half-brother)"
  },
  image: {
    url: "https://image.ibb.co/hFrbCp/shuri.jpg"
  }
};
