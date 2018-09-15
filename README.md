# A Server that provides information on superheroes via an api. Feel free to use it in your own projects.
Based on superheroapi.com and superherodb.com with changes to make it almost entirely local (only images are downloaded at runtime from the net).

# To use:

Clone and start the server with:

node server.js

No npm install is required since pure node functions without any additional packages have been used.

You get this when the server starts up.

```
nicky@nicky:~/workshops/server$ node server.js 
Server running
Useage:
1. To get a list of all superheroes:
http://127.0.0.1:3000/all

2. To get a limited number of them:
http://127.0.0.1:3000/all?max=10

3. To get a hero by their id:
http://127.0.0.1:3000/api/1

```
You can see all the hero json data [here](single_data_file.js)
To get an idea of what you'd receive here's the first object in that array:
```
{
    response: "success",
    id: 1,
    name: "Shuri",
    powerstats: {
      intelligence: 100,
      strength: 14,
      speed: 30,
      durability: 9,
      power: 25,
      combat: 70
    },
    biography: {
      "full-name": "Shuri",
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
    image: { url: "https://image.ibb.co/hFrbCp/shuri.jpg" }
  }
```

## Limiting the data actually sent on a call
Even though all this information is available, the typical response will only contain id, name, image, powerstats.
To change what information is sent back, check out [apiShape](apishape.js)

Note: Information on all heros was not canonically available, so several 'powerstats' have been assigned randomly. Feel free to submit a pull request for those you feel are wrong!

# To develop:

Only if you want to use jest to run the tests,

npm i

Then check out the existing tests and modify whatever you want.

To add a new feature, open an issue for discussion, always open to PR's :)

# Contributor Code Of Conduct:

https://www.contributor-covenant.org/version/1/4/code-of-conduct
