const allData = [
  {
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
      occupation:
        "Head of the Science and Information Exchange.",
      base: "Wakanda"
    },
    connections: {
      "group-affiliation": "Wakandan Design Group",
      relatives: "T'Challa (brother), Bashenga (paternal ancestor, deceased), Azzuri the Wise (paternal grandfather, deceased), Nanali (paternal grandmother, deceased), Chanda (paternal grandfather, presumably deceased), T?Chaka (father, deceased), S'Yan (uncle, deceased), N?Yami (mother, deceased), Ramonda (stepmother), Hunter (adopted brother), Jakarra (half-brother)"
    },
    image: {
      url: "https://image.ibb.co/hFrbCp/shuri.jpg"
    }
  },
  {
    response: "success",
    id: "2",
    name: "A-Bomb",
    powerstats: {
      intelligence: "38",
      strength: "100",
      speed: "17",
      durability: "80",
      power: "24",
      combat: "64"
    },
    biography: {
      "full-name": "Richard Milhouse Jones",
      "alter-egos": "No alter egos found.",
      aliases: ["Rick Jones"],
      "place-of-birth": "Scarsdale, Arizona",
      "first-appearance": "Hulk Vol 2 #2 (April, 2008) (as A-Bomb)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'8", "203 cm"],
      weight: ["980 lb", "441 kg"],
      "eye-color": "Yellow",
      "hair-color": "No Hair"
    },
    work: {
      occupation: "Musician, adventurer, author; formerly talk show host",
      base: "-"
    },
    connections: {
      "group-affiliation":
        "Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom",
      relatives:
        "Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10060.jpg"
    }
  },
  {
    response: "success",
    id: "10",
    name: "Agent Bob",
    powerstats: {
      intelligence: "10",
      strength: "8",
      speed: "13",
      durability: "5",
      power: "5",
      combat: "20"
    },
    biography: {
      "full-name": "Bob",
      "alter-egos": "No alter egos found.",
      aliases: ["Bob", "agent of Hydra", "Bob", "agent of A.I.M"],
      "place-of-birth": "-",
      "first-appearance": "Cable & Deadpool #38 (May, 2007)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'10", "178 cm"],
      weight: ["181 lb", "81 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: {
      occupation: "Mercenary, janitor; former pirate, terrorist",
      base: "Mobile; formerly Manhattan, Hellcarrier"
    },
    connections: {
      "group-affiliation": "A.I.M., Deadpool; formerly Agency X, Hydra",
      relatives: "Allison (ex-wife); Terry and Howie (sons)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10255.jpg"
    }
  },
  {
    response: "success",
    id: "100",
    name: "Black Flash",
    powerstats: {
      intelligence: "44",
      strength: "10",
      speed: "100",
      durability: "80",
      power: "100",
      combat: "30"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Barry Allen",
        "Flashback",
        "Slow Lightning",
        "Black Racer",
        "Death Flash",
        "God of Death"
      ],
      "place-of-birth": "-",
      "first-appearance": "Flash Vol 2 #138",
      publisher: "DC Comics",
      alignment: "neutral"
    },
    appearance: {
      gender: "Male",
      race: "God / Eternal",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10831.jpg"
    }
  },
  {
    response: "success",
    id: "101",
    name: "Black Goliath",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/245.jpg"
    }
  },
  {
    response: "success",
    id: "102",
    name: "Black Knight III",
    powerstats: {
      intelligence: "63",
      strength: "10",
      speed: "8",
      durability: "70",
      power: "43",
      combat: "70"
    },
    biography: {
      "full-name": "Dane Whitman",
      "alter-egos": "No alter egos found.",
      aliases: ["The Pendragon", "Gann Josin", "Eobar Garrington"],
      "place-of-birth": "Gloucester, Massachusetts",
      "first-appearance": "Avengers #47 (1967)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'0", "183 cm"],
      weight: ["190 lb", "86 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: { occupation: "Adventurer, scientist; former crusader", base: "-" },
    connections: {
      "group-affiliation":
        "MI-13; formerly Avengers, Masters of Evil (as a mole), Excalibur, Heroes for Hire, Ultraforce (in the Ultraverse), Defenders, Knights of Wundagore, Queen's Vengeance, King Richard's Army",
      relatives:
        "Nathan Garrett (Black Knight II, uncle, deceased); Sir Percy of Scandia (Black Knight), Sir Raston, Eobar Garrington (Black Knights of past eras, ancestors, deceased); Lady Rosamund, Edward, Geoffrey (ancestral relations, presumed deceased); Dafydd ap Iowerth, Arthur Pendragon, Mordred the Evil, Morgan Le Fay (distant ancestral relations)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/246.jpg"
    }
  },
  {
    response: "success",
    id: "103",
    name: "Black Lightning",
    powerstats: {
      intelligence: "50",
      strength: "11",
      speed: "53",
      durability: "28",
      power: "70",
      combat: "75"
    },
    biography: {
      "full-name": "Jefferson Pierce",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Black Lightning #1 (April 1977)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'1", "185 cm"],
      weight: ["200 lb", "90 kg"],
      "eye-color": "Brown",
      "hair-color": "No Hair"
    },
    work: {
      occupation:
        "Crime Fighter, High School teacher, Former gold-medal-winning Olympic Decathlete, formerly Secretary of Education under Presidents Pete Ross and Lex Luthor.",
      base: "Chicago, Illinois; Metropolis, The Hall & The JLA Watchtower"
    },
    connections: {
      "group-affiliation":
        "Justice League of America (current), formerly Presidential Cabinet, The Outsiders (sporadically), Batman's Brother Eye attack group",
      relatives:
        "Unnamed father (deceased), Lynn Stewart (ex-wife), Joanna Pierce (niece, deceased), Anissa Pierce (Thunder, daughter), Jennifer Pierce (Lightning, daughter)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1128.jpg"
    }
  },
  {
    response: "success",
    id: "104",
    name: "Black Mamba",
    powerstats: {
      intelligence: "75",
      strength: "10",
      speed: "35",
      durability: "42",
      power: "88",
      combat: "65"
    },
    biography: {
      "full-name": "Tanya Sealy",
      "alter-egos": "No alter egos found.",
      aliases: ["Tanya Sweet"],
      "place-of-birth": "Chicago, Illinois",
      "first-appearance": "Marvel Two-In-One #64",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'7", "170 cm"],
      weight: ["115 lb", "52 kg"],
      "eye-color": "Green",
      "hair-color": "Black"
    },
    work: {
      occupation: "Mercenary, professional criminal, former call girl",
      base: "Mobile, formerly Serpent Citadel"
    },
    connections: {
      "group-affiliation": "Serpent Squad, Serpent Society, BAD Girls",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1106.jpg"
    }
  },
  {
    response: "success",
    id: "105",
    name: "Black Manta",
    powerstats: {
      intelligence: "75",
      strength: "28",
      speed: "50",
      durability: "60",
      power: "76",
      combat: "85"
    },
    biography: {
      "full-name": "David",
      "alter-egos": "No alter egos found.",
      aliases: ["Devil Ray", "Scourge of the Seven Seas", "Yellow Lantern"],
      "place-of-birth": "-",
      "first-appearance": "Aquaman #35 (August, 1967)",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'2", "188 cm"],
      weight: ["205 lb", "92 kg"],
      "eye-color": "Black",
      "hair-color": "No Hair"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10546.jpg"
    }
  },
  {
    response: "success",
    id: "106",
    name: "Black Panther",
    powerstats: {
      intelligence: "88",
      strength: "16",
      speed: "30",
      durability: "60",
      power: "41",
      combat: "100"
    },
    biography: {
      "full-name": "T'Challa",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Mr. Okonkwo",
        "The Man Without Fear",
        "Luke Charles",
        "Black Leopard",
        "the Client",
        "Coal Tiger",
        "has impersonated Daredevil and others on occasion"
      ],
      "place-of-birth": "Wakanda, Africa",
      "first-appearance": "Fantastic Four Vol. 1 #52 (1966)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'0", "183 cm"],
      weight: ["200 lb", "90 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: {
      occupation:
        "King and Chieftain of Wakanda, scientist; former school teacher",
      base: "Wakanda, Mobile"
    },
    connections: {
      "group-affiliation":
        "Formerly Fantastic Four, Secret Avengers, Avengers, Pendragons, Queen's Vengeance, former Fantastic Force financier",
      relatives:
        "Bashenga (paternal ancestor, deceased), Azzuri the Wise (paternal grandfather, deceased), Nanali (paternal grandmother, deceased), Chanda (paternal grandfather, presumably deceased), T?Chaka (father, deceased), S'Yan (uncle, deceased), N?Yami (mother, deceased), Ramonda (stepmother), Hunter (adopted brother), Jakarra (half-brother), Shuri (sister), Ororo Munroe (wife), Joshua Itobo, Ishanta, Zuni, M'Koni, T'Shan (cousins), Wheeler (cousin by marriage, deceased), Billy Wheeler (1st cousin once removed)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/247.jpg"
    }
  },
  {
    response: "success",
    id: "107",
    name: "Black Widow",
    powerstats: {
      intelligence: "75",
      strength: "13",
      speed: "33",
      durability: "30",
      power: "36",
      combat: "100"
    },
    biography: {
      "full-name": "Natasha Romanoff",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Yelena Belova",
        "Natasha Romanoff",
        "Natasha",
        "Tasha",
        "Madame Natasha",
        "Nancy Rushman",
        "Laura Matthers",
        "Nadine Roman",
        '"Oktober"',
        "Black Pearl",
        "Ebon Flame"
      ],
      "place-of-birth": "-",
      "first-appearance": "Tales of Suspense #52",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["5'7", "170 cm"],
      weight: ["131 lb", "59 kg"],
      "eye-color": "Green",
      "hair-color": "Auburn"
    },
    work: {
      occupation: "Adventurer, Intelligence agent, former ballerina",
      base: "Mobile"
    },
    connections: {
      "group-affiliation":
        'Secret Avengers; formerly Thunderbolts (as Yelena Belova), Nick Fury, Mighty Avengers, S.H.I.E.L.D., Avengers, Champions of Los Angeles, Lady Liberators, KGB, "Marvel Knights", partner of Daredevil, Hawkeye, Boris Turgenov, Logan',
      relatives:
        "Unnamed parents (presumed deceased); Alexi Shostakov (Red Guardian, estranged husband); Vindiktor (alleged brother, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/248.jpg"
    }
  },
  {
    response: "success",
    id: "108",
    name: "Black Widow II",
    powerstats: {
      intelligence: "null",
      strength: "48",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Yelena Belova",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'7'", "170 cm"],
      weight: ["135 lb", "61 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/618.jpg"
    }
  },
  {
    response: "success",
    id: "109",
    name: "Blackout",
    powerstats: {
      intelligence: "63",
      strength: "32",
      speed: "45",
      durability: "80",
      power: "45",
      combat: "65"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Ghost Rider Vol 3 #2 (June, 1990)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Demon",
      height: ["6'3", "191 cm"],
      weight: ["230 lb", "104 kg"],
      "eye-color": "Red",
      "hair-color": "White"
    },
    work: { occupation: "Assassin, enforcer", base: "-" },
    connections: {
      "group-affiliation": "Lilin; Deathwatch; Hood's gang",
      relatives: "Lilith (Great Grandmother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1507.jpg"
    }
  },
  {
    response: "success",
    id: "11",
    name: "Agent Zero",
    powerstats: {
      intelligence: "75",
      strength: "28",
      speed: "38",
      durability: "80",
      power: "72",
      combat: "95"
    },
    biography: {
      "full-name": "Christoph Nord",
      "alter-egos": "No alter egos found.",
      aliases: ["Maverick"],
      "place-of-birth": "Unrevealed location in former East Germany",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'3", "191 cm"],
      weight: ["230 lb", "104 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: {
      occupation: "Mercenary, former government operative, freedom fighter",
      base: "-"
    },
    connections: {
      "group-affiliation":
        "Formerly Weapon X, Weapon Plus, Team X, Cell Six, former bodyguard of Psi-Borg, former agent of Major Barrington",
      relatives:
        "Unidentified parents (deceased), Andreas Nord (brother, deceased), Ginetta Lucia Barsalini (wife, deceased), unnamed child (deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/396.jpg"
    }
  },
  {
    response: "success",
    id: "110",
    name: "Blackwing",
    powerstats: {
      intelligence: "38",
      strength: "10",
      speed: "35",
      durability: "32",
      power: "20",
      combat: "56"
    },
    biography: {
      "full-name": "Joseph Manfredi",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Blackwing",
        "Joe Manfredi",
        "Joe Silvermane",
        "Guiseppi Manfredi"
      ],
      "place-of-birth": "Professional Criminal",
      "first-appearance": "Daredevil #118 (February, 1975)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'1", "185 cm"],
      weight: ["190 lb", "86 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation":
        "Heavy Mettle; (formerly) Masters of Evil, Skeleton Crew, Circus of Crime; (formerly) division leader of Hydra",
      relatives:
        "Silvio Manfredi (Silvermane, father), Caterina Manfredi (mother, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/249.jpg"
    }
  },
  {
    response: "success",
    id: "111",
    name: "Blackwulf",
    powerstats: {
      intelligence: "50",
      strength: "28",
      speed: "8",
      durability: "30",
      power: "69",
      combat: "25"
    },
    biography: {
      "full-name": "Lucian",
      "alter-egos": "No alter egos found.",
      aliases: ["Pelops", "Black Wolf"],
      "place-of-birth": "Armechadon",
      "first-appearance": "Thunderstrike #6 (March, 1994)",
      publisher: "Marvel Comics",
      alignment: "-"
    },
    appearance: {
      gender: "Male",
      race: "Alien",
      height: ["6'2", "188 cm"],
      weight: ["195 lb", "88 kg"],
      "eye-color": "Red",
      "hair-color": "White"
    },
    work: { occupation: "Freedom Fighter", base: "-" },
    connections: {
      "group-affiliation": "Underground Legion",
      relatives:
        "Tantalus (father); Nirvana (mother); Pelops (brother, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1508.jpg"
    }
  },
  {
    response: "success",
    id: "112",
    name: "Blade",
    powerstats: {
      intelligence: "63",
      strength: "28",
      speed: "38",
      durability: "50",
      power: "40",
      combat: "90"
    },
    biography: {
      "full-name": "Eric Brooks",
      "alter-egos": "No alter egos found.",
      aliases: ["Switchblade", "Frank Blade", "Daywalker"],
      "place-of-birth": "Soho, London,England",
      "first-appearance": "Tomb of Dracula Vol. 1 #10 (1973)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Vampire",
      height: ["6'2", "188 cm"],
      weight: ["215 lb", "97 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: {
      occupation: "Vampire hunter, former private investigator.",
      base: "Mobile"
    },
    connections: {
      "group-affiliation":
        "Formerly Noah van Helsing's vampire hunters, Nightstalkers, Midnight Sons, the Nine, Quincy Harker's vampire hunters, Ogun Strong's vampire hunters, Bloodshadows gang",
      relatives: "Tara Brooks (mother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/33.jpg"
    }
  },
  {
    response: "success",
    id: "113",
    name: "Blaquesmith",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "-",
      "alter-egos": "Vertigo II",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Vertigo II",
      alignment: "good"
    },
    appearance: {
      gender: "-",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Black",
      "hair-color": "No Hair"
    },
    work: { occupation: "Inventor", base: "Baltimore, Maryland" },
    connections: {
      "group-affiliation": "Clan Askani/Clan Chosen",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/34.jpg"
    }
  },
  {
    response: "success",
    id: "114",
    name: "Bling!",
    powerstats: {
      intelligence: "69",
      strength: "14",
      speed: "12",
      durability: "90",
      power: "52",
      combat: "28"
    },
    biography: {
      "full-name": "Roxanne Washington",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "X-Men #171 (2005)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'6", "168 cm"],
      weight: ["152 lb", "68 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: {
      occupation: "-",
      base:
        "Utopia; formerly Graymalkin Industries, San Francisco, California; Xavier Institute, Salem Center, New York State"
    },
    connections: {
      "group-affiliation": "-",
      relatives:
        'Roy "Daddy Libido" Washington (father), Angel "Sexy Mutha" Depres (mother)'
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1349.jpg"
    }
  },
  {
    response: "success",
    id: "115",
    name: "Blink",
    powerstats: {
      intelligence: "50",
      strength: "8",
      speed: "20",
      durability: "28",
      power: "77",
      combat: "64"
    },
    biography: {
      "full-name": "Clarice Ferguson",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Bahamas",
      "first-appearance": "Uncanny X-Men #317 (October, 1994)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Mutant",
      height: ["5'5", "165 cm"],
      weight: ["125 lb", "56 kg"],
      "eye-color": "Green",
      "hair-color": "Magenta"
    },
    work: {
      occupation: "Adventurer, freedom fighter",
      base:
        "Jean Grey School for Higher Learning, Salem Center, Westchester County, New York; formerly Black Rome, Necrosha"
    },
    connections: {
      "group-affiliation": "New Mutants; formerly X-Men, Selene's Inner Circle",
      relatives:
        "Apocalypse (ancestor, deceased);Margaret Slade (ancestor, deceased);Hamilton Slade (distant relative, deceased);Frederick Slade (great-great-grandfather);Ms. Ferguson (great-great-grandmother, deceased);Chamber (distant cousin);Clan Akkaba (relatives)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/35.jpg"
    }
  },
  {
    response: "success",
    id: "116",
    name: "Blizzard",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Gregor Shapanka",
      "alter-egos": "No alter egos found.",
      aliases: ["Jack Frost"],
      "place-of-birth": "-",
      "first-appearance": "Tales of Suspense #45",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "Brown"
    },
    work: {
      occupation:
        "Professional criminal, mercenary, engineer, former scientist",
      base: "New York City, New York"
    },
    connections: {
      "group-affiliation":
        "Former employee of Justin Hammer, partner of Blacklash and Melter",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/899.jpg"
    }
  },
  {
    response: "success",
    id: "117",
    name: "Blizzard",
    powerstats: {
      intelligence: "null",
      strength: "72",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/898.jpg"
    }
  },
  {
    response: "success",
    id: "118",
    name: "Blizzard II",
    powerstats: {
      intelligence: "38",
      strength: "10",
      speed: "27",
      durability: "42",
      power: "47",
      combat: "56"
    },
    biography: {
      "full-name": "Donald Gill",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Newark, Delaware",
      "first-appearance": "Iron Man #223 (1987)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["5'9", "175 cm"],
      weight: ["170 lb", "77 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: {
      occupation: "Adventurer; former mercenary and professional criminal",
      base: "-"
    },
    connections: {
      "group-affiliation": "Formerly Thunderbolts, Hammer Industries",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/619.jpg"
    }
  },
  {
    response: "success",
    id: "119",
    name: "Blob",
    powerstats: {
      intelligence: "10",
      strength: "83",
      speed: "23",
      durability: "95",
      power: "28",
      combat: "72"
    },
    biography: {
      "full-name": "Frederick J. Dukes",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Lubbock, Texas",
      "first-appearance": "X-Men #3 (1964)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["5'10", "178 cm"],
      weight: ["510 lb", "230 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: {
      occupation:
        "Former criminal, terrorist, government agent, carnival performer",
      base: "-"
    },
    connections: {
      "group-affiliation":
        "X-Cell, formerly X-Corps, Magneto's army, Brotherhood Of Evil Mutants, Freedom Force, Factor Three, former partner of Unus",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1119.jpg"
    }
  },
  {
    response: "success",
    id: "12",
    name: "Air-Walker",
    powerstats: {
      intelligence: "50",
      strength: "85",
      speed: "100",
      durability: "85",
      power: "100",
      combat: "40"
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
  },
  {
    response: "success",
    id: "120",
    name: "Bloodaxe",
    powerstats: {
      intelligence: "63",
      strength: "80",
      speed: "33",
      durability: "80",
      power: "100",
      combat: "84"
    },
    biography: {
      "full-name": "Jackie Lukus",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "(as Jackie Lukus) Thor #392 (as Bloodaxe) Thor #449",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["7'2", "218 cm"],
      weight: ["1100 lb", "495 kg"],
      "eye-color": "Blue",
      "hair-color": "Brown"
    },
    work: { occupation: "Architect, former vigilante", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1509.jpg"
    }
  },
  {
    response: "success",
    id: "121",
    name: "Bloodhawk",
    powerstats: {
      intelligence: "50",
      strength: "10",
      speed: "50",
      durability: "80",
      power: "80",
      combat: "64"
    },
    biography: {
      "full-name": "Lemuel Krug",
      "alter-egos": "No alter egos found.",
      aliases: ["Lemuel Halcon"],
      "place-of-birth": "-",
      "first-appearance": "X-Men (2099) #1",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Black",
      "hair-color": "No Hair"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation":
        "X-Peditioners, formerly X-Men, Halo City Protectorate, Oasis",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1510.jpg"
    }
  },
  {
    response: "success",
    id: "122",
    name: "Bloodwraith",
    powerstats: {
      intelligence: "null",
      strength: "72",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Sean Dolan",
      "alter-egos": "No alter egos found.",
      aliases: ["Black Wraith", "Blood Wraith"],
      "place-of-birth": "-",
      "first-appearance":
        "(Dolan) Black Knight #2 (1990); (Bloodwraith) Avengers Annual #22 (1993)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["100'0", "30.5 meters"],
      weight: ["- lb", "0 kg"],
      "eye-color": "White",
      "hair-color": "No Hair"
    },
    work: { occupation: "Former squire", base: "Slorenia" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/186.jpg"
    }
  },
  {
    response: "success",
    id: "123",
    name: "Blue Beetle",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Daniel Garrett",
      "alter-egos": "No alter egos found.",
      aliases: ["Daniel Garret (spelling variation)"],
      "place-of-birth": "-",
      "first-appearance": "Mystery Men Comics #1",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Blue",
      "hair-color": "Brown"
    },
    work: { occupation: "Archaeologist; professor of archaeology", base: "-" },
    connections: {
      "group-affiliation": "-",
      relatives: "Danielle Garrett (granddaughter)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/646.jpg"
    }
  },
  {
    response: "success",
    id: "124",
    name: "Blue Beetle",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1010.jpg"
    }
  },
  {
    response: "success",
    id: "125",
    name: "Blue Beetle II",
    powerstats: {
      intelligence: "null",
      strength: "45",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Theodore Kord",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Chicago, Illinois",
      "first-appearance":
        "CAPTAIN ATOM Vol. 1 #83 (1966) (Published by Charlton Comics)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'0", "183 cm"],
      weight: ["190 lb", "86 kg"],
      "eye-color": "Blue",
      "hair-color": "Brown"
    },
    work: {
      occupation: "Inventor, President of Kord Omniversal, Crimefighter",
      base: "-"
    },
    connections: {
      "group-affiliation":
        "Formerly Justice League of America; formerly the L.A.W.; formerly Super Buddies",
      relatives: "Jarvis Kord (uncle)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1008.jpg"
    }
  },
  {
    response: "success",
    id: "126",
    name: "Blue Beetle III",
    powerstats: {
      intelligence: "50",
      strength: "34",
      speed: "58",
      durability: "80",
      power: "100",
      combat: "30"
    },
    biography: {
      "full-name": "Jaime Reyes",
      "alter-egos": "No alter egos found.",
      aliases: ["Scooter"],
      "place-of-birth": "Presumed to be El Paso",
      "first-appearance": "Infinite Crisis #3 (2006)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: { occupation: "Student", base: "El Paso, Texas" },
    connections: {
      "group-affiliation": "Justice League International,Posse; Teen Titans",
      relatives:
        "Alberto Reyes (father); Bianca Reyes (mother); Milagro Reyes (younger sister); Alejandro Reyes (grandfather, deceased); Elena Leal (maternal grandmother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1009.jpg"
    }
  },
  {
    response: "success",
    id: "127",
    name: "Boba Fett",
    powerstats: {
      intelligence: "63",
      strength: "10",
      speed: "38",
      durability: "36",
      power: "68",
      combat: "70"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Teff",
        "Sava Brek Madak",
        "Jaster Mereel",
        "Mandalore",
        "Mand'alor"
      ],
      "place-of-birth": "Kamino",
      "first-appearance": "-",
      publisher: "George Lucas",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human / Clone",
      height: ["6'0", "183 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: { occupation: "Bounty Hunter", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10467.jpg"
    }
  },
  {
    response: "success",
    id: "128",
    name: "Bolt",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1340.jpg"
    }
  },
  {
    response: "success",
    id: "129",
    name: "Bomb Queen",
    powerstats: {
      intelligence: "null",
      strength: "73",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Bomb Queen (2006) #1",
      publisher: "Image Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "Dictator of New Port City, The Four Queens",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1116.jpg"
    }
  },
  {
    response: "success",
    id: "13",
    name: "Ajax",
    powerstats: {
      intelligence: "56",
      strength: "48",
      speed: "35",
      durability: "80",
      power: "34",
      combat: "55"
    },
    biography: {
      "full-name": "Francis",
      "alter-egos": "No alter egos found.",
      aliases: ['"Frankie"', "the A-Man", "the Attending"],
      "place-of-birth": "-",
      "first-appearance": "Deadpool #14 (March, 1998)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Cyborg",
      height: ["6'4", "193 cm"],
      weight: ["200 lb", "90 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "Formerly Weapon X", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10422.jpg"
    }
  },
  {
    response: "success",
    id: "130",
    name: "Boom-Boom",
    powerstats: {
      intelligence: "38",
      strength: "10",
      speed: "12",
      durability: "42",
      power: "57",
      combat: "64"
    },
    biography: {
      "full-name": "Tabitha Smith",
      "alter-egos": "Meltdown",
      aliases: [
        "Time Bomb",
        "Boomer",
        "Meltdown",
        "Tabby",
        "Firecracker",
        "Mutate #35",
        "Nancy Forrester"
      ],
      "place-of-birth": "-",
      "first-appearance": "Secret Wars II #5",
      publisher: "Meltdown",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Mutant",
      height: ["5'5", "165 cm"],
      weight: ["122 lb", "55 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: { occupation: "Adventurer, former student, thief", base: "-" },
    connections: {
      "group-affiliation":
        "Formerly Utopians, X-Men (New Charles Xavier School member), X-Force, X-Men, Nextwave, The Underground, Genoshan Mutates, New Mutants, X-Terminators (founding member), X-Factor (trainee), Fallen Angels, Beyonder (associate)",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/400.jpg"
    }
  },
  {
    response: "success",
    id: "131",
    name: "Boomer",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/259.jpg"
    }
  },
  {
    response: "success",
    id: "133",
    name: "Box",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Roger Bochs",
      "alter-egos": "No alter egos found.",
      aliases: ["Omega"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/864.jpg"
    }
  },
  {
    response: "success",
    id: "134",
    name: "Box III",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Dr. Walter Langowski",
      "alter-egos": "No alter egos found.",
      aliases: ["Box III", "Wanda"],
      "place-of-birth": "British Columbia",
      "first-appearance": "First appearance unknown",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "-",
      race: "null",
      height: ["6'4", "193 cm"],
      weight: ["245 lb", "110 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation: "Physics professor, former NFL player",
      base: "Base of operations unknown"
    },
    connections: {
      "group-affiliation": "Alpha Flight",
      relatives: "No known relatives"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/37.jpg"
    }
  },
  {
    response: "success",
    id: "135",
    name: "Box IV",
    powerstats: {
      intelligence: "50",
      strength: "75",
      speed: "23",
      durability: "28",
      power: "11",
      combat: "56"
    },
    biography: {
      "full-name": "Madison Jeffries",
      "alter-egos": "Gemini V",
      aliases: ["Gemini", "Jack-In-The-Box"],
      "place-of-birth": "Place of birth unknown",
      "first-appearance": "Alpha Flight #16",
      publisher: "Gemini V",
      alignment: "good"
    },
    appearance: {
      gender: "-",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown / Black"
    },
    work: {
      occupation: "Inventor, former soldier",
      base: "Base of operations unknown"
    },
    connections: {
      "group-affiliation": "Alpha Flight, Gamma Flight, Zodiac, Team_Weapon_X",
      relatives:
        "Scramble (Lionel Jeffries, brother, deceased), Diamond Lil (wife)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/38.jpg"
    }
  },
  {
    response: "success",
    id: "136",
    name: "Brainiac",
    powerstats: {
      intelligence: "100",
      strength: "95",
      speed: "63",
      durability: "90",
      power: "60",
      combat: "75"
    },
    biography: {
      "full-name": "Vril Dox",
      "alter-egos": "No alter egos found.",
      aliases: ["Milton Fine"],
      "place-of-birth": "-",
      "first-appearance": "Action Comics #242 (July 1958)",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Android",
      height: ["6'6", "198 cm"],
      weight: ["300 lb", "135 kg"],
      "eye-color": "Green",
      "hair-color": "No Hair"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "Lex Luthor",
      relatives: "Vril Dox II (son), Brainiac 5 (descendant)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/648.jpg"
    }
  },
  {
    response: "success",
    id: "137",
    name: "Brainiac 5",
    powerstats: {
      intelligence: "100",
      strength: "10",
      speed: "23",
      durability: "28",
      power: "60",
      combat: "32"
    },
    biography: {
      "full-name": "Querl Dox",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance":
        "Brainiac 5's primary invention is his personal force-shield generator. Brainiac 5 re-discovered the technical process behind original Brainiac's force-shield belt, which is capable of generating a virtually impervious field of protection. The belt must be",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["5'7", "170 cm"],
      weight: ["135 lb", "61 kg"],
      "eye-color": "Green",
      "hair-color": "Blond"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "Legion of Super-Heroes",
      relatives: "Unnamed mother, Brainiac (ancestor)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1183.jpg"
    }
  },
  {
    response: "success",
    id: "138",
    name: "Brother Voodoo",
    powerstats: {
      intelligence: "null",
      strength: "65",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Jericho Drumm",
      "alter-egos": "No alter egos found.",
      aliases: ["Doctor Voodoo", "Sorcerer Supreme"],
      "place-of-birth": "Port-au-Prince, Haiti",
      "first-appearance": "Strange Tales #169 (September, 1973)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'0", "183 cm"],
      weight: ["220 lb", "99 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown / White"
    },
    work: {
      occupation: "Psychologist Houngan (voodoo priest)",
      base: "Port-au-Prince, Haiti"
    },
    connections: {
      "group-affiliation": "-",
      relatives: "Daniel Drumm (brother deceased), Matilda Drumm (aunt)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/39.jpg"
    }
  },
  {
    response: "success",
    id: "139",
    name: "Brundlefly",
    powerstats: {
      intelligence: "69",
      strength: "32",
      speed: "25",
      durability: "40",
      power: "27",
      combat: "15"
    },
    biography: {
      "full-name": "Seth Brundle",
      "alter-egos": "No alter egos found.",
      aliases: ["The Fly"],
      "place-of-birth": "-",
      "first-appearance": "The Fly (1986)",
      publisher: "",
      alignment: "-"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["6'4", "193 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "Scientist", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10642.jpg"
    }
  },
  {
    response: "success",
    id: "14",
    name: "Alan Scott",
    powerstats: {
      intelligence: "63",
      strength: "80",
      speed: "23",
      durability: "90",
      power: "100",
      combat: "32"
    },
    biography: {
      "full-name": "Alan Ladd Wellington Scott",
      "alter-egos": "No alter egos found.",
      aliases: ["Green Lantern", "White King", "Sentinal"],
      "place-of-birth": "Gotham City",
      "first-appearance": "All-American Comics 16 (1940)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["5'11", "180 cm"],
      weight: ["201 lb", "90 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation: "-",
      base: "Gotham City and New York City; Formerly Capitol City"
    },
    connections: {
      "group-affiliation":
        "Justice Society of America; Formerly Checkmate; the Sentinels of Magic; Formerly All-Star Squadron",
      relatives:
        "Harlequin (Molly Mayne-Scott) (wife), Thorn (Rose Canton) (first wife, deceased), Todd Rice (Obsidian, son), Jennie-Lynn Hayden (Jade, daughter, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/698.jpg"
    }
  },
  {
    response: "success",
    id: "140",
    name: "Buffy",
    powerstats: {
      intelligence: "63",
      strength: "28",
      speed: "42",
      durability: "70",
      power: "48",
      combat: "60"
    },
    biography: {
      "full-name": "Buffy Anne Summers",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Anne",
        "The Chosen One",
        "The Vampire Slayer",
        "The Slayer",
        "Buff",
        "B",
        "The Buffster",
        "Belinda",
        "Joan"
      ],
      "place-of-birth": "-",
      "first-appearance": "Dark Horse Presents 1998 Annual",
      publisher: "Dark Horse Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["5'2", "157 cm"],
      weight: ["115 lb", "52 kg"],
      "eye-color": "Green",
      "hair-color": "Blond"
    },
    work: {
      occupation:
        "Slayer ; (formerly) Waitress ; DoubleMeat Palace employee ; Sunnydale High Counselor",
      base: "-"
    },
    connections: {
      "group-affiliation":
        "Slayer Army, Scooby Gang, (formerly) The Initiative, Watchers Council",
      relatives:
        "Joyce Summers (mother, deceased) ; Hank Summers (father) ; Dawn Summers (sister) ; Celia (cousin, deceased) ; Arlene (aunt)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10430.jpg"
    }
  },
  {
    response: "success",
    id: "141",
    name: "Bullseye",
    powerstats: {
      intelligence: "50",
      strength: "11",
      speed: "25",
      durability: "70",
      power: "20",
      combat: "70"
    },
    biography: {
      "full-name": "Lester",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Benjamin Poindexter",
        "Daredevil",
        "Punisher",
        "Bullseye",
        "Hawkeye",
        "pitcher"
      ],
      "place-of-birth": "-",
      "first-appearance": "Daredevil #131 (March, 1976)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'0", "183 cm"],
      weight: ["200 lb", "90 kg"],
      "eye-color": "blue",
      "hair-color": "blond"
    },
    work: {
      occupation: "Assassin, professional criminal, former mercenary",
      base: "Formerly Avengers Tower; Thunderbolts Mountain"
    },
    connections: {
      "group-affiliation":
        "Formerly Dark Avengers, Thunderbolts, employee of Kingpin, Purple Man, Eric Slaughter, Mysterio; formerly US Army",
      relatives: "Kingmaker (father)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/624.jpg"
    }
  },
  {
    response: "success",
    id: "142",
    name: "Bumblebee",
    powerstats: {
      intelligence: "63",
      strength: "28",
      speed: "25",
      durability: "10",
      power: "47",
      combat: "35"
    },
    biography: {
      "full-name": "Karen Beecher",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Teen Titans #45",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["5'7", "170 cm"],
      weight: ["130 lb", "59 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "San Francisco, California" },
    connections: {
      "group-affiliation": "Doom Patrol, S.T.A.R. Labs, Formerly Teen Titans",
      relatives: "Mal Duncan (husband)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1542.jpg"
    }
  },
  {
    response: "success",
    id: "143",
    name: "Bumbleboy",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "New X-Men #153",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1346.jpg"
    }
  },
  {
    response: "success",
    id: "144",
    name: "Bushido",
    powerstats: {
      intelligence: "38",
      strength: "10",
      speed: "8",
      durability: "10",
      power: "19",
      combat: "70"
    },
    biography: {
      "full-name": "Ryuko Orsono",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Titans: Secret Files & Origins #2",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "Teen Titans", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1541.jpg"
    }
  },
  {
    response: "success",
    id: "145",
    name: "Cable",
    powerstats: {
      intelligence: "88",
      strength: "48",
      speed: "23",
      durability: "56",
      power: "100",
      combat: "80"
    },
    biography: {
      "full-name": "Nathan Summers",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Chosen One",
        "Soldier X",
        "Nathan Dayspring",
        "Askani'son",
        "Nathan Dayspring Summers",
        "Nathan Winters",
        "The Traveller",
        "The Saviour"
      ],
      "place-of-birth": "Unrevealed location in the 20th Century United States",
      "first-appearance": "New Mutants #86 (as Cable)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["6'8", "203 cm"],
      weight: ["350 lb", "158 kg"],
      "eye-color": "Blue",
      "hair-color": "White"
    },
    work: {
      occupation:
        "(current) Adventurer, (former) freedom fighter, United States government agent, mercenary, combat instructor for X-Force",
      base: "The Xavier Institute, Salem Center, Westchester County, New York"
    },
    connections: {
      "group-affiliation":
        "X-Force, (former) X-Men, Clan Askani, Clan Chosen, Six Pack (formerly Wild Pack II)",
      relatives:
        "Scott Summers (Cyclops, father), Madelyne Pryor-Summers (Goblin Queen, mother, deceased), Jean Grey (Phoenix, stepmother), Alexander Summers (Havok, uncle), Christopher Summers (Corsair, paternal grandfather), Katherine Anne Summers (paternal grandmother, deceased), Philip Summers (great-grandfather), Deborah Summers (great-grandmother), Jenskot (Aliya, wife, deceased), Tyler (Genesis, son, deceased), Stryfe (clone, deceased), Gabriel Summers (Vulcan, uncle)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/40.jpg"
    }
  },
  {
    response: "success",
    id: "146",
    name: "Callisto",
    powerstats: {
      intelligence: "63",
      strength: "53",
      speed: "23",
      durability: "42",
      power: "52",
      combat: "85"
    },
    biography: {
      "full-name": "Callisto",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "X-MEN (first series) #169",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'9", "175 cm"],
      weight: ["165 lb", "74 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: {
      occupation: "-",
      base:
        "The Xavier Institute, Salem Center, Westchester County, New York State, (former) The Alley (beneath Manhattan's surface), X-Factor I's sentient starship"
    },
    connections: {
      "group-affiliation": "Excalibur, Morlocks, Gene Nation",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/271.jpg"
    }
  },
  {
    response: "success",
    id: "147",
    name: "Cameron Hicks",
    powerstats: {
      intelligence: "50",
      strength: "10",
      speed: "23",
      durability: "28",
      power: "51",
      combat: "70"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "SyFy",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Alpha",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "Alphas", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1528.jpg"
    }
  },
  {
    response: "success",
    id: "148",
    name: "Cannonball",
    powerstats: {
      intelligence: "50",
      strength: "28",
      speed: "67",
      durability: "99",
      power: "94",
      combat: "56"
    },
    biography: {
      "full-name": "Samuel Zachery Guthrie",
      "alter-egos": "No alter egos found.",
      aliases: ["Formerly Samson Guthry", "Sam Guthrie", "Jet-Ass"],
      "place-of-birth": "Cumberland County, Kentucky",
      "first-appearance": "Marvel Graphic Novel #4 (1982)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'0", "183 cm"],
      weight: ["181 lb", "81 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation: "Adventurer, peacekeeper, former student, mercenary, miner",
      base: "-"
    },
    connections: {
      "group-affiliation":
        "X-Men, formerly X.S.E., Mutant Liberation Front, X-Treme X-Men, X-Corporation, X-Force, New Mutants, Hellions, Hellfire Club",
      relatives:
        'Thomas Zebulon (father, deceased), Lucinda (mother), Lucas Bartholemew (uncle), Paige (Husk, sister), Joshua "Jay" (Icarus, brother, deceased), Joelle (sister), Elizabeth (sister), Melody (Aero, sister), Jebediah (brother), Lewis (brother), two other unnamed siblings, Ray Jr. (adopted brother)'
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/272.jpg"
    }
  },
  {
    response: "success",
    id: "149",
    name: "Captain America",
    powerstats: {
      intelligence: "69",
      strength: "19",
      speed: "38",
      durability: "55",
      power: "60",
      combat: "100"
    },
    biography: {
      "full-name": "Steve Rogers",
      "alter-egos": "No alter egos found.",
      aliases: ["Nomad", "The Captain"],
      "place-of-birth": "Manhattan, New York City, New York",
      "first-appearance": "Captain America Comics #1 (March 1941)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'2", "188 cm"],
      weight: ["240 lb", "108 kg"],
      "eye-color": "blue",
      "hair-color": "blond"
    },
    work: {
      occupation:
        "Adventurer, federal official, intelligence operative; former soldier, Hydra agent, liaison between S.H.I.E.L.D. and the Avengers, police officer, teacher, sparring partner.",
      base: "New York City"
    },
    connections: {
      "group-affiliation":
        "Secret Avengers (Black OPS Unit Formerly,The Avengers, Secret Avengers (Civil War), New Avengers, formerly The Invaders, Secret Defenders The Redeemers; formerly partner of Bucky, Golden Girl, Rick Jones, Falcon, Demolition-Man and Nomad (Jack Monroe)",
      relatives:
        "Joseph (father, deceased), Sara (mother, deceased), Ian Zola (Nomad) (adopted son)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/274.jpg"
    }
  },
  {
    response: "success",
    id: "15",
    name: "Alex Mercer",
    powerstats: {
      intelligence: "50",
      strength: "80",
      speed: "42",
      durability: "90",
      power: "100",
      combat: "50"
    },
    biography: {
      "full-name": "Alexander J. Mercer",
      "alter-egos": "No alter egos found.",
      aliases: ["Prototype", "Zues", "Blacklight"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Wildstorm",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "Gentek, The Infected",
      relatives: "Dana Mercer (sister)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10398.jpg"
    }
  },
  {
    response: "success",
    id: "150",
    name: "Captain Atom",
    powerstats: {
      intelligence: "81",
      strength: "93",
      speed: "83",
      durability: "90",
      power: "100",
      combat: "80"
    },
    biography: {
      "full-name": "Nathaniel Adam",
      "alter-egos": "No alter egos found.",
      aliases: ["Monarch", "Allen Adam", "Cameron Scott"],
      "place-of-birth": "-",
      "first-appearance": "Captain Atom #1",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human / Radiation",
      height: ["6'4", "193 cm"],
      weight: ["200 lb", "90 kg"],
      "eye-color": "Blue",
      "hair-color": "Silver"
    },
    work: { occupation: "Former Soldier", base: "-" },
    connections: {
      "group-affiliation":
        "Justice League, Extreme Justice, Super Buddies, Living Assault Weapons, Monarch's Army, United States Air Force",
      relatives:
        "Angela Adam Eiling (wife, deceased), Peggy Eiling (daughter), Randy Eiling (son), Bette Sans Souci (ex-wife, divorced)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1007.jpg"
    }
  },
  {
    response: "success",
    id: "151",
    name: "Captain Britain",
    powerstats: {
      intelligence: "75",
      strength: "77",
      speed: "50",
      durability: "60",
      power: "31",
      combat: "80"
    },
    biography: {
      "full-name": "Brian Braddock",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Britannic",
        "Black Bishop",
        "Jungle Man",
        "King of Otherworld",
        "Merlinson"
      ],
      "place-of-birth": "Braddock Manor, England",
      "first-appearance": "Captain Britain #1 (October, 1976)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'6", "198 cm"],
      weight: ["257 lb", "116 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation: "Adventurer, formerly King of Otherworld, scientist",
      base:
        "Lighthouse, Earth Orbit; Starlight Citadel, Otherworld; formerly Braddock Manor; Braddock Lighthouse, England; New York City (during exchange trip, specifically Peter Parker's Manhattan apartment); flat near Thames University, London"
    },
    connections: {
      "group-affiliation":
        "Braddock Academy, Captain Britain Corps, MI-13; formerly Excalibur, Hellfire Club (London Branch), Secret Avengers, Court of Otherworld, Knights of Pendragon's ally, Future Iron Man's Team",
      relatives:
        "John Braddock (ancestor, possibly grandfather), James Braddock, Sr. (father, deceased), Lady Elizabeth Braddock (mother, deceased), James Braddock, Jr. (brother), Elizabeth Braddock (twin sister), Meggan (wife), William Puceanu (father-in-law)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/276.jpg"
    }
  },
  {
    response: "success",
    id: "152",
    name: "Captain Cold",
    powerstats: {
      intelligence: "50",
      strength: "10",
      speed: "17",
      durability: "20",
      power: "28",
      combat: "20"
    },
    biography: {
      "full-name": "Leonard Snart",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Citizen Cold",
        "Kid Kold",
        "Len Snart",
        "Leonard Snart",
        "Leonards Wynters",
        "The Man Who Mastered Absolute Zero"
      ],
      "place-of-birth": "-",
      "first-appearance": "Flash Vol 4 #6 (April, 2012)",
      publisher: "DC Comics",
      alignment: "neutral"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: { occupation: "Professional Criminal", base: "-" },
    connections: {
      "group-affiliation":
        "Justice League, Rogues; formerly Secret Society of Super-Villains, Injustice League",
      relatives: "Lisa Snart (sister)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/653.jpg"
    }
  },
  {
    response: "success",
    id: "153",
    name: "Captain Epic",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Canada",
      "first-appearance": "World War II",
      publisher: "Team Epic TV",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'2", "188 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Blue",
      "hair-color": "Brown"
    },
    work: { occupation: "Superhero", base: "Toronto" },
    connections: {
      "group-affiliation": "Team Epic, The Canadian Shield Alliance (CSA)",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/3.jpg"
    }
  },
  {
    response: "success",
    id: "154",
    name: "Captain Hindsight",
    powerstats: {
      intelligence: "25",
      strength: "10",
      speed: "83",
      durability: "30",
      power: "10",
      combat: "20"
    },
    biography: {
      "full-name": "Jack Brolin",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": 'South Park S14 E11 "Coon 2: Hindsight"',
      publisher: "South Park",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "Black"
    },
    work: { occupation: "Former Superhero; News Reporter", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10399.jpg"
    }
  },
  {
    response: "success",
    id: "155",
    name: "Captain Mar-vell",
    powerstats: {
      intelligence: "null",
      strength: "80",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Mar-Vell",
      "alter-egos": "No alter egos found.",
      aliases: ["Captain Marvel", "Dr. Walter Lawson"],
      "place-of-birth":
        "The city of Rad-Nam on the planet Kree-Lar in the Kree Galaxy (Greater Magellanic Cloud)",
      "first-appearance": "MARVEL SUPERHEROES #18",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'2'", "188 cm"],
      weight: ["240 lb", "108 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation:
        'Captain in the Kree space fleet, later adventurer, later "Protector of the Universe"',
      base: "-"
    },
    connections: {
      "group-affiliation": "Avengers",
      relatives: "Mar-Vell (father-deceased), Elysius (mother-deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/654.jpg"
    }
  },
  {
    response: "success",
    id: "156",
    name: "Captain Marvel",
    powerstats: {
      intelligence: "88",
      strength: "100",
      speed: "88",
      durability: "95",
      power: "100",
      combat: "75"
    },
    biography: {
      "full-name": "Billy Batson",
      "alter-egos": "No alter egos found.",
      aliases: [
        "The World's Mightiest Mortal",
        "The Big Red Cheese",
        "Captain Thunder",
        "Shazam"
      ],
      "place-of-birth": "Fawcett City, United States",
      "first-appearance": "Whiz Comics no. 2 (1940)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'4", "193 cm"],
      weight: ["225 lb", "101 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "Marvel Family, Justice Society of America",
      relatives:
        "C.C. Batson (father, deceased), Marilyn Batson (mother, deceased), Ebenezer Batson (uncle), Mary Batson (Mary Marvel, sister)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/278.jpg"
    }
  },
  {
    response: "success",
    id: "157",
    name: "Captain Marvel",
    powerstats: {
      intelligence: "84",
      strength: "88",
      speed: "71",
      durability: "95",
      power: "100",
      combat: "90"
    },
    biography: {
      "full-name": "Carol Danvers",
      "alter-egos": "Binary, Warbird",
      aliases: [
        "Ace",
        "Binary",
        "Lady Marvel",
        "Warbird",
        "others used during her espionage career"
      ],
      "place-of-birth": "Boston, Massachusetts",
      "first-appearance": "Ms. Marvel #1",
      publisher: "Binary",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human-Kree",
      height: ["5'11", "180 cm"],
      weight: ["165 lb", "74 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation:
        "Former National Aeronautics and Space Administration security Chief, former magazine editor, former freelance writer, former military intelligence officer.",
      base: "Avengers Mansion"
    },
    connections: {
      "group-affiliation":
        "currently Avengers, former companion to the X-Men (as Carol Danvers), former member of the Starjammers (as Binary), Former Avenger (as Ms. Marvel)",
      relatives:
        'Marie Danvers (mother), Joseph Danvers, Sr. (father), Joseph Danvers, Jr. (brother), Steve Danvers (brother, deceased), Marcus Immortus (Danvers) ("son", deceased)'
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/103.jpg"
    }
  },
  {
    response: "success",
    id: "158",
    name: "Captain Marvel II",
    powerstats: {
      intelligence: "75",
      strength: "81",
      speed: "27",
      durability: "90",
      power: "34",
      combat: "56"
    },
    biography: {
      "full-name": "Frederick Christopher Freeman",
      "alter-egos": "No alter egos found.",
      aliases: ["Captain Marvel Jr.", "CM3"],
      "place-of-birth": "-",
      "first-appearance":
        "Current incarnation: (As Freddy Freeman) The Power of Shazam #3 (May, 1995)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'9", "175 cm"],
      weight: ["165 lb", "74 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: { occupation: "Adventurer", base: "Primarily Fawcett City." },
    connections: {
      "group-affiliation": "Marvel Family, formerly Outsiders and Teen Titans.",
      relatives:
        "parents, deceased, Jacob Freeman (granfather, deceased), Timothy Karnes (Sabbac, foster brother, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/279.jpg"
    }
  },
  {
    response: "success",
    id: "159",
    name: "Captain Midnight",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Major Midnight",
        "Red",
        "Space-Sovereign",
        "The Skyway Sovereign",
        "The Sky-Lord",
        "The Lord of the Overworld",
        "The Space Sentinel",
        "Jim Albright"
      ],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Dark Horse Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10443.jpg"
    }
  },
  {
    response: "success",
    id: "16",
    name: "Alex Woolsly",
    powerstats: {
      intelligence: "null",
      strength: "37",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Alex Woolsly",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Heroes S02E16 - Building 26",
      publisher: "NBC - Heroes",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "Employee at Sam's Comics", base: "Costa Verde, CA" },
    connections: {
      "group-affiliation": "-",
      relatives: "Mr. Woolsly, Mrs. Woolsly, sister"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1309.jpg"
    }
  },
  {
    response: "success",
    id: "160",
    name: "Captain Planet",
    powerstats: {
      intelligence: "50",
      strength: "88",
      speed: "75",
      durability: "80",
      power: "100",
      combat: "60"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["The Captain", "CP", "Planet"],
      "place-of-birth": "-",
      "first-appearance": "Captain Planet and the Planeteers (TV Series)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "God / Eternal",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Red",
      "hair-color": "Green"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "The Planeteers", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1285.jpg"
    }
  },
  {
    response: "success",
    id: "161",
    name: "Captain Universe",
    powerstats: {
      intelligence: "null",
      strength: "92",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Guardian of Eternity",
        "The Avenging Angel",
        "The Hero That Could Be You"
      ],
      "place-of-birth": "-",
      "first-appearance": "Micronauts #8 (August, 1979)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "-",
      race: "God / Eternal",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/855.jpg"
    }
  },
  {
    response: "success",
    id: "162",
    name: "Carnage",
    powerstats: {
      intelligence: "63",
      strength: "63",
      speed: "70",
      durability: "84",
      power: "88",
      combat: "90"
    },
    biography: {
      "full-name": "Cletus Kasady",
      "alter-egos": "No alter egos found.",
      aliases: ["Mass Carnage", "999th"],
      "place-of-birth": "-",
      "first-appearance": "Amazing Spider-Man #344 (February, 1991)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Symbiote",
      height: ["6'1", "185 cm"],
      weight: ["190 lb", "86 kg"],
      "eye-color": "Green",
      "hair-color": "Red"
    },
    work: { occupation: "-", base: "New York City" },
    connections: {
      "group-affiliation":
        "Maximum Carnage: (Carrion, Shriek, Demogoblin, Doppelganger)",
      relatives:
        'Venom ("father"); Shriek ("wife"); Hybrid, Lasher, Phage, Riot ("brothers"); Agony, Scream ("sisters"); Carrion, Demogoblin, Doppelganger, Toxin ("sons"); Scorn ("Daughter")'
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/187.jpg"
    }
  },
  {
    response: "success",
    id: "163",
    name: "Cat",
    powerstats: {
      intelligence: "null",
      strength: "90",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Shirlee Bryant",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Chicago, Illinois",
      "first-appearance": "The Cat #1",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'8", "173 cm"],
      weight: ["135 lb", "61 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: { occupation: "Model", base: "Chicago, Illinois" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/904.jpg"
    }
  },
  {
    response: "success",
    id: "164",
    name: "Cat II",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/903.jpg"
    }
  },
  {
    response: "success",
    id: "165",
    name: "Catwoman",
    powerstats: {
      intelligence: "69",
      strength: "11",
      speed: "33",
      durability: "28",
      power: "27",
      combat: "85"
    },
    biography: {
      "full-name": "Selina Kyle",
      "alter-egos": "No alter egos found.",
      aliases: [
        "The Cat",
        "Irena Dubrovna",
        "Elva Barr",
        "Sadie Kelowski",
        "Madame Moderne",
        "Marguerite Tone"
      ],
      "place-of-birth": "Gotham City",
      "first-appearance": "Detective Comics #569",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["5'9", "175 cm"],
      weight: ["135 lb", "61 kg"],
      "eye-color": "Green",
      "hair-color": "Black"
    },
    work: { occupation: "Thief", base: "Gotham City" },
    connections: {
      "group-affiliation":
        "Batman Family, Outsiders; formerly Birds of Prey, Injustice League, Secret Society of Super-Villains",
      relatives:
        "Brian Kyle (father, deceased), Maria Kyle (mother, deceased), Maggie Kyle (sister), Helena Kyle (daughter)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/659.jpg"
    }
  },
  {
    response: "success",
    id: "166",
    name: "Cecilia Reyes",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Dr. Cecilia Reyes",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Place of birth unknown",
      "first-appearance": "X-Men #65 (1997)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "-",
      race: "null",
      height: ["5'7", "170 cm"],
      weight: ["138 lb", "62 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: { occupation: "Doctor in private practice", base: "Salem Center" },
    connections: { "group-affiliation": "X-Men", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/43.jpg"
    }
  },
  {
    response: "success",
    id: "167",
    name: "Century",
    powerstats: {
      intelligence: "88",
      strength: "80",
      speed: "53",
      durability: "64",
      power: "100",
      combat: "100"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Force Works #1 (July, 1994)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Alien",
      height: ["6'7", "201 cm"],
      weight: ["215 lb", "97 kg"],
      "eye-color": "White",
      "hair-color": "White"
    },
    work: { occupation: "Tracker, adventurer", base: "-" },
    connections: { "group-affiliation": "Force Works", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1511.jpg"
    }
  },
  {
    response: "success",
    id: "168",
    name: "Cerebra",
    powerstats: {
      intelligence: "null",
      strength: "57",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Shakti Haddad",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "X-Men 2099 #1 (October, 1993)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Mutant",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "X-Men (2099), Halo City Protectorate, X-Nation",
      relatives: "Zail Haddad (father)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1512.jpg"
    }
  },
  {
    response: "success",
    id: "169",
    name: "Chamber",
    powerstats: {
      intelligence: "50",
      strength: "10",
      speed: "20",
      durability: "80",
      power: "57",
      combat: "64"
    },
    biography: {
      "full-name": "Jonothon Evan Starsmore",
      "alter-egos": "No alter egos found.",
      aliases: ["Decibel", "Jono", "Jono Hex"],
      "place-of-birth": "United Kingdom",
      "first-appearance": "Generation X #1 (November, 1994)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["5'9", "175 cm"],
      weight: ["140 lb", "63 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: {
      occupation: "Adventurer",
      base:
        "Utopia; formerly New Warriors HQ; Xavier Institute for Higher Learning, Salem Center, Westchester County, New York; Massachusetts Academy, Snow Valley, Massachusetts"
    },
    connections: {
      "group-affiliation":
        "X-Men; formerly New Warriors; Clan Akkaba; Weapon X; Generation X",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/44.jpg"
    }
  },
  {
    response: "success",
    id: "17",
    name: "Alfred Pennyworth",
    powerstats: {
      intelligence: "63",
      strength: "10",
      speed: "17",
      durability: "10",
      power: "7",
      combat: "55"
    },
    biography: {
      "full-name": "Alfred Thaddeus Crane Pennyworth",
      "alter-egos": "No alter egos found.",
      aliases: ["Alfred Beagle"],
      "place-of-birth": "-",
      "first-appearance": "Batman #16 (April, 1943)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'10", "178 cm"],
      weight: ["160 lb", "72 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: {
      occupation:
        "Butler; Caretaker, former Actor; Field Medic; Government Agent",
      base: "Wayne Manor; Batcave; Gotham City"
    },
    connections: {
      "group-affiliation": "Batman Family, Outsiders",
      relatives:
        "Jarvis Pennyworth (father, deceased), Wilfred Pennyworth (older brother), Daphne Pennyworth (niece); Bruce Wayne (Batman, legal ward)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/628.jpg"
    }
  },
  {
    response: "success",
    id: "170",
    name: "Chameleon",
    powerstats: {
      intelligence: "88",
      strength: "10",
      speed: "12",
      durability: "28",
      power: "28",
      combat: "28"
    },
    biography: {
      "full-name": "Dmitri Anatoly Smerdyakov Kravinoff",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Dr. Ashley Kafka",
        "Dr. Turner",
        "J. Jonah Jameson",
        "Torpedo",
        "Rick Jones",
        "Dr. Henry Pym",
        "Peter Parker",
        "Captain George Stacy",
        "Dr. Robert Bruce Banner",
        "General"
      ],
      "place-of-birth": "Russia",
      "first-appearance": "Amazing Spider-Man #1",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation":
        "The Exterminators; formerly Sinister Six, Sinister Twelve",
      relatives:
        "Kravinoff Patriarch (father, deceased), mother (unnamed), Sergei Kravinoff (Kraven I, half-brother, deceased), Vladimir Kravinoff (The Grim Hunter, nephew, deceased), Alyosha Kravinoff (Kraven the Hunter, nephew), Ned Tannengarden (nephew, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/660.jpg"
    }
  },
  {
    response: "success",
    id: "171",
    name: "Changeling",
    powerstats: {
      intelligence: "63",
      strength: "10",
      speed: "23",
      durability: "42",
      power: "64",
      combat: "64"
    },
    biography: {
      "full-name": "Kevin Sidney",
      "alter-egos": "No alter egos found.",
      aliases: ["Professor X", "Professor Charles Xavier"],
      "place-of-birth": "-",
      "first-appearance": "Uncanny X-Men #35 (August, 1967)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["5'11", "180 cm"],
      weight: ["180 lb", "81 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: {
      occupation: "Former substitute teacher, adventurer, subversive",
      base: "-"
    },
    connections: {
      "group-affiliation": "Formerly X-Humed, X-Men, Factor Three",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1107.jpg"
    }
  },
  {
    response: "success",
    id: "172",
    name: "Cheetah",
    powerstats: {
      intelligence: "38",
      strength: "8",
      speed: "42",
      durability: "20",
      power: "32",
      combat: "70"
    },
    biography: {
      "full-name": "Priscilla Rich",
      "alter-egos": "No alter egos found.",
      aliases: ["Kay Carlton", "The Cheetah"],
      "place-of-birth": "-",
      "first-appearance": "Wonder Woman Vol1 #6 (Fall 1943)",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["5'4", "163 cm"],
      weight: ["110 lb", "50 kg"],
      "eye-color": "Green",
      "hair-color": "Blond"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "Villainy Inc",
      relatives: "Claudia Rich (cousin), Debi Domaine (niece)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/661.jpg"
    }
  },
  {
    response: "success",
    id: "174",
    name: "Cheetah III",
    powerstats: {
      intelligence: "88",
      strength: "100",
      speed: "88",
      durability: "80",
      power: "78",
      combat: "95"
    },
    biography: {
      "full-name": "Barbara Minerva",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Barbara Minerva",
        "Bride of Urzkartaga",
        "Priscilla Rich",
        "Deborah Domaine",
        "Sabrina Ballesteros"
      ],
      "place-of-birth": "-",
      "first-appearance": "Wonder Woman Vol2 #7 (Sept 1987)",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["5'9", "175 cm"],
      weight: ["120 lb", "54 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: {
      occupation: "Archaeologist, Anthropologist",
      base: "Nottingham, England"
    },
    connections: {
      "group-affiliation": "The Society, Injustice League",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/926.jpg"
    }
  },
  {
    response: "success",
    id: "175",
    name: "Chromos",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Bernard Embers",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "London, England",
      "first-appearance": "Team Epic Episode 101",
      publisher: "Team Epic TV",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'1", "185 cm"],
      weight: ["190 lb", "86 kg"],
      "eye-color": "Brown",
      "hair-color": "Red / Grey"
    },
    work: {
      occupation:
        "Bar owner and Entertainer, President of V.E., Lieutenant in the G.V.W.",
      base: "Toronto, Canada"
    },
    connections: {
      "group-affiliation":
        "The Guardian Villain?s Ward (G.V.W.), Villain?s Equity (V.E.), and A.S.C. (Anti-Super Conspirators)",
      relatives: "Hi-Jaq (daughter), Exile (son)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1001.jpg"
    }
  },
  {
    response: "success",
    id: "176",
    name: "Chuck Norris",
    powerstats: {
      intelligence: "50",
      strength: "80",
      speed: "47",
      durability: "56",
      power: "42",
      combat: "99"
    },
    biography: {
      "full-name": "Carlos Ray Norris",
      "alter-egos": "No alter egos found.",
      aliases: ["Chuck"],
      "place-of-birth": "Ryan, Oklahoma, United States",
      "first-appearance": "-",
      publisher: "null",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["5'10", "178 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/954.jpg"
    }
  },
  {
    response: "success",
    id: "177",
    name: "Citizen Steel",
    powerstats: {
      intelligence: "50",
      strength: "95",
      speed: "33",
      durability: "100",
      power: "23",
      combat: "60"
    },
    biography: {
      "full-name": "Nathan Heywood",
      "alter-egos": "No alter egos found.",
      aliases: ["Buckeye", "Uncle Nate", "Uncle Nathan"],
      "place-of-birth": "-",
      "first-appearance": "Justice Society of America Vol 3 #2 (March, 2007)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'0", "183 cm"],
      weight: ["378 lb", "170 kg"],
      "eye-color": "Green",
      "hair-color": "Red"
    },
    work: {
      occupation: "Adventurer, former Professional Football Player",
      base: "Battery Park, New York City, formerly Franklin County, Ohio"
    },
    connections: {
      "group-affiliation": "Justice Society of America",
      relatives:
        "Hank Heywood, Sr. (Commander Steel, grandfather, deceased) ? Hank Heywood, Jr. (uncle, deceased) ? Hank Heywood III (Steel, cousin, deceased) ? Kirk Heywood (brother, deceased), Nicole (cousin)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10661.jpg"
    }
  },
  {
    response: "success",
    id: "178",
    name: "Claire Bennet",
    powerstats: {
      intelligence: "38",
      strength: "9",
      speed: "12",
      durability: "100",
      power: "90",
      combat: "28"
    },
    biography: {
      "full-name": "Claire Bennet",
      "alter-egos": "No alter egos found.",
      aliases: ["Vivian Lewis", "Claire Butler"],
      "place-of-birth": "-",
      "first-appearance": "Heroes S01E01",
      publisher: "NBC - Heroes",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation: "High school student, cheerleader",
      base: "formerly Odessa, TX, Costa Verde, CA"
    },
    connections: {
      "group-affiliation": "-",
      relatives:
        "Adoptive parents: Sandra Bennet, Noah Bennet, Biological parents: Meredith Gordon, Nathan Petrelli, Younger adoptive brother: Lyle Bennet,  Younger half brothers: Simon Petrelli, Monty Petrelli"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/941.jpg"
    }
  },
  {
    response: "success",
    id: "179",
    name: "Clea",
    powerstats: {
      intelligence: "null",
      strength: "39",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Clea",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "The Dark Dimension",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "-",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "White"
    },
    work: {
      occupation:
        "Former ruler and Sorceress Supreme of the Dark Dimension; former apprentice of Doctor Strange",
      base: "Base of operations unknown"
    },
    connections: {
      "group-affiliation": "-",
      relatives: "Dormammu (uncle), Umar (mother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/45.jpg"
    }
  },
  {
    response: "success",
    id: "18",
    name: "Alien",
    powerstats: {
      intelligence: "50",
      strength: "28",
      speed: "42",
      durability: "90",
      power: "57",
      combat: "60"
    },
    biography: {
      "full-name": "Xenomorph",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Your chest :)",
      "first-appearance": "Alien (1979)",
      publisher: "Dark Horse Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Xenomorph XX121",
      height: ["8'0", "244 cm"],
      weight: ["375 lb", "169 kg"],
      "eye-color": "-",
      "hair-color": "No Hair"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "-",
      relatives: "Alien Queen (mother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10449.jpg"
    }
  },
  {
    response: "success",
    id: "180",
    name: "Cloak",
    powerstats: {
      intelligence: "63",
      strength: "10",
      speed: "47",
      durability: "64",
      power: "100",
      combat: "56"
    },
    biography: {
      "full-name": "Tyrone Johnson",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "South Boston, Massachusetts",
      "first-appearance": "Spectacular Spiderman #64",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["7'5", "226 cm"],
      weight: ["155 lb", "70 kg"],
      "eye-color": "brown",
      "hair-color": "black"
    },
    work: {
      occupation: "Vigilante",
      base: "Holy Ghost Church, 42nd Street, New York City"
    },
    connections: {
      "group-affiliation": "Cloak and Dagger, New Warriors, Marvel Knights",
      relatives: "Smokin' Joe (rumored grandfather)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/46.jpg"
    }
  },
  {
    response: "success",
    id: "181",
    name: "Clock King",
    powerstats: {
      intelligence: "75",
      strength: "10",
      speed: "17",
      durability: "10",
      power: "7",
      combat: "40"
    },
    biography: {
      "full-name": "William Tockman",
      "alter-egos": "No alter egos found.",
      aliases: ["Tempus Fugit"],
      "place-of-birth": "-",
      "first-appearance": "World's Finest #111 (August, 1960)",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'10", "178 cm"],
      weight: ["173 lb", "78 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation":
        "Clockwatchers, Justice League Antarctica, Suicide Squad, Time Foes",
      relatives: "Beverly (sister, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10396.jpg"
    }
  },
  {
    response: "success",
    id: "182",
    name: "Cogliostro",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Cain",
      "alter-egos": "No alter egos found.",
      aliases: ["Nicholas Cogliostro", "Cog", "The Count"],
      "place-of-birth": "-",
      "first-appearance": "Spawn #9",
      publisher: "Image Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1074.jpg"
    }
  },
  {
    response: "success",
    id: "183",
    name: "Colin Wagner",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "HarperCollins",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Grey",
      "hair-color": "Brown"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1153.jpg"
    }
  },
  {
    response: "success",
    id: "184",
    name: "Colossal Boy",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1182.jpg"
    }
  },
  {
    response: "success",
    id: "185",
    name: "Colossus",
    powerstats: {
      intelligence: "63",
      strength: "83",
      speed: "33",
      durability: "100",
      power: "45",
      combat: "80"
    },
    biography: {
      "full-name": "Piotr Nikolaievitch Rasputin",
      "alter-egos": "No alter egos found.",
      aliases: ["Pete", "Peter Nicholas", "The Proletarian", "Little Brother"],
      "place-of-birth":
        "Ust-Ordynski Collective, near Lake Baikal, Siberia, Russia",
      "first-appearance": "Giant-Size X-Men #1 (May, 1975)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["7'5", "226 cm"],
      weight: ["500 lb", "225 kg"],
      "eye-color": "Silver",
      "hair-color": "Black"
    },
    work: {
      occupation: "(current) Adventurer, student, (former) Artist",
      base:
        "(current) Professor Charles Xavier's Institute for Higher Learning, Salem Center, Westchester County, New York (former) Muir Isle, Scotland,; a loft in Soho, Manhattan, Ust-Ordynski Collective, Lake Baikal, Siberia, U.S.S.R., X-Men Headquarters in Austra"
    },
    connections: {
      "group-affiliation": "X-Men; formerly Excalibur, Acolytes, Defender",
      relatives:
        "Grigory Efimovich Rasputin (great-grandfather, deceased), Elena (great-grandmother, deceased), Ivan Rasputin (great-grand uncle, deceased), Grigory Rasputin (grandfather, deceased), Nikolai Rasputin (father, deceased), Alexandra Rasputina (mother, deceased), Vladimir Rasputin (uncle, deceased), unidentified aunt & uncle (deceased), Illyana Nikolievna Rasputina (Magik, sister, deceased), Mikhail Rasputin (brother), Peter Jr. (son), Larissa Mishchenko (cousin, deceased), Konstantin (cousin, deceased), Klara (cousin, deceased), Dimitriy (cousin, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/48.jpg"
    }
  },
  {
    response: "success",
    id: "186",
    name: "Copycat",
    powerstats: {
      intelligence: "56",
      strength: "10",
      speed: "21",
      durability: "25",
      power: "54",
      combat: "60"
    },
    biography: {
      "full-name": "Vanessa Carlysle",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Nurse Veronica",
        "Patricia Muggins",
        "Titania",
        "Garrison Kane",
        "Christina Valentino",
        "Domino",
        "Cheryl Marks",
        "Debbie",
        "Marguerite",
        "Amy"
      ],
      "place-of-birth": "-",
      "first-appearance": "New Mutants #98 (February, 1991)",
      publisher: "Marvel Comics",
      alignment: "neutral"
    },
    appearance: {
      gender: "Female",
      race: "Mutant",
      height: ["6'0", "183 cm"],
      weight: ["148 lb", "67 kg"],
      "eye-color": "Red",
      "hair-color": "White"
    },
    work: {
      occupation: "-",
      base:
        "Mobile; formerly Adirondack Mountains, Xavier's School for Gifted Youngsters"
    },
    connections: {
      "group-affiliation":
        "Weapon X/Weapon Plus and Six Pack (as Copycat), X-Force and New Mutants (as Domino)",
      relatives: "Burt Carlysle (father, deceased), Dorothy Carlysle (mother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10423.jpg"
    }
  },
  {
    response: "success",
    id: "187",
    name: "Corsair",
    powerstats: {
      intelligence: "null",
      strength: "16",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Christopher Summers",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Uncanny X-Men #107",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'3", "191 cm"],
      weight: ["175 lb", "79 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: {
      occupation: "Pirate, former pilot",
      base: "The Starjammer, Mobile"
    },
    connections: {
      "group-affiliation": "Starjammers (leader), formerly N.A.S.A, U.S.A.F.",
      relatives:
        "Philip Summers (father), Deborah Summers (mother), Katherine Anne Summers (wife, deceased), Hepzibah (mate), Scott Summers (Cyclops, son), Alexander Summers (Havok, son), Gabriel Summers (Vulcan, son), Madelyne Pryor-Summers (daughter-in-law, deceased), Jean Grey-Summers (Phoenix, daughter-in-law), Nathan Christopher Summers (Cable, grandson), Stryfe (clone grandson, deceased), Tyler Dayspring (Genesis, great-grandson, deceased), Rachel Grey (Marvel Girl, alternate timeline granddaughter)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/49.jpg"
    }
  },
  {
    response: "success",
    id: "188",
    name: "Cottonmouth",
    powerstats: {
      intelligence: "50",
      strength: "10",
      speed: "8",
      durability: "10",
      power: "27",
      combat: "25"
    },
    biography: {
      "full-name": "Burchell Clemens",
      "alter-egos": "No alter egos found.",
      aliases: ["Quincy McIver"],
      "place-of-birth": "-",
      "first-appearance": "Captain America #310 (October, 1985)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'0", "183 cm"],
      weight: ["220 lb", "99 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: { occupation: "Professional criminal", base: "Serpent Citadel" },
    connections: { "group-affiliation": "Serpent Society", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10452.jpg"
    }
  },
  {
    response: "success",
    id: "189",
    name: "Crimson Crusader",
    powerstats: {
      intelligence: "null",
      strength: "58",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Rory Destine",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Ravenscroft, England",
      "first-appearance": "ClanDestine #1 (1994)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Blue",
      "hair-color": "Strawberry Blond"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "ClanDestine",
      relatives:
        "Adam Destine (father), unnamed genie (mother), Albert Destine (brother), Samantha Destine (Argent, sister), William Destine (Cap'n Oz, brother), Kay Cera (Cuckoo, sister), Florence Destine (sister, deceased), Gracie Destine (sister, deceased), Dominic Destine (Hex, brother), Pandora Destine (Imp, sister), Maurice Destine (brother, deceased), Newton Destine (brother), Vincent Destine (brother, deceased), Walter Destine (Wallop, brother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/303.jpg"
    }
  },
  {
    response: "success",
    id: "19",
    name: "Allan Quatermain",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance":
        "(original version) King Solomon's Mines; (this version) League of Extraordinary Gentlemen #1 (America's Best Comics)",
      publisher: "Wildstorm",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: {
      occupation: "(former) hunter; (current) agent of the British government",
      base: "The Secret Wing of the British Museum, London"
    },
    connections: {
      "group-affiliation": "League of Extraordinary Gentlemen",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/630.jpg"
    }
  },
  {
    response: "success",
    id: "190",
    name: "Crimson Dynamo",
    powerstats: {
      intelligence: "null",
      strength: "65",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Anton Vanko",
      "alter-egos": "No alter egos found.",
      aliases: ["Krashni Denamit"],
      "place-of-birth": "-",
      "first-appearance": "Tales of Suspense #46 (Oct 1963)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["5'11", "180 cm"],
      weight: ["230 lb", "104 kg"],
      "eye-color": "Brown",
      "hair-color": "No Hair"
    },
    work: {
      occupation: "Scientist",
      base: "Stark Industries plant, Long Island, New York"
    },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1093.jpg"
    }
  },
  {
    response: "success",
    id: "191",
    name: "Crystal",
    powerstats: {
      intelligence: "63",
      strength: "16",
      speed: "12",
      durability: "14",
      power: "61",
      combat: "56"
    },
    biography: {
      "full-name": "Crystallia Amaquelin",
      "alter-egos": "No alter egos found.",
      aliases: ["Crys", "Exquisite Elemental"],
      "place-of-birth": "Attilan",
      "first-appearance": "Fantastic Four #45 (1965)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Inhuman",
      height: ["5'6", "168 cm"],
      weight: ["110 lb", "50 kg"],
      "eye-color": "Green",
      "hair-color": "Red"
    },
    work: { occupation: "Mother, adventuress", base: "-" },
    connections: {
      "group-affiliation":
        "Inhumans (Royal Family); formerly Fantastic Four, Avengers, Queen's Vengeance",
      relatives:
        "Quelin (father), Ambur (mother), Medusa (sister), Gorgon, Karnak, Triton (cousins), Black Bolt (cousin, brother-in-law), Pietro Maximoff (Quicksilver, estranged husband), Luna (daughter), Ahura (nephew), extensive extended family"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/305.jpg"
    }
  },
  {
    response: "success",
    id: "192",
    name: "Curse",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Phillip Krahn",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Spawn #25",
      publisher: "Image Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1066.jpg"
    }
  },
  {
    response: "success",
    id: "193",
    name: "Cy-Gor",
    powerstats: {
      intelligence: "null",
      strength: "96",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Image Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1075.jpg"
    }
  },
  {
    response: "success",
    id: "194",
    name: "Cyborg",
    powerstats: {
      intelligence: "75",
      strength: "53",
      speed: "42",
      durability: "85",
      power: "71",
      combat: "64"
    },
    biography: {
      "full-name": "Victor Stone",
      "alter-egos": "No alter egos found.",
      aliases: ["Cyberion Technis", "Omegadrome", "Planet Cyberion"],
      "place-of-birth": "New York City, New York",
      "first-appearance": "DC Comics Presents #26 (October, 1980)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Cyborg",
      height: ["6'6", "198 cm"],
      weight: ["385 lb", "173 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: { occupation: "Adventurer, Teen Titan", base: "San Francisco" },
    connections: {
      "group-affiliation":
        "Justice League; formerly Teen Titans, Titans, Titans East, New Teen Titans",
      relatives:
        "Silas Stone (father), Elinore Stone (mother), Tucker Stone (grandfather), Maude Stone (grandmother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1204.jpg"
    }
  },
  {
    response: "success",
    id: "195",
    name: "Cyborg Superman",
    powerstats: {
      intelligence: "75",
      strength: "93",
      speed: "92",
      durability: "100",
      power: "100",
      combat: "80"
    },
    biography: {
      "full-name": "Henry Henshaw",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Grandmaster of the Manhunters",
        "Herald of the Anti-Monitor",
        "Alpha-Prime of the Alpha Lanterns"
      ],
      "place-of-birth": "-",
      "first-appearance": "Adventures of Superman #466 (May, 1990)",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Cyborg",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: {
      occupation: "-",
      base: "Warworld, Qward, Antimatter Universe, formerly Biot, Sector 3601"
    },
    connections: {
      "group-affiliation":
        "Alpha Lantern Corps, Manhunters, Warworld, formerly Apokolips and Sinestro Corps",
      relatives: "Terri Henshaw (wife, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/667.jpg"
    }
  },
  {
    response: "success",
    id: "196",
    name: "Cyclops",
    powerstats: {
      intelligence: "75",
      strength: "10",
      speed: "23",
      durability: "42",
      power: "76",
      combat: "80"
    },
    biography: {
      "full-name": "Scott Summers",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Scotty",
        "Cyke",
        "Slim",
        "Fearless Leader",
        "One-Eye",
        "Erik the Red",
        "Slym Dayspring",
        "Mutate 007",
        "Apocalypse"
      ],
      "place-of-birth": "Anchorage, Alaska",
      "first-appearance": "X-Men #1 (September, 1963)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["6'3", "191 cm"],
      weight: ["195 lb", "88 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: {
      occupation:
        "Leader of mutant race, adventurer, headmaster, former student, radio announcer",
      base: "Xavier Institute, Salem Center, Westchester County, New York"
    },
    connections: {
      "group-affiliation":
        "X-Men (leader, founding member); formerly X-Force (founder); Corsairs (squad leader); The Twelve; X-Factor/X-Terminators (founding member); 198",
      relatives:
        "Oscar Summers (adoptive paternal distant ancestor, deceased); Daniel Summers (paternal distant ancestor, deceased); Amanda Mueller (Black Womb) (paternal distant ancestor); unnamed great-grandfather, deceased; Gloria Dayne (Fontanelle) (paternal distant ancestor); Philip Summers (paternal grandfather); Deborah Summers (paternal grandmother); Christopher Summers (Corsair) (father, deceased); Katherine Ann Summers (mother, deceased); Jack Winters (Jack O'Diamonds) (former foster father); Alexander Summers (Havok) (brother); Gabriel Summers (Vulcan) (brother, deceased); Madelyne Pryor-Summers (Red Queen) (first wife/second wife's clone, deceased); Jean Grey-Summers (Phoenix) (second wife, deceased); Nathan Summers (Cable) (son, deceased); Gailyn Bailey (niece, deceased); Joseph Bailey (nephew, deceased); Adam Neramani (X-Treme) (nephew, alleged half-brother); Hope Summers (adoptive granddaughter); Stryfe (son's clone); Summers and Grey Family Tree (more relatives)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/50.jpg"
    }
  },
  {
    response: "success",
    id: "197",
    name: "Cypher",
    powerstats: {
      intelligence: "null",
      strength: "44",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Douglas Aaron Ramsey",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Place of birth unknown",
      "first-appearance": "New Mutants (Vol. 1) #13",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "-",
      race: "null",
      height: ["5'9'", "175 cm"],
      weight: ["150 lb", "68 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation: "Student, Adventurer",
      base:
        "Professor Charles Xavier's School for Gifted Youngsters, Salem Center, Westchester County, New York"
    },
    connections: {
      "group-affiliation": "New Mutants",
      relatives: "Phillip Ramsey (father), Sheila Ramsey (mother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/168.jpg"
    }
  },
  {
    response: "success",
    id: "198",
    name: "Dagger",
    powerstats: {
      intelligence: "63",
      strength: "10",
      speed: "35",
      durability: "42",
      power: "52",
      combat: "70"
    },
    biography: {
      "full-name": "Tandy Bowen",
      "alter-egos": "No alter egos found.",
      aliases: ["Lady Light"],
      "place-of-birth": "Shaker Heights, Ohio",
      "first-appearance": "Spectacular Spiderman #64",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["Shaker Heights, Ohio"],
      weight: ["116 lb", "52 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation: "Vigilante",
      base: "Holy Ghost Church, 42nd Street, New York City"
    },
    connections: {
      "group-affiliation":
        "Cloak and Dagger, Defenders, League of Losers, Marvel Knights, New Warriors, Secret Avengers",
      relatives:
        "Melissa Bowen (mother), unnamed father, Phillip Carlisle (stepfather), Father Michael Bowen (uncle)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/51.jpg"
    }
  },
  {
    response: "success",
    id: "199",
    name: "Danny Cooper",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "HarperCollins",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Brown",
      "hair-color": "Blond"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1152.jpg"
    }
  },
  {
    response: "success",
    id: "9",
    name: "Abe Sapien",
    powerstats: {
      intelligence: "88",
      strength: "28",
      speed: "35",
      durability: "65",
      power: "100",
      combat: "85"
    },
    biography: {
      "full-name": "Abraham Sapien",
      "alter-egos": "No alter egos found.",
      aliases: ["Langdon Everett Caul", "Abraham Sapien", "Langdon Caul"],
      "place-of-birth": "-",
      "first-appearance": "Hellboy: Seed of Destruction (1993)",
      publisher: "Dark Horse Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Icthyo Sapien",
      height: ["6'3", "191 cm"],
      weight: ["145 lb", "65 kg"],
      "eye-color": "Blue",
      "hair-color": "No Hair"
    },
    work: { occupation: "Paranormal Investigator", base: "-" },
    connections: {
      "group-affiliation": "Bureau for Paranormal Research and Defense",
      relatives: "Edith Howard (wife, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/956.jpg"
    }
  },
  {
    response: "success",
    id: "20",
    name: "Amazo",
    powerstats: {
      intelligence: "63",
      strength: "100",
      speed: "83",
      durability: "100",
      power: "100",
      combat: "100"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Professor Ivos Amazing Android",
        "Timazo",
        "Humazo",
        "Hourmazo"
      ],
      "place-of-birth": "-",
      "first-appearance": "Brave and the Bold #30 (July, 1960)",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Android",
      height: ["8'5", "257 cm"],
      weight: ["385 lb", "173 kg"],
      "eye-color": "Red",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "Formerly the Secret Society of Super Villains",
      relatives: "Professor Ivo (creator), Kid Amazo (cyborg offspring)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1390.jpg"
    }
  },
  {
    response: "success",
    id: "200",
    name: "Daphne Powell",
    powerstats: {
      intelligence: "38",
      strength: "10",
      speed: "8",
      durability: "10",
      power: "56",
      combat: "10"
    },
    biography: {
      "full-name": "Daphne Powell",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "No Ordinary Family S01E01 (2010)",
      publisher: "ABC Studios",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "Student", base: "-" },
    connections: {
      "group-affiliation": "-",
      relatives:
        "Jim Powell and Stephanie Powell (parents), JJ Powell (brother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1356.jpg"
    }
  },
  {
    response: "success",
    id: "201",
    name: "Daredevil",
    powerstats: {
      intelligence: "75",
      strength: "13",
      speed: "25",
      durability: "35",
      power: "61",
      combat: "100"
    },
    biography: {
      "full-name": "Matt Murdock",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Matt",
        "Jack Batlin",
        "Kingpin of Crime",
        "Laurent LeVasseur",
        'Michael "Mike" Murdock',
        "Scarlet Swashbuckler",
        "Nameless One",
        "Kingpin of Hell's Kitchen",
        "The Man Without Fear",
        "The Guardian Devil",
        "DD",
        "Red",
        "Hornhead",
        "Cooper Peyton",
        "Captain Universe"
      ],
      "place-of-birth": "New York City, New York",
      "first-appearance": "Daredevil #1 (April, 1964)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'0", "183 cm"],
      weight: ["200 lb", "90 kg"],
      "eye-color": "Blue",
      "hair-color": "Red"
    },
    work: {
      occupation: "Adventurer, vigilante, Attorney at Law",
      base: "Hell's Kitchen, New York, New York, Shadowland (formerly)"
    },
    connections: {
      "group-affiliation":
        "none; Formerly: partner of Black Widow (Natasha Romanoff), Defenders, S.H.I.E.L.D., Marvel Knights, Secret Avengers (Civil War), Hand leader.",
      relatives:
        'Jonathan "Battling Jack" Murdock (Father, deceased), Maggie Murdock (aka Sister Maggie, Mother), Milla Donovan (ex-wife)'
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/52.jpg"
    }
  },
  {
    response: "success",
    id: "202",
    name: "Darkhawk",
    powerstats: {
      intelligence: "50",
      strength: "32",
      speed: "33",
      durability: "70",
      power: "74",
      combat: "64"
    },
    biography: {
      "full-name": "Christopher Powell",
      "alter-egos": "No alter egos found.",
      aliases: ["Bucket-Head", "Edge-Man", "Powell"],
      "place-of-birth": "Queens, New York",
      "first-appearance": "Darkhawk #1 (March, 1991)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'1", "185 cm"],
      weight: ["180 lb", "81 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: {
      occupation: "Retired Superhero",
      base:
        "Los Angeles, California; formerly New York City and Avengers Compound"
    },
    connections: {
      "group-affiliation":
        "formerly Loners, New Warriors, Avengers West Coast (reservist), Secret Defenders (founder)",
      relatives:
        "Michael Powell (father), Grace Powell (mother), Jonathon and Jason Powell (brothers)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/53.jpg"
    }
  },
  {
    response: "success",
    id: "203",
    name: "Darkman",
    powerstats: {
      intelligence: "75",
      strength: "14",
      speed: "23",
      durability: "85",
      power: "12",
      combat: "28"
    },
    biography: {
      "full-name": "Peyton Westlake",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Darkman (August 24, 1990)",
      publisher: "Universal Studios",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "Scientist", base: "-" },
    connections: {
      "group-affiliation": "-",
      relatives: "Julie Hastings (girlfriend)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1126.jpg"
    }
  },
  {
    response: "success",
    id: "204",
    name: "Darkseid",
    powerstats: {
      intelligence: "88",
      strength: "100",
      speed: "83",
      durability: "100",
      power: "100",
      combat: "95"
    },
    biography: {
      "full-name": "Uxas",
      "alter-egos": "No alter egos found.",
      aliases: ["Dark God"],
      "place-of-birth": "-",
      "first-appearance": "Superman's Pal Jimmy Olsen #134 (November 1970)",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "New God",
      height: ["8'9", "267 cm"],
      weight: ["1815 lb", "817 kg"],
      "eye-color": "Red",
      "hair-color": "No Hair"
    },
    work: { occupation: "Dictator of Apokolips", base: "-" },
    connections: {
      "group-affiliation":
        "New Gods of Apokolips(ruler), Secret Society of Supervillains",
      relatives:
        "Zonuz (father), Izaya (brother), Avia (sister, deceased), Grail (daughter), Kalibak (son), Orion (son), Deathspawn (son), Scot (nephew/adopted son)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/668.jpg"
    }
  },
  {
    response: "success",
    id: "205",
    name: "Darkside",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "null",
      alignment: "bad"
    },
    appearance: {
      gender: "-",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/840.jpg"
    }
  },
  {
    response: "success",
    id: "206",
    name: "Darkstar",
    powerstats: {
      intelligence: "38",
      strength: "8",
      speed: "35",
      durability: "42",
      power: "79",
      combat: "64"
    },
    biography: {
      "full-name": "Laynia Petrovna",
      "alter-egos": "No alter egos found.",
      aliases: ["Tyomni Zvesda"],
      "place-of-birth": "Minks, USSR",
      "first-appearance": "Champions #7 (August, 1976)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Mutant",
      height: ["5'6", "168 cm"],
      weight: ["125 lb", "56 kg"],
      "eye-color": "Brown",
      "hair-color": "Blond"
    },
    work: {
      occupation: "Occupation unknown",
      base:
        "(before death) Paris, France (formerly) Moscow, USSR; Los Angeles, California, United States"
    },
    connections: {
      "group-affiliation":
        "(at death)X-Corps (formerly) Champions, Winter Guard, Soviet Super Soldiers",
      relatives:
        "Nicolai Krylenko a.k.a. Vanguard (brother), Sergi Krylov a.k.a. The Presence (father), Marya Krylova (mother, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/169.jpg"
    }
  },
  {
    response: "success",
    id: "207",
    name: "Darth Maul",
    powerstats: {
      intelligence: "56",
      strength: "48",
      speed: "50",
      durability: "30",
      power: "100",
      combat: "100"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["Sith", "Master Of The Double-Bladed Lightsaber"],
      "place-of-birth": "Dathomir",
      "first-appearance": "Star Wars Episode I: The Phantom Menace (1999)",
      publisher: "George Lucas",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Dathomirian Zabrak",
      height: ["5'7", "170 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Yellow / Red",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "-",
      relatives: "Darth Sidious (Master)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10464.jpg"
    }
  },
  {
    response: "success",
    id: "208",
    name: "Darth Vader",
    powerstats: {
      intelligence: "69",
      strength: "48",
      speed: "33",
      durability: "35",
      power: "100",
      combat: "100"
    },
    biography: {
      "full-name": "Anakin Skywalker",
      "alter-egos": "No alter egos found.",
      aliases: ["Lord Vader"],
      "place-of-birth": "Tatooine",
      "first-appearance": "Star Wars: Episode IV - A New Hope (1977)",
      publisher: "George Lucas",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Cyborg",
      height: ["6'6", "198 cm"],
      weight: ["300 lb", "135 kg"],
      "eye-color": "Yellow",
      "hair-color": "No Hair"
    },
    work: {
      occupation: "Sith Lord, Supreme Commander of the Imperial Fleet",
      base: "Death Star"
    },
    connections: {
      "group-affiliation": "Sith, Galactic Empire",
      relatives: "Luke Skywalker (Son), Princess Leia (Daughter)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10444.jpg"
    }
  },
  {
    response: "success",
    id: "209",
    name: "Dash",
    powerstats: {
      intelligence: "25",
      strength: "12",
      speed: "92",
      durability: "60",
      power: "20",
      combat: "30"
    },
    biography: {
      "full-name": "Dashiell Robert Parr",
      "alter-egos": "No alter egos found.",
      aliases: ["The Fastest Kid on Earth", "The Dash"],
      "place-of-birth": "-",
      "first-appearance": "The Incredibles (Movies, 2004)",
      publisher: "Dark Horse Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["4'0", "122 cm"],
      weight: ["60 lb", "27 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation":
        "Incredible Family (genetic member), National Supers Agency (ties), Edna Mode (receives costumes and gadgets from her), Frozone (long-time friend), Mirage (ally)",
      relatives:
        "Robert Parr (Mr Incredible, father), Helen Parr (Elastigirl, mother), Violet Parr(Violet, sister), , Jack-jack (brother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/824.jpg"
    }
  },
  {
    response: "success",
    id: "21",
    name: "Ammo",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Daredevil #252 (March, 1988)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'2", "188 cm"],
      weight: ["225 lb", "101 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: {
      occupation: "Gang leader , criminal , former soldier",
      base: "New York City"
    },
    connections: {
      "group-affiliation": "former leader of the Wildboys",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/184.jpg"
    }
  },
  {
    response: "success",
    id: "210",
    name: "Data",
    powerstats: {
      intelligence: "100",
      strength: "32",
      speed: "21",
      durability: "40",
      power: "56",
      combat: "50"
    },
    biography: {
      "full-name": "Data",
      "alter-egos": "No alter egos found.",
      aliases: ["B-4"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Star Trek",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Android",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Yellow",
      "hair-color": "Brown"
    },
    work: { occupation: "Lieutenant commander", base: "-" },
    connections: {
      "group-affiliation": "-",
      relatives: "Dr. Noonian Soong (creator)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10577.jpg"
    }
  },
  {
    response: "success",
    id: "211",
    name: "Dazzler",
    powerstats: {
      intelligence: "63",
      strength: "10",
      speed: "33",
      durability: "60",
      power: "100",
      combat: "55"
    },
    biography: {
      "full-name": "Alison Blaire",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Ali",
        "The Disco Dazzler",
        "Songbird",
        "Dazz",
        "Kimberly Schau",
        "Ally"
      ],
      "place-of-birth": "Gardendale, Long Island, New York",
      "first-appearance": "X-Men #130 (1980)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Mutant",
      height: ["5'8", "173 cm"],
      weight: ["115 lb", "52 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation: "Adventurer, singer, former actress, model, revolutionary",
      base: "-"
    },
    connections: {
      "group-affiliation":
        "Formerly Excalibur, X-Babies (guardian), Mojoverse Rebellion, X-Men, Cat's Laughing, Gladiators",
      relatives:
        "Bella Blaire (paternal grandmother), Carter Blaire (father, deceased), Katherine Blaire-Brown (Barbara London, mother), Nicholas Brown (step-father), Lois London (half-sister), Longshot (husband)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1043.jpg"
    }
  },
  {
    response: "success",
    id: "212",
    name: "Deadman",
    powerstats: {
      intelligence: "50",
      strength: "10",
      speed: "33",
      durability: "100",
      power: "100",
      combat: "42"
    },
    biography: {
      "full-name": "Boston Brand",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Strange Adventures #205 (October, 1967)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'0", "183 cm"],
      weight: ["201 lb", "90 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: {
      occupation: "Wandering Spirit, Former Circus Aerialist",
      base: "Mobile, Realm of the Just Dead"
    },
    connections: {
      "group-affiliation":
        "White Lantern Corps, formerly Sentinels of Magic, Seven Soldiers of Victory, Justice League of Apostles",
      relatives:
        "Cleveland Brand (twin brother, deceased), Lita Brand (niece), Unnamed parents"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1472.jpg"
    }
  },
  {
    response: "success",
    id: "213",
    name: "Deadpool",
    powerstats: {
      intelligence: "69",
      strength: "32",
      speed: "50",
      durability: "100",
      power: "100",
      combat: "100"
    },
    biography: {
      "full-name": "Wade Wilson",
      "alter-egos": "Evil Deadpool, Venompool",
      aliases: [
        "Wade Wilson",
        "Jack",
        'Chiyonosake ("the Wolf of the Rice Wine")',
        "Rhodes",
        "Corpus",
        "Lopez",
        "Hobgoblin",
        "Thom Cruz",
        "Peter Parker"
      ],
      "place-of-birth": "Canada",
      "first-appearance": "New Mutants #98 (February, 1991)",
      publisher: "Evil Deadpool",
      alignment: "neutral"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["6'2", "188 cm"],
      weight: ["210 lb", "95 kg"],
      "eye-color": "Brown",
      "hair-color": "No Hair"
    },
    work: {
      occupation:
        "Mercenary; former enforcer, government operative, sumo wrestler, soldier, assassin, anti-hero, others",
      base: "Cavern-X, Sedona, Arizona, Mobile"
    },
    connections: {
      "group-affiliation":
        "Thunderbolts (Strike Team), shares body with Agent Preston; formerly X-Force, Deadpool Corps, Agency X, S.H.I.E.L.D.; Code Red, Six Pack, One World Church, DP Inc., Weapon X, Weapon Plus, Heroes for Hire, Secret Defenders, Frightful Four, Team Deadpool, L",
      relatives:
        'Thomas "Mickey" Wilson (father, deceased); Hailey Wilson (mother, deceased); Gretchen Wilson, Orksa (ex-wives); Evil Deadpool (clone); Widdle Wade (clone)'
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/835.jpg"
    }
  },
  {
    response: "success",
    id: "214",
    name: "Deadshot",
    powerstats: {
      intelligence: "50",
      strength: "10",
      speed: "23",
      durability: "28",
      power: "55",
      combat: "80"
    },
    biography: {
      "full-name": "Floyd Lawton",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Man Who Never Misses",
        "Worlds Finest Assassin",
        "Orlando Furioso"
      ],
      "place-of-birth": "-",
      "first-appearance": "Batman #59 (June, 1950)",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'1", "185 cm"],
      weight: ["202 lb", "91 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/670.jpg"
    }
  },
  {
    response: "success",
    id: "215",
    name: "Deathlok",
    powerstats: {
      intelligence: "69",
      strength: "32",
      speed: "30",
      durability: "70",
      power: "40",
      combat: "60"
    },
    biography: {
      "full-name": "Luther Manning",
      "alter-egos": "No alter egos found.",
      aliases: ["Demolisher"],
      "place-of-birth": "-",
      "first-appearance": "Astonishing Tales #25 (August, 1974)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Cyborg",
      height: ["6'4", "193 cm"],
      weight: ["395 lb", "178 kg"],
      "eye-color": "Brown",
      "hair-color": "Grey"
    },
    work: { occupation: "-", base: "New York area" },
    connections: {
      "group-affiliation":
        "Former member of the CIA, Project: Alpha-Mech, US Army, ally of Godwulf's Redeemers",
      relatives: "Janice (Wife, seperated), Richard (son)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1304.jpg"
    }
  },
  {
    response: "success",
    id: "216",
    name: "Deathstroke",
    powerstats: {
      intelligence: "75",
      strength: "30",
      speed: "35",
      durability: "100",
      power: "47",
      combat: "90"
    },
    biography: {
      "full-name": "Slade Joseph Wilson",
      "alter-egos": "No alter egos found.",
      aliases: ["Slade Wilson", "Deathstroke the Terminator", "Batman"],
      "place-of-birth": "-",
      "first-appearance": "New Teen Titans #2 (December, 1980)",
      publisher: "DC Comics",
      alignment: "neutral"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'4", "193 cm"],
      weight: ["225 lb", "101 kg"],
      "eye-color": "Blue",
      "hair-color": "White"
    },
    work: {
      occupation: "Mercenary; Former Soldier, Big-Game Hunter",
      base: "The Labyrinth (exact location is currently unknown)"
    },
    connections: {
      "group-affiliation":
        "The Society, Titans; Formerly Tartarus, The Injustice League",
      relatives:
        "Wade LaFarge (Ravager III, half-brother, deceased), Adeline Kane (ex-wife, deceased), Grant Wilson (Ravager I, son, deceased), Joseph Wilson (Jericho, son), Rose Wilson (Ravager IV, daughter)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/672.jpg"
    }
  },
  {
    response: "success",
    id: "217",
    name: "Demogoblin",
    powerstats: {
      intelligence: "50",
      strength: "48",
      speed: "42",
      durability: "35",
      power: "67",
      combat: "60"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["Jason Macendale Jr"],
      "place-of-birth": "-",
      "first-appearance": "Web of Spider-Man #86 (March, 1992)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Demon",
      height: ["6'1", "185 cm"],
      weight: ["210 lb", "95 kg"],
      "eye-color": "Red",
      "hair-color": "No Hair"
    },
    work: { occupation: "Demonic Redeemer", base: "New York City" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1515.jpg"
    }
  },
  {
    response: "success",
    id: "218",
    name: "Destroyer",
    powerstats: {
      intelligence: "50",
      strength: "95",
      speed: "58",
      durability: "98",
      power: "85",
      combat: "70"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Created in Asgard",
      "first-appearance": "Journey into Mystery #118 (1965)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'2", "188 cm"],
      weight: ["850 lb", "383 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1294.jpg"
    }
  },
  {
    response: "success",
    id: "219",
    name: "Diamondback",
    powerstats: {
      intelligence: "44",
      strength: "16",
      speed: "23",
      durability: "28",
      power: "45",
      combat: "60"
    },
    biography: {
      "full-name": "Willis Stryker",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Luke Cage, Hero for Hire#1 (1972)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'4", "193 cm"],
      weight: ["200 lb", "90 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: { occupation: "Criminal", base: "-" },
    connections: {
      "group-affiliation": "Syndicate, formerly Bloods",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1404.jpg"
    }
  },
  {
    response: "success",
    id: "22",
    name: "Ando Masahashi",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Ando Masahashi",
      "alter-egos": "No alter egos found.",
      aliases: ["Huggerz69", "Sidekick"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "NBC - Heroes",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "Yamagato Industries computer programmer", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1310.jpg"
    }
  },
  {
    response: "success",
    id: "220",
    name: "DL Hawkins",
    powerstats: {
      intelligence: "50",
      strength: "12",
      speed: "12",
      durability: "56",
      power: "48",
      combat: "56"
    },
    biography: {
      "full-name": "Daniel Lawrence Hawkins",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Heroes S01E05 - Hiros",
      publisher: "NBC - Heroes",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: {
      occupation: "Construction worker, Firefighter",
      base: "Las Vegas, NV"
    },
    connections: {
      "group-affiliation": "-",
      relatives:
        "Niki Sanders (wife), Micah Sanders (son), Paulette Hawkins (mother), Monica Dawson (cousin), Damon Dawson (cousin)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/943.jpg"
    }
  },
  {
    response: "success",
    id: "221",
    name: "Doc Samson",
    powerstats: {
      intelligence: "75",
      strength: "80",
      speed: "33",
      durability: "80",
      power: "36",
      combat: "70"
    },
    biography: {
      "full-name": "Leonard Samson",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Tulsa, Oklahoma",
      "first-appearance": "Incredible Hulk #141 (July, 1971)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human / Radiation",
      height: ["6'6", "198 cm"],
      weight: ["380 lb", "171 kg"],
      "eye-color": "Blue",
      "hair-color": "Green"
    },
    work: {
      occupation:
        "Psychiatrist, teacher, adventurer, former special consultant to Gamma Base",
      base:
        "Psychiatrist, teacher, adventurer, former special consultant to Gamma Base"
    },
    connections: {
      "group-affiliation": "-",
      relatives: "Leonard Skivorski (father); Ricky Myers (son);"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/54.jpg"
    }
  },
  {
    response: "success",
    id: "222",
    name: "Doctor Doom",
    powerstats: {
      intelligence: "100",
      strength: "32",
      speed: "20",
      durability: "100",
      power: "100",
      combat: "84"
    },
    biography: {
      "full-name": "Victor von Doom",
      "alter-egos": "No alter egos found.",
      aliases: ["The Master", "Invincible Man"],
      "place-of-birth": "Haasenstadt, Latveria",
      "first-appearance": "Fantastic Four #5 (July 1962)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'7", "201 cm"],
      weight: ["415 lb", "187 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: { occupation: "Monarch", base: "Castle Doom, Doomstadt, Latveria" },
    connections: {
      "group-affiliation":
        "Future Foundation; Formerly Cabal, Knights of the Atomic Table, Acts of Vengeance Prime Movers, partner of Namor, employer of the Terrible Trio, Fantastic Four (leader)",
      relatives:
        "Werner von Doom (father, deceased), Cynthia von Doom (mother, deceased); Kang the Conqueror, his counterparts, and offspring (alleged descendants), Kristoff Vernard (Doctor Doom II, adopted son), Dr Bob Doom (distant cousin), Boris (unofficially adoptive father/guardian), Valeria von Doom (daughter from alternate universe; became baby of Susan Richards and is now called Valeria Richards)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/189.jpg"
    }
  },
  {
    response: "success",
    id: "223",
    name: "Doctor Doom II",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Kristoff Vernard",
      "alter-egos": "No alter egos found.",
      aliases: ["Victor Von Doom", "Dr Doom"],
      "place-of-birth": "Doomstadt, Latveria",
      "first-appearance":
        "Fantastic Four #247 (1982, as Kristoff), Fantastic Four #278 (1985, as Doctor Doom)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'7", "201 cm"],
      weight: ["293 lb", "132 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: { occupation: "-", base: "Former monarch, would-be conqueror" },
    connections: {
      "group-affiliation": "-",
      relatives:
        "unnamed mother (deceased), Mister Fantastic (alleged half-brother), Valeria Richards (alleged niece), Victor von Doom (aka Doctor Doom, adopted father)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1018.jpg"
    }
  },
  {
    response: "success",
    id: "224",
    name: "Doctor Fate",
    powerstats: {
      intelligence: "81",
      strength: "16",
      speed: "25",
      durability: "80",
      power: "100",
      combat: "50"
    },
    biography: {
      "full-name": "Kent Nelson",
      "alter-egos": "No alter egos found.",
      aliases: ["Nabu"],
      "place-of-birth": "-",
      "first-appearance": "More Fun Comics #55 (May, 1940)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'2", "188 cm"],
      weight: ["197 lb", "89 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: { occupation: "-", base: "Tower of Fate, Salem, Massachusetts" },
    connections: {
      "group-affiliation":
        "Formerly All-Star Squadron, Justice Society of America, Justice League International, Black Lantern Corps",
      relatives:
        "Inza Cramer (wife), Sven Nelson (father, deceased), Celestine Babcock (mother), Kent Nelson, Jr. (son), Aaron Babcock (uncle), Kent V. Nelson (grand-nephew), Laryn Nelson (great grand-niece)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/676.jpg"
    }
  },
  {
    response: "success",
    id: "225",
    name: "Doctor Octopus",
    powerstats: {
      intelligence: "94",
      strength: "48",
      speed: "33",
      durability: "40",
      power: "53",
      combat: "65"
    },
    biography: {
      "full-name": "Otto Octavius",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Doctor Octopus",
        "Doc Ock",
        "The Master Planner",
        "The Master Programmer",
        "Peter Benjamin Parker",
        "Superior Spider-Man",
        "Venom",
        "Superior Venom"
      ],
      "place-of-birth": "Schenectady, New York",
      "first-appearance": "Amazing Spider-Man #3 (July 1963)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'9", "175 cm"],
      weight: ["245 lb", "110 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: {
      occupation: "Former atomic-research consultant, criminal mastermind",
      base: "New York City"
    },
    connections: {
      "group-affiliation":
        "Thunderbolts Army; Former leader of the Sinister Six and the Masters of Evil V; Former partner of Green Goblin",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/622.jpg"
    }
  },
  {
    response: "success",
    id: "226",
    name: "Doctor Strange",
    powerstats: {
      intelligence: "100",
      strength: "10",
      speed: "12",
      durability: "84",
      power: "100",
      combat: "60"
    },
    biography: {
      "full-name": "Stephen Strange",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Sorcerer Supreme",
        "Master of the Mystic Arts",
        "Stephen Sanders",
        "Captain Universe",
        "Vincent Stevens"
      ],
      "place-of-birth": "Philadelphia, Pennsylvania",
      "first-appearance": "Strange Tales #110 (July, 1963)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'2", "188 cm"],
      weight: ["180 lb", "81 kg"],
      "eye-color": "Grey",
      "hair-color": "Black"
    },
    work: { occupation: "Sorcerer Supreme, retired neurosurgeon", base: "-" },
    connections: {
      "group-affiliation":
        "Defenders, underground Avengers; formerly the Order, Midnight Sons; former disciple of the Ancient One",
      relatives:
        "Eugene (father, deceased), Beverly (mother, deceased), Victor (Khiron, brother, apparently deceased), Donna (sister, deceased), Clea (wife, estranged), Umar (mother-in-law), Orini (father-in-law), Dormammu (uncle-in-law)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/55.jpg"
    }
  },
  {
    response: "success",
    id: "227",
    name: "Domino",
    powerstats: {
      intelligence: "63",
      strength: "10",
      speed: "27",
      durability: "28",
      power: "49",
      combat: "74"
    },
    biography: {
      "full-name": "Neena Thurman",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Dom",
        "Samantha Wu",
        "Tamara Winter",
        "Elena Vladescu",
        "Jessica Marie Costello",
        "Luisa Mendoza",
        "Beatrice",
        "Christina Elizabeth Alioso",
        "Priscilla Sutherland",
        "Hope Eldridge"
      ],
      "place-of-birth": "Project: Armageddon base, Everglades, Florida",
      "first-appearance": "X-Force #8 (March, 1992)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["5'8", "173 cm"],
      weight: ["120 lb", "54 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation":
        "X-Men; formerly X-Force; 198; X-Corporation; The Underground; X-Force; Six Pack",
      relatives:
        "Beatrice (mother), Lazarus (brother), Milo Thurman (husband, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/902.jpg"
    }
  },
  {
    response: "success",
    id: "228",
    name: "Donatello",
    powerstats: {
      intelligence: "88",
      strength: "14",
      speed: "46",
      durability: "60",
      power: "58",
      combat: "75"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["Don", "Donnie"],
      "place-of-birth": "-",
      "first-appearance": "Teenage Mutant Ninja Turtles #1",
      publisher: "IDW Publishing",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Green",
      "hair-color": "No Hair"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "-",
      relatives: "Leonardo (brother), Michelangelo (brother), Raphael (brother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10330.jpg"
    }
  },
  {
    response: "success",
    id: "229",
    name: "Donna Troy",
    powerstats: {
      intelligence: "null",
      strength: "89",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Donna Hinckley Stacey Troy",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Donna Troy",
        "Wonder Girl",
        "Darkstar",
        "Wonder Woman",
        "Troia"
      ],
      "place-of-birth": "-",
      "first-appearance": "The Brave and the Bold Vol. 1 #60 (1965)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Amazon",
      height: ["5'9", "175 cm"],
      weight: ["140 lb", "63 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "Titans of Myth, Teen Titans, Darkstars",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/806.jpg"
    }
  },
  {
    response: "success",
    id: "23",
    name: "Angel",
    powerstats: {
      intelligence: "75",
      strength: "30",
      speed: "58",
      durability: "90",
      power: "100",
      combat: "75"
    },
    biography: {
      "full-name": "Liam",
      "alter-egos": "No alter egos found.",
      aliases: ["Angelus", "Twilight"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Dark Horse Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Vampire",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "-",
      relatives: 'Kathy (sister), Connor (son), Twilight ("child")'
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10431.jpg"
    }
  },
  {
    response: "success",
    id: "230",
    name: "Doomsday",
    powerstats: {
      intelligence: "75",
      strength: "100",
      speed: "67",
      durability: "100",
      power: "100",
      combat: "90"
    },
    biography: {
      "full-name": "Doomsday",
      "alter-egos": "No alter egos found.",
      aliases: ["The Ultimate Lifeform"],
      "place-of-birth": "Krypton",
      "first-appearance": "Superman: The Man of Steel #17 (Nov 1992)",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Alien",
      height: ["8'0", "244 cm"],
      weight: ["915 lb", "412 kg"],
      "eye-color": "Red",
      "hair-color": "White"
    },
    work: { occupation: "Destroyer", base: "-" },
    connections: {
      "group-affiliation":
        "Secret Society of Super Villains, Suicide Squad, Apokolips",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/679.jpg"
    }
  },
  {
    response: "success",
    id: "231",
    name: "Doppelganger",
    powerstats: {
      intelligence: "8",
      strength: "63",
      speed: "60",
      durability: "95",
      power: "69",
      combat: "84"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: [
        "The Spider-Man Doppelganger",
        "Spider-Doppelganger",
        "Mindless One"
      ],
      "place-of-birth": "The Dimension of Manifestations",
      "first-appearance": "Infinity War #1 (1992)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'5", "196 cm"],
      weight: ["230 lb", "104 kg"],
      "eye-color": "White",
      "hair-color": "No Hair"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation":
        "Formerly Carnage Family; Magus' doppelgangers; operative of Demogoblin",
      relatives:
        "Anthropomorpho (creator); Hellspawn, Moonshade, many other doppelgangers (brethren)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1320.jpg"
    }
  },
  {
    response: "success",
    id: "232",
    name: "Dormammu",
    powerstats: {
      intelligence: "88",
      strength: "95",
      speed: "83",
      durability: "100",
      power: "100",
      combat: "80"
    },
    biography: {
      "full-name": "Dormammu",
      "alter-egos": "No alter egos found.",
      aliases: [
        "The Dread One",
        "Eater of Souls",
        "Lord of Chaos",
        "Lord of Darkness",
        "the Great Enigma",
        "Flyx"
      ],
      "place-of-birth": "Faltine Dimension",
      "first-appearance": "Strange Tales #126 (1964)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'1", "185 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Yellow",
      "hair-color": "No Hair"
    },
    work: { occupation: "Despot, conqueror", base: "-" },
    connections: {
      "group-affiliation":
        "Lords of the Splinter Realms, Lords of the Netherworlds; allied with Umar, Loki, Doctor Doom, Underchild, others",
      relatives:
        "Sinifer (parent/genitor), Umar (sister), Clea (niece), Doctor Strange (nephew-in-law), Satannish (alleged offspring)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1359.jpg"
    }
  },
  {
    response: "success",
    id: "233",
    name: "Dr Manhattan",
    powerstats: {
      intelligence: "88",
      strength: "100",
      speed: "42",
      durability: "100",
      power: "100",
      combat: "42"
    },
    biography: {
      "full-name": "Jonathan Osterman",
      "alter-egos": "No alter egos found.",
      aliases: ["Jon Osterman", "Doctor Manhattan"],
      "place-of-birth": "-",
      "first-appearance": "Watchmen #1 (September, 1986)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human / Cosmic",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "White",
      "hair-color": "No Hair"
    },
    work: { occupation: "Scientist", base: "New York City; formerly Mars" },
    connections: {
      "group-affiliation": "Watchmen, Crimebusters",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/884.jpg"
    }
  },
  {
    response: "success",
    id: "234",
    name: "Drax the Destroyer",
    powerstats: {
      intelligence: "56",
      strength: "80",
      speed: "25",
      durability: "85",
      power: "46",
      combat: "65"
    },
    biography: {
      "full-name": "Arthur Sampson Douglas",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Burbank, California",
      "first-appearance": "Iron Man #55 (February, 1973)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human / Altered",
      height: ["6'4", "193 cm"],
      weight: ["680 lb", "306 kg"],
      "eye-color": "Red",
      "hair-color": "No Hair"
    },
    work: {
      occupation: "-",
      base: "C.I.T.T.; formerly Monster Isle and Titan"
    },
    connections: {
      "group-affiliation":
        "Guardians of the Galaxy; formerly Infinity Watch, Secret Defenders, United Front, Selects of the Phalanx",
      relatives:
        "Yvette Steckley Douglas (wife, deceased), Heather Douglas (aka Moondragon, daughter), Pamela Douglas (aka Sundragon, niece), Cammille Benally (foster daughter), Venom (former symbiote)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10016.jpg"
    }
  },
  {
    response: "success",
    id: "235",
    name: "Ego",
    powerstats: {
      intelligence: "88",
      strength: "80",
      speed: "83",
      durability: "99",
      power: "71",
      combat: "28"
    },
    biography: {
      "full-name": "Ego",
      "alter-egos": "No alter egos found.",
      aliases: ["The Living Planet"],
      "place-of-birth": "The Black Galaxy",
      "first-appearance": "THOR #132",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "-",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "Inapplicable", base: "Mobile" },
    connections: { "group-affiliation": "-", relatives: "Inapplicable" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/6.jpg"
    }
  },
  {
    response: "success",
    id: "236",
    name: "Elastigirl",
    powerstats: {
      intelligence: "63",
      strength: "32",
      speed: "33",
      durability: "95",
      power: "52",
      combat: "70"
    },
    biography: {
      "full-name": "Helen Parr",
      "alter-egos": "No alter egos found.",
      aliases: ["Mrs Incredible"],
      "place-of-birth": "-",
      "first-appearance": "The Incredibles (Movies, 2004)",
      publisher: "Dark Horse Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["5'6", "168 cm"],
      weight: ["125 lb", "56 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation":
        "Incredible Family (co-leader), National Supers Agency (ties), Edna Mode (receives costumes and gadgets from her), Frozone (long-time friend), Mirage (ally), Snug Porter (receives aircraft from him)",
      relatives:
        "Robert Parr(Mr Incredible, husband), Violet Parr(Violet, daughter), Dashiell Parr (Dash, son), Jack-jack (son)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/870.jpg"
    }
  },
  {
    response: "success",
    id: "237",
    name: "Electro",
    powerstats: {
      intelligence: "69",
      strength: "10",
      speed: "50",
      durability: "56",
      power: "67",
      combat: "64"
    },
    biography: {
      "full-name": "Maxwell Dillon",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Amazing Spider-Man #9 (1964)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'11", "180 cm"],
      weight: ["165 lb", "74 kg"],
      "eye-color": "Blue",
      "hair-color": "Auburn"
    },
    work: { occupation: "Professional criminal", base: "-" },
    connections: {
      "group-affiliation":
        "Sinister Six formerly Emissaries of Evil, Frightful Four and Sinister Twelve",
      relatives:
        "Norma Lynn Dillon (ex-wife), Jonathan Dillon (father, deceased), Anita Dillon (mother, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/7.jpg"
    }
  },
  {
    response: "success",
    id: "238",
    name: "Elektra",
    powerstats: {
      intelligence: "63",
      strength: "11",
      speed: "30",
      durability: "28",
      power: "59",
      combat: "100"
    },
    biography: {
      "full-name": "Elektra Natchios",
      "alter-egos": "No alter egos found.",
      aliases: ["Erynys (evil self)"],
      "place-of-birth": "-",
      "first-appearance": "Daredevil #168",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["5'9", "175 cm"],
      weight: ["130 lb", "59 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: {
      occupation: "Assassin, adventurer, mercenary, former student, dancer",
      base: "-"
    },
    connections: {
      "group-affiliation":
        "S.H.I.E.L.D.; formerly Thunderbolts, Hand, Chaste, Heroes For Hire, Code Red, partner of Daredevil and Deadpool",
      relatives:
        "Hugo Kostas Natchios (father, deceased), Christina Natchios (mother, deceased), Orestez Natchios (older brother), Demetrios Natchios (Uncle), Alexia Natchios (Aunt)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/625.jpg"
    }
  },
  {
    response: "success",
    id: "239",
    name: "Elle Bishop",
    powerstats: {
      intelligence: "50",
      strength: "8",
      speed: "12",
      durability: "42",
      power: "63",
      combat: "42"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["Cindy"],
      "place-of-birth": "-",
      "first-appearance": "Heroes S02E05 - Fight or Flight",
      publisher: "NBC - Heroes",
      alignment: "bad"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: { occupation: "Agent of the Company", base: "-" },
    connections: { "group-affiliation": "-", relatives: "Bob Bishop (Father)" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1021.jpg"
    }
  },
  {
    response: "success",
    id: "24",
    name: "Angel",
    powerstats: {
      intelligence: "63",
      strength: "13",
      speed: "46",
      durability: "64",
      power: "28",
      combat: "42"
    },
    biography: {
      "full-name": "Warren Kenneth Worthington III",
      "alter-egos": "Archangel",
      aliases: [
        "Formerly Death",
        "Dark Angel",
        "Angel",
        "Avenging Angel",
        "Archangel"
      ],
      "place-of-birth": "Centerport, Long Island, New York",
      "first-appearance": "X-Men #54-56 (1969)",
      publisher: "Archangel",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'0", "183 cm"],
      weight: ["150 lb", "68 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation:
        "Adventurer, chairman & principal stockholder of Worthington Industries, former terrorist",
      base: "-"
    },
    connections: {
      "group-affiliation":
        "X-Men, Mutantes Sans Fronti?res, Hellfire Club; formerly Secret Defenders, X-Factor/X-Terminators, Horsemen of Apocalypse, Defenders, Death's champions, Champions of Los Angeles",
      relatives:
        'Warren Kenneth Worthington Sr. (grandfather, deceased), Warren Kenneth Worthington Jr. (father, deceased), Kathryn Worthington (mother, deceased), Burtram "Burt" Worthington (Dazzler, paternal uncle), unnamed cousin'
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/829.jpg"
    }
  },
  {
    response: "success",
    id: "240",
    name: "Elongated Man",
    powerstats: {
      intelligence: "75",
      strength: "10",
      speed: "33",
      durability: "90",
      power: "44",
      combat: "40"
    },
    biography: {
      "full-name": "Ralph Dibny",
      "alter-egos": "No alter egos found.",
      aliases: ["Alvin Burgson; Molder"],
      "place-of-birth": "-",
      "first-appearance": "Flash #112 (1960)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'1", "185 cm"],
      weight: ["178 lb", "80 kg"],
      "eye-color": "Blue",
      "hair-color": "Red"
    },
    work: { occupation: "Detective", base: "Opal City, Central City" },
    connections: {
      "group-affiliation":
        "Justice League of America, Justice League Europe, Super Buddies, Outsiders, Croatoans, Black Lantern Corps",
      relatives:
        "Sue Dibny (wife, deceased); Ken Dibny (brother); Jake Dibny (uncle); Jim (uncle-in-law)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1381.jpg"
    }
  },
  {
    response: "success",
    id: "241",
    name: "Emma Frost",
    powerstats: {
      intelligence: "75",
      strength: "63",
      speed: "35",
      durability: "90",
      power: "100",
      combat: "42"
    },
    biography: {
      "full-name": "Emma Frost",
      "alter-egos": "No alter egos found.",
      aliases: ["Storm", "White Queen"],
      "place-of-birth": "Boston, Massachusetts",
      "first-appearance": "UNCANNY X-MEN #132",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'10'", "178 cm"],
      weight: ["144 lb", "65 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation: "-",
      base:
        "(current) Emma Frost operates from the Massachusetts Academy, Snow Valley, Massachusetts, (former) Hellfire Club mansion in New York City, a home in the Berkshire Mountains in Massachusetts (near the Massachusetts Academy), and places of residence in vari"
    },
    connections: {
      "group-affiliation":
        "Active member of the X-Men, Instructor for Generation X, The Inner Circle of the Hellfire Club",
      relatives:
        "Winston Frost (father), Hazel Frost (mother), Christian Frost (brother) Adrienne Frost (sister, deceased,) Cordelia Frost (sister)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/325.jpg"
    }
  },
  {
    response: "success",
    id: "242",
    name: "Enchantress",
    powerstats: {
      intelligence: "63",
      strength: "14",
      speed: "25",
      durability: "60",
      power: "100",
      combat: "40"
    },
    biography: {
      "full-name": "June Moone",
      "alter-egos": "No alter egos found.",
      aliases: ["Anita Soulfeeda", "Soulsinger"],
      "place-of-birth": "-",
      "first-appearance": "Strange Adventures #187",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["5'6", "168 cm"],
      weight: ["126 lb", "57 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: { occupation: "Artist; Magician", base: "-" },
    connections: {
      "group-affiliation":
        "Forgotten Villains, Sentinels of Magic, Shadowpact, Suicide Squad",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/687.jpg"
    }
  },
  {
    response: "success",
    id: "243",
    name: "Energy",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "HarperCollins",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1155.jpg"
    }
  },
  {
    response: "success",
    id: "244",
    name: "ERG-1",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1187.jpg"
    }
  },
  {
    response: "success",
    id: "245",
    name: "Ethan Hunt",
    powerstats: {
      intelligence: "75",
      strength: "11",
      speed: "29",
      durability: "30",
      power: "26",
      combat: "95"
    },
    biography: {
      "full-name": "Ethan Hunt",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Madison, Wisconsin, United States of America",
      "first-appearance": "-",
      publisher: "null",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'6", "168 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: {
      occupation:
        "IMF Agent, Training Officer (former), Field Agent, Field Team Leader",
      base: "-"
    },
    connections: {
      "group-affiliation": "Formerly: United States Army",
      relatives:
        "Nathan Hunt (Father), Margaret Hunt (Mother), Donald Hunt (Uncle)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10476.jpg"
    }
  },
  {
    response: "success",
    id: "246",
    name: "Etrigan",
    powerstats: {
      intelligence: "50",
      strength: "85",
      speed: "17",
      durability: "100",
      power: "100",
      combat: "50"
    },
    biography: {
      "full-name": "Jason Blood",
      "alter-egos": "No alter egos found.",
      aliases: ["Demon"],
      "place-of-birth": "Hell",
      "first-appearance": "Demon #1 (September, 1972)",
      publisher: "DC Comics",
      alignment: "neutral"
    },
    appearance: {
      gender: "Male",
      race: "Demon",
      height: ["6'4", "193 cm"],
      weight: ["452 lb", "203 kg"],
      "eye-color": "Red",
      "hair-color": "No Hair"
    },
    work: { occupation: "-", base: "Hell" },
    connections: {
      "group-affiliation": "Formerly Justice League of America, Spirit Squad",
      relatives:
        "Belial (father), Raan va Daath (mother), Merlin (half Brother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10429.jpg"
    }
  },
  {
    response: "success",
    id: "247",
    name: "Evil Deadpool",
    powerstats: {
      intelligence: "69",
      strength: "32",
      speed: "50",
      durability: "100",
      power: "100",
      combat: "100"
    },
    biography: {
      "full-name": "Wade Wilson",
      "alter-egos": "Deadpool, Venompool",
      aliases: ["Dreadpool"],
      "place-of-birth": "-",
      "first-appearance": "Deadpool Vol 2 #44 (December, 2011)",
      publisher: "Deadpool",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["6'2", "188 cm"],
      weight: ["210 lb", "95 kg"],
      "eye-color": "White",
      "hair-color": "Red"
    },
    work: { occupation: "Mercenary, Assasin", base: "-" },
    connections: { "group-affiliation": "Evil Deadpool Corps", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10090.jpg"
    }
  },
  {
    response: "success",
    id: "248",
    name: "Evilhawk",
    powerstats: {
      intelligence: "50",
      strength: "32",
      speed: "33",
      durability: "70",
      power: "85",
      combat: "64"
    },
    biography: {
      "full-name": "Dargin Bokk",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Darkhawk #20 (October, 1992)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Alien",
      height: ["6'3", "191 cm"],
      weight: ["235 lb", "106 kg"],
      "eye-color": "Red",
      "hair-color": "Black"
    },
    work: { occupation: "Crimelord", base: "(Formerly) planet Luq" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1516.jpg"
    }
  },
  {
    response: "success",
    id: "249",
    name: "Exodus",
    powerstats: {
      intelligence: "63",
      strength: "81",
      speed: "28",
      durability: "28",
      power: "100",
      combat: "70"
    },
    biography: {
      "full-name": "Bennet du Paris",
      "alter-egos": "No alter egos found.",
      aliases: ["Paris Bennet"],
      "place-of-birth": "-",
      "first-appearance": "X-Factor #92 (July, 1993)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["6'0", "183 cm"],
      weight: ["195 lb", "88 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: {
      occupation:
        "Terrorist, would-be conqueror, Former leader of the Acolytes, Crusader",
      base: "Currently mobile, Formerly Avalon"
    },
    connections: {
      "group-affiliation": "Acolytes, formerly Brotherhood and Marauders",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1517.jpg"
    }
  },
  {
    response: "success",
    id: "25",
    name: "Angel Dust",
    powerstats: {
      intelligence: "38",
      strength: "55",
      speed: "23",
      durability: "42",
      power: "17",
      combat: "30"
    },
    biography: {
      "full-name": "Christina",
      "alter-egos": "No alter egos found.",
      aliases: ["Angel", "Dusty"],
      "place-of-birth": "-",
      "first-appearance": "Morlocks #1",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Mutant",
      height: ["5'5", "165 cm"],
      weight: ["126 lb", "57 kg"],
      "eye-color": "Yellow",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "Chicago, Illinois" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10405.jpg"
    }
  },
  {
    response: "success",
    id: "250",
    name: "Fabian Cortez",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Fabian Cortez",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Place of birth unknown",
      "first-appearance": "X-Men (Vol. 2) #1",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "-",
      race: "null",
      height: ["6'5", "196 cm"],
      weight: ["214 lb", "96 kg"],
      "eye-color": "Blue",
      "hair-color": "Brown"
    },
    work: {
      occupation: "Unknown",
      base: "Genosha at time of death; Formerly Asteroid M"
    },
    connections: {
      "group-affiliation": "Acolytes at time of death; Formerly Upstarts",
      relatives: "Annemarie Cortez (sister, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/24.jpg"
    }
  },
  {
    response: "success",
    id: "251",
    name: "Falcon",
    powerstats: {
      intelligence: "38",
      strength: "13",
      speed: "50",
      durability: "28",
      power: "22",
      combat: "64"
    },
    biography: {
      "full-name": "Sam Wilson",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Sam Wilson",
        "(formerly) Captain America",
        "Blackbird",
        "Blackwing",
        "Brother Superhero"
      ],
      "place-of-birth": "New York, New York",
      "first-appearance": "Captain America #117 (September, 1969)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'2", "188 cm"],
      weight: ["240 lb", "108 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: {
      occupation: "Crimefighter, (former) freelance artist",
      base:
        "New York, New York; formerly Avengers Mansion, New York City, New York; S.H.I.E.L.D. Helicarrier."
    },
    connections: {
      "group-affiliation":
        "Mighty Avengers, Avengers, S.H.I.E.L.D.; partner of Redwing; formerly Heroes For Hire, partner of Captain America, Secret Avengers, S.H.I.E.L.D. Super-Agents (leader), Defenders, ally of Secret Warriors , Defenders for a Day",
      relatives:
        "Paul Wilson (father, deceased); Darlene Wilson (mother, deceased); Sarah Wilson (sister), Gideon Wilson (brother); Jim Wilson (nephew, deceased); Jody Casper (nephew)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/56.jpg"
    }
  },
  {
    response: "success",
    id: "252",
    name: "Fallen One II",
    powerstats: {
      intelligence: "88",
      strength: "85",
      speed: "83",
      durability: "100",
      power: "100",
      combat: "56"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Black",
      "hair-color": "Blue"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "Heralds of Galactus", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1051.jpg"
    }
  },
  {
    response: "success",
    id: "253",
    name: "Faora",
    powerstats: {
      intelligence: "88",
      strength: "95",
      speed: "75",
      durability: "100",
      power: "98",
      combat: "90"
    },
    biography: {
      "full-name": "Faora Hu-Ul",
      "alter-egos": "No alter egos found.",
      aliases: ["Katie"],
      "place-of-birth": "-",
      "first-appearance": "Action Comics #471 (May, 1977)",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Female",
      race: "Kryptonian",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: {
      occupation: "Serial killer",
      base: "Phantom Zone; formerly Krypton"
    },
    connections: {
      "group-affiliation": "Phantom Zone Criminals",
      relatives: "Hu-Ul (father, presumably deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1502.jpg"
    }
  },
  {
    response: "success",
    id: "254",
    name: "Feral",
    powerstats: {
      intelligence: "38",
      strength: "28",
      speed: "45",
      durability: "28",
      power: "27",
      combat: "70"
    },
    biography: {
      "full-name": "Maria Callasantos",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Place of birth unknown",
      "first-appearance": "NEW MUTANTS #99",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "-",
      race: "null",
      height: ["5'9", "175 cm"],
      weight: ["110 lb", "50 kg"],
      "eye-color": "Yellow (without irises)",
      "hair-color": "Orange / White"
    },
    work: {
      occupation: "Formerly Adventurer, Terrorist",
      base: "Base of operations unknown"
    },
    connections: {
      "group-affiliation":
        "Formerly Morlocks, X-Force, Mutant Liberation Front",
      relatives:
        "Mr. Callasantos (father, first name unrevealed, deceased), Marcella Callasantos (mother, deceased), Lucia Callasantos (Thornn, sister), Matteo Callasantos (brother, deceased), Carolina Callasantos (sister, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/57.jpg"
    }
  },
  {
    response: "success",
    id: "255",
    name: "Fighting Spirit",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Carol Carter",
      "alter-egos": "No alter egos found.",
      aliases: ["Yankette", "Fighting Yank II"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "Red"
    },
    work: {
      occupation: "-",
      base: "SMASH HQ, Antarctica, Earth; New Lancaster"
    },
    connections: {
      "group-affiliation": "Fighting Yank I, SMASH",
      relatives: "Bruce Carter (father)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1167.jpg"
    }
  },
  {
    response: "success",
    id: "256",
    name: "Fin Fang Foom",
    powerstats: {
      intelligence: "50",
      strength: "81",
      speed: "23",
      durability: "100",
      power: "75",
      combat: "70"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: [
        "He Whose Limbs Shatter Mountains and Whose Back Scrapes the Sun (translation)"
      ],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Kakarantharaian",
      height: ["32'0", "975 cm"],
      weight: ["40000 lb", "18 tons"],
      "eye-color": "Red",
      "hair-color": "No Hair"
    },
    work: {
      occupation: "-",
      base: "New York, formerly Valley of the Sleeping Dragon in China"
    },
    connections: {
      "group-affiliation":
        'Affiliation "Fin Fang Four," former ally of the Mandarin, pawn of Doctor Vault, member of starship crew',
      relatives: "Fraktur (cousin)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1518.jpg"
    }
  },
  {
    response: "success",
    id: "257",
    name: "Firebird",
    powerstats: {
      intelligence: "38",
      strength: "8",
      speed: "40",
      durability: "14",
      power: "100",
      combat: "42"
    },
    biography: {
      "full-name": "Bonita Juarez",
      "alter-egos": "No alter egos found.",
      aliases: ["Pajaro Del Fuego", "La Espirita", "Firemaiden"],
      "place-of-birth": "Buena Vista, New Mexico",
      "first-appearance": "INCREDIBLE HULK Vol. 2 #265",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'5'", "165 cm"],
      weight: ["125 lb", "56 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: { occupation: "Social worker, adventurer", base: "New Mexico" },
    connections: {
      "group-affiliation":
        "Catholic Church; formerly the Rangers, provisional member of the Avengers West Coast, Queen's Vengeance",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/58.jpg"
    }
  },
  {
    response: "success",
    id: "258",
    name: "Firelord",
    powerstats: {
      intelligence: "38",
      strength: "63",
      speed: "75",
      durability: "90",
      power: "52",
      combat: "28"
    },
    biography: {
      "full-name": "Pyreus Kril",
      "alter-egos": "No alter egos found.",
      aliases: ["Nova Centurion"],
      "place-of-birth": "Xander, planet in Tranta System, Andromeda Galaxy",
      "first-appearance": "THOR Vol. 1 #225",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "-",
      race: "null",
      height: ["6'4'", "193 cm"],
      weight: ["220 lb", "99 kg"],
      "eye-color": "White",
      "hair-color": "Yellow"
    },
    work: {
      occupation: "Former starship captain, former herald of Galactus",
      base: "Mobile; usually in space"
    },
    connections: {
      "group-affiliation":
        "Formerly Nova Corps, Guardians of the Galaxy (in an alternate future)",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/59.jpg"
    }
  },
  {
    response: "success",
    id: "259",
    name: "Firestar",
    powerstats: {
      intelligence: "50",
      strength: "8",
      speed: "54",
      durability: "55",
      power: "71",
      combat: "32"
    },
    biography: {
      "full-name": "Angelica Jones",
      "alter-egos": "No alter egos found.",
      aliases: ["Angel", "Anj", "Lady Comet"],
      "place-of-birth": "Place of birth unknown",
      "first-appearance": "Uncanny X-Men #193 (May, 1985)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Mutant",
      height: ["5'8", "173 cm"],
      weight: ["125 lb", "56 kg"],
      "eye-color": "Green",
      "hair-color": "Red"
    },
    work: {
      occupation: "Student",
      base:
        "New Warriors Crash Pad, New York City, New York State; Avengers Mansion, New York City, New York State; and formerly Massachusetts Academy, Snow Valley, Massachusetts"
    },
    connections: {
      "group-affiliation":
        "New Warriors Reservist, Avengers Reservist, and Former Hellion and student of the White Queen",
      relatives: "Bartholomew Jones (father), Nana (grandmother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/60.jpg"
    }
  },
  {
    response: "success",
    id: "26",
    name: "Angel Salvadore",
    powerstats: {
      intelligence: "38",
      strength: "10",
      speed: "28",
      durability: "28",
      power: "56",
      combat: "60"
    },
    biography: {
      "full-name": "Angel Salvadore Bohusk",
      "alter-egos": "Tempest",
      aliases: ["Tempest"],
      "place-of-birth": "-",
      "first-appearance": "New X-Men #118 (November, 2001)",
      publisher: "Tempest",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'4", "163 cm"],
      weight: ["121 lb", "54 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "Formerly New Warriors; Special Class",
      relatives:
        "Tito Bohusk (son); Axel Bohusk (son); Kara Bohusk (daughter); three other unidentified children;"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1406.jpg"
    }
  },
  {
    response: "success",
    id: "260",
    name: "Firestorm",
    powerstats: {
      intelligence: "50",
      strength: "53",
      speed: "58",
      durability: "56",
      power: "100",
      combat: "42"
    },
    biography: {
      "full-name": "Jason Rusch",
      "alter-egos": "No alter egos found.",
      aliases: ["The Nuclear Man"],
      "place-of-birth": "-",
      "first-appearance": "Firestorm (Volume 3) #1",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: {
      occupation:
        "University student; former food server at Bryson's Family Treat; former mascot at Ho-Ho Charlie's Chicken Shack; former intern at S.T.A.R. Labs",
      base: "Detroit, Michigan"
    },
    connections: {
      "group-affiliation": "Justice League of America, formerly Lexcorp",
      relatives: "Alvin Rusch (father)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/689.jpg"
    }
  },
  {
    response: "success",
    id: "261",
    name: "Firestorm",
    powerstats: {
      intelligence: "38",
      strength: "80",
      speed: "58",
      durability: "80",
      power: "100",
      combat: "40"
    },
    biography: {
      "full-name": "Ronald Raymond",
      "alter-egos": "No alter egos found.",
      aliases: ["Ronnie", "Roy", "Ronald Rockwell", "Flamehead"],
      "place-of-birth": "-",
      "first-appearance": "Firestorm #1 (March, 1978)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'2", "188 cm"],
      weight: ["202 lb", "91 kg"],
      "eye-color": "Blue",
      "hair-color": "Auburn"
    },
    work: {
      occupation: "Adventurer; former employee of Bun 'n Run",
      base:
        "Formerly Manhattan, New York City; Ivy University, Ivy Town; Pittsburgh, Pennsylvania"
    },
    connections: {
      "group-affiliation":
        "Firestorm Matrix, Justice League,formerly Black Lantern Corps, Power Company, White Lantern Corps",
      relatives:
        "Edward Raymond (father); Elaine Rockwell (mother, deceased); Felicity Smoak-Raymond (stepmother); Richard Dare (grandfather)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10395.jpg"
    }
  },
  {
    response: "success",
    id: "262",
    name: "Fixer",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Paul Norbert Ebersol",
      "alter-egos": "No alter egos found.",
      aliases: ["Fixer"],
      "place-of-birth": "Dayton, Ohio",
      "first-appearance": "(as Fixer) STRANGE TALES #141",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "-",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Red",
      "hair-color": "No Hair"
    },
    work: { occupation: "Criminal inventor", base: "Mount Charteris" },
    connections: {
      "group-affiliation": "formerly Thunderbolts, Redeemers",
      relatives: "No known relatives"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/9.jpg"
    }
  },
  {
    response: "success",
    id: "263",
    name: "Flash",
    powerstats: {
      intelligence: "63",
      strength: "10",
      speed: "100",
      durability: "50",
      power: "68",
      combat: "32"
    },
    biography: {
      "full-name": "Jay Garrick",
      "alter-egos": "No alter egos found.",
      aliases: ["Jay Garrick", "Siegfreid the Speedster"],
      "place-of-birth": "Hibbardsville, Kansas",
      "first-appearance": "Flash Comics #1 (January 1940)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'11", "180 cm"],
      weight: ["179 lb", "81 kg"],
      "eye-color": "Blue",
      "hair-color": "Brown / White"
    },
    work: {
      occupation:
        "Research Scientist, part-time Director of Garrick Laboratories",
      base: "Keystone City, Kansas"
    },
    connections: {
      "group-affiliation":
        "Justice Society of America, Flash Family; formerly All-Star Squadron",
      relatives:
        "Joseph Garrick (father), Joan Williams (wife), Arthur Williams (father-in-law), unnamed adopted son (deceased), Bart Allen (Flash II, ward)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/891.jpg"
    }
  },
  {
    response: "success",
    id: "264",
    name: "Flash Gordon",
    powerstats: {
      intelligence: "null",
      strength: "69",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Steven Gordon",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Flash Gordon #1 (september 1966)",
      publisher: "null",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1345.jpg"
    }
  },
  {
    response: "success",
    id: "265",
    name: "Flash II",
    powerstats: {
      intelligence: "88",
      strength: "48",
      speed: "100",
      durability: "60",
      power: "100",
      combat: "60"
    },
    biography: {
      "full-name": "Barry Allen",
      "alter-egos": "Black Racer",
      aliases: [
        "The Scarlet Speedster",
        "the Fastest Man Alive",
        "the Monarch of Motion",
        "the Sultan of Speed"
      ],
      "place-of-birth": "Fallville, Iowa",
      "first-appearance": "Showcase #4 (October, 1956)",
      publisher: "Black Racer",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Black Racer",
      height: ["6'0", "183 cm"],
      weight: ["195 lb", "88 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: { occupation: "Forensic Scientist", base: "Central City, Missouri" },
    connections: {
      "group-affiliation":
        "Flash Family, Justice League of America; formerly Blue Lantern Corps",
      relatives:
        "Henry and Nora (parents), Malcolm Thawne (twin), Iris West Allen (wife), Wally West (Flash III, nephew), Don and Dawn Allen (son and daughter), Bart Allen (Flash IV, grandson), Jenni Ognats (granddaughter)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/892.jpg"
    }
  },
  {
    response: "success",
    id: "266",
    name: "Flash III",
    powerstats: {
      intelligence: "63",
      strength: "10",
      speed: "100",
      durability: "60",
      power: "100",
      combat: "32"
    },
    biography: {
      "full-name": "Wally West",
      "alter-egos": "Speed Demon",
      aliases: [
        "The Fastest Man Alive",
        "The Scarlet Speedster; formerly",
        "Kid Flash I"
      ],
      "place-of-birth": "Blue Valley, Nebraska",
      "first-appearance": "Flash #110 (January, 1960)",
      publisher: "Speed Demon",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'0", "183 cm"],
      weight: ["190 lb", "86 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: {
      occupation: "Adventurer, Mechanic for the KCPD",
      base: "Keystone City, Kansas"
    },
    connections: {
      "group-affiliation":
        "Flash Family, Justice League of America, Titans; formerly Teen Titans",
      relatives:
        "Rudolph and Mary West (parents), Ira West (grandfather), Iris Allen (aunt), Barry Allen (Flash II, uncle), Linda Park West (wife), Jai and Iris West (twin children)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/690.jpg"
    }
  },
  {
    response: "success",
    id: "267",
    name: "Flash IV",
    powerstats: {
      intelligence: "63",
      strength: "10",
      speed: "100",
      durability: "32",
      power: "100",
      combat: "48"
    },
    biography: {
      "full-name": "Bartholomew Allen II",
      "alter-egos": "Impulse, Kid Flash II",
      aliases: ["Impulse", "Kid Flash II"],
      "place-of-birth": "-",
      "first-appearance":
        "(as Impulse) Flash v.2 #91 (June 1994)* (as Kid Flash) Teen Titans v.3 #4 (December 2003)",
      publisher: "Impulse",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'2", "157 cm"],
      weight: ["115 lb", "52 kg"],
      "eye-color": "Yellow",
      "hair-color": "Auburn"
    },
    work: {
      occupation: "Police trainee",
      base:
        "Los Angeles, California (previously Manchester, Alabama, briefly Denver, Colorado, then Keystone City, Kansas)"
    },
    connections: {
      "group-affiliation":
        "Flash Family, Teen Titans, Legion of Super-Heroes; formerly Young Justice",
      relatives:
        "Barry Allen (Flash II, grandfather), Iris West Allen (grandmother), Don Allen (father), Meloni Thawne (mother), President Thawne (grandfather), Dawn Allen (aunt), Jenni Ognats (cousin), Thaddeus Thawne (clone), Owen Mercer (half-brother), Max Crandall (guardian)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/893.jpg"
    }
  },
  {
    response: "success",
    id: "268",
    name: "Forge",
    powerstats: {
      intelligence: "63",
      strength: "10",
      speed: "12",
      durability: "28",
      power: "25",
      combat: "48"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["The Maker", "Cheyenne"],
      "place-of-birth": "Unrevealed, presumably in the American West",
      "first-appearance": "Uncanny X-Men #184",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "-",
      race: "null",
      height: ["6'", "183 cm"],
      weight: ["180 lb", "81 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: {
      occupation: "Inventor working for the U.S. government, former soldier",
      base: "Arlington, Virginia"
    },
    connections: { "group-affiliation": "X-Factor", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/62.jpg"
    }
  },
  {
    response: "success",
    id: "269",
    name: "Franklin Richards",
    powerstats: {
      intelligence: "63",
      strength: "80",
      speed: "50",
      durability: "60",
      power: "100",
      combat: "50"
    },
    biography: {
      "full-name": "Franklin  Richards",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Franklin Benjamin",
        "Tattletale",
        "Psi-Lord",
        "Ego-Spawn",
        "Avatar"
      ],
      "place-of-birth": "New York, New York",
      "first-appearance": "Fantastic Four Annual #6",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["4'8", "142 cm"],
      weight: ["100 lb", "45 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation: "Student",
      base:
        "Baxter Building, New York, New York (formerly) Four Freedoms Plaza; Pier 4; Massachusetts Academy"
    },
    connections: {
      "group-affiliation":
        "Future Foundation; formerly Power Pack, Generation X, Daydreamers",
      relatives:
        "Reed Richards (Mister Fantastic, father), Susan Storm Richards (Invisible Woman, mother), Valeria Richards (sister), Jonathan Storm (Human Torch, uncle), Nathaniel Richards (paternal grandfather), Franklin Storm (maternal grandfather, deceased), Evelyn Richards, Mary Storm (grandmothers (paternal and maternal respectively), deceased), Benjamin J. Grimm (Thing, godfather), Alicia Masters (godmother)."
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/63.jpg"
    }
  },
  {
    response: "success",
    id: "27",
    name: "Angela",
    powerstats: {
      intelligence: "null",
      strength: "97",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Image Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1070.jpg"
    }
  },
  {
    response: "success",
    id: "270",
    name: "Franklin Storm",
    powerstats: {
      intelligence: "38",
      strength: "10",
      speed: "1",
      durability: "1",
      power: "0",
      combat: "10"
    },
    biography: {
      "full-name": "Dr. Franklin Storm",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Franklin Storm was erroneously believed to be the first Invincible Man"
      ],
      "place-of-birth": "Place of birth unknown",
      "first-appearance": "FANTASTIC FOUR #31",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "-",
      race: "null",
      height: ["6'2'", "188 cm"],
      weight: ["205 lb", "92 kg"],
      "eye-color": "Blue",
      "hair-color": "Grey"
    },
    work: { occupation: "Surgeon", base: "Inapplicable" },
    connections: {
      "group-affiliation": "-",
      relatives:
        "Mary Storm (wife, deceased), Susan Storm Richards (Invisible Woman, daughter), Jonathan Storm (Human Torch, son), Franklin Richards (grandson), Reed Richards (Mister Fantastic, son-in-law)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/170.jpg"
    }
  },
  {
    response: "success",
    id: "271",
    name: "Frenzy",
    powerstats: {
      intelligence: "63",
      strength: "53",
      speed: "35",
      durability: "100",
      power: "38",
      combat: "52"
    },
    biography: {
      "full-name": "Joanna Cargill",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "X-Factor Vol 1 #4",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["6'11", "211 cm"],
      weight: ["230 lb", "104 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: {
      occupation: "Mercenary",
      base: "Mobile; formerly Avalon in Earth orbit; Genosha; California"
    },
    connections: {
      "group-affiliation":
        "Acolytes, formerly Alliance of Evil; temporarily X-Men while controlled by Jean Grey, Femizons",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1108.jpg"
    }
  },
  {
    response: "success",
    id: "273",
    name: "Galactus",
    powerstats: {
      intelligence: "100",
      strength: "100",
      speed: "83",
      durability: "100",
      power: "100",
      combat: "50"
    },
    biography: {
      "full-name": "Galan",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Maker",
        "Devourer of Worlds",
        "Eater-of-Worlds",
        "Ravager of Worlds"
      ],
      "place-of-birth": "(Galan) Taa; (Galactus) the Cosmic Egg",
      "first-appearance": "Fantastic Four #48 (March 1966)",
      publisher: "Marvel Comics",
      alignment: "neutral"
    },
    appearance: {
      gender: "Male",
      race: "Cosmic Entity",
      height: ["28'9", "876 cm"],
      weight: ["36400 lb", "16 tons"],
      "eye-color": "Black",
      "hair-color": "Black"
    },
    work: {
      occupation:
        "Planet Devourer, Third Force of the Universe - balance between Eternity and Death, Nullifying Abraxas' Influence on the Multiverse, Third Face of the Living Tribunal - representing Equity",
      base:
        "Worldship (aka Taa II); though he is generally mobile throughout the universe via his spherical starship in search of suitable planets to consume."
    },
    connections: {
      "group-affiliation": "Heralds of Galactus; formerly God Squad",
      relatives: 'Galan ("father"), Galacta (daughter)'
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/862.jpg"
    }
  },
  {
    response: "success",
    id: "274",
    name: "Gambit",
    powerstats: {
      intelligence: "63",
      strength: "10",
      speed: "23",
      durability: "28",
      power: "55",
      combat: "84"
    },
    biography: {
      "full-name": "Remy Etienne LeBeau",
      "alter-egos": "No alter egos found.",
      aliases: ["Death", "Le Diable Blanc", "formerly Robert Lord", "Cajun"],
      "place-of-birth": "New Orleans, Louisiana",
      "first-appearance":
        "(as Gambit) Uncanny X-Men #266 (1990), (as Death) X-Men #184 (2006)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["6'1", "185 cm"],
      weight: ["179 lb", "81 kg"],
      "eye-color": "Red",
      "hair-color": "Brown"
    },
    work: {
      occupation:
        "Jean Grey School for Higher Learning, Salem Center, Westchester County, New York; formerly Utopia, San Francisco Bay, California; Xavier Institute, Salem Center, Westchester County, New York; New Orleans; Paris; Cairo; Illinois",
      base:
        "(current) Xavier Institute, Salem Center, Westchester County, New York; (former) New Orleans, Louisiana; Paris, France; Cairo, Illinois;"
    },
    connections: {
      "group-affiliation":
        "X-Men (Team Wolverine); formerly Marauders, Horsemen of Apocalypse, Chevaliers, X-Treme X-Men, Thieves & Unified Guild's of New Orleans, Crimson Pirates",
      relatives:
        "Jean-Luc LeBeau (father), Belladonna (aka Bella Donna Boudreaux) (wife, separated)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/64.jpg"
    }
  },
  {
    response: "success",
    id: "275",
    name: "Gamora",
    powerstats: {
      intelligence: "75",
      strength: "85",
      speed: "42",
      durability: "85",
      power: "53",
      combat: "100"
    },
    biography: {
      "full-name": "Gamora Zen Whoberi Ben Titan",
      "alter-egos": "No alter egos found.",
      aliases: [
        "The Deadliest Woman In The Universe",
        "The Most Dangerous Woman in the Galaxy"
      ],
      "place-of-birth": "Planet Zen Whoberi, Silican System, Milky Way",
      "first-appearance": "Strange Tales #180 (June, 1975)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Zen-Whoberian",
      height: ["6'0", "183 cm"],
      weight: ["170 lb", "77 kg"],
      "eye-color": "Yellow",
      "hair-color": "Black"
    },
    work: {
      occupation: "Assassin, mercenary, adventurer",
      base:
        "C.I.T.T.; formerly Godthab Omega, Monster Island, Sanctuary II and the pocket-dimension within the Soul Gem; Earth-7528"
    },
    connections: {
      "group-affiliation":
        "Guardians of the Galaxy ; formerly Phalanx's Selects, Graces (Leader), Infinity Watch ; United Front ; former minion of Thanos; ally of Adam Warlock and Pip the Troll",
      relatives:
        "Thanos (foster father), Thane (foster brother), Unnamed former Symbiote"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/65.jpg"
    }
  },
  {
    response: "success",
    id: "276",
    name: "Garbage Man",
    powerstats: {
      intelligence: "null",
      strength: "82",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Richard Ethan Morse",
      "alter-egos": "No alter egos found.",
      aliases: ["Richard Morse"],
      "place-of-birth": "-",
      "first-appearance": "Weird Worlds #1 (2011)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1467.jpg"
    }
  },
  {
    response: "success",
    id: "277",
    name: "Gary Bell",
    powerstats: {
      intelligence: "63",
      strength: "5",
      speed: "8",
      durability: "10",
      power: "54",
      combat: "10"
    },
    biography: {
      "full-name": "Gary Bell",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "SyFy",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Alpha",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "Alphas", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1526.jpg"
    }
  },
  {
    response: "success",
    id: "278",
    name: "General Zod",
    powerstats: {
      intelligence: "94",
      strength: "100",
      speed: "96",
      durability: "100",
      power: "100",
      combat: "95"
    },
    biography: {
      "full-name": "Dru-Zod",
      "alter-egos": "No alter egos found.",
      aliases: ["Dru-Zod (possible first name)"],
      "place-of-birth": "Krypton",
      "first-appearance": "Action Comics #845",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Kryptonian",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Black",
      "hair-color": "Black"
    },
    work: {
      occupation: "-",
      base: "Formerly Krypton; formerly the Phantom Zone; currently Earth"
    },
    connections: {
      "group-affiliation":
        "Phantom Zone criminals; former member of the Kryptonian Defense Council",
      relatives:
        "Ursa (mate/wife); Lor-Zod (son); Admiral Zod (possible ancestor)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/837.jpg"
    }
  },
  {
    response: "success",
    id: "279",
    name: "Genesis",
    powerstats: {
      intelligence: "null",
      strength: "68",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Tyler Dayspring",
      "alter-egos": "No alter egos found.",
      aliases: ["Tolliver"],
      "place-of-birth": "-",
      "first-appearance":
        "As Tolliver, mentioned) New Mutants #98 (1991), (as Tolliver, seen) X-Force #5 (1991), (as Genesis) Cable #18 (1994)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'1", "185 cm"],
      weight: ["191 lb", "86 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation:
        "Former would-be world conqueror, arms dealer, soldier, freedom fighter",
      base: "-"
    },
    connections: {
      "group-affiliation":
        "Formerly Dark Riders (leader), former servant of Stryfe, formerly New Canaanites, Clan Chosen",
      relatives:
        "Nathan Christopher Summers (Cable, adopted father), Aliya Jenskot (mother, deceased), Stryfe (cloned uncle, deceased), Rachel Summers (Marvel Girl, alternate timeline aunt), Scott Summers (Cyclops, grandfather), Madelyne Pryor-Summers (grandmother, deceased), Alexander Summers (Havok, great-uncle), Gabriel Summers (Vulcan, great-uncle), Christopher Summers (Corsair, great-grandfather), Katherine Anne Summers (great-grandmother, deceased), Philip Summers (great-great-grandfather), Deborah Summers (great-great-grandmother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1055.jpg"
    }
  },
  {
    response: "success",
    id: "28",
    name: "Animal Man",
    powerstats: {
      intelligence: "56",
      strength: "48",
      speed: "47",
      durability: "85",
      power: "73",
      combat: "80"
    },
    biography: {
      "full-name": "Bernhard Baker",
      "alter-egos": "No alter egos found.",
      aliases: ["The Human Zoo; A-Man; The Man with Animal Powers"],
      "place-of-birth": "-",
      "first-appearance": "Strange Adventures #180 (September, 1965)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'0", "183 cm"],
      weight: ["185 lb", "83 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: { occupation: "-", base: "San Diego, California" },
    connections: {
      "group-affiliation":
        "Formerly Animal Masters, Forgotten Heroes, Justice League of America, Justice League Europe",
      relatives:
        "Ellen Frazier (wife), Cliff Baker (son), Maxine Baker (daughter), unnamed second daughter, Frank Baker, Jr. (father), Phyllis Baker (mother), unnamed sister, Frank, Sr (grandfather), Teddy (great grandfather), Sherman (great-great grandfather), Jack (great-great-great grandfather), Mary Frazier (mother-in-law), Dudley (uncle-in-law), Annie Cassidy (mother of second daughter), Lucy Cassidy (half-sister of second daughter)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/632.jpg"
    }
  },
  {
    response: "success",
    id: "280",
    name: "Ghost Rider",
    powerstats: {
      intelligence: "50",
      strength: "55",
      speed: "25",
      durability: "100",
      power: "100",
      combat: "60"
    },
    biography: {
      "full-name": "Johnny Blaze",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Waukegan, Illinois",
      "first-appearance": "Marvel Spotlight #5 (August, 1972)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Demon",
      height: ["6'2", "188 cm"],
      weight: ["220 lb", "99 kg"],
      "eye-color": "Red",
      "hair-color": "No Hair"
    },
    work: {
      occupation: "Former stunt motorcyclist",
      base: "Mobile, Quentin Carnival"
    },
    connections: {
      "group-affiliation":
        "Quentin Carnival Formerly Midnight Sons, Legion of Monsters, The Champions",
      relatives:
        'Barton (father, deceased), Clara (mother, deceased), Craig "Crash" Simpson (stepfather, deceased), Mona Simpson (stepmother, deceased), Roxanne Simpson (wife)'
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/67.jpg"
    }
  },
  {
    response: "success",
    id: "281",
    name: "Ghost Rider II",
    powerstats: {
      intelligence: "null",
      strength: "70",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Daniel Ketch",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Ghost Rider Vol. 2 #1",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "-",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "Midnight Sons",
      relatives:
        "Barbara Ketch (sister, deceased) Ghost Rider (Johnny Blaze) (brother), Jennifer Kale (distant cousin)  Noble Kale and Naomi Kale (ancestors)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/68.jpg"
    }
  },
  {
    response: "success",
    id: "282",
    name: "Giant-Man",
    powerstats: {
      intelligence: "null",
      strength: "78",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Hank Pym",
      "alter-egos": "Ant-Man, Goliath, Wasp II, Yellowjacket",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Ant-Man",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/858.jpg"
    }
  },
  {
    response: "success",
    id: "283",
    name: "Giant-Man II",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/343.jpg"
    }
  },
  {
    response: "success",
    id: "284",
    name: "Giganta",
    powerstats: {
      intelligence: "81",
      strength: "89",
      speed: "23",
      durability: "85",
      power: "32",
      combat: "42"
    },
    biography: {
      "full-name": "Doris Zuel",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Wonder Woman (Volume 1) #9 (1944)",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["205", "62.5 meters"],
      weight: ["1400 lb", "630 kg"],
      "eye-color": "Green",
      "hair-color": "Red"
    },
    work: {
      occupation: "Criminal, former Scientist, Professor at Ivy University",
      base: "Ivy Town"
    },
    connections: {
      "group-affiliation":
        "The Injustice League, formerly The Society, Villainy, Inc., The Legion of Doom",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1376.jpg"
    }
  },
  {
    response: "success",
    id: "285",
    name: "Gladiator",
    powerstats: {
      intelligence: "50",
      strength: "100",
      speed: "100",
      durability: "100",
      power: "77",
      combat: "70"
    },
    biography: {
      "full-name": "Kallark",
      "alter-egos": "No alter egos found.",
      aliases: ["Majestor", "Praetor", "Captain Universe"],
      "place-of-birth": "-",
      "first-appearance": "X-Men Vol 1 #107 October, 1977",
      publisher: "Marvel Comics",
      alignment: "neutral"
    },
    appearance: {
      gender: "Male",
      race: "Strontian",
      height: ["6'6", "198 cm"],
      weight: ["595 lb", "268 kg"],
      "eye-color": "Blue",
      "hair-color": "Blue"
    },
    work: {
      occupation:
        "Majestor of the Shi'ar Empire; Former Praetor of the Imperial Guard; possibly former Herald of Galactus",
      base:
        "Chandilar, Shi'ar Galaxy; mobile throughout the Shi'ar Empire and surrounding galaxies."
    },
    connections: {
      "group-affiliation":
        "Galactic Council, Annihilators; formerly Imperial Guard; possibly Heralds of Galactus",
      relatives: "Kubark (Kid Gladiator) (son), Xenith (The Strontian) (cousin)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1521.jpg"
    }
  },
  {
    response: "success",
    id: "286",
    name: "Goblin Queen",
    powerstats: {
      intelligence: "75",
      strength: "10",
      speed: "23",
      durability: "28",
      power: "65",
      combat: "56"
    },
    biography: {
      "full-name": "Madelyne Jennifer Pryor",
      "alter-egos": "No alter egos found.",
      aliases: ["Anodyne", "Maddie", "Lyne", "Red", "Madelyne Pryor-Summers"],
      "place-of-birth": "Created in Sinister's Labs, Nebraska",
      "first-appearance": "Uncanny X-Men #168",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'6", "168 cm"],
      weight: ["110 lb", "50 kg"],
      "eye-color": "Green",
      "hair-color": "Red"
    },
    work: {
      occupation: "-",
      base:
        "Mobile; formerly Anchorage, Alaska; Reaver Base, Australian Outback, Australia; Empire State Building, New York, New York"
    },
    connections: {
      "group-affiliation": "Former ally of X-Men, partner of N'Astirh",
      relatives:
        "Mister Sinister (creator), Jean Grey (Phoenix, genetic template), Scott Summers (Cyclops, husband), Nathan Christopher Summers (Cable, son), Christopher Summers (Corsair, father-in-law), Alex Summers (Havok, brother-in-law)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1054.jpg"
    }
  },
  {
    response: "success",
    id: "287",
    name: "Godzilla",
    powerstats: {
      intelligence: "44",
      strength: "100",
      speed: "54",
      durability: "100",
      power: "100",
      combat: "20"
    },
    biography: {
      "full-name": "Gojira",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Legendary Godzilla",
        "King of the Monsters",
        "Gigantis",
        "Monster Zero-One",
        "God of Destruction",
        "Alpha Predator"
      ],
      "place-of-birth": "-",
      "first-appearance": "Godzilla (1954)",
      publisher: "",
      alignment: "bad"
    },
    appearance: {
      gender: "-",
      race: "Kaiju",
      height: ["354'4", "108.0 meters"],
      weight: ["200000000 lb", "90,000 tons"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10590.jpg"
    }
  },
  {
    response: "success",
    id: "288",
    name: "Gog",
    powerstats: {
      intelligence: "50",
      strength: "34",
      speed: "47",
      durability: "72",
      power: "39",
      combat: "56"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["Nephut-Sha", "Hassan Kareem"],
      "place-of-birth": "-",
      "first-appearance": "Incredible Hulk #257 (1981)",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "Sinister Six",
      relatives: 'Seth (creator), Magog ("brother")'
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/693.jpg"
    }
  },
  {
    response: "success",
    id: "289",
    name: "Goku",
    powerstats: {
      intelligence: "56",
      strength: "100",
      speed: "75",
      durability: "90",
      power: "100",
      combat: "100"
    },
    biography: {
      "full-name": "Kakarot",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Ultimate Defender",
        "Sayain Monkey",
        "Super Sayain",
        "Z-Fighter",
        "Son-Goku",
        "Lower-Class Sayain",
        "Goku Son"
      ],
      "place-of-birth": "-",
      "first-appearance": "Dragon Ball #1",
      publisher: "Shueisha",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Saiyan",
      height: ["5'9", "175 cm"],
      weight: ["137 lb", "62 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "Saiyajin, Son family, Z-Fighters",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1284.jpg"
    }
  },
  {
    response: "success",
    id: "29",
    name: "Annihilus",
    powerstats: {
      intelligence: "75",
      strength: "80",
      speed: "47",
      durability: "56",
      power: "59",
      combat: "64"
    },
    biography: {
      "full-name": "Annihilus",
      "alter-egos": "No alter egos found.",
      aliases: ["The Living Death That Walks", "Lord of the Negative Zone"],
      "place-of-birth": "Planet of Arthros, Sector 17A, Negative Zone",
      "first-appearance": "Fantastic Four Annual #6 (1968)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["5'11", "180 cm"],
      weight: ["200 lb", "90 kg"],
      "eye-color": "Green",
      "hair-color": "No Hair"
    },
    work: { occupation: "Conqueror, scavenger", base: "-" },
    connections: {
      "group-affiliation": "Sometime ally of Blastaar",
      relatives: "Annihilus is a series of clonal scions"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1307.jpg"
    }
  },
  {
    response: "success",
    id: "290",
    name: "Goliath",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Erik Josten",
      "alter-egos": "Atlas, Power Man, Smuggler",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Atlas",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/845.jpg"
    }
  },
  {
    response: "success",
    id: "291",
    name: "Goliath",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Clint Barton",
      "alter-egos": "Hawkeye, Ronin",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Hawkeye",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/847.jpg"
    }
  },
  {
    response: "success",
    id: "292",
    name: "Goliath",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Hank Pym",
      "alter-egos": "Ant-Man, Giant-Man, Wasp II, Yellowjacket",
      aliases: ["Hank Pym"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Ant-Man",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/846.jpg"
    }
  },
  {
    response: "success",
    id: "293",
    name: "Goliath IV",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "William Barrett Foster",
      "alter-egos": "No alter egos found.",
      aliases: ["Giant-Man", "Black Goliath"],
      "place-of-birth": "Watts, Los Angeles, California",
      "first-appearance":
        "(As Foster) Avengers #32 (1966); (as Black Goliath) Luke Cage, Power Man #24 (1975); (as Giant-Man) Marvel Two-in-One #55 (1979); (as Goliath) Thing #1 (2006)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'", "183 cm"],
      weight: ["200 lb", "90 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: {
      occupation:
        "Biochemist, inventor, research scientist, adventurer; (formerly) circus performer, soldier",
      base: "-"
    },
    connections: {
      "group-affiliation":
        'Formerly Secret Avengers, former Avengers associate, formerly Stark West, Project: PEGASUS, "Defenders for a Day," Champions (of Los Angeles) (unofficial), Circus of Crime, U.S. military',
      relatives: "Claire Temple (ex-wife)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/879.jpg"
    }
  },
  {
    response: "success",
    id: "294",
    name: "Gorilla Grodd",
    powerstats: {
      intelligence: "81",
      strength: "53",
      speed: "33",
      durability: "70",
      power: "100",
      combat: "65"
    },
    biography: {
      "full-name": "Grodd",
      "alter-egos": "No alter egos found.",
      aliases: ["William Dawson", "King Grodd", "Gorilla Grodd", "Grodd-Son"],
      "place-of-birth": "-",
      "first-appearance": "Flash #106 (May, 1959)",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Gorilla",
      height: ["6'6", "198 cm"],
      weight: ["600 lb", "270 kg"],
      "eye-color": "Yellow",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "Gorilla City, Africa" },
    connections: {
      "group-affiliation": "-",
      relatives:
        "Boka (wife, separated), Gorbzil Mammit (son), Sam Simeon (grandson)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/694.jpg"
    }
  },
  {
    response: "success",
    id: "295",
    name: "Granny Goodness",
    powerstats: {
      intelligence: "null",
      strength: "96",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["Athena"],
      "place-of-birth": "Apokolips",
      "first-appearance": "-",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'10", "178 cm"],
      weight: ["256 lb", "115 kg"],
      "eye-color": "Blue",
      "hair-color": "White"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "Female Furies, Darkseid's Elite",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1344.jpg"
    }
  },
  {
    response: "success",
    id: "296",
    name: "Gravity",
    powerstats: {
      intelligence: "50",
      strength: "32",
      speed: "33",
      durability: "40",
      power: "69",
      combat: "30"
    },
    biography: {
      "full-name": "Greg Willis",
      "alter-egos": "No alter egos found.",
      aliases: ["Protector of the Universe"],
      "place-of-birth": "Sheboygan, Wisconsin",
      "first-appearance": "Gravity #1 (August, 2005)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'10", "178 cm"],
      weight: ["175 lb", "79 kg"],
      "eye-color": "Blue",
      "hair-color": "Brown"
    },
    work: { occupation: "Student", base: "New York City" },
    connections: {
      "group-affiliation":
        "Young Allies; Formerly Great Lakes Initiative, Heavy Hitters",
      relatives: "Richard Willis (father), Mary Willis (mother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/74.jpg"
    }
  },
  {
    response: "success",
    id: "297",
    name: "Greedo",
    powerstats: {
      intelligence: "38",
      strength: "10",
      speed: "13",
      durability: "15",
      power: "31",
      combat: "40"
    },
    biography: {
      "full-name": "Greedo",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Rodia",
      "first-appearance": "-",
      publisher: "George Lucas",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Rodian",
      height: ["5'7", "170 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Purple",
      "hair-color": "-"
    },
    work: { occupation: "Bounty Hunter", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10468.jpg"
    }
  },
  {
    response: "success",
    id: "298",
    name: "Green Arrow",
    powerstats: {
      intelligence: "81",
      strength: "12",
      speed: "35",
      durability: "28",
      power: "39",
      combat: "90"
    },
    biography: {
      "full-name": "Oliver Queen",
      "alter-egos": "No alter egos found.",
      aliases: ["The Emerald Archer", "Battling Bowman"],
      "place-of-birth": "-",
      "first-appearance": "More Fun Comics #73 (November 1941)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'2", "188 cm"],
      weight: ["195 lb", "88 kg"],
      "eye-color": "Green",
      "hair-color": "Blond"
    },
    work: {
      occupation: "Professional Crime-fighter; Multi-Billionaire",
      base: "Star City, California; Formerly Seattle, Washington"
    },
    connections: {
      "group-affiliation":
        "Justice League Reserve, Connor Hawke, Mia Dearden,  Arsenal, Green Arrows of the World, Black Canary, Green Lantern Hal Jordan, Shado, Eddie Fyers, Justice League Elite, Seven Soldiers of Victory, All-Star Squadron",
      relatives:
        "Conner Hawke (son); Robert (son); Cissie King (possible daughter); Roy Harper - Red Arrow (adoptive son); Dinah Laurel Lance (wife); Dinah Drake Lance (mother-in-law, deceased); Larry Lance (father-in-law, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/696.jpg"
    }
  },
  {
    response: "success",
    id: "299",
    name: "Green Goblin",
    powerstats: {
      intelligence: "100",
      strength: "48",
      speed: "38",
      durability: "60",
      power: "48",
      combat: "50"
    },
    biography: {
      "full-name": "Norman Osborn",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Normie",
        "Green Goblin",
        "Goblin Lord",
        "Overlord",
        "the Goblin",
        '"Gobby"',
        "Scrier",
        "Commander Osborn",
        "Director Osborn",
        "Iron Patriot"
      ],
      "place-of-birth": "Hartford, Connecticut",
      "first-appearance": "Amazing Spider-Man #14 (July, 1964)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'11", "180 cm"],
      weight: ["185 lb", "83 kg"],
      "eye-color": "Blue",
      "hair-color": "Auburn"
    },
    work: {
      occupation:
        "Professional criminal, owner and president of Osborn Industries",
      base:
        "H.A.M.M.E.R. base; formerly Avengers Tower, New York City, New York"
    },
    connections: {
      "group-affiliation":
        "H.A.M.M.E.R., leader of the Dark Avengers; formerly Thunderbolts, The Cabal; Former leader of the Sinister Twelve, partner of Mendell Stromm, Crime Master, employer of the Enforcers, Hellfire Club",
      relatives:
        "Alton Osborn, Sr. (paternal great-grandfather, deceased);Alton Osborn, Jr. (paternal grandfather, deceased);Amberson Osborn (father, deceased);Emily Osborn (wife, deceased);Gabriel Stacy (son);Sarah Stacy (daughter);Harry Osborn (Green Goblin II, son);Liz Allan (ex-daughter-in-law);Normie Osborn (grandson);Stanley Osborn (grandson);"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/579.jpg"
    }
  },
  {
    response: "success",
    id: "3",
    name: "Abin Sur",
    powerstats: {
      intelligence: "50",
      strength: "90",
      speed: "53",
      durability: "64",
      power: "99",
      combat: "65"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["Lagzia"],
      "place-of-birth": "Ungara",
      "first-appearance": "Showcase #22 (October, 1959)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Ungaran",
      height: ["6'1", "185 cm"],
      weight: ["200 lb", "90 kg"],
      "eye-color": "Blue",
      "hair-color": "No Hair"
    },
    work: { occupation: "Green Lantern, former history professor", base: "Oa" },
    connections: {
      "group-affiliation": "Green Lantern Corps, Black Lantern Corps",
      relatives:
        "Amon Sur (son), Arin Sur (sister), Thaal Sinestro (brother-in-law), Soranik Natu (niece)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1460.jpg"
    }
  },
  {
    response: "success",
    id: "30",
    name: "Ant-Man",
    powerstats: {
      intelligence: "100",
      strength: "18",
      speed: "23",
      durability: "28",
      power: "32",
      combat: "32"
    },
    biography: {
      "full-name": "Hank Pym",
      "alter-egos": "Giant-Man, Goliath, Wasp II, Yellowjacket",
      aliases: [
        "Hank Pym",
        "Doctor Pym",
        "Ant-Man",
        "Goliath",
        "Yellowjacket",
        "Wasp",
        "Earth's Scientist Supreme"
      ],
      "place-of-birth": "Elmsford, New York",
      "first-appearance":
        "Tales to Astonish #27 (January, 1962) (as Hank Pym)  Tales to Astonish #35 (September, 1962) (as Ant-Man)",
      publisher: "Giant-Man",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'11", "211 cm"],
      weight: ["270 lb", "122 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation: "Adventurer, Biochemist, former manager of Avengers Compound",
      base:
        "Avengers Compound, Los Angeles; formerly Infinite Avengers Mansion; Captive aboard a Skrull ship; Avengers Mansion, New York City, New York"
    },
    connections: {
      "group-affiliation":
        "Avengers Academy, Secret Avengers; formerly Mighty Avengers, Avengers (founding member), Defenders, Future Iron Man's Team",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/857.jpg"
    }
  },
  {
    response: "success",
    id: "300",
    name: "Green Goblin II",
    powerstats: {
      intelligence: "75",
      strength: "55",
      speed: "37",
      durability: "50",
      power: "44",
      combat: "26"
    },
    biography: {
      "full-name": "Harold Osborn",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "New York City",
      "first-appearance": "Amzing Spide-Man #31",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["5'10", "178 cm"],
      weight: ["170 lb", "77 kg"],
      "eye-color": "Blue",
      "hair-color": "Auburn"
    },
    work: { occupation: "-", base: "Formerly New York City" },
    connections: {
      "group-affiliation": "-",
      relatives:
        "Liz Allen-Osborn (Wife,) Norman III (son,)Norman Osborn II - Green Goblin (father)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/25.jpg"
    }
  },
  {
    response: "success",
    id: "301",
    name: "Green Goblin III",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Barton Hamilton",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance":
        "As Dr. Barton Hamilton in Amazing Spider-Man #167 as Green Goblin III in Amazing Spider-Man #176",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'", "183 cm"],
      weight: ["195 lb", "88 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "Psychiatrist", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/351.jpg"
    }
  },
  {
    response: "success",
    id: "302",
    name: "Green Goblin IV",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Phillip Benjamin Urich",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance":
        "(As Urich) Web of Spider-Man #125 (1995); (as Green Goblin) Green Goblin #1 (1995)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["5'10", "178 cm"],
      weight: ["175 lb", "79 kg"],
      "eye-color": "Green",
      "hair-color": "Brown"
    },
    work: {
      occupation: "College student, former vigilante, intern at Daily Bugle",
      base: "-"
    },
    connections: {
      "group-affiliation": "-",
      relatives:
        "Arnold Urich (father), Mindy Urich (mother), Kenneth Urich (brother), Ben Urich (uncle), Doris Urich (aunt)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/75.jpg"
    }
  },
  {
    response: "success",
    id: "303",
    name: "Groot",
    powerstats: {
      intelligence: "75",
      strength: "85",
      speed: "33",
      durability: "70",
      power: "100",
      combat: "64"
    },
    biography: {
      "full-name": "Groot",
      "alter-egos": "No alter egos found.",
      aliases: [
        "The Monster from Planet X; His Divine Majesty King Groot the 23rd",
        "Monarch of Planet X",
        "custodian of the branch worlds",
        "ruler of all the shades",
        "Flora colossus Information-silk"
      ],
      "place-of-birth": "-",
      "first-appearance": "Tales to Astonish #13 (November, 1960)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Flora Colossus",
      height: ["23'0", "701 cm"],
      weight: ["8200 lb", "4 tons"],
      "eye-color": "Yellow",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "Area 13 (the Howling Commandos' base)" },
    connections: {
      "group-affiliation":
        "Guardians of the Galaxy, Unnamed Kree covert ops team, formerly Galactic Council, Howling Commandos",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10017.jpg"
    }
  },
  {
    response: "success",
    id: "304",
    name: "Guardian",
    powerstats: {
      intelligence: "null",
      strength: "45",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "James Hudson",
      "alter-egos": "No alter egos found.",
      aliases: ["Weapon Alpha", "Antiguard", "Vindicator", "Mac", "Jimmy"],
      "place-of-birth": "London, Ontario, Canada",
      "first-appearance": "X-Men Vol.1  #109 (as Weapon Alpha)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: {
      occupation: "Engineer, government agent, adventurer",
      base: "Ottawa, Canada"
    },
    connections: {
      "group-affiliation": "Alpha Flight",
      relatives: "Vindicator II (Heather Hudson), wife"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/76.jpg"
    }
  },
  {
    response: "success",
    id: "305",
    name: "Guy Gardner",
    powerstats: {
      intelligence: "38",
      strength: "90",
      speed: "53",
      durability: "64",
      power: "100",
      combat: "64"
    },
    biography: {
      "full-name": "Guy Gardner",
      "alter-egos": "No alter egos found.",
      aliases: ["Green Lantern", "Red Lantern", "Warrior"],
      "place-of-birth": "Baltimore, Maryland",
      "first-appearance": "Green Lantern Vol 2 #59",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human-Vuldarian",
      height: ["6'2", "188 cm"],
      weight: ["210 lb", "95 kg"],
      "eye-color": "Blue",
      "hair-color": "Red"
    },
    work: {
      occupation:
        "Former High School gym teacher; former bar owner; currently Honor guard of the Green Lantern Corps",
      base: "Formerly New York City; currently Oa"
    },
    connections: {
      "group-affiliation":
        "Green Lantern Corps, Formerly Justice League of America",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/700.jpg"
    }
  },
  {
    response: "success",
    id: "306",
    name: "Hal Jordan",
    powerstats: {
      intelligence: "69",
      strength: "90",
      speed: "75",
      durability: "80",
      power: "100",
      combat: "70"
    },
    biography: {
      "full-name": "Hal Jordan",
      "alter-egos": "No alter egos found.",
      aliases: ["Parallax", "Spectre", "Green Lantern"],
      "place-of-birth": "Coast City, California",
      "first-appearance": "Showcase #22",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'2", "188 cm"],
      weight: ["200 lb", "90 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: { occupation: "Adventurer, Air Force Test Pilot", base: "-" },
    connections: {
      "group-affiliation":
        "Green Lantern Corps, Justice League of America, Justice League Europe, frequently teamed with the second Flash and the original Green Arrow",
      relatives:
        'Martin H. "Marty" Jordan (father, deceased), Jessica Jordan (mother, deceased), Jim Jordan (younger brother), Jack Jordan (older brother, deceased), Jan Jordan (sister-in-law, deceased), Helen Jordan (neice), Larry Jordan (Air Wave I - cousin, deceased), Hal Jordan (Air Wave II - cousin)'
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/697.jpg"
    }
  },
  {
    response: "success",
    id: "307",
    name: "Han Solo",
    powerstats: {
      intelligence: "50",
      strength: "10",
      speed: "17",
      durability: "20",
      power: "43",
      combat: "60"
    },
    biography: {
      "full-name": "Han Solo",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Corellia",
      "first-appearance": "Star Wars: Episode IV - A New Hope (1977)",
      publisher: "George Lucas",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'0", "183 cm"],
      weight: ["176 lb", "79 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10456.jpg"
    }
  },
  {
    response: "success",
    id: "308",
    name: "Hancock",
    powerstats: {
      intelligence: "63",
      strength: "90",
      speed: "67",
      durability: "100",
      power: "100",
      combat: "50"
    },
    biography: {
      "full-name": "John Hancock",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Sony Pictures",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'2", "188 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1109.jpg"
    }
  },
  {
    response: "success",
    id: "309",
    name: "Harley Quinn",
    powerstats: {
      intelligence: "88",
      strength: "12",
      speed: "33",
      durability: "65",
      power: "55",
      combat: "80"
    },
    biography: {
      "full-name": "Harley Quinn",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Harleen Quinzel",
        "Harl",
        "Cupid of Crime",
        "Jane Wisakedjak",
        "Elise Archer",
        "Pumpkin Pooh"
      ],
      "place-of-birth": "-",
      "first-appearance": "Batman: Harley Quinn (October, 1999)",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["5'7", "170 cm"],
      weight: ["140 lb", "63 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: { occupation: "Psychiatrist", base: "Gotham City" },
    connections: {
      "group-affiliation":
        "Formerly The Quintets, The Joker, Poison Ivy, Secret Six",
      relatives:
        "Barry Quinzel (brother), Sharon Quinzel (mother), Nick Quinzel (father), Jenny Quinzel (niece), Nicky Quinzel (nephew)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/701.jpg"
    }
  },
  {
    response: "success",
    id: "31",
    name: "Ant-Man II",
    powerstats: {
      intelligence: "75",
      strength: "18",
      speed: "17",
      durability: "40",
      power: "53",
      combat: "30"
    },
    biography: {
      "full-name": "Scott Lang",
      "alter-egos": "No alter egos found.",
      aliases: ["Myrmidon", "Scott Edward Harris Lang"],
      "place-of-birth": "Coral Gables, Florida",
      "first-appearance": "Avengers Vol 1 #181 (March, 1979)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'0", "183 cm"],
      weight: ["190 lb", "86 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation: "Electronics Technician,",
      base:
        "South Beach, Miami, Florida; formerly Farmingdale, Long Island, New York"
    },
    connections: {
      "group-affiliation":
        "Ant-Man Security Solutions; formerly Future Foundation (leader), Fantastic Four (leader), Defenders, Avengers, Heroes For Hire, Stark Industries",
      relatives:
        "Cassandra Eleanor Lang (daughter), Ruth (sister), Carl (brother-in-law), Peggy Rae (ex-wife)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/166.jpg"
    }
  },
  {
    response: "success",
    id: "310",
    name: "Harry Potter",
    powerstats: {
      intelligence: "75",
      strength: "7",
      speed: "21",
      durability: "10",
      power: "100",
      combat: "50"
    },
    biography: {
      "full-name": "Harry James Potter",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Triwizard Champion",
        "Seeker",
        "Quidditch Captain",
        "Leader of Dumbledore's Army",
        "Master of Death"
      ],
      "place-of-birth": "-",
      "first-appearance": "Harry Potter and the Philosopher's Stone",
      publisher: "J. K. Rowling",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Green",
      "hair-color": "Black"
    },
    work: {
      occupation: "Head of the Department of Magical Law Enforcement[",
      base: "-"
    },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10878.jpg"
    }
  },
  {
    response: "success",
    id: "311",
    name: "Havok",
    powerstats: {
      intelligence: "63",
      strength: "10",
      speed: "25",
      durability: "60",
      power: "71",
      combat: "45"
    },
    biography: {
      "full-name": "Alexander Summers",
      "alter-egos": "No alter egos found.",
      aliases: ["Mutant X", "Goblin Prince"],
      "place-of-birth": "Honolulu, Hawaii",
      "first-appearance": "X-MEN #58",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["6'", "183 cm"],
      weight: ["175 lb", "79 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation:
        "Currently Adventurer, formerly Graduate student in geophysics",
      base: "Alexandria, Virginia"
    },
    connections: {
      "group-affiliation":
        "Uncanny Avengers; formerly X-Men, Starjammers, X-Factor Investigations, Six , Brotherhood, X-Factor, Dark Descendants, Genoshan Magistrates, Defenders for a Day",
      relatives:
        "Oscar Summers (adoptive paternal distant ancestor, deceased), Daniel Summers (paternal distant ancestor, deceased), Amanda Mueller (Black Womb) (paternal distant ancestor), unnamed paternal great-grandfather, deceased, Gloria Dayne (Fontanelle) (paternal distant ancestor), Philip Summers (paternal grandfather), Deborah Summers (paternal grandmother), Christopher Summers (Corsair) (father, deceased), Katherine Summers (mother, deceased), Andrew Blanding (adoptive father), Joanna Blanding (adoptive mother), Scott Summers (Cyclops) (brother), Gabriel Summers (Vulcan) (brother, deceased), Ahmet Abdol (Living Monolith) (\"brother\" via X-Gene transfer), Haley Blanding (adoptive sister), Todd Blanding (adoptive brother, deceased), Madelyne Pryor-Summers (Red Queen) (sister-in-law/clone of second sister-in-law, deceased), Jean Grey-Summers (Phoenix) (sister-in-law, deceased), Cal'syee Neramani (Deathbird) (sister-in-law), Nathan Summers (Cable) (nephew), Adam Neramani (X-Treme) (nephew, alleged half-brother), Aliya Dayspring (Jenskot) (niece, deceased), Hope Summers (niece, deceased), Madelyne Pryor (Earth-1298) (Marvel Woman) (alternate reality wife), Scott Summers (Earth-1298) (alternate reality son), Rachel Grey (Marvel Girl) (alternate reality niece), Rachel Summers (Mother Askani) (alternate reality niece, deceased), Nathaniel Grey (X-Man) (alternate reality nephew), Stryfe (nephew's clone, deceased), Tyler Dayspring (Genesis) (great-nephew, deceased), Hope Summers (adoptive great-niece), Janet van Dyne (Wasp) (wife), Katie Summers (daughter)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/77.jpg"
    }
  },
  {
    response: "success",
    id: "312",
    name: "Hawk",
    powerstats: {
      intelligence: "38",
      strength: "38",
      speed: "35",
      durability: "95",
      power: "43",
      combat: "42"
    },
    biography: {
      "full-name": "Henry Hall",
      "alter-egos": "No alter egos found.",
      aliases: ["Monarch", "Extant"],
      "place-of-birth": "-",
      "first-appearance": "Showcase #75 (June, 1968)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'1", "185 cm"],
      weight: ["197 lb", "89 kg"],
      "eye-color": "Red",
      "hair-color": "Brown"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation":
        "Black Lantern Corps, Teen Titans, Hawk and Dove, Titans West",
      relatives:
        "Don Hall (brother, deceased), Irwin Hall (father), Rae Penfield (mother), James Penfield (uncle)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1382.jpg"
    }
  },
  {
    response: "success",
    id: "313",
    name: "Hawkeye",
    powerstats: {
      intelligence: "56",
      strength: "12",
      speed: "21",
      durability: "10",
      power: "29",
      combat: "80"
    },
    biography: {
      "full-name": "Clint Barton",
      "alter-egos": "Goliath, Ronin",
      aliases: [
        "Ronin",
        "Goliath",
        "Golden Archer",
        "the Marksman",
        "Father Time",
        "Longbow"
      ],
      "place-of-birth": "Waverly, Iowa",
      "first-appearance": "Tales of Suspense #57 (September, 1964)",
      publisher: "Goliath",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'3", "191 cm"],
      weight: ["230 lb", "104 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: { occupation: "Adventurer", base: "-" },
    connections: {
      "group-affiliation":
        "Avengers, Thunderbolts, Avengers West Coast, Great Lakes Avengers, Shadows, Chain Gang, former partner of the Black Widow",
      relatives:
        "Harold Barton (father, deceased), Edith Barton (mother, deceased), Bernard Barton (brother, deceased), Barbara Morse (wife, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/73.jpg"
    }
  },
  {
    response: "success",
    id: "314",
    name: "Hawkeye II",
    powerstats: {
      intelligence: "50",
      strength: "6",
      speed: "8",
      durability: "10",
      power: "24",
      combat: "50"
    },
    biography: {
      "full-name": "Katherine Elizabeth Bishop",
      "alter-egos": "No alter egos found.",
      aliases: ["Kate Bishop"],
      "place-of-birth": "New York City, New York",
      "first-appearance": "Young Avengers #1 (April, 2005)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["5'5", "165 cm"],
      weight: ["126 lb", "57 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: {
      occupation: "Student; Adventurer; Fugitive",
      base: "Bishop Publishing, New York City, New York"
    },
    connections: {
      "group-affiliation":
        "Young Avengers, partner of Hawkeye (Clint Barton); formerly Secret Avengers",
      relatives:
        "Derek Bishop (father); Eleanor Bishop (mother, deceased); Susan Bishop (sister);"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10043.jpg"
    }
  },
  {
    response: "success",
    id: "315",
    name: "Hawkgirl",
    powerstats: {
      intelligence: "50",
      strength: "28",
      speed: "53",
      durability: "99",
      power: "96",
      combat: "72"
    },
    biography: {
      "full-name": "Kendra Saunders",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Chay-Ara; Sheila Carr; Lady Celia Penbrook",
        "Kate Manser; Shiera Sanders"
      ],
      "place-of-birth": "-",
      "first-appearance": "JSA Secret Files #1 (August 1999)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'9", "175 cm"],
      weight: ["135 lb", "61 kg"],
      "eye-color": "Green",
      "hair-color": "Red"
    },
    work: {
      occupation:
        "Adventurer, Film School Student, Temp Curator of the Stonechat Museum",
      base:
        "St. Roch, Louisiana, JLA Watchtower; formerly Manhattan, New York (as a member of the JSA)"
    },
    connections: {
      "group-affiliation":
        "Justice League of America, formerly a member of the JSA, Birds of Prey",
      relatives:
        'Michael Saunders (father, deceased); Trina Saunders (mother, deceased); Cyril "Speed" Saunders (grandfather); Mia Saunders (daughter); Shiera Hall (Hawkgirl, great-aunt, deceased); Carter Hall (Hawkman, great-uncle); Hector Hall (Dr. Fate, 2nd cousin); Northwind (cousin through adoption); Hippolyta Hall (Fury, cousin through marriage); Sandman (Daniel Hall, 3rd cousin), Death, Destiny, Destruction, Delirium, Desire (3rd cousins)'
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/703.jpg"
    }
  },
  {
    response: "success",
    id: "316",
    name: "Hawkman",
    powerstats: {
      intelligence: "null",
      strength: "66",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Carter Hall",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "FLASH COMICS #1 (January 1940)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'1", "185 cm"],
      weight: ["195 lb", "88 kg"],
      "eye-color": "Blue",
      "hair-color": "Brown"
    },
    work: { occupation: "Adventurer", base: "-" },
    connections: {
      "group-affiliation":
        "Justice Society of America, Justice League of America, All-Star Squadron",
      relatives:
        "Shiera Sanders Hall (wife, deceased; soul currently inhabiting the body of Kendra Saunders), Hector Hall (son, deceased), Daniel Hall (grandson), Lyta Trevor Hall (daughter-in-law, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/839.jpg"
    }
  },
  {
    response: "success",
    id: "317",
    name: "Hawkwoman",
    powerstats: {
      intelligence: "null",
      strength: "96",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Shayera Hol",
      "alter-egos": "No alter egos found.",
      aliases: ["Shayera Hall", "Hawkgirl"],
      "place-of-birth": "-",
      "first-appearance": "The Brave and the Bold #34 (February-March 1961)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'9", "175 cm"],
      weight: ["120 lb", "54 kg"],
      "eye-color": "Green",
      "hair-color": "Red"
    },
    work: {
      occupation: "-",
      base: "Midway City, Michigan; Justice League Satellite I"
    },
    connections: {
      "group-affiliation": "Justice League of America",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/702.jpg"
    }
  },
  {
    response: "success",
    id: "318",
    name: "Hawkwoman II",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Sharon Parker",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1129.jpg"
    }
  },
  {
    response: "success",
    id: "319",
    name: "Hawkwoman III",
    powerstats: {
      intelligence: "null",
      strength: "92",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Shayera Thal",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'7", "170 cm"],
      weight: ["145 lb", "65 kg"],
      "eye-color": "Blue",
      "hair-color": "Red"
    },
    work: { occupation: "Police Officer", base: "Detroit; Thanagar" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1130.jpg"
    }
  },
  {
    response: "success",
    id: "32",
    name: "Anti-Monitor",
    powerstats: {
      intelligence: "88",
      strength: "100",
      speed: "50",
      durability: "100",
      power: "100",
      combat: "90"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["Monitor", "Mobius"],
      "place-of-birth": "Moon of Qward",
      "first-appearance": "Crisis on Infinite Earths #4",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "God / Eternal",
      height: ["200", "61.0 meters"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Yellow",
      "hair-color": "No Hair"
    },
    work: { occupation: "-", base: "Qward, Antimatter Universe" },
    connections: {
      "group-affiliation":
        "Sinestro Corps, Weaponers of Qward, Thunderers of Qward, Shadow Demons",
      relatives: 'Monitor ("brother"), The Monitors'
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1292.jpg"
    }
  },
  {
    response: "success",
    id: "320",
    name: "Heat Wave",
    powerstats: {
      intelligence: "38",
      strength: "10",
      speed: "17",
      durability: "45",
      power: "27",
      combat: "30"
    },
    biography: {
      "full-name": "Mick Rory",
      "alter-egos": "No alter egos found.",
      aliases: ["Rory Calhoun"],
      "place-of-birth": "-",
      "first-appearance": "Flash #140 (November, 1963)",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'11", "180 cm"],
      weight: ["179 lb", "81 kg"],
      "eye-color": "Blue",
      "hair-color": "No Hair"
    },
    work: { occupation: "Professional Criminal", base: "Central City" },
    connections: {
      "group-affiliation":
        "Rogues; formerly Secret Society of Super-Villains, Legion of Doom",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/705.jpg"
    }
  },
  {
    response: "success",
    id: "321",
    name: "Hela",
    powerstats: {
      intelligence: "63",
      strength: "100",
      speed: "46",
      durability: "100",
      power: "100",
      combat: "45"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["Goddess of Death"],
      "place-of-birth": "-",
      "first-appearance": "Journey into Mystery #102",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Female",
      race: "Asgardian",
      height: ["7'0", "213 cm"],
      weight: ["500 lb", "225 kg"],
      "eye-color": "Green",
      "hair-color": "Black"
    },
    work: {
      occupation:
        "Asgardian Goddess of Death, former Ruler of Hel and Niffleheim",
      base: "-"
    },
    connections: {
      "group-affiliation": "-",
      relatives: "Loki (father), Thor (Uncle)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10835.jpg"
    }
  },
  {
    response: "success",
    id: "322",
    name: "Hellboy",
    powerstats: {
      intelligence: "63",
      strength: "53",
      speed: "21",
      durability: "95",
      power: "73",
      combat: "75"
    },
    biography: {
      "full-name": "Anung Un Rama",
      "alter-egos": "No alter egos found.",
      aliases: ["World Destroyer", "The Great Beast"],
      "place-of-birth": "-",
      "first-appearance": "Dime Press #4 (May 1, 1993)",
      publisher: "Dark Horse Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Demon",
      height: ["8'6", "259 cm"],
      weight: ["350 lb", "158 kg"],
      "eye-color": "Gold",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation":
        "Abe Sapien, Liz Sherman, Roger the Homunculus, Savage Dragon, the Goon, Batman, Starman, Ghost, Painkiller Jane, Lobster Johnson, Torch of Liberty",
      relatives:
        "Catherine Tanner-Tremaine (mother, deceased), two unnamed maternal half-siblings (deceased), Professor Trevor Bruttenholm (foster father)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/813.jpg"
    }
  },
  {
    response: "success",
    id: "323",
    name: "Hellcat",
    powerstats: {
      intelligence: "63",
      strength: "11",
      speed: "33",
      durability: "45",
      power: "46",
      combat: "70"
    },
    biography: {
      "full-name": "Patricia Walker",
      "alter-egos": "No alter egos found.",
      aliases: ["Patsy Walker", "Patricia Hellstrom", "The Cat"],
      "place-of-birth": "Centerville, CA USA",
      "first-appearance": "Avengers #144 (February, 1976)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["5'8", "173 cm"],
      weight: ["135 lb", "61 kg"],
      "eye-color": "Blue",
      "hair-color": "Red"
    },
    work: {
      occupation: "Housemaker, model, adventurer, supernatural investigator",
      base: "San Francisco, CA USA"
    },
    connections: {
      "group-affiliation":
        "Formerly Alaskan-based Initiative agent, Lady Liberators, Avengers, Defenders, Legion of the Unliving",
      relatives:
        'Joshua Walker (father), Dorothy Walker (mother, deceased), Sophia (maternal aunt), Bea (step-mother), Mickey Walker (brother), Robert "Buzz" Baxter (aka Mad-Dog, ex-husband), Daimon Hellstrom (aka Hellstorm, ex-husband), Percy Walker'
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/79.jpg"
    }
  },
  {
    response: "success",
    id: "324",
    name: "Hellstorm",
    powerstats: {
      intelligence: "null",
      strength: "56",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Daimon Hellstrom",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Antichrist",
        "Black Halo",
        "the Devil",
        "King of Hell",
        "Prince of Lies",
        "Satan",
        "Son of Satan."
      ],
      "place-of-birth": "Greentown, Massachusetts",
      "first-appearance":
        "(as Hellstorm) West Coast Avengers (second series) #14",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'1'", "185 cm"],
      weight: ["180 lb", "81 kg"],
      "eye-color": "Red",
      "hair-color": "Red"
    },
    work: {
      occupation:
        "Ruler of Hell, former Demonologist, occult investigator, exorcist and priest",
      base: "Hell, formerly San Francisco, California"
    },
    connections: {
      "group-affiliation":
        "Hell-Lords; formerly Hellstrom and Hellstrom, Paranormal Investigation, member of the Defenders",
      relatives:
        "Hellcat (Patricia Walker, wife, deceased), Marduk Kurios (father (and son), aka Satan), Victoria Wingate Hellstrom (mother, deceased), Satana (sister), Jaine Cutter (consort)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/80.jpg"
    }
  },
  {
    response: "success",
    id: "325",
    name: "Hercules",
    powerstats: {
      intelligence: "63",
      strength: "100",
      speed: "46",
      durability: "85",
      power: "89",
      combat: "100"
    },
    biography: {
      "full-name": "Heracles",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Spider-Herc",
        "The Lion of Olympus",
        "The Defender of Olympus",
        "The Scion of Olympus",
        "Prince of Power",
        "Alcaeus",
        "Herakles",
        "Herc",
        "Harry Cleese",
        "Victor Tegler",
        "Agent 74"
      ],
      "place-of-birth": "Thebes, Greece",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Demi-God",
      height: ["6'5", "196 cm"],
      weight: ["325 lb", "146 kg"],
      "eye-color": "Blue",
      "hair-color": "Brown"
    },
    work: {
      occupation:
        "Adventurer, Olympian God of Strength and Labor, later Olympian God of Heroes",
      base:
        "Brooklyn; formerly Infinite Avengers Mansion, Mount Olympus, Avengers Mansion, Hydrobase"
    },
    connections: {
      "group-affiliation":
        "Formerly God Squad, Council of Godheads, Olympia Corp., Mighty Avengers, Renegades, Secret Avengers, Avengers, Champions of Los Angeles, Defenders, Heroes for Hire, Damage Control, Olympian Gods, Argonauts, Defenders for a Day",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/78.jpg"
    }
  },
  {
    response: "success",
    id: "326",
    name: "Hiro Nakamura",
    powerstats: {
      intelligence: "null",
      strength: "15",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Hiro Nakamura",
      "alter-egos": "No alter egos found.",
      aliases: ["Jotaro Kujo", "Takezo Kensei"],
      "place-of-birth": "Tokyo, Japan",
      "first-appearance": "-",
      publisher: "NBC - Heroes",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "Office worker", base: "-" },
    connections: {
      "group-affiliation": "-",
      relatives:
        "Kaito Nakamura (deceased), Ishi Nakamura (deceased), Kimiko Nakamura (older sister)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/947.jpg"
    }
  },
  {
    response: "success",
    id: "327",
    name: "Hit-Girl",
    powerstats: {
      intelligence: "56",
      strength: "7",
      speed: "29",
      durability: "20",
      power: "27",
      combat: "65"
    },
    biography: {
      "full-name": "Mindy McCready",
      "alter-egos": "No alter egos found.",
      aliases: ["Hit Girl", "Hitgirl"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Icon Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1336.jpg"
    }
  },
  {
    response: "success",
    id: "328",
    name: "Hobgoblin",
    powerstats: {
      intelligence: "null",
      strength: "53",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Roderick Kingsley",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["5'11", "180 cm"],
      weight: ["185 lb", "83 kg"],
      "eye-color": "Blue",
      "hair-color": "Grey"
    },
    work: { occupation: "Fashion designer", base: "-" },
    connections: {
      "group-affiliation": "-",
      relatives: "Daniel Kingsley (brother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/896.jpg"
    }
  },
  {
    response: "success",
    id: "329",
    name: "Hollow",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Monet St. Croix",
      "alter-egos": "No alter egos found.",
      aliases: ["Penace", "M", "Monet St. Croix", "Penny", "Yvette"],
      "place-of-birth": "-",
      "first-appearance": "Generation X #1 (1994)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'7", "170 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Blue",
      "hair-color": "Red"
    },
    work: {
      occupation: "-",
      base: "Massachusetts Academy; Phil Urich's aprtment"
    },
    connections: {
      "group-affiliation": "Generation X, The Loners",
      relatives: "M, Emplate, St. Croix Twins"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/931.jpg"
    }
  },
  {
    response: "success",
    id: "33",
    name: "Anti-Spawn",
    powerstats: {
      intelligence: "null",
      strength: "58",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Jason Wynn",
      "alter-egos": "No alter egos found.",
      aliases: ["Redeemer"],
      "place-of-birth": "-",
      "first-appearance": "Spawn #16",
      publisher: "Image Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1071.jpg"
    }
  },
  {
    response: "success",
    id: "330",
    name: "Hope Summers",
    powerstats: {
      intelligence: "63",
      strength: "10",
      speed: "12",
      durability: "32",
      power: "93",
      combat: "75"
    },
    biography: {
      "full-name": "Hope Summers",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Mutant Messiah",
        "Messiah Child",
        "Hub",
        "Throat Slicer",
        "Little Girl",
        "Little Momma"
      ],
      "place-of-birth": "-",
      "first-appearance": "X-Men Vol 2 #205 (2008)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'6", "168 cm"],
      weight: ["106 lb", "48 kg"],
      "eye-color": "Green",
      "hair-color": "Red"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "X-Men, formerly Cable",
      relatives:
        "Louise Spalding (mother, deceased), unknown biological father, Mrs. Spalding (maternal grandmother), Cable (adoptive father, deceased), Hope (adoptive mother, deceased), Cyclops (adoptive grandfather), Red Queen / Phoenix (adoptive grandmothers, deceased?), X-Man (adoptive uncle), Marvel Girl (adoptive aunt), Havok (adoptive granduncle), Vulcan (adoptive granduncle, deceased), Deathbird (adoptive grandaunt)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1351.jpg"
    }
  },
  {
    response: "success",
    id: "331",
    name: "Howard the Duck",
    powerstats: {
      intelligence: "null",
      strength: "44",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Howard (Last name unrevealed)",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Duckman",
        "Iron Duck",
        "Pondhopper",
        "Shang-Op",
        "Cheap Ducktective",
        "Duckboy",
        "Dark Mallard of the Night"
      ],
      "place-of-birth": "New Stork, New Stork, Duckworld",
      "first-appearance": "FEAR #19",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["2'7'", "79 cm"],
      weight: ["40 lb", "18 kg"],
      "eye-color": "Brown",
      "hair-color": "Yellow"
    },
    work: {
      occupation:
        "Many and various, including former candidate for the United States presidency but usually unemployed",
      base: "Cleveland, Ohio"
    },
    connections: {
      "group-affiliation": "No known group affiliation",
      relatives:
        "(according to one account) Ronald (father), Henrietta (mother), Theresa (sister), Orville (brother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/82.jpg"
    }
  },
  {
    response: "success",
    id: "332",
    name: "Hulk",
    powerstats: {
      intelligence: "88",
      strength: "100",
      speed: "63",
      durability: "100",
      power: "98",
      combat: "85"
    },
    biography: {
      "full-name": "Bruce Banner",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Annihilator",
        "Captain Universe",
        "Joe Fixit",
        "Mr. Fixit",
        "Mechano",
        "Professor",
        "Jade Jaws",
        "Golly Green Giant"
      ],
      "place-of-birth": "Dayton, Ohio",
      "first-appearance": "Incredible Hulk #1 (May, 1962)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human / Radiation",
      height: ["8'0", "244 cm"],
      weight: ["1400 lb", "630 kg"],
      "eye-color": "Green",
      "hair-color": "Green"
    },
    work: {
      occupation: "Nuclear physicist, Agent of S.H.I.E.L.D.",
      base:
        "(Banner) Hulkbuster Base, New Mexico, (Hulk) mobile, but prefers New Mexico"
    },
    connections: {
      "group-affiliation":
        "Defenders, former leader of the new Hulkbusters, member of the Avengers, Pantheon, Titans Three, the Order, Hulkbusters of Counter-Earth-Franklin, alternate Fantastic Four",
      relatives:
        "Betty Ross Talbot Banner (wife), Brian Banner (father, apparently deceased), Rebecca Banner (mother, deceased), Morris Walters (uncle), Elaine Banner Walters (aunt, deceased), Jennifer Walters (She-Hulk, cousin), Thaddeus E. 'Thunderbolt' Ross (father"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/83.jpg"
    }
  },
  {
    response: "success",
    id: "333",
    name: "Human Torch",
    powerstats: {
      intelligence: "63",
      strength: "11",
      speed: "63",
      durability: "70",
      power: "87",
      combat: "42"
    },
    biography: {
      "full-name": "Johnny Storm",
      "alter-egos": "No alter egos found.",
      aliases: ["Matchstick Johnny", "Doug Brown"],
      "place-of-birth": "Glenville, Long Island, New York",
      "first-appearance": "Fantastic Four #1 (1961)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human / Radiation",
      height: ["5'10", "178 cm"],
      weight: ["170 lb", "77 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: { occupation: "Adventurer", base: "Pier Four, New York City" },
    connections: {
      "group-affiliation": "Fantastic Four",
      relatives:
        "Susan Richards - Invisible Woman (sister), Franklin Richards (nephew), Reed Richards - Mister Fantastic (brother-in-law) Lyja (ex-wife)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/362.jpg"
    }
  },
  {
    response: "success",
    id: "334",
    name: "Huntress",
    powerstats: {
      intelligence: "69",
      strength: "10",
      speed: "23",
      durability: "28",
      power: "34",
      combat: "95"
    },
    biography: {
      "full-name": "Helena Rosa Bertinelli",
      "alter-egos": "Batgirl III",
      aliases: ["Batgirl", "Sicilian", "Mafia Princess"],
      "place-of-birth": "-",
      "first-appearance": "Huntress #1 (April 1989)",
      publisher: "Batgirl III",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'11", "180 cm"],
      weight: ["130 lb", "59 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: {
      occupation: "Vigilante; High school English teacher",
      base: "Mobile; primarily Gotham City and Metropolis"
    },
    connections: {
      "group-affiliation":
        "Batman Family, Birds of Prey, formerly Checkmate, Justice League of America, Outsiders",
      relatives:
        "Giuseppe Bertinelli (great-grandfather; deceased), Alfredo Bertinelli (grandfather; deceased), Franco Bertinelli (father; deceased), Maria Panessa Bertinelli (mother; deceased), Santo Cassamento (biological father; deceased), Pino Bertinelli (brother; deceased), Freddy Caldone (cousin; deceased), Tomaso Panessa (uncle), Graziella Panessa (aunt), Monica Simonetta Panessa (cousin), Claudio Panessa (cousin; deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/707.jpg"
    }
  },
  {
    response: "success",
    id: "335",
    name: "Husk",
    powerstats: {
      intelligence: "63",
      strength: "63",
      speed: "35",
      durability: "78",
      power: "48",
      combat: "64"
    },
    biography: {
      "full-name": "Paige Elisabeth Guthrie",
      "alter-egos": "No alter egos found.",
      aliases: ["Hayseed"],
      "place-of-birth": "Cumberland, Kentucky",
      "first-appearance": "Rom Annual #3 (November, 1984)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Mutant",
      height: ["5'7", "170 cm"],
      weight: ["128 lb", "58 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation: "Adventurer; formerly student, activist",
      base:
        "Base of operations unknown; formerly Xavier Institute, Salem Center, Westchester County, New York"
    },
    connections: {
      "group-affiliation": "X-Men, X-Corp, Generation X",
      relatives:
        "Thomas Zebulon Guthrie (father,deceased),Lucinda Guthrie (mother),Samuel Zachery Guthrie (brother,Cannonball),Joshua 'Jay' Guthrie (brother,Icarus),Joella Guthrie (sister),Elizabeth Guthrie (sister),Melody Guthrie (sister),Jeb Guthrie (brother),Lewis Guth"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/84.jpg"
    }
  },
  {
    response: "success",
    id: "336",
    name: "Hybrid",
    powerstats: {
      intelligence: "63",
      strength: "63",
      speed: "58",
      durability: "75",
      power: "100",
      combat: "80"
    },
    biography: {
      "full-name": "Scott Washington",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Guardsman Number Six",
        "Terror of Brooklyn",
        "Riot ,Phage ",
        "Lasher",
        "Agony"
      ],
      "place-of-birth": "Bedford-Stuyvesant, Brooklyn, New York City",
      "first-appearance": "Venom Along Came A Spider #2 (as Hybrid)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Symbiote",
      height: ["5'9", "175 cm"],
      weight: ["172 lb", "77 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: {
      occupation: "-",
      base: "Bedford-Stuyvesant, Brooklyn, New York City, New York"
    },
    connections: {
      "group-affiliation": "New Warriors, Guardsmen, NYPD",
      relatives:
        'Unnamed mother, Derek Washington (brother, deceased), Hybrid ("former symbiote", defused)'
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10493.jpg"
    }
  },
  {
    response: "success",
    id: "337",
    name: "Hydro-Man",
    powerstats: {
      intelligence: "38",
      strength: "13",
      speed: "25",
      durability: "80",
      power: "66",
      combat: "50"
    },
    biography: {
      "full-name": "Morris Bench",
      "alter-egos": "No alter egos found.",
      aliases: ["Morrie"],
      "place-of-birth": "Bronx, New York",
      "first-appearance": "Amazing Spider-Man #212 (January, 1981)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'2", "188 cm"],
      weight: ["265 lb", "119 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: {
      occupation: "Professional Criminal; former crewman of cargo ship",
      base: "-"
    },
    connections: {
      "group-affiliation":
        "Member of the Masters of Evil; formerly Sinister Syndicate; Frightful Four, Sinister Six, Sinister Twelve",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1451.jpg"
    }
  },
  {
    response: "success",
    id: "338",
    name: "Hyperion",
    powerstats: {
      intelligence: "88",
      strength: "100",
      speed: "100",
      durability: "95",
      power: "87",
      combat: "80"
    },
    biography: {
      "full-name": "Mark Milton",
      "alter-egos": "No alter egos found.",
      aliases: ["Mark Milton", "Zhib-Ran", "Mr. Kant", "Marcus Milton"],
      "place-of-birth": "-",
      "first-appearance": "Avengers #85",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Eternal",
      height: ["6'0", "183 cm"],
      weight: ["460 lb", "207 kg"],
      "eye-color": "Blue",
      "hair-color": "Red"
    },
    work: {
      occupation: "Adventurer; (Formerly) Cartoonist, government agent",
      base: "-"
    },
    connections: {
      "group-affiliation":
        "Squadron Supreme, (Formerly) Star Masters, ally of Exiles",
      relatives: "Mr. and Mrs. Hamilton (foster parents)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1286.jpg"
    }
  },
  {
    response: "success",
    id: "339",
    name: "Iceman",
    powerstats: {
      intelligence: "63",
      strength: "32",
      speed: "53",
      durability: "100",
      power: "100",
      combat: "64"
    },
    biography: {
      "full-name": "Bobby Drake",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Bobby Drake",
        "Mister Friese",
        "Drake Roberts",
        "Rampage",
        "Frozen One",
        "Iceface"
      ],
      "place-of-birth": "Fort Washington, Long Island, New York",
      "first-appearance": "X-Men #1",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["5'8", "173 cm"],
      weight: ["145 lb", "65 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: {
      occupation: "Adventurer, formerly teacher, accountant, student",
      base: "-"
    },
    connections: {
      "group-affiliation":
        "X-Men (Jean Grey School member, founding member); formerly Murder Circus (brainwashed), Excelsiors (squad leader), The Twelve, X-Factor/X-Terminators (founding member), Chosen (Dualers), Secret Defenders, Defenders, Champions (founder and founding member)",
      relatives:
        "William Robert Drake (father), Madeline Beatrice Bass Drake (mother), Mary (cousin), Joel (cousin), Anne (aunt)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/816.jpg"
    }
  },
  {
    response: "success",
    id: "34",
    name: "Anti-Venom",
    powerstats: {
      intelligence: "75",
      strength: "60",
      speed: "65",
      durability: "90",
      power: "96",
      combat: "84"
    },
    biography: {
      "full-name": "Eddie Brock",
      "alter-egos": "Toxin, Venom",
      aliases: [
        "Eddie",
        "Edwin Brock",
        "Venom",
        "Lethal Protector",
        "White Venom",
        "998th"
      ],
      "place-of-birth": "San Francisco, California",
      "first-appearance": "Amazing Spider-Man #569 (as Anti-Venom)",
      publisher: "Toxin",
      alignment: "-"
    },
    appearance: {
      gender: "Male",
      race: "Symbiote",
      height: ["7'6", "229 cm"],
      weight: ["795 lb", "358 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation: "Vigilante; former journalist for the Daily Globe",
      base: "New York, New York"
    },
    connections: {
      "group-affiliation": "-",
      relatives:
        "Carl Brock (father, estranged), Janine Brock (mother, deceased), Mary Brock (sister), Ann Weying (ex-wife, deceased), Symbiotes' relatives: Toxin Symbiote (current symbiote, former grandson), Venom Symbiote (former symbiote, grandfather, former brother), Agony, Phage, Riot, Lasher (uncles, former sons), Scorn (sister, former niece), Carnage (father, former son), Scream (aunt, former daughter, deceased), Hybrid (uncle, former son, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1485.jpg"
    }
  },
  {
    response: "success",
    id: "340",
    name: "Impulse",
    powerstats: {
      intelligence: "50",
      strength: "10",
      speed: "100",
      durability: "60",
      power: "74",
      combat: "60"
    },
    biography: {
      "full-name": "Bartholomew Allen II",
      "alter-egos": "Flash IV, Kid Flash II",
      aliases: ["Flash IV", "Kid Flash II"],
      "place-of-birth": "-",
      "first-appearance": "Flash Vol 2 #92 (July, 1994)",
      publisher: "Flash IV",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'7", "170 cm"],
      weight: ["145 lb", "65 kg"],
      "eye-color": "Yellow",
      "hair-color": "Auburn"
    },
    work: {
      occupation: "Adventurer, Student",
      base:
        "San Francisco, formerly Los Angeles, Keystone City, Manchester, Alabama"
    },
    connections: {
      "group-affiliation":
        "Flash Family, Teen Titans, formerly Legion of Super-Heroes, Young Justice",
      relatives:
        "Don Allen (father), Meloni Thawne (mother), Barry Allen (grandfather), Iris West-Allen (grandmother), President Thawne (grandfather), Captain Boomerang (Owen Mercer) (half-brother), Allen Family"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/895.jpg"
    }
  },
  {
    response: "success",
    id: "341",
    name: "Indiana Jones",
    powerstats: {
      intelligence: "69",
      strength: "10",
      speed: "17",
      durability: "30",
      power: "19",
      combat: "30"
    },
    biography: {
      "full-name": "Indiana Jones",
      "alter-egos": "No alter egos found.",
      aliases: ["Indy"],
      "place-of-birth": "Princeton, New Jersey",
      "first-appearance": "Raiders of the Lost Ark (1981)",
      publisher: "George Lucas",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'0", "183 cm"],
      weight: ["176 lb", "79 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "Archaeologist", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10560.jpg"
    }
  },
  {
    response: "success",
    id: "342",
    name: "Indigo",
    powerstats: {
      intelligence: "75",
      strength: "63",
      speed: "50",
      durability: "50",
      power: "100",
      combat: "50"
    },
    biography: {
      "full-name": "Iroque",
      "alter-egos": "No alter egos found.",
      aliases: ["Indigo-1"],
      "place-of-birth": "-",
      "first-appearance": "Green Lantern Vol 4 #25 (January, 2008)",
      publisher: "DC Comics",
      alignment: "neutral"
    },
    appearance: {
      gender: "Female",
      race: "Alien",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "Purple"
    },
    work: { occupation: "Leader of the Indigo Tribe", base: "-" },
    connections: {
      "group-affiliation": "Indigo Tribe; formerly the New Guardians",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/708.jpg"
    }
  },
  {
    response: "success",
    id: "343",
    name: "Ink",
    powerstats: {
      intelligence: "38",
      strength: "28",
      speed: "17",
      durability: "40",
      power: "73",
      combat: "50"
    },
    biography: {
      "full-name": "Eric Gitter",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Young X-Men #1 (May, 2008)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["5'11", "180 cm"],
      weight: ["180 lb", "81 kg"],
      "eye-color": "Blue",
      "hair-color": "No Hair"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "Formerly X-Men, Young X-Men",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10337.jpg"
    }
  },
  {
    response: "success",
    id: "344",
    name: "Invisible Woman",
    powerstats: {
      intelligence: "88",
      strength: "10",
      speed: "27",
      durability: "85",
      power: "93",
      combat: "56"
    },
    biography: {
      "full-name": "Susan Storm Richards",
      "alter-egos": "No alter egos found.",
      aliases: ["Invisible Girl"],
      "place-of-birth": "Glenville, Long Island, New York",
      "first-appearance": "FANTASTIC FOUR #1",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human / Radiation",
      height: ["5'6", "168 cm"],
      weight: ["120 lb", "54 kg"],
      "eye-color": "blue",
      "hair-color": "Blond"
    },
    work: {
      occupation:
        "Member of the Fantastic Four, financial manager for Fantastic Four Inc, occasional model and actress",
      base: "Pier Four, New York City"
    },
    connections: {
      "group-affiliation":
        "Fantastic Four, formerly; Secret Avengers, Avengers, Brides of Set, Pawns of Death",
      relatives:
        'Reed Richards (Mister Fantastic, husband), Franklin Richards (son), Valeria Richards (daughter), Johnny Storm (Human Torch, brother), Franklin Storm (father, deceased), Mary Storm (mother, deceased), Marygay Jewel Dinkins (aunt), "Bones" (cousin), Evelyn Richards (mother-in-law, deceased), Nathaniel Richards (father-in-law), Cassandra Richards (Warlord, mother-in-law, deceased), unnamed child of Nathaniel Richards (brother-in-law), Tara Richards (Huntara, sister-in-law), Kristoff Vernard (alleged brother-in-law), Lyja (sister-in-law)'
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/620.jpg"
    }
  },
  {
    response: "success",
    id: "345",
    name: "Iron Fist",
    powerstats: {
      intelligence: "75",
      strength: "55",
      speed: "33",
      durability: "50",
      power: "95",
      combat: "100"
    },
    biography: {
      "full-name": "Danny Rand",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Daredevil",
        "Daniel Thomas Rand",
        "the Living Weapon",
        "Young Dragon",
        "Danny Rand"
      ],
      "place-of-birth": "-",
      "first-appearance": "Marvel Premiere #15 (May 1974)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'11", "180 cm"],
      weight: ["175 lb", "79 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation:
        "Adventurer; formerly co-owner of Rand-Meachum, Inc., bodyguard, private investigator, research assistant, warrior",
      base: "New York"
    },
    connections: {
      "group-affiliation":
        "New Avengers, Heroes for Hire, Inc., Secret Defenders, Defenders, Misty Knight, Luke Cage",
      relatives:
        "Wendell Rand-K'ai (father, deceased), Heather Duncan Rand (mother, deceased), Yu-Ti (adopted uncle), Miranda Rand-K'ai (half-sister), Lord Tuan (adopted paternal grandfather, deceased), Lady Ming (adopted paternal grandmother, deceased), Thomas Duncan (maternal grandfather)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1120.jpg"
    }
  },
  {
    response: "success",
    id: "346",
    name: "Iron Man",
    powerstats: {
      intelligence: "100",
      strength: "85",
      speed: "58",
      durability: "85",
      power: "100",
      combat: "64"
    },
    biography: {
      "full-name": "Tony Stark",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Iron Knight",
        "Hogan Potts",
        "Spare Parts Man",
        "Cobalt Man II",
        "Crimson Dynamo",
        "Ironman"
      ],
      "place-of-birth": "Long Island, New York",
      "first-appearance": "Tales of Suspence #39 (March, 1963)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'6", "198 cm"],
      weight: ["425 lb", "191 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: {
      occupation:
        "Inventor, Industrialist; former United States Secretary of Defense",
      base: "Seattle, Washington"
    },
    connections: {
      "group-affiliation":
        "Avengers, Illuminati, Stark Resilient; formerly S.H.I.E.L.D., leader of Stark Enterprises, the Pro-Registration Superhero Unit, New Avengers, Mighty Avengers, Hellfire Club, Force Works, Avengers West Coast, United States Department of Defense.",
      relatives:
        "Howard Anthony Stark (father, deceased), Maria Stark (mother, deceased), Morgan Stark (cousin), Isaac Stark (ancestor)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/85.jpg"
    }
  },
  {
    response: "success",
    id: "347",
    name: "Iron Monger",
    powerstats: {
      intelligence: "88",
      strength: "63",
      speed: "25",
      durability: "90",
      power: "57",
      combat: "56"
    },
    biography: {
      "full-name": "Obadiah Stane",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["4230 lb", "2 tons"],
      "eye-color": "Blue",
      "hair-color": "No Hair"
    },
    work: { occupation: "CEO Stane International", base: "-" },
    connections: {
      "group-affiliation": "Stane International",
      relatives:
        "Zebediah (father, deceased), unnamed mother (deceased), Ezekiel Stane (son)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/886.jpg"
    }
  },
  {
    response: "success",
    id: "348",
    name: "Isis",
    powerstats: {
      intelligence: "75",
      strength: "48",
      speed: "75",
      durability: "46",
      power: "50",
      combat: "56"
    },
    biography: {
      "full-name": "Adrianna Tomaz",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance":
        "(as Adrianna) 52 Week Three; (as Isis) 52 Week Twelve",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: {
      occupation: "Adventurer, formerly First Lady of Kahndaq, former slave",
      base: "Shiruta, Kahndaq"
    },
    connections: {
      "group-affiliation": "Black Marvel Family",
      relatives: "Amon Tomaz (brother, deceased), Black Adam (husband)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1164.jpg"
    }
  },
  {
    response: "success",
    id: "349",
    name: "Jack Bauer",
    powerstats: {
      intelligence: "null",
      strength: "43",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Kiefer Sutherland",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Enola, Pennsylvania",
      "first-appearance": "24: Season 1",
      publisher: "null",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1203.jpg"
    }
  },
  {
    response: "success",
    id: "35",
    name: "Apocalypse",
    powerstats: {
      intelligence: "100",
      strength: "100",
      speed: "33",
      durability: "100",
      power: "100",
      combat: "60"
    },
    biography: {
      "full-name": "En Sabah Nur",
      "alter-egos": "No alter egos found.",
      aliases: [
        "The Eternal One",
        "the High Lord",
        "Set",
        "Huitxilopochti",
        "Sauru",
        "Kali-Ma"
      ],
      "place-of-birth": "Akkaba, Egypt",
      "first-appearance": "X-Factor #5 (June, 1986)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["7'0", "213 cm"],
      weight: ["300 lb", "135 kg"],
      "eye-color": "Red",
      "hair-color": "Black"
    },
    work: {
      occupation: "Student; formerly Conqueror; Scientist",
      base: "Celestial Ship, mobile"
    },
    connections: {
      "group-affiliation":
        "Clan Akkaba, employer of Apocalypse's Horsemen, Dark Riders, former employer of the Alliance of Evil, 198",
      relatives: "Baal of the Crimson Sands (adopted father, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/852.jpg"
    }
  },
  {
    response: "success",
    id: "350",
    name: "Jack of Hearts",
    powerstats: {
      intelligence: "63",
      strength: "55",
      speed: "100",
      durability: "30",
      power: "77",
      combat: "30"
    },
    biography: {
      "full-name": "Jonathan Hart",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "New Haven, Connecticut",
      "first-appearance": "Deadly Hands of Kung Fu #22 (March, 1976)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'1", "155 cm"],
      weight: ["175 lb", "79 kg"],
      "eye-color": "Blue / White",
      "hair-color": "Brown"
    },
    work: { occupation: "Adventurer", base: "Avengers Mansion" },
    connections: {
      "group-affiliation": "Avengers, Defenders for a Day",
      relatives: "Philip (father, deceased), Marie (mother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/86.jpg"
    }
  },
  {
    response: "success",
    id: "351",
    name: "Jack-Jack",
    powerstats: {
      intelligence: "6",
      strength: "34",
      speed: "67",
      durability: "80",
      power: "100",
      combat: "6"
    },
    biography: {
      "full-name": "Jack-Jack Parr",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "The Incredibles (Movie, 2004)",
      publisher: "Dark Horse Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["2'4", "71 cm"],
      weight: ["30 lb", "14 kg"],
      "eye-color": "Blue",
      "hair-color": "Brown"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation":
        "Incredible Family (genetic member), National Supers Agency (ties), Edna Mode (receives costumes and gadgets from her), Frozone (long-time friend)",
      relatives:
        "Robert Parr(Mr Incredible, father), Helen Parr (Elastigirl, mother), Violet Parr(Violet, sister), Dashiell Parr (Dash, brother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/871.jpg"
    }
  },
  {
    response: "success",
    id: "352",
    name: "James Bond",
    powerstats: {
      intelligence: "88",
      strength: "13",
      speed: "17",
      durability: "35",
      power: "25",
      combat: "90"
    },
    biography: {
      "full-name": "James Bond",
      "alter-egos": "No alter egos found.",
      aliases: ["007", "Commander Bond"],
      "place-of-birth": "-",
      "first-appearance": "Casino Royale, 1953 novel",
      publisher: "Titan Books",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'0", "183 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "blue",
      "hair-color": "Blond"
    },
    work: { occupation: "00 Agent", base: "London" },
    connections: {
      "group-affiliation":
        "Secret Intelligence Service, MI6, C.I.A., Royal Navy",
      relatives: "Andrew Bond (father), Monique Delacroix (mother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10404.jpg"
    }
  },
  {
    response: "success",
    id: "353",
    name: "James T. Kirk",
    powerstats: {
      intelligence: "69",
      strength: "11",
      speed: "17",
      durability: "30",
      power: "30",
      combat: "75"
    },
    biography: {
      "full-name": "James T. Kirk",
      "alter-egos": "No alter egos found.",
      aliases: ["Jim", "Captain Kirk"],
      "place-of-birth": "Riverside, Iowa, Earth",
      "first-appearance": "Star Trek S01E01: The Man Trap",
      publisher: "Star Trek",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'10", "178 cm"],
      weight: ["170 lb", "77 kg"],
      "eye-color": "Hazel",
      "hair-color": "Brown"
    },
    work: { occupation: "Captain", base: "-" },
    connections: {
      "group-affiliation": "Federation, Starfleet",
      relatives:
        "Winona Kirk (mother), George Kirk (father), George Samuel Kirk (brother), Michele Suzanne Kirk (sister)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10565.jpg"
    }
  },
  {
    response: "success",
    id: "354",
    name: "Jar Jar Binks",
    powerstats: {
      intelligence: "10",
      strength: "6",
      speed: "33",
      durability: "10",
      power: "21",
      combat: "15"
    },
    biography: {
      "full-name": "Jar Jar Binks",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Naboo",
      "first-appearance": "-",
      publisher: "George Lucas",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Gungan",
      height: ["6'4", "193 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Yellow",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10563.jpg"
    }
  },
  {
    response: "success",
    id: "355",
    name: "Jason Bourne",
    powerstats: {
      intelligence: "88",
      strength: "12",
      speed: "29",
      durability: "30",
      power: "26",
      combat: "100"
    },
    biography: {
      "full-name": "Jason Bourne",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "null",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10477.jpg"
    }
  },
  {
    response: "success",
    id: "356",
    name: "Jean Grey",
    powerstats: {
      intelligence: "94",
      strength: "80",
      speed: "21",
      durability: "20",
      power: "92",
      combat: "70"
    },
    biography: {
      "full-name": "Jean Grey",
      "alter-egos": "Phoenix, White Phoenix of The Crown",
      aliases: ["Redd Dayspring", "Marvel Girl"],
      "place-of-birth": "-",
      "first-appearance": "X-Men #1 (September, 1963)",
      publisher: "Phoenix",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Mutant",
      height: ["5'6", "168 cm"],
      weight: ["115 lb", "52 kg"],
      "eye-color": "Green",
      "hair-color": "Red"
    },
    work: {
      occupation: "Adventurer",
      base: "Xavier Institute of Higher Learning, Westchester County, New York"
    },
    connections: {
      "group-affiliation":
        "Formerly X-Men (founding member); Clan Rebellion, Muir Island X-Men; X-Factor/X-Terminators (founding member); Brides of Set",
      relatives:
        "Rachel Summers (daughter from an alternate universe), X-Man (son from an alternate universe), Cyclops (ex-husband), Havok (former brother-in-law), Corsair (former father-in-law), Madelyne Pryor (clone), Cable (adoptive/biological son), Stryfe (cloned biological son), Genesis (grandson)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/814.jpg"
    }
  },
  {
    response: "success",
    id: "357",
    name: "Jean-Luc Picard",
    powerstats: {
      intelligence: "75",
      strength: "10",
      speed: "17",
      durability: "30",
      power: "26",
      combat: "65"
    },
    biography: {
      "full-name": "Jean-Luc Picard",
      "alter-egos": "No alter egos found.",
      aliases: ["Locutus"],
      "place-of-birth": "La Barre, France, Earth",
      "first-appearance": "Star Trek: The Next Generation (1987)",
      publisher: "Star Trek",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: {
      occupation: "Commanding officer USS Enterprise (NCC-1701-E)",
      base: "-"
    },
    connections: {
      "group-affiliation": "-",
      relatives:
        "Maurice Picard (father), Yvette Picard (mother), Robert Picard (brother), Shinzon (clone)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10567.jpg"
    }
  },
  {
    response: "success",
    id: "358",
    name: "Jennifer Kale",
    powerstats: {
      intelligence: "75",
      strength: "10",
      speed: "35",
      durability: "42",
      power: "74",
      combat: "72"
    },
    biography: {
      "full-name": "Jennifer Kale",
      "alter-egos": "No alter egos found.",
      aliases: ["Wendy the Good Little Witch"],
      "place-of-birth": "Citrusville, Florida",
      "first-appearance": "(Adventures into) Fear#11 (1972)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'6", "168 cm"],
      weight: ["122 lb", "55 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: { occupation: "Sorceress, student", base: "-" },
    connections: {
      "group-affiliation": "Witches, Legion of the Night",
      relatives:
        "Andrew Jackson Kale (brother, deceased), Joshua Kale (grandfather, deceased), Naomi Kale (aunt), Johnny Blaze ( Ghost Rider ), Barbara and Daniel Ketch (cousins); Illyana Kale, Noble and pastor Kale, Magdalena (ancestors)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1321.jpg"
    }
  },
  {
    response: "success",
    id: "359",
    name: "Jesse Quick",
    powerstats: {
      intelligence: "null",
      strength: "42",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Jesse Chambers",
      "alter-egos": "Liberty Belle II",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Liberty Belle II",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10544.jpg"
    }
  },
  {
    response: "success",
    id: "36",
    name: "Aquababy",
    powerstats: {
      intelligence: "10",
      strength: "16",
      speed: "12",
      durability: "14",
      power: "37",
      combat: "14"
    },
    biography: {
      "full-name": "Arthur Curry, Jr.",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Aquaman #23 (October, 1965)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: { occupation: "-", base: "Atlantis" },
    connections: {
      "group-affiliation": "Aquaman Family",
      relatives:
        "Aquaman (Orin/Arthur Curry) (father); Mera (mother); Koryak (half-brother); A.J. (half-brother); Atlan (grandfather); Tom Curry (adoptive grandfather, deceased); Orm Marius (uncle); Kordax (ancestor, deceased); Arthur Joseph Curry (adoptive cousin)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1389.jpg"
    }
  },
  {
    response: "success",
    id: "360",
    name: "Jessica Cruz",
    powerstats: {
      intelligence: "56",
      strength: "90",
      speed: "46",
      durability: "50",
      power: "100",
      combat: "55"
    },
    biography: {
      "full-name": "Jessica Cruz",
      "alter-egos": "No alter egos found.",
      aliases: ["Green Lantern", "Power Ring"],
      "place-of-birth": "-",
      "first-appearance": "Green Lantern Vol 5 #20 (July, 2013)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Green",
      "hair-color": "Brown"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "Sara Cruz (sister)" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10650.jpg"
    }
  },
  {
    response: "success",
    id: "361",
    name: "Jessica Jones",
    powerstats: {
      intelligence: "56",
      strength: "44",
      speed: "50",
      durability: "70",
      power: "18",
      combat: "55"
    },
    biography: {
      "full-name": "Jessica Campbell Jones Cage",
      "alter-egos": "Power Woman",
      aliases: ["Knightress", "Madeline", "Jewel", "Power Woman"],
      "place-of-birth": "Forrest Hills, New York City",
      "first-appearance": "Amazing Spider-Man #4 (September, 1963)",
      publisher: "Power Woman",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["5'7", "170 cm"],
      weight: ["124 lb", "56 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: {
      occupation:
        'Special Consultant to "The Pulse", a Daily Bugle supplement; formerly private investigator, adventurer, short-time vigilante',
      base: "-"
    },
    connections: {
      "group-affiliation":
        "Formerly New Avengers, Daily Bugle, Alias Investigations",
      relatives:
        "unnamed mother (deceased); Dave Cambell (father, deceased); Phillip Cambell (brother, deceased); unnamed adoptive mother; unnamed adoptive father; unnamed adoptive sister; Jenny (adoptive aunt); Luke Cage (husband); Danielle Cage (daughter);"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10403.jpg"
    }
  },
  {
    response: "success",
    id: "362",
    name: "Jessica Sanders",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "NBC - Heroes",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1029.jpg"
    }
  },
  {
    response: "success",
    id: "363",
    name: "Jigsaw",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Billy Russo",
      "alter-egos": "No alter egos found.",
      aliases: ["Billy the Beaut", "Jigsaw Punisher"],
      "place-of-birth": "-",
      "first-appearance": "Amazing Spider-Man #162 (Nov. 1976)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'2", "188 cm"],
      weight: ["250 lb", "113 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: { occupation: "Professional mobster", base: "Manhattan, New York" },
    connections: {
      "group-affiliation": "The Maggia crime family, The Costa crime family",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/887.jpg"
    }
  },
  {
    response: "success",
    id: "364",
    name: "Jim Powell",
    powerstats: {
      intelligence: "38",
      strength: "38",
      speed: "23",
      durability: "80",
      power: "23",
      combat: "20"
    },
    biography: {
      "full-name": "Jim Powell",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "No Ordinary Family S01E01 (2010)",
      publisher: "ABC Studios",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "Police Sketch Artist", base: "-" },
    connections: {
      "group-affiliation": "-",
      relatives:
        "Stephanie Powell (wife), Daphne Powell (duaghter) and JJ Powell (son)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1354.jpg"
    }
  },
  {
    response: "success",
    id: "365",
    name: "JJ Powell",
    powerstats: {
      intelligence: "88",
      strength: "10",
      speed: "8",
      durability: "10",
      power: "14",
      combat: "10"
    },
    biography: {
      "full-name": "JJ Powell",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "No Ordinary Family S01E01 (2010)",
      publisher: "ABC Studios",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "Student", base: "-" },
    connections: {
      "group-affiliation": "-",
      relatives:
        "Jim Powell and Stephanie Powell (parents), Daphne Powell (sister)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1357.jpg"
    }
  },
  {
    response: "success",
    id: "366",
    name: "Johann Krauss",
    powerstats: {
      intelligence: "null",
      strength: "30",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Johann Krauss",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "B.P.R.D. - Hollow Earth and Other Stories (2003)",
      publisher: "Dark Horse Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "Bureau for Paranormal Research and Defense",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1121.jpg"
    }
  },
  {
    response: "success",
    id: "367",
    name: "John Constantine",
    powerstats: {
      intelligence: "63",
      strength: "10",
      speed: "8",
      durability: "40",
      power: "54",
      combat: "65"
    },
    biography: {
      "full-name": "John Constantine",
      "alter-egos": "No alter egos found.",
      aliases: ["Hellblazer"],
      "place-of-birth": "-",
      "first-appearance": "Swamp Thing Vol 2 #37 (June, 1985)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'0", "183 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "Justice League Dark, Justice League",
      relatives:
        "Thomas Constantine (father, deceased), Cheryl Constantine (sister, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/718.jpg"
    }
  },
  {
    response: "success",
    id: "369",
    name: "John Wraith",
    powerstats: {
      intelligence: "75",
      strength: "12",
      speed: "35",
      durability: "28",
      power: "87",
      combat: "80"
    },
    biography: {
      "full-name": "John Wraith",
      "alter-egos": "No alter egos found.",
      aliases: ["Wraith-Man", "Kestrel", "Expediter", "Guardian", "Vindicator"],
      "place-of-birth": "-",
      "first-appearance": "Wolverine Vol 2 #60 (September, 1992)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'0", "183 cm"],
      weight: ["195 lb", "88 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: {
      occupation: "Former Spy, Government Operative, Mercenary, Soldier",
      base: "-"
    },
    connections: {
      "group-affiliation": "Weapon X Program, Team X, C.I.A.",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1314.jpg"
    }
  },
  {
    response: "success",
    id: "37",
    name: "Aqualad",
    powerstats: {
      intelligence: "63",
      strength: "44",
      speed: "42",
      durability: "75",
      power: "89",
      combat: "60"
    },
    biography: {
      "full-name": "Garth",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Poseidonis, Atlantis",
      "first-appearance": "Adventure Comics #269 (February, 1960)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Atlantean",
      height: ["5'10", "178 cm"],
      weight: ["235 lb", "106 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: {
      occupation: "Adventurer; Magician, former Sidekick",
      base: "Atlantis"
    },
    connections: {
      "group-affiliation":
        "Aquaman Family; formerly Black Lantern Corps, Sentinels of Magic, Teen Titans",
      relatives:
        "Cerdian (son), Dolphin (wife), Berra (mother), Thar (father), Slizzath (uncle) Donna (grand-daughter)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1395.jpg"
    }
  },
  {
    response: "success",
    id: "370",
    name: "Joker",
    powerstats: {
      intelligence: "100",
      strength: "10",
      speed: "12",
      durability: "60",
      power: "43",
      combat: "70"
    },
    biography: {
      "full-name": "Jack Napier",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Red Hood I",
        "Clown Prince of Crime",
        "Harlequin of Hate",
        "Jack Napier",
        "Joe Kerr",
        "Mr. J"
      ],
      "place-of-birth": "-",
      "first-appearance": "Batman #1 (Spring 1940)",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'5", "196 cm"],
      weight: ["192 lb", "86 kg"],
      "eye-color": "Green",
      "hair-color": "Green"
    },
    work: { occupation: "-", base: "Arkham Asylum, Gotham City; Ha-Hacienda" },
    connections: {
      "group-affiliation":
        "Black Glove, Injustice Gang, Injustice League, Joker League of Anarchy",
      relatives:
        "Jeannie (wife, deceased); Unborn son (deceased); Melvin Reipan (cousin, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/719.jpg"
    }
  },
  {
    response: "success",
    id: "371",
    name: "Jolt",
    powerstats: {
      intelligence: "63",
      strength: "12",
      speed: "27",
      durability: "32",
      power: "31",
      combat: "42"
    },
    biography: {
      "full-name": "Helen Takahama",
      "alter-egos": "No alter egos found.",
      aliases: ["Holly Tsuruta", "Hallie Shimosato"],
      "place-of-birth": "Ojai, California",
      "first-appearance": "Thunderbolts #1 (1997)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'5", "165 cm"],
      weight: ["109 lb", "49 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: { occupation: "Adventurer", base: "-" },
    connections: {
      "group-affiliation": "Young Allies; formerly Redeemers, Thunderbolts",
      relatives: "Robert (father, deceased), Jane (mother, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1323.jpg"
    }
  },
  {
    response: "success",
    id: "372",
    name: "Jubilee",
    powerstats: {
      intelligence: "56",
      strength: "8",
      speed: "22",
      durability: "20",
      power: "66",
      combat: "90"
    },
    biography: {
      "full-name": "Jubilation Lee",
      "alter-egos": "No alter egos found.",
      aliases: ["Jubes"],
      "place-of-birth": "Beverly Hills, California",
      "first-appearance": "Uncanny X-Men #244 (May, 1989)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Mutant",
      height: ["5'5", "165 cm"],
      weight: ["115 lb", "52 kg"],
      "eye-color": "Red",
      "hair-color": "Black"
    },
    work: {
      occupation: "Student, Adventurer",
      base: "Xavier Institute, Salem Center, Westchester County, New York"
    },
    connections: {
      "group-affiliation": "Currently Generation X, formerly X-Men",
      relatives: "Dr. and Mrs. Lee (parents, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/87.jpg"
    }
  },
  {
    response: "success",
    id: "373",
    name: "Judge Dredd",
    powerstats: {
      intelligence: "75",
      strength: "18",
      speed: "38",
      durability: "50",
      power: "52",
      combat: "95"
    },
    biography: {
      "full-name": "Joseph Dredd",
      "alter-egos": "No alter egos found.",
      aliases: ["The Dead Man", "Joe"],
      "place-of-birth": "Mega City One",
      "first-appearance": "2000 AD no. 2 (5 March 1977)",
      publisher: "Rebellion",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'2", "188 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "Mega-City Judge", base: "Mega City One" },
    connections: {
      "group-affiliation": "-",
      relatives: "Rico Dredd (brother), Judge Kraken (clone), Vienna (niece),"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1163.jpg"
    }
  },
  {
    response: "success",
    id: "374",
    name: "Juggernaut",
    powerstats: {
      intelligence: "44",
      strength: "100",
      speed: "42",
      durability: "100",
      power: "85",
      combat: "70"
    },
    biography: {
      "full-name": "Cain Marko",
      "alter-egos": "No alter egos found.",
      aliases: ["Kuurth", "Captain Universe"],
      "place-of-birth": "Berkeley, California",
      "first-appearance": "X-Men #12 (July, 1965)",
      publisher: "Marvel Comics",
      alignment: "neutral"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["9'5", "287 cm"],
      weight: ["1900 lb", "855 kg"],
      "eye-color": "Blue",
      "hair-color": "Red"
    },
    work: {
      occupation:
        "Adventurer formerly Professional criminal, mercenary, soldier",
      base: "-"
    },
    connections: {
      "group-affiliation":
        "Formerly Worthy, Thunderbolts, X-Men, Excalibur, Black Tom Cassidy (partner), Exemplars, Brotherhood of Evil Mutants, New World Order, Exiles, U.S. Army",
      relatives:
        "Kurt Marko (father, deceased), Marjorie Marko (mother, deceased), Sharon Xavier (step-mother, deceased), Charles Xavier (Professor X, step-brother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/826.jpg"
    }
  },
  {
    response: "success",
    id: "375",
    name: "Junkpile",
    powerstats: {
      intelligence: "50",
      strength: "38",
      speed: "17",
      durability: "90",
      power: "81",
      combat: "30"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "X-Men 2099 #1 (October, 1993)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "Mercenary; Former member of S.H.I.E.L.D.", base: "-" },
    connections: {
      "group-affiliation":
        "Former member of X-Men, former member of S.H.I.E.L.D.",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10002.jpg"
    }
  },
  {
    response: "success",
    id: "376",
    name: "Justice",
    powerstats: {
      intelligence: "50",
      strength: "10",
      speed: "33",
      durability: "70",
      power: "55",
      combat: "30"
    },
    biography: {
      "full-name": "Vance Astrovik",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Marvel Boy",
        "Manglin' John Mahoney",
        "Astounding Astrovik",
        "Superhuman Penitentiary Prisoner 344678",
        '"Super Tights"'
      ],
      "place-of-birth": "-",
      "first-appearance": "Giant-Size Defenders #5 (July, 1975)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'10", "178 cm"],
      weight: ["180 lb", "81 kg"],
      "eye-color": "Hazel",
      "hair-color": "Brown"
    },
    work: {
      occupation: "Adventurer",
      base:
        "Mobile, formerly New Warriors and Avengers Headquarters, Camp Hammond"
    },
    connections: {
      "group-affiliation":
        "New Warriors; formerly Avengers Academy, Initiative, partner of Firestar, Avengers, Triune Understanding, Unlimited Class Wrestling Federation, Taskmaster's Circus, Secret Avengers (Civil War)",
      relatives:
        "Jerzy Astroyevicht (aka Jerry Astrovik; paternal grandfather); Katerina Astroyevicht (aka Katerina Astrovik; paternal grandmother); Arnold Astrovik (father, deceased); Norma Astrovik (mother);"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/88.jpg"
    }
  },
  {
    response: "success",
    id: "377",
    name: "Jyn Erso",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Jyn Erso",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Star Wars : Rogue One (2016)",
      publisher: "George Lucas",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Green",
      "hair-color": "Brown"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10562.jpg"
    }
  },
  {
    response: "success",
    id: "378",
    name: "K-2SO",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["Kaytoo Esso", "Kay-Tuesso"],
      "place-of-birth": "Galactic Empire",
      "first-appearance": "Rogue One: A Star Wars Story (2016)",
      publisher: "George Lucas",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Android",
      height: ["7'0", "213 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "White",
      "hair-color": "No Hair"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10643.jpg"
    }
  },
  {
    response: "success",
    id: "379",
    name: "Kang",
    powerstats: {
      intelligence: "100",
      strength: "48",
      speed: "58",
      durability: "70",
      power: "100",
      combat: "70"
    },
    biography: {
      "full-name": "Nathaniel Richards",
      "alter-egos": "Iron Lad",
      aliases: [
        "Blue Man",
        "Victor Timely",
        "Blue Totem",
        "Scarlet Centurion",
        "Rama-Tut",
        "King of Kings",
        "Master of Men",
        "Lord of the Seven Suns"
      ],
      "place-of-birth": "Other Earth, 31st century",
      "first-appearance":
        "(As Rama-Tut) Fantastic Four #19 (1963); (as Kang) Avengers #8 (1964)",
      publisher: "Iron Lad",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'3", "191 cm"],
      weight: ["230 lb", "104 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "Formerly the Council of Kangs, Cross-Time Kangs",
      relatives:
        "Cassandra Richards, their unnamed son, and matriarch of the Eyriennes; Tara Richards, Reed Richards ( Mister Fantastic ), Franklin Richards, Valeria Richards (all ancestors); various Eyriennes (common ancestry); Victor Von Doom (Doctor Doom, alleged ancestor); Ramades (son), Marcus Kang I-XXIII (sons, deceased); Immortus, Iron Lad, and numerous other alternate dimensional counterparts and their offspring"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1053.jpg"
    }
  },
  {
    response: "success",
    id: "38",
    name: "Aquaman",
    powerstats: {
      intelligence: "81",
      strength: "85",
      speed: "79",
      durability: "80",
      power: "100",
      combat: "80"
    },
    biography: {
      "full-name": "Orin",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Dweller in the Depths",
        "Swimmer",
        "Waterbearer",
        "Mental Man",
        "Aquaboy",
        "Water Wraith"
      ],
      "place-of-birth": "Atlantis",
      "first-appearance": "More Fun Comics #73 (November, 1941)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Atlantean",
      height: ["6'1", "185 cm"],
      weight: ["325 lb", "146 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation: "Protector of the Seas and Oceans, King of Poseidonis",
      base: "Atlantean Royal Palace; Poseidonis, Atlantis"
    },
    connections: {
      "group-affiliation":
        "Justice League, Aquaman Family, Atlantean Royal Family; formerly Black Lantern Corps, Justice League International, Justice League Detroit, U.N.",
      relatives:
        "Koryak (son), Arthur Curry, Jr. (son), A.J. (son), Orm Marius (half-brother), Debbie Perkins (half-sister), Drin (adopted brother), Atlanna (mother), Atlan (father), Atlena (aunt), Porm (adopted mother), Tom Curry (adopted father), Mera (wife), Hila (sister-in-law), Haumond (uncle), Kraken (uncle), Honsu (grandfather), Lorelei (grandmother), Manu (ancestor), Nala (ancestor), Fatima (ancestor), Kalunga (ancestor), Gana (ancestor), Fiona (ancestor), Regin (ancestor), Kordax (ancestor), Bazil (ancestor), Cora (ancestor), Illya (ancestor), Dardanus (ancestor), Alloroc (ancestor), Cole (ancestor), Narmea (ancestor), Orin (ancestor), Loma (ancestor), Shalako (ancestor), Thorvall (ancestor)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/634.jpg"
    }
  },
  {
    response: "success",
    id: "380",
    name: "Kathryn Janeway",
    powerstats: {
      intelligence: "75",
      strength: "8",
      speed: "21",
      durability: "25",
      power: "21",
      combat: "50"
    },
    biography: {
      "full-name": "Kathryn Janeway",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Bloomington, Indiana, Earth",
      "first-appearance": "-",
      publisher: "Star Trek",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "Fleet Commander", base: "-" },
    connections: {
      "group-affiliation": "-",
      relatives: "Edward Janeway (father), Gretchen Janeway (mother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10581.jpg"
    }
  },
  {
    response: "success",
    id: "381",
    name: "Katniss Everdeen",
    powerstats: {
      intelligence: "56",
      strength: "8",
      speed: "21",
      durability: "25",
      power: "24",
      combat: "55"
    },
    biography: {
      "full-name": "Katniss Everdeen",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10484.jpg"
    }
  },
  {
    response: "success",
    id: "382",
    name: "Kevin 11",
    powerstats: {
      intelligence: "25",
      strength: "7",
      speed: "12",
      durability: "14",
      power: "100",
      combat: "40"
    },
    biography: {
      "full-name": "Kevin Ethan Levin",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Kevin 11,000",
        "Curtis",
        "Osmosian",
        "Kev",
        "Kevin Ethan",
        "Levin",
        "Ultimate Kevin",
        "Doofus",
        "An Empty Shell",
        "Kevin E. Levin"
      ],
      "place-of-birth": "-",
      "first-appearance": "Ben 10 S01",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "-",
      relatives:
        "Mrs. Levin (mother), Devlin Levin (alternate future son), Ben Tennyson (Ben 10, best friend), Harvey Hackett (Stepfather), Gwen Tennyson(girlfriend)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1408.jpg"
    }
  },
  {
    response: "success",
    id: "383",
    name: "Kick-Ass",
    powerstats: {
      intelligence: "38",
      strength: "10",
      speed: "23",
      durability: "35",
      power: "22",
      combat: "56"
    },
    biography: {
      "full-name": "Dave Lizewski",
      "alter-egos": "No alter egos found.",
      aliases: ["Kickass"],
      "place-of-birth": "New York City",
      "first-appearance": "Kick Ass #1",
      publisher: "Icon Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: { occupation: "Student", base: "-" },
    connections: {
      "group-affiliation": "-",
      relatives: "Mother (unnamed, deceased), Father (unnamed)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1158.jpg"
    }
  },
  {
    response: "success",
    id: "384",
    name: "Kid Flash",
    powerstats: {
      intelligence: "25",
      strength: "4",
      speed: "92",
      durability: "42",
      power: "20",
      combat: "30"
    },
    biography: {
      "full-name": "Wallace Rudolph West",
      "alter-egos": "No alter egos found.",
      aliases: ["Kid Lantern"],
      "place-of-birth": "Blue Valley, Nebraska",
      "first-appearance": "Flash #110 (January, 1960)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Green",
      "hair-color": "Red"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "Flash Family, Teen Titans, New Teen Titans",
      relatives:
        "Rudolph and Mary West (parents), Ira West (grandfather), Iris Allen (aunt), Barry Allen (uncle), Linda Park West (wife), Jai and Iris West (twin children)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/722.jpg"
    }
  },
  {
    response: "success",
    id: "385",
    name: "Kid Flash II",
    powerstats: {
      intelligence: "null",
      strength: "47",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Bartholomew Allen II",
      "alter-egos": "Flash IV, Impulse",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Flash IV",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/894.jpg"
    }
  },
  {
    response: "success",
    id: "386",
    name: "Killer Croc",
    powerstats: {
      intelligence: "19",
      strength: "53",
      speed: "35",
      durability: "90",
      power: "53",
      combat: "60"
    },
    biography: {
      "full-name": "Waylon Jones",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Batman #357 (March, 1983)",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Metahuman",
      height: ["8'0", "244 cm"],
      weight: ["790 lb", "356 kg"],
      "eye-color": "Red",
      "hair-color": "No Hair"
    },
    work: { occupation: "-", base: "Gotham City" },
    connections: {
      "group-affiliation": "Secret Society of Super-Villains",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/723.jpg"
    }
  },
  {
    response: "success",
    id: "387",
    name: "Killer Frost",
    powerstats: {
      intelligence: "88",
      strength: "10",
      speed: "13",
      durability: "35",
      power: "59",
      combat: "30"
    },
    biography: {
      "full-name": "Caitlin Snow",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Fury of Firestorm: The Nuclear Men #19",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: { occupation: "Scientist", base: "Pittsburgh" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10508.jpg"
    }
  },
  {
    response: "success",
    id: "388",
    name: "Kilowog",
    powerstats: {
      intelligence: "81",
      strength: "90",
      speed: "53",
      durability: "42",
      power: "100",
      combat: "80"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Kilo Wog",
        "Green Lantern 674.1",
        "Dark Lantern",
        "The Green Lantern drill sergeant",
        '"Poozer"',
        "Lantern"
      ],
      "place-of-birth": "Bolovax Vik",
      "first-appearance": "Green Lantern Corps #201 (June, 1986)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Bolovaxian",
      height: ["7'8", "234 cm"],
      weight: ["720 lb", "324 kg"],
      "eye-color": "Red",
      "hair-color": "No Hair"
    },
    work: { occupation: "-", base: "Oa, formerly Earth, Bolovax Vik" },
    connections: {
      "group-affiliation":
        "Green Lantern Corps; formerly New Guardians, Justice League International",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1428.jpg"
    }
  },
  {
    response: "success",
    id: "389",
    name: "King Kong",
    powerstats: {
      intelligence: "56",
      strength: "100",
      speed: "71",
      durability: "75",
      power: "47",
      combat: "75"
    },
    biography: {
      "full-name": "King Kong",
      "alter-egos": "No alter egos found.",
      aliases: ["the 8th Wonder of the World", "King of Skull Island"],
      "place-of-birth": "Skull Island",
      "first-appearance": "King Kong (1933)",
      publisher: "",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Animal",
      height: ["100'0", "30.5 meters"],
      weight: ["20000000 lb", "9,000 tons"],
      "eye-color": "Yellow",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "Skull Island" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10591.jpg"
    }
  },
  {
    response: "success",
    id: "39",
    name: "Arachne",
    powerstats: {
      intelligence: "50",
      strength: "48",
      speed: "50",
      durability: "70",
      power: "71",
      combat: "70"
    },
    biography: {
      "full-name": "Julia Carpenter",
      "alter-egos": "No alter egos found.",
      aliases: ["Spider-Woman", "Madame Web"],
      "place-of-birth": "Los Angeles, California",
      "first-appearance": "Marvel Super Heroes Secret Wars #6",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["5'9", "175 cm"],
      weight: ["140 lb", "63 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation: "Adventurer, fugitive, former government agent",
      base:
        "Mobile; formerly Denver, Colorado; formerly Avengers Compound, Los Angeles, California"
    },
    connections: {
      "group-affiliation":
        "Omega Flight, formerly Commission on Superhuman Activities , Freedom Force , Avengers , Secret Defenders , Force Works , Queen?s Vengeance , West Coast Avengers, Secret Avengers (Civil War)",
      relatives:
        "Rachel Carpenter (daughter), Walter Cornwall (father), Elizabeth Cornwall (mother), Larry Carpenter (ex-husband, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/882.jpg"
    }
  },
  {
    response: "success",
    id: "390",
    name: "King Shark",
    powerstats: {
      intelligence: "50",
      strength: "88",
      speed: "50",
      durability: "90",
      power: "86",
      combat: "40"
    },
    biography: {
      "full-name": "Nanaue",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Superboy Vol 4 #0",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Animal",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Black",
      "hair-color": "No Hair"
    },
    work: { occupation: "Professional Criminal", base: "Honolulu, Hawaii" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10512.jpg"
    }
  },
  {
    response: "success",
    id: "391",
    name: "Kingpin",
    powerstats: {
      intelligence: "75",
      strength: "18",
      speed: "25",
      durability: "40",
      power: "13",
      combat: "70"
    },
    biography: {
      "full-name": "Wilson Grant Fisk",
      "alter-egos": "No alter egos found.",
      aliases: ["The Brain Washer", "Harold Howard", "Wilbur"],
      "place-of-birth": "New York City area",
      "first-appearance": "Amazing Spider-Man #50 (July, 1967)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'7", "201 cm"],
      weight: ["450 lb", "203 kg"],
      "eye-color": "Blue",
      "hair-color": "No Hair"
    },
    work: {
      occupation:
        "Criminal organizer and mastermind, president and owner of legitimate businesses",
      base:
        "A penthouse in New York City; formerly Fisk Tower in New York City, a mansion in Westchester County, Las Vegas."
    },
    connections: {
      "group-affiliation":
        "Leader of The Hand, leader of a coalition of East Coast non-Maggia criminal organizations; former director of Las Vegas HYDRA faction.",
      relatives:
        "Anatoly Fyskov (ancestor); Vanessa Fisk (wife, deceased); Rose (Richard Fisk) (son, deceased);"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/623.jpg"
    }
  },
  {
    response: "success",
    id: "392",
    name: "Klaw",
    powerstats: {
      intelligence: "63",
      strength: "38",
      speed: "33",
      durability: "100",
      power: "62",
      combat: "60"
    },
    biography: {
      "full-name": "Ulysses Klaw",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Vlaardingen, Netherlands",
      "first-appearance": "Fantastic Four #53 (August, 1966)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'2", "188 cm"],
      weight: ["216 lb", "97 kg"],
      "eye-color": "Red",
      "hair-color": "No Hair"
    },
    work: { occupation: "Criminal, former Scientist", base: "-" },
    connections: {
      "group-affiliation":
        "Former member of the Masters of Evil, Fearsome Foursome, and Frightful Four; Former ally of Solarr, Molecule Man, and Doctor Doom",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1539.jpg"
    }
  },
  {
    response: "success",
    id: "393",
    name: "Kool-Aid Man",
    powerstats: {
      intelligence: "25",
      strength: "18",
      speed: "8",
      durability: "10",
      power: "9",
      combat: "14"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["Pitcher Man"],
      "place-of-birth": "-",
      "first-appearance": "As Pitcher-Man in 1954",
      publisher: "null",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Black",
      "hair-color": "No Hair"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1343.jpg"
    }
  },
  {
    response: "success",
    id: "394",
    name: "Kraven II",
    powerstats: {
      intelligence: "50",
      strength: "34",
      speed: "23",
      durability: "28",
      power: "43",
      combat: "85"
    },
    biography: {
      "full-name": "Alyosha Kravinoff",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Spectacular Spider-Man #243 (1997)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'3", "191 cm"],
      weight: ["220 lb", "99 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "Formerly the Sinister Six",
      relatives:
        "Sergei Kravinoff (Kraven the Hunter, father, deceased), unidentified mother, Vladimir Kravinoff (Grim Hunter, half-brother, deceased), Nedrocci Tannengarden (half-brother, deceased), Dmitri Smerdyakov"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1034.jpg"
    }
  },
  {
    response: "success",
    id: "395",
    name: "Kraven the Hunter",
    powerstats: {
      intelligence: "63",
      strength: "32",
      speed: "35",
      durability: "42",
      power: "25",
      combat: "85"
    },
    biography: {
      "full-name": "Sergei Kravinoff",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Kraven the Hunter",
        "World's Greatest Hunter",
        "the Grim Hunter"
      ],
      "place-of-birth": "Volgograd (formerly Stalingrad), Russia",
      "first-appearance": "The Amazing Spider-Man #15 (1964)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'0", "183 cm"],
      weight: ["235 lb", "106 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: { occupation: "Professional game hunter, mercenary", base: "-" },
    connections: {
      "group-affiliation": "(formerly) The Sinister Six",
      relatives:
        'Nikolai & Anna Makarova Kravinoff (parents, deceased), Dmitri Smerdyakov (Chameleon, half-brother), Vladimir Kravinoff (Grim Hunter, son, deceased), Aloysha "Al" Kravinoff (Kraven II, son), Ned Tannengarden (son, deceased)'
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1033.jpg"
    }
  },
  {
    response: "success",
    id: "396",
    name: "Krypto",
    powerstats: {
      intelligence: "9",
      strength: "80",
      speed: "100",
      durability: "90",
      power: "82",
      combat: "40"
    },
    biography: {
      "full-name": "Krypto the Superdog",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Adventure Comics #210 (March, 1955)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Kryptonian",
      height: ["0'25", "64 cm"],
      weight: ["40 lb", "18 kg"],
      "eye-color": "Blue",
      "hair-color": "White"
    },
    work: { occupation: "-", base: "Smallville, Kansas" },
    connections: { "group-affiliation": "Superman", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/725.jpg"
    }
  },
  {
    response: "success",
    id: "397",
    name: "Kyle Rayner",
    powerstats: {
      intelligence: "69",
      strength: "90",
      speed: "50",
      durability: "60",
      power: "100",
      combat: "60"
    },
    biography: {
      "full-name": "Kyle Rayner",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Ion",
        "Kyle Vasquez",
        "Parallax",
        "Torch Bearer",
        "Honor Guard",
        "The Last Green Lantern"
      ],
      "place-of-birth": "North Hollywood, Los Angeles, California",
      "first-appearance": "Green Lantern Vol 3 #48",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'11", "180 cm"],
      weight: ["175 lb", "79 kg"],
      "eye-color": "Green",
      "hair-color": "Black"
    },
    work: {
      occupation: "Green Lantern, Adventurer, Artist",
      base: "Oa,formerly New York City, Los Angeles"
    },
    connections: {
      "group-affiliation":
        "Green Lantern Corps, New Guardians, formerly Challengers From Beyond, Sinestro Corps, Justice League of America, Blue Lantern Corps, Titans",
      relatives:
        'Aaron Rayner (father), Maura Rayner (mother, deceased), Zachary Rayner (uncle, deceased), Roderick "Snowy" Rayner (grandfather, deceased), unnamed maternal great-grandfather (deceased), Kathleen (aunt), Cary Wren (descendant)'
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1409.jpg"
    }
  },
  {
    response: "success",
    id: "398",
    name: "Kylo Ren",
    powerstats: {
      intelligence: "56",
      strength: "44",
      speed: "33",
      durability: "30",
      power: "100",
      combat: "70"
    },
    biography: {
      "full-name": "Ben Solo",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Star Wars: Episode VII - The Force Awakens (2015)",
      publisher: "George Lucas",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "-",
      relatives:
        "Han Solo (Father), Princess Leia (Mother), Luke Skywalker (Uncle)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10559.jpg"
    }
  },
  {
    response: "success",
    id: "399",
    name: "Lady Bullseye",
    powerstats: {
      intelligence: "null",
      strength: "63",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1170.jpg"
    }
  },
  {
    response: "success",
    id: "4",
    name: "Abomination",
    powerstats: {
      intelligence: "63",
      strength: "80",
      speed: "53",
      durability: "90",
      power: "62",
      combat: "95"
    },
    biography: {
      "full-name": "Emil Blonsky",
      "alter-egos": "No alter egos found.",
      aliases: ["Agent R-7", "Ravager of Worlds"],
      "place-of-birth": "Zagreb, Yugoslavia",
      "first-appearance": "Tales to Astonish #90",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human / Radiation",
      height: ["6'8", "203 cm"],
      weight: ["980 lb", "441 kg"],
      "eye-color": "Green",
      "hair-color": "No Hair"
    },
    work: { occupation: "Ex-Spy", base: "Mobile" },
    connections: {
      "group-affiliation":
        "former member of the crew of the Andromeda Starship, ally of the Abominations and Forgotten",
      relatives: "Nadia Dornova Blonsky (wife, separated)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1.jpg"
    }
  },
  {
    response: "success",
    id: "40",
    name: "Archangel",
    powerstats: {
      intelligence: "63",
      strength: "13",
      speed: "58",
      durability: "64",
      power: "35",
      combat: "42"
    },
    biography: {
      "full-name": "Warren Kenneth Worthington III",
      "alter-egos": "Angel",
      aliases: ["War", "Dark Angel", "Death", "Avenging Angel"],
      "place-of-birth": "Centerport, Long Island, New York",
      "first-appearance": "X-Men #1 (September, 1963)",
      publisher: "Angel",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["6'0", "183 cm"],
      weight: ["150 lb", "68 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation:
        "Adventurer, Chairman & principal stockholder of Worthington Industries, Multi-Millionaire, Heir, former terrorist",
      base: "-"
    },
    connections: {
      "group-affiliation":
        "X-Men (founding member); X-Force; Mutantes Sans Fronti?res; Hellfire Club; formerly X-Club (founding member); Death's champions; Secret Defenders; X-Factor/X-Terminators (founding member); Horsemen of Apocalypse; Defenders; Champions of Los Angeles (fou",
      relatives:
        "Wallace Worthington (paternal ancestor, deceased), Warren Worthington Sr. (paternal grandfather, deceased), Warren Worthington Jr. (father, deceased), Kathryn Worthington (mother, deceased), Burt Worthington (paternal uncle), Mimi (maternal aunt), unnamed distant cousin"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/838.jpg"
    }
  },
  {
    response: "success",
    id: "400",
    name: "Lady Deathstrike",
    powerstats: {
      intelligence: "63",
      strength: "28",
      speed: "42",
      durability: "85",
      power: "48",
      combat: "90"
    },
    biography: {
      "full-name": "Yuriko Oyama",
      "alter-egos": "No alter egos found.",
      aliases: ["Ana Cortes"],
      "place-of-birth": "Osaka, Japan",
      "first-appearance": "Alpha Flight Vol. 1 #33 (1985)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Female",
      race: "Cyborg",
      height: ["5'9", "175 cm"],
      weight: ["128 lb", "58 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation":
        "Ally of Reverend William Stryker, former employee of Sabretooth, formerly Reavers",
      relatives:
        "Kenji Oyama (Lord Dark Wind, father, deceased), two unnamed brothers (deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/810.jpg"
    }
  },
  {
    response: "success",
    id: "401",
    name: "Leader",
    powerstats: {
      intelligence: "100",
      strength: "10",
      speed: "12",
      durability: "14",
      power: "59",
      combat: "42"
    },
    biography: {
      "full-name": "Samuel Sterns",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Boise, Idaho",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["5'10", "178 cm"],
      weight: ["140 lb", "63 kg"],
      "eye-color": "Green",
      "hair-color": "No Hair"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "Leader of Freehold", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/885.jpg"
    }
  },
  {
    response: "success",
    id: "402",
    name: "Leech",
    powerstats: {
      intelligence: "25",
      strength: "5",
      speed: "12",
      durability: "14",
      power: "62",
      combat: "14"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Uncanny X-Men #179",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "Survivor, former student", base: "-" },
    connections: {
      "group-affiliation":
        "198; formerly Generation X, Daydreamers, Morlocks, X-Factor (trainee)",
      relatives: "Annalee (foster mother, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/834.jpg"
    }
  },
  {
    response: "success",
    id: "403",
    name: "Legion",
    powerstats: {
      intelligence: "50",
      strength: "100",
      speed: "42",
      durability: "30",
      power: "100",
      combat: "75"
    },
    biography: {
      "full-name": "David Haller",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Jack Wayne",
        "Cyndi",
        "Jemail Karami",
        "Daniel Lucas Haller",
        "Daniel Haller",
        "Rodney",
        "Ian",
        "Lucas",
        "Fanya",
        "Boris",
        "Zachary",
        "Sylvester",
        "God-Mutant"
      ],
      "place-of-birth": "Israel",
      "first-appearance": "New Mutants #25 (March, 1985)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["5'9", "175 cm"],
      weight: ["130 lb", "59 kg"],
      "eye-color": "Green / Blue",
      "hair-color": "Black"
    },
    work: {
      occupation: "Adventurer, Student",
      base:
        "formerly Ruth Aldine's mind, Utopia, San Francisco Bay, California; Westcliffe, Colorado; \"No-Time\"; Moira MacTaggart's Mutant Research Center, Muir Island, off the coast of Scotland; Haifa; Paris, France"
    },
    connections: {
      "group-affiliation": "Formerly X-Men, Muir Island X-Men",
      relatives:
        "Charles Graymalkin (paternal collateral ancestor), Marcia Graymalkin (paternal collateral ancestor), Jonas Graymalkin (paternal collateral ancestor), Brian Xavier (paternal grandfather), Sharon Xavier (paternal grandmother), Kurt Marko (paternal step-grandfather), Cain Marko (paternal step-uncle), Cassandra Nova Xavier (paternal aunt), Charles Xavier (father), Gabrielle Haller (mother), Daniel Shomron (stepfather), Xavier Family (paternal relatives), Ruth Aldine (lover/current body)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10651.jpg"
    }
  },
  {
    response: "success",
    id: "404",
    name: "Leonardo",
    powerstats: {
      intelligence: "75",
      strength: "16",
      speed: "50",
      durability: "65",
      power: "59",
      combat: "80"
    },
    biography: {
      "full-name": "Leonardo",
      "alter-egos": "No alter egos found.",
      aliases: ["Leo", "Ghost of the Jungle", "Splinter Jr."],
      "place-of-birth": "-",
      "first-appearance": "Teenage Mutant Ninja Turtles #1",
      publisher: "IDW Publishing",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Blue",
      "hair-color": "No Hair"
    },
    work: { occupation: "Ninja", base: "New York, New York" },
    connections: {
      "group-affiliation": "-",
      relatives:
        "Donatello (brother), Michelangelo (brother), Raphael (brother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10327.jpg"
    }
  },
  {
    response: "success",
    id: "405",
    name: "Lex Luthor",
    powerstats: {
      intelligence: "100",
      strength: "53",
      speed: "25",
      durability: "65",
      power: "68",
      combat: "70"
    },
    biography: {
      "full-name": "Lex Luthor",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Action Comics #23",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'2'", "188 cm"],
      weight: ["210 lb", "95 kg"],
      "eye-color": "Green",
      "hair-color": "No Hair"
    },
    work: { occupation: "Owner of LexCorp", base: "-" },
    connections: {
      "group-affiliation":
        "Injustice Gang, Injustice League, Society of Supervillains",
      relatives:
        "Casey and Elaine Griggs (foster parents, deceased),\nLena Luthor (sister pre-Crisis; daughter post-Crisis),\nElizabeth Perske (ex-wife),\nPerry J. White Jr. (son, deceased),\nContessa Erica Alexandra del Portenza (wife, assumed deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/727.jpg"
    }
  },
  {
    response: "success",
    id: "406",
    name: "Light Lass",
    powerstats: {
      intelligence: "38",
      strength: "10",
      speed: "35",
      durability: "28",
      power: "67",
      combat: "42"
    },
    biography: {
      "full-name": "Ayla Ranzz",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Teen Titans/Legion Special #1",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'5", "165 cm"],
      weight: ["120 lb", "54 kg"],
      "eye-color": "Blue",
      "hair-color": "Red"
    },
    work: { occupation: "-", base: "United Planets" },
    connections: {
      "group-affiliation": "Legion of Super-Heroes, formerly the Wanderers",
      relatives:
        "Unnamd parents, Garth Ranzz (Lightning Lad, twin brother); Mekt Ranzz (older brother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1178.jpg"
    }
  },
  {
    response: "success",
    id: "407",
    name: "Lightning Lad",
    powerstats: {
      intelligence: "38",
      strength: "10",
      speed: "23",
      durability: "28",
      power: "60",
      combat: "42"
    },
    biography: {
      "full-name": "Garth Ranzz",
      "alter-egos": "No alter egos found.",
      aliases: ["Lightning Boy", "Live Wire"],
      "place-of-birth": "-",
      "first-appearance": "Teen Titans/Legion Special #1",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["5'1", "155 cm"],
      weight: ["145 lb", "65 kg"],
      "eye-color": "Blue",
      "hair-color": "Red"
    },
    work: { occupation: "Legionnaire", base: "Earth, 31st century" },
    connections: {
      "group-affiliation": "Legion of Super-Heroes",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1177.jpg"
    }
  },
  {
    response: "success",
    id: "408",
    name: "Lightning Lord",
    powerstats: {
      intelligence: "44",
      strength: "10",
      speed: "23",
      durability: "42",
      power: "66",
      combat: "42"
    },
    biography: {
      "full-name": "Mekt Ranzz",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance":
        "Supergirl and the Legion of Super-Heroes #25 (Feb. 2007)",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'3", "191 cm"],
      weight: ["210 lb", "95 kg"],
      "eye-color": "Blue",
      "hair-color": "Red"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation":
        "The Wanderers, former ally of the Legion of Super-Heroes.",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1179.jpg"
    }
  },
  {
    response: "success",
    id: "409",
    name: "Living Brain",
    powerstats: {
      intelligence: "75",
      strength: "53",
      speed: "35",
      durability: "56",
      power: "31",
      combat: "28"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Amazing Spider-Man #8 (1964)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "-",
      race: "null",
      height: ["6'6", "198 cm"],
      weight: ["800 lb", "360 kg"],
      "eye-color": "Yellow",
      "hair-color": "-"
    },
    work: { occupation: "Robot", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1037.jpg"
    }
  },
  {
    response: "success",
    id: "720",
    name: "Arclight",
    powerstats: {
      intelligence: "38",
      strength: "63",
      speed: "23",
      durability: "42",
      power: "52",
      combat: "70"
    },
    biography: {
      "full-name": "Philippa Sontag",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Vietnam",
      "first-appearance":
        "(In shadow) Uncanny X-Men #210 (1986), (fully) X-Factor #10 (1986)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'8", "173 cm"],
      weight: ["126 lb", "57 kg"],
      "eye-color": "Violet",
      "hair-color": "Purple"
    },
    work: { occupation: "Terrorist", base: "-" },
    connections: {
      "group-affiliation": "Marauders formerly, 198, Femizons",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/832.jpg"
    }
  },
  {
    response: "success",
    id: "410",
    name: "Living Tribunal",
    powerstats: {
      intelligence: "100",
      strength: "100",
      speed: "100",
      durability: "100",
      power: "100",
      combat: "30"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Living Trinity",
        "Magistrate",
        "High Judge of The Multiverse",
        "Sir"
      ],
      "place-of-birth": "-",
      "first-appearance": "Strange Tales #157",
      publisher: "Marvel Comics",
      alignment: "neutral"
    },
    appearance: {
      gender: "-",
      race: "Cosmic Entity",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Blue",
      "hair-color": "No Hair"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "-",
      relatives: "One-Above-All (creator)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10523.jpg"
    }
  },
  {
    response: "success",
    id: "411",
    name: "Liz Sherman",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Elizabeth Anne Sherman",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Dark Horse Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "B.P.R.D.", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/868.jpg"
    }
  },
  {
    response: "success",
    id: "412",
    name: "Lizard",
    powerstats: {
      intelligence: "50",
      strength: "51",
      speed: "27",
      durability: "70",
      power: "63",
      combat: "56"
    },
    biography: {
      "full-name": "Curtis Connors",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Coral Gables, Florida",
      "first-appearance": "Amazing Spider-Man #6",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'8", "203 cm"],
      weight: ["510 lb", "230 kg"],
      "eye-color": "Red",
      "hair-color": "No Hair"
    },
    work: { occupation: "Research biologist", base: "Florida" },
    connections: {
      "group-affiliation": "-",
      relatives: "Martha (wife, deceased), Billy (son), unnamed sister"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/11.jpg"
    }
  },
  {
    response: "success",
    id: "413",
    name: "Lobo",
    powerstats: {
      intelligence: "94",
      strength: "100",
      speed: "54",
      durability: "100",
      power: "100",
      combat: "85"
    },
    biography: {
      "full-name": "Lobo",
      "alter-egos": "No alter egos found.",
      aliases: [
        "The Main Man",
        "The 'Bo",
        "Master Frag",
        "Mister Machete",
        "Popebo; He-Who-Devours-Your-Entrails-And-Thoroughly-Enjoys-It"
      ],
      "place-of-birth": "-",
      "first-appearance": "Omega Men # 3",
      publisher: "DC Comics",
      alignment: "neutral"
    },
    appearance: {
      gender: "Male",
      race: "Czarnian",
      height: ["7'6", "229 cm"],
      weight: ["640 lb", "288 kg"],
      "eye-color": "Red",
      "hair-color": "Black"
    },
    work: {
      occupation: "Assassin, Bounty Hunter, Priest",
      base: "Mobile throughout several galaxies"
    },
    connections: {
      "group-affiliation":
        "Formerly LEGION, Young Justice; First Celestial Church of the Triple Fish-God",
      relatives: "Slobo (clone)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1127.jpg"
    }
  },
  {
    response: "success",
    id: "414",
    name: "Loki",
    powerstats: {
      intelligence: "88",
      strength: "63",
      speed: "46",
      durability: "85",
      power: "100",
      combat: "60"
    },
    biography: {
      "full-name": "Loki Laufeyson",
      "alter-egos": "No alter egos found.",
      aliases: [
        "God of Mischief",
        "Gem-Keeper",
        "Walter Lawson",
        "Lester",
        "Loren Olsen",
        "Tyfon",
        "Father Williams",
        "Willie",
        "Tso Zhung; has also impersonated hundreds of others."
      ],
      "place-of-birth": "Jotunheim, Asgard",
      "first-appearance": "Journey into Mystery Vol. 1 #85",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Asgardian",
      height: ["6'4", "193 cm"],
      weight: ["525 lb", "236 kg"],
      "eye-color": "Green",
      "hair-color": "Black"
    },
    work: {
      occupation: "God of evil; former god of mischief and madness",
      base: "Asgard"
    },
    connections: {
      "group-affiliation":
        'Asgardians, Karnilla, Enchantress, Skurge the Executioner, Cobra, Mister Hyde, Absorbing Man, Igron, Tyr, Lorelei, Hela, Ulik, Frost Giants, Storm Giants (former), Dormammu, "Acts of Vengeance" prime movers (Dr. Doom, Magneto, Red Skull, Mandari',
      relatives:
        "Laufey (father, deceased), Farbauti (mother, deceased), Sigyn (wife, deceased), Odin (foster father, deceased), Frigga (foster mother, deceased), Thor, Vidar (foster brothers, deceased), Hela,Fenris (Wolf), Jordmungand (Midgard Serpent) (children, deceased), Arkin (cousin, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/928.jpg"
    }
  },
  {
    response: "success",
    id: "415",
    name: "Longshot",
    powerstats: {
      intelligence: "50",
      strength: "10",
      speed: "27",
      durability: "10",
      power: "71",
      combat: "70"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["The Lost Messiah", "The Lucky One"],
      "place-of-birth": "-",
      "first-appearance": "Longshot #1 (September, 1985)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'2", "188 cm"],
      weight: ["80 lb", "36 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation: "freedom fighter, stuntman rebel, adventurer",
      base:
        "X-Factor Investigations Headquarters, New York City, New York; formerly Detroit, Michigan; mobile; Xavier's School for Gifted Youngsters, Salem Center, Westchester County, New York; Mojoverse; Cooterman's Creek, Australian Outback, Australia; Alcatraz I"
    },
    connections: {
      "group-affiliation":
        "X-Factor Investigations; rebel forces on his homeworld; formerly Exiles; X-Men",
      relatives:
        "Arize (creator), Alison Blaire (Dazzler) (wife), Gaveedra Seven (Shatterstar) (alleged son)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1531.jpg"
    }
  },
  {
    response: "success",
    id: "416",
    name: "Luke Cage",
    powerstats: {
      intelligence: "50",
      strength: "63",
      speed: "29",
      durability: "95",
      power: "44",
      combat: "70"
    },
    biography: {
      "full-name": "Luke Cage",
      "alter-egos": "Power Man",
      aliases: [
        "Carl Lucas",
        "Power Man",
        "Mark Lucas",
        "Hero for Hire",
        "Ace of Spades"
      ],
      "place-of-birth": "Harlem, New York City",
      "first-appearance": "Hero for Hire #1 (1972)",
      publisher: "Power Man",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'6", "198 cm"],
      weight: ["425 lb", "191 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: {
      occupation:
        "Adventurer, bar owner, bodyguard, mercenary; formerly theater owner, private investigator, various odd jobs",
      base: "-"
    },
    connections: {
      "group-affiliation":
        "Underground Avengers (formerly Daredevil's Unnamed Super-Hero Team), Secret Defenders, Heroes for Hire, Nightwing Restorations, Fantastic Four, Defenders, Bloods",
      relatives:
        "Jessica Jones (wife), James Leonard Lucas (father), Esther (mother, deceased), James Jr. (Coldfire, brother), unnamed daughter"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/269.jpg"
    }
  },
  {
    response: "success",
    id: "417",
    name: "Luke Campbell",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Luke Campbell",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "NBC - Heroes",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "Newark, NJ" },
    connections: {
      "group-affiliation": "-",
      relatives: "Unnamed father (estranged), Mary Campbell"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1311.jpg"
    }
  },
  {
    response: "success",
    id: "418",
    name: "Luke Skywalker",
    powerstats: {
      intelligence: "69",
      strength: "38",
      speed: "42",
      durability: "25",
      power: "100",
      combat: "100"
    },
    biography: {
      "full-name": "Luke Skywalker",
      "alter-egos": "No alter egos found.",
      aliases: ["General Skywalker", "Master Luke", "Jedi"],
      "place-of-birth": "Tatooine",
      "first-appearance": "Star Wars: Episode IV - A New Hope (1977)",
      publisher: "George Lucas",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'6", "168 cm"],
      weight: ["170 lb", "77 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation":
        "Alliance to Restore the Republic, Jedi Order, Alliance of Free Planets, Bright Tree Village, New Republic, New Jedi Order",
      relatives:
        "Darth Vader (father), Princes Leia (Sister), Yoda (Master), Obi-Wan Kenobi (Master)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10447.jpg"
    }
  },
  {
    response: "success",
    id: "419",
    name: "Luna",
    powerstats: {
      intelligence: "38",
      strength: "6",
      speed: "83",
      durability: "14",
      power: "53",
      combat: "14"
    },
    biography: {
      "full-name": "Luna Maximoff",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Attilan, Blue Area of the Moon",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "-",
      relatives:
        "Quicksilver (Pietro Maximoff, father), Magneto (grandfather), Crystal (mother), Scarlet Witch, (aunt), Polaris (aunt)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/933.jpg"
    }
  },
  {
    response: "success",
    id: "42",
    name: "Ardina",
    powerstats: {
      intelligence: "63",
      strength: "100",
      speed: "100",
      durability: "80",
      power: "100",
      combat: "25"
    },
    biography: {
      "full-name": "Ardina",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "The Order #4",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Alien",
      height: ["6'4", "193 cm"],
      weight: ["218 lb", "98 kg"],
      "eye-color": "White",
      "hair-color": "Orange"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "-",
      relatives: "Norrin Radd (Silver Surfer, clonal source), Clea (creator)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10132.jpg"
    }
  },
  {
    response: "success",
    id: "420",
    name: "Lyja",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Lyja",
      "alter-egos": "No alter egos found.",
      aliases: ["Alicia Masters", "Lyja The Lazerfist", "Laura Green"],
      "place-of-birth": "-",
      "first-appearance":
        "Fantastic Four #265 (as Alicia), Fantastic Four #357 (as Lyja)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Green",
      "hair-color": "Green"
    },
    work: { occupation: "Former Skrull Liason Officer", base: "-" },
    connections: {
      "group-affiliation":
        "Former lover of Paibok, Former ally of the Fantastic Four, Former wife of the Human Torch",
      relatives:
        "Johnny Storm - Human Torch (ex-husband), Susan Storm - Invisible Woman (ex-sister-in-law)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1017.jpg"
    }
  },
  {
    response: "success",
    id: "421",
    name: "Mach-IV",
    powerstats: {
      intelligence: "75",
      strength: "36",
      speed: "60",
      durability: "84",
      power: "60",
      combat: "56"
    },
    biography: {
      "full-name": "Abner Jenkins",
      "alter-egos": "No alter egos found.",
      aliases: ["Beetle", "MACH-I", "MACH-II", "MACH-III", "Matthew"],
      "place-of-birth": "Baltimore, Maryland",
      "first-appearance":
        "(Beetle) Strange Tales #123 (1964); (MACH-I) Incredible Hulk #449 (1997); (MACH-II) Thunderbolts #37 (2000); (MACH-III) Thunderbolts #57 (2001); (MACH-IV) New Thunderbolts #1 (2005)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["5'11", "180 cm"],
      weight: ["175 lb", "79 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: {
      occupation:
        "Adventurer; former master mechanic, professional criminal, mercenary",
      base: "-"
    },
    connections: {
      "group-affiliation":
        "formerly Thunderbolts, Masters of Evil, Sinister Syndicate, Justin Hammer's Hit Squad, Maggia, Sinister Seven, Commission on Superhuman Activities, Defenders impersonators, Burton Canyon Police Department",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/370.jpg"
    }
  },
  {
    response: "success",
    id: "422",
    name: "Machine Man",
    powerstats: {
      intelligence: "63",
      strength: "32",
      speed: "35",
      durability: "84",
      power: "51",
      combat: "64"
    },
    biography: {
      "full-name": "X-51, Aaron Stack",
      "alter-egos": "No alter egos found.",
      aliases: ["Sir McHinery", "Mister Machine.Machine Man"],
      "place-of-birth": "Central City, California",
      "first-appearance": "First appearance unknown",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "-",
      race: "null",
      height: ["6'", "183 cm"],
      weight: ["850 lb", "383 kg"],
      "eye-color": "Red",
      "hair-color": "Black"
    },
    work: {
      occupation: "Insurance Investigator",
      base: "Garvin's Garage, Queens, New York"
    },
    connections: {
      "group-affiliation": "Avengers",
      relatives: "Dr. Able Stack, 'father'"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/90.jpg"
    }
  },
  {
    response: "success",
    id: "423",
    name: "Magneto",
    powerstats: {
      intelligence: "88",
      strength: "80",
      speed: "27",
      durability: "84",
      power: "91",
      combat: "80"
    },
    biography: {
      "full-name": "Erik Magnus Lensherr",
      "alter-egos": "No alter egos found.",
      aliases: [
        "The Creator",
        "Erik Magnus Lehnsherr",
        "Michael Xavier",
        "White Pilgrim",
        "Erik the RedThe Master of Magnetism"
      ],
      "place-of-birth": "Unrevealed, probably somewhere in Northern Europe",
      "first-appearance": "X-MEN Vol. 1 #1",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["6'2", "188 cm"],
      weight: ["190 lb", "86 kg"],
      "eye-color": "Grey",
      "hair-color": "White"
    },
    work: {
      occupation:
        "Currently Revolutionary and Conqueror, formerly Volunteer Orderly, Secret Agent",
      base:
        "Currently unrevealed, formerly Asteroid M; various hidden bases on Earth including one in Antarctica; an island in the Bermuda Triangle; Professor Xavier's School for Gifted Youngsters, Salem Center, Westchester County, New York"
    },
    connections: {
      "group-affiliation":
        "Currently None, formerly Brotherhood of Evil Mutants I and II, X-Men, teacher of the New Mutants, Lords Cardinal of the Hellfire Club, leader of the Acolytes",
      relatives:
        "Magda (wife, deceased), Anya (daughter, deceased), Pietro Maximoff (Quicksilver, son), Wanda Maximoff (Scarlet Witch, daughter), Lorna Dane (Polaris, daughter), Joseph (clone, deceased), Luna (granddaughter)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/12.jpg"
    }
  },
  {
    response: "success",
    id: "424",
    name: "Magog",
    powerstats: {
      intelligence: "50",
      strength: "48",
      speed: "23",
      durability: "64",
      power: "66",
      combat: "72"
    },
    biography: {
      "full-name": "David Reid",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation":
        "formerly Justice Society of America, formerally United States Marine Corps",
      relatives: "Franklin Delano Roosevelt (great-grandfather, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1324.jpg"
    }
  },
  {
    response: "success",
    id: "425",
    name: "Magus",
    powerstats: {
      intelligence: "88",
      strength: "100",
      speed: "70",
      durability: "99",
      power: "100",
      combat: "74"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["Warlock's Father"],
      "place-of-birth": "Kvch (Technarchy?s home planet)",
      "first-appearance": "New Mutants #18 (1984)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'0", "183 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Black",
      "hair-color": "-"
    },
    work: { occupation: "Ruler of the Technarchy", base: "-" },
    connections: {
      "group-affiliation": "-",
      relatives: "Warlock (son, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1297.jpg"
    }
  },
  {
    response: "success",
    id: "426",
    name: "Man of Miracles",
    powerstats: {
      intelligence: "100",
      strength: "100",
      speed: "100",
      durability: "100",
      power: "100",
      combat: "100"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["Mother Of Existence"],
      "place-of-birth": "-",
      "first-appearance": "Spawn #75",
      publisher: "Image Comics",
      alignment: "-"
    },
    appearance: {
      gender: "-",
      race: "God / Eternal",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Blue",
      "hair-color": "Silver"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10889.jpg"
    }
  },
  {
    response: "success",
    id: "427",
    name: "Man-Bat",
    powerstats: {
      intelligence: "38",
      strength: "18",
      speed: "50",
      durability: "70",
      power: "33",
      combat: "30"
    },
    biography: {
      "full-name": "Robert Kirkland Langstrom",
      "alter-egos": "No alter egos found.",
      aliases: ["Kirk Langstrom"],
      "place-of-birth": "Chicago, Illinois",
      "first-appearance": "Detective Comics #400 (June, 1970)",
      publisher: "DC Comics",
      alignment: "neutral"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: { occupation: "Zoologist", base: "Gotham City" },
    connections: {
      "group-affiliation": "Formerly Spirit Squad, The Network",
      relatives:
        "Francine Langstrom (wife), Rebecca Elizabeth Langtrom (daughter); Aaron Langstrom (son); Britt Langstrom (sister); Ted Friedel (brother-in-law)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/731.jpg"
    }
  },
  {
    response: "success",
    id: "428",
    name: "Man-Thing",
    powerstats: {
      intelligence: "50",
      strength: "32",
      speed: "8",
      durability: "100",
      power: "100",
      combat: "40"
    },
    biography: {
      "full-name": "Dr. Theodore Sallis",
      "alter-egos": "No alter egos found.",
      aliases: [
        "the Vagornus Koth; the Swamp Walker; Mr. Salad; Walking Mulch Heap"
      ],
      "place-of-birth": "-",
      "first-appearance": "Savage Tales #1 (May, 1971)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["7'0", "213 cm"],
      weight: ["500 lb", "225 kg"],
      "eye-color": "Red",
      "hair-color": "No Hair"
    },
    work: { occupation: "-", base: "Man-Thing's Swamp, Citrusville, Florida" },
    connections: {
      "group-affiliation": "Thunderbolts, Legion of Monsters, Daydreamers",
      relatives: "Ellen Brandt (ex-wife) Job Burke (son)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/382.jpg"
    }
  },
  {
    response: "success",
    id: "429",
    name: "Man-Wolf",
    powerstats: {
      intelligence: "63",
      strength: "44",
      speed: "35",
      durability: "42",
      power: "45",
      combat: "70"
    },
    biography: {
      "full-name": "John Jameson",
      "alter-egos": "No alter egos found.",
      aliases: ["Stargod", "Vanwolf", "Skywolf"],
      "place-of-birth": "New York, New York",
      "first-appearance":
        "AMAZING SPIDER-MAN #1, (as Man-Wolf) AMAZING SPIDER-MAN #124",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'2'", "188 cm"],
      weight: ["200 lb", "90 kg"],
      "eye-color": "Brown",
      "hair-color": "Auburn"
    },
    work: {
      occupation:
        "Employed by Dept. of Social Services, Queens; former astronaut, test pilot, security chief for Ravenscroft Institute",
      base: "Queens"
    },
    connections: {
      "group-affiliation":
        "Ravencroft Insitute Staff, Avengers Support Crew, NASA, USAF",
      relatives:
        "J. Jonah (father), Joan (mother, deceased), Marla Madison (stepmother), David (paternal grandfather, presumed deceased), Betty (paternal grandmother, presumed deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/91.jpg"
    }
  },
  {
    response: "success",
    id: "43",
    name: "Ares",
    powerstats: {
      intelligence: "75",
      strength: "82",
      speed: "35",
      durability: "80",
      power: "84",
      combat: "101"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["God of War", "Mister Talon", "Mars", "Warhawk"],
      "place-of-birth": "-",
      "first-appearance": "Thor #129",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'1", "185 cm"],
      weight: ["600 lb", "270 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: { occupation: "-", base: "Avengers Tower, formerly Olympus" },
    connections: {
      "group-affiliation":
        "Avengers, Mighty Avengers, Olympic Pantheon; Warhawks",
      relatives:
        "Zeus (father), Hera (mother), Enyo (wife), Deimos, Phobos, Alexander (sons), Neptune, Pluto (uncles), Demeter, Hestia (aunts), Hephaestus (brother), Apollo, Dionysus, Hercules, Hermes(half-brothers), Artemis, Pallas Athena, Venus, (half-sisters)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1118.jpg"
    }
  },
  {
    response: "success",
    id: "430",
    name: "Mandarin",
    powerstats: {
      intelligence: "100",
      strength: "28",
      speed: "23",
      durability: "28",
      power: "100",
      combat: "95"
    },
    biography: {
      "full-name": "Khan",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Tem Borjigin",
        "Gene Kahn",
        "Master Khan",
        "Zhang Tong",
        "Mandy"
      ],
      "place-of-birth": "China",
      "first-appearance": "Tales of Suspense #50 (February, 1964)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'2", "188 cm"],
      weight: ["215 lb", "97 kg"],
      "eye-color": "Blue",
      "hair-color": "White"
    },
    work: {
      occupation:
        "Would-be conqueror; former janitor, businessman and crimelord, government administrator",
      base:
        "Prometheus Corporation; formerly Dragon of Heaven; Palace of the Star Dragon in the Valley of Spirits."
    },
    connections: {
      "group-affiliation":
        "current CEO of Prometheus Corporation; has employed the Avatars, Living Laser, Power Man, Swordsman, Enchantress, Executioner, Sandman, and Ladykiller.",
      relatives:
        "Unidentified father, mother, paternal aunt (all deceased). Mei-Ling (fianc?e, deceased), Temujin (son), Genghis Khan (alleged ancestor, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1175.jpg"
    }
  },
  {
    response: "success",
    id: "431",
    name: "Mantis",
    powerstats: {
      intelligence: "63",
      strength: "8",
      speed: "33",
      durability: "80",
      power: "100",
      combat: "80"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Celestial Madonna",
        "Willow",
        "Lorelei",
        "Mandy Celestine",
        "This One (in referring to herself)"
      ],
      "place-of-birth": "Vietnam",
      "first-appearance": "Avengers #112",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human-Kree",
      height: ["5'6", "168 cm"],
      weight: ["115 lb", "52 kg"],
      "eye-color": "Green",
      "hair-color": "Black"
    },
    work: {
      occupation:
        "Celestial Madonna, former adventuress, former bar-maid/prostitute/exotic dancer",
      base: "Mobile"
    },
    connections: {
      "group-affiliation": "-",
      relatives:
        "Libra (Gustav Brandt) (father), Lau Brandt (mother), Cotati possessing Jacques Duquesne (husband), Quoi (son)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/384.jpg"
    }
  },
  {
    response: "success",
    id: "432",
    name: "Martian Manhunter",
    powerstats: {
      intelligence: "100",
      strength: "95",
      speed: "92",
      durability: "100",
      power: "100",
      combat: "85"
    },
    biography: {
      "full-name": "J'onn J'onzz",
      "alter-egos": "No alter egos found.",
      aliases: [
        "ohn Jones; J'Onn J'Onzz (alternate spelling); Big Green Buddy; J.J.; Jolly Green Giant; Light to the Light; Manhunter; Manhunter from Mars; Son of Mars; Bronze Wraith",
        "Bloodwynd",
        "many others"
      ],
      "place-of-birth": "-",
      "first-appearance": "Detective Comics #225 (1955)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Martian",
      height: ["6'7", "201 cm"],
      weight: ["300 lb", "135 kg"],
      "eye-color": "Red",
      "hair-color": "No Hair"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation":
        "Darkstars, Justice League of Aliens, Justice League Of America, Justice League Task Force, Justice League Unlimited, Martians, Outsiders",
      relatives:
        "M'yrnn J'onzz (father, deceased); Sha'sheen J'onzz (mother, deceased); M'yri'ah (wife, deceased); K'hym (daughter, deceased); Ma'alefa'ak (twin brother); D'all (father-in-law, deceased); J'ahrl J'onzz (ancestor, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/733.jpg"
    }
  },
  {
    response: "success",
    id: "433",
    name: "Marvel Girl",
    powerstats: {
      intelligence: "63",
      strength: "85",
      speed: "47",
      durability: "42",
      power: "100",
      combat: "80"
    },
    biography: {
      "full-name": "Rachel Anne Summers",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Rachel Grey",
        "formerly Phoenix",
        "Mother Askani",
        "Bright Lady",
        "Aly'zrn Summerset"
      ],
      "place-of-birth": "-",
      "first-appearance": "UNCANNY X-MEN #141",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'7'", "170 cm"],
      weight: ["125 lb", "56 kg"],
      "eye-color": "Green",
      "hair-color": "Red"
    },
    work: {
      occupation: "Adventurer",
      base:
        "Xavier Institute of Higher Learning, Salem Center, Westchester County, New York (formerly) Braddock Lighthouse, England"
    },
    connections: {
      "group-affiliation":
        "Starjammers, formerly X-Men, former servant of Elias Bogan, formerly Clan Askani (leader), Excalibur, former servant of Ahab",
      relatives:
        "Scott Summers (Cyclops, alternate timeline father, deceased in own time), Jean Grey-Summers (Phoenix, alternate timeline mother, deceased in own time), Alex Summers (Havok, alternate timeline uncle), Franklin Richards (alternate future husband), Jonathan Reed Richards (Hyperstorm, alternate future son), David Richards (alternate future son)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/94.jpg"
    }
  },
  {
    response: "success",
    id: "434",
    name: "Master Brood",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Currently Colin Wood",
      "alter-egos": "No alter egos found.",
      aliases: ["Brood"],
      "place-of-birth": "Perhaps England",
      "first-appearance": "Team Epic Episode 101",
      publisher: "Team Epic TV",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'0", "183 cm"],
      weight: ["180 lb", "81 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "Toronto, Canada" },
    connections: { "group-affiliation": "Team Epic", relatives: "Deceased" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/958.jpg"
    }
  },
  {
    response: "success",
    id: "435",
    name: "Master Chief",
    powerstats: {
      intelligence: "75",
      strength: "73",
      speed: "35",
      durability: "80",
      power: "69",
      combat: "100"
    },
    biography: {
      "full-name": "John-117",
      "alter-egos": "No alter egos found.",
      aliases: ["Blue 1", "Sierra 117", "Spartan 117", "Demon"],
      "place-of-birth": "Elysium City, Eridanus II",
      "first-appearance": "-",
      publisher: "Microsoft",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human / Altered",
      height: ["7'", "213 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: { occupation: "Master Chief Petty Officer of the Navy", base: "-" },
    connections: {
      "group-affiliation": "United Nations Space Command, Navy",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1110.jpg"
    }
  },
  {
    response: "success",
    id: "436",
    name: "Match",
    powerstats: {
      intelligence: "75",
      strength: "95",
      speed: "83",
      durability: "85",
      power: "100",
      combat: "70"
    },
    biography: {
      "full-name": "Kent Connor",
      "alter-egos": "No alter egos found.",
      aliases: ["Superboy", "Superman"],
      "place-of-birth": "-",
      "first-appearance": "Superboy Vol 4 #35 (January, 1997)",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Black",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "Titans East, the Agenda, Project Cadmus",
      relatives:
        "Superman (genetic template via Superboy), Lex Luthor (genetic Template via Superboy), Superboy (genetic template)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1459.jpg"
    }
  },
  {
    response: "success",
    id: "437",
    name: "Matt Parkman",
    powerstats: {
      intelligence: "63",
      strength: "10",
      speed: "12",
      durability: "14",
      power: "59",
      combat: "56"
    },
    biography: {
      "full-name": "Matthew Parkman",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Heroes S01E02 - Don't Look Back",
      publisher: "NBC - Heroes",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: {
      occupation: "NYPD detective",
      base: "New York, NY; formerly Los Angeles, CA"
    },
    connections: {
      "group-affiliation": "-",
      relatives: "Maury Parkman (father), Janice Parkman (ex-wife)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/948.jpg"
    }
  },
  {
    response: "success",
    id: "438",
    name: "Maverick",
    powerstats: {
      intelligence: "63",
      strength: "10",
      speed: "12",
      durability: "42",
      power: "60",
      combat: "85"
    },
    biography: {
      "full-name": "Christopher Bradley",
      "alter-egos": "No alter egos found.",
      aliases: ["Chris", "Bolt"],
      "place-of-birth": "-",
      "first-appearance": "X-Men Unlimited #8 (1995)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'4", "193 cm"],
      weight: ["244 lb", "110 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: { occupation: "Mercenary; former adventurer, student", base: "-" },
    connections: {
      "group-affiliation":
        "(As Maverick) Formerly Gene Nation, Cable?s Underground; (as Bolt) formerly New Warriors",
      relatives:
        "Robert Bradley (Frank Johnson, father), Marion Bradley (Rose Johnson, mother), Catherine Bradley (Jennifer Johnson, sister)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/257.jpg"
    }
  },
  {
    response: "success",
    id: "439",
    name: "Maxima",
    powerstats: {
      intelligence: "75",
      strength: "90",
      speed: "35",
      durability: "56",
      power: "81",
      combat: "75"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["Queen Maxima", "Empress of the Almeracian Empire"],
      "place-of-birth": "Almerac",
      "first-appearance": "-",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'11", "180 cm"],
      weight: ["160 lb", "72 kg"],
      "eye-color": "Brown",
      "hair-color": "Red"
    },
    work: {
      occupation: "Adventurer, Queen of the Almerac Empire",
      base: "Imperial Royal Palace"
    },
    connections: {
      "group-affiliation": "Justice League Task Force, Extreme Justice",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1168.jpg"
    }
  },
  {
    response: "success",
    id: "44",
    name: "Ariel",
    powerstats: {
      intelligence: "50",
      strength: "10",
      speed: "12",
      durability: "14",
      power: "94",
      combat: "28"
    },
    biography: {
      "full-name": "Ariel",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Fallen Angels #1 (1987)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'5", "165 cm"],
      weight: ["130 lb", "59 kg"],
      "eye-color": "Purple",
      "hair-color": "Pink"
    },
    work: {
      occupation:
        "Leader, refugee alien; former alien mutant-hunter and hedonist",
      base: "-"
    },
    connections: {
      "group-affiliation": "X-Men, Formerly Fallen Angels",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1348.jpg"
    }
  },
  {
    response: "success",
    id: "440",
    name: "Maya Herrera",
    powerstats: {
      intelligence: "50",
      strength: "10",
      speed: "12",
      durability: "14",
      power: "60",
      combat: "14"
    },
    biography: {
      "full-name": "Maya Herrera",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Dominican Republic",
      "first-appearance": "-",
      publisher: "NBC - Heroes",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "-",
      relatives: "Alejandro (twin brother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/944.jpg"
    }
  },
  {
    response: "success",
    id: "441",
    name: "Medusa",
    powerstats: {
      intelligence: "75",
      strength: "34",
      speed: "35",
      durability: "70",
      power: "37",
      combat: "56"
    },
    biography: {
      "full-name": "Medusalith Amaquelin Boltagon",
      "alter-egos": "No alter egos found.",
      aliases: ["Madam Medusa", "Queen Medusa"],
      "place-of-birth": "Island of Attilan, Atlantic Ocean",
      "first-appearance": "Fantastic Four Vol. 1 #36 (1965)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Inhuman",
      height: ["5'11", "180 cm"],
      weight: ["130 lb", "59 kg"],
      "eye-color": "Green",
      "hair-color": "Red"
    },
    work: { occupation: "Queen, Royal interpreter", base: "Attilan" },
    connections: {
      "group-affiliation": "Inhumans, Fantastic Four",
      relatives:
        "Kobar, La (maternal grandparents), Azur (maternal aunt), Mander (maternal uncle-by-marriage), Quelin (father), Ambur (mother), Crystal (sister), Black Bolt (husband, second cousin), Ahura (son), Karnak (cousin), Triton (cousin), Psynapse (second cousin), Maximus (brother-in-law, second cousin), Ronan the Accuser (brother-in-law), Quicksilver (ex-brother-in-law), Luna (niece)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/96.jpg"
    }
  },
  {
    response: "success",
    id: "442",
    name: "Meltdown",
    powerstats: {
      intelligence: "38",
      strength: "10",
      speed: "12",
      durability: "42",
      power: "62",
      combat: "64"
    },
    biography: {
      "full-name": "Tabitha Smith",
      "alter-egos": "Boom-Boom",
      aliases: [
        "Boom-Boom",
        "Boomer",
        "Meltdown",
        "Mutate #35",
        "Time Bomb",
        "Nancy Forrester"
      ],
      "place-of-birth": "Roanoke, Virginia",
      "first-appearance": "-",
      publisher: "Boom-Boom",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'5", "165 cm"],
      weight: ["120 lb", "54 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: { occupation: "Adventurer, former student, thief", base: "-" },
    connections: {
      "group-affiliation":
        "Formerly Nextwave, X-Force, Genoshan Mutates, New Mutants, X-Terminators, X-Factor (trainee), Fallen Angels",
      relatives:
        "Martin Louis Smith (father), Mandy Smith (step-mother), Wanda Jo Bialowsky-Smith (step-mother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/258.jpg"
    }
  },
  {
    response: "success",
    id: "443",
    name: "Mephisto",
    powerstats: {
      intelligence: "88",
      strength: "85",
      speed: "35",
      durability: "95",
      power: "100",
      combat: "42"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Satan; Mephistopheles",
        "Lord of Evil",
        "Prince of Devils",
        "Prince of Lies",
        "Lord of the Lower Depths",
        "Satan",
        "Beelzebub",
        "the Devil",
        "Maya",
        "Lucifer",
        "Nick Scratch",
        "the Friend",
        "Legion",
        "numerous others; impersonated Don Blake",
        "many others"
      ],
      "place-of-birth": "Hell",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'6", "198 cm"],
      weight: ["310 lb", "140 kg"],
      "eye-color": "White",
      "hair-color": "Black"
    },
    work: { occupation: "Lord of a realm of Hell", base: "-" },
    connections: {
      "group-affiliation":
        "Hell-lords, Lords of the Splinter Realms; formerly manipulator of the Six-Fingered Hand",
      relatives:
        "Blackheart (son), Mephista (daughter); presumptive relationship to other Hell-lords; quasi-paternal relationship to Mikal Drakonmegas (Hellfire) and Daimon (Hellstorm) and Satana Hellstrom; formerly engaged to unidentified demoness"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1322.jpg"
    }
  },
  {
    response: "success",
    id: "444",
    name: "Mera",
    powerstats: {
      intelligence: "56",
      strength: "62",
      speed: "79",
      durability: "60",
      power: "92",
      combat: "80"
    },
    biography: {
      "full-name": "Mera",
      "alter-egos": "No alter egos found.",
      aliases: ["Queen of Atlantis", "Aquawoman", "Aquagirl", "Water-Woman"],
      "place-of-birth": "-",
      "first-appearance": "Aquaman #11 (October, 1963)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Atlantean",
      height: ["5'9", "175 cm"],
      weight: ["160 lb", "72 kg"],
      "eye-color": "Blue",
      "hair-color": "Red"
    },
    work: {
      occupation: "Former queen of Atlantis; Former queen of Dimension Aqua",
      base: "Atlantis"
    },
    connections: {
      "group-affiliation": "Aquaman Family; formerly Red Lantern Corps",
      relatives:
        "Aquaman (husband); Aquababy (son, deceased); A.J. (son); Siren (Hila, twin sister)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1388.jpg"
    }
  },
  {
    response: "success",
    id: "445",
    name: "Metallo",
    powerstats: {
      intelligence: "75",
      strength: "53",
      speed: "23",
      durability: "95",
      power: "86",
      combat: "64"
    },
    biography: {
      "full-name": "John Corben",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Superman Vol 2 #1 (January, 1987)",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Android",
      height: ["6'5", "196 cm"],
      weight: ["200 lb", "90 kg"],
      "eye-color": "Green",
      "hair-color": "Brown"
    },
    work: {
      occupation: "Professional criminal",
      base: "Mobile, though he generally operates out of Metropolis"
    },
    connections: {
      "group-affiliation": "Superman Revenge Squad",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/737.jpg"
    }
  },
  {
    response: "success",
    id: "446",
    name: "Metamorpho",
    powerstats: {
      intelligence: "null",
      strength: "82",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Rex Mason",
      "alter-egos": "No alter egos found.",
      aliases: ["The Element Man"],
      "place-of-birth": "-",
      "first-appearance": "Brave and the Bold #57",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'1", "185 cm"],
      weight: ["200 lb", "90 kg"],
      "eye-color": "Black",
      "hair-color": "No Hair"
    },
    work: { occupation: "Adventurer, former Soldier of Fortune", base: "-" },
    connections: {
      "group-affiliation":
        "Outsiders, formerly Doom Patrol, Justice League Europe, Seven Soldiers of Victory",
      relatives:
        "Unnamed parents (deceased), Sapphire Stagg Mason (wife), Joseph (son), Simon Stagg (father-in-law)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/738.jpg"
    }
  },
  {
    response: "success",
    id: "447",
    name: "Meteorite",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1333.jpg"
    }
  },
  {
    response: "success",
    id: "448",
    name: "Metron",
    powerstats: {
      intelligence: "88",
      strength: "10",
      speed: "47",
      durability: "56",
      power: "100",
      combat: "28"
    },
    biography: {
      "full-name": "Metron",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "New Gods vol. 1 #1 (February-March, 1971)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'1", "185 cm"],
      weight: ["190 lb", "86 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: {
      occupation: "Scientist, seeker of knowledge",
      base: "Supertown, New Genesis"
    },
    connections: { "group-affiliation": "New Gods", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/841.jpg"
    }
  },
  {
    response: "success",
    id: "449",
    name: "Micah Sanders",
    powerstats: {
      intelligence: "63",
      strength: "8",
      speed: "12",
      durability: "14",
      power: "57",
      combat: "14"
    },
    biography: {
      "full-name": "Micah Sanders",
      "alter-egos": "No alter egos found.",
      aliases: ["MicahSanders500"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "NBC - Heroes",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: { occupation: "Elementary school student", base: "New Orleans, LA" },
    connections: {
      "group-affiliation": "-",
      relatives:
        "Niki Sanders (Mother), DL Hawkins (Father), Paulette Hawkins (paternal grandmother), Hal Sanders (maternal grandfather), Nana Dawson (Guardian)\nNana Dawson (Great-aunt), Monica Dawson (Cousin), Damon Dawson (Cousin)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/951.jpg"
    }
  },
  {
    response: "success",
    id: "45",
    name: "Armor",
    powerstats: {
      intelligence: "50",
      strength: "63",
      speed: "12",
      durability: "80",
      power: "55",
      combat: "54"
    },
    biography: {
      "full-name": "Hisako Ichiki",
      "alter-egos": "No alter egos found.",
      aliases: ["X-Girl", "Kid"],
      "place-of-birth": "-",
      "first-appearance": "Astonishing X-Men #4 (2004)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'4", "163 cm"],
      weight: ["112 lb", "50 kg"],
      "eye-color": "Black",
      "hair-color": "Black"
    },
    work: { occupation: "Adventurer, student", base: "-" },
    connections: {
      "group-affiliation":
        "X-Men, formerly: Xavier Institute Student Body, New X-Men",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1347.jpg"
    }
  },
  {
    response: "success",
    id: "450",
    name: "Michelangelo",
    powerstats: {
      intelligence: "63",
      strength: "14",
      speed: "50",
      durability: "65",
      power: "59",
      combat: "75"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["Mike", "Mikey", "Mikester", "Michaelangelo"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "IDW Publishing",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Blue",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "-",
      relatives: "Leonardo (brother), Donatello (brother), Raphael (brother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10329.jpg"
    }
  },
  {
    response: "success",
    id: "451",
    name: "Micro Lad",
    powerstats: {
      intelligence: "38",
      strength: "28",
      speed: "27",
      durability: "28",
      power: "44",
      combat: "32"
    },
    biography: {
      "full-name": "Gim Allon",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Colossal Boy (mostly known as Colossal Boy",
        "although he dislikes that name himself)"
      ],
      "place-of-birth": "-",
      "first-appearance": "Teen Titans/Legion Special #1 (2004)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'", "183 cm"],
      weight: ["170 lb", "77 kg"],
      "eye-color": "Grey",
      "hair-color": "Brown"
    },
    work: { occupation: "-", base: "United Planets, 31st century" },
    connections: {
      "group-affiliation": "Legion of Super-Heroes",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1181.jpg"
    }
  },
  {
    response: "success",
    id: "452",
    name: "Mimic",
    powerstats: {
      intelligence: "63",
      strength: "67",
      speed: "47",
      durability: "56",
      power: "79",
      combat: "42"
    },
    biography: {
      "full-name": "Calvin Montgomery Rankin",
      "alter-egos": "No alter egos found.",
      aliases: ["Cal", "Wolverine", "Calvin Rankin"],
      "place-of-birth": "Passiac, New Jersey",
      "first-appearance": "Uncanny X-Men #19",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'2", "188 cm"],
      weight: ["225 lb", "101 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation":
        "Formerly Brotherhood Of Mutants, Excalibur, X-Men, former agent of Onslaught and Sledge",
      relatives: "Ronald Rankin (father, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/97.jpg"
    }
  },
  {
    response: "success",
    id: "453",
    name: "Minna Murray",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Wilhelmina Harker",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Wildstorm",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/881.jpg"
    }
  },
  {
    response: "success",
    id: "454",
    name: "Misfit",
    powerstats: {
      intelligence: "63",
      strength: "32",
      speed: "23",
      durability: "80",
      power: "91",
      combat: "42"
    },
    biography: {
      "full-name": "Charlotte Gage-Radcliffe",
      "alter-egos": "Batgirl V",
      aliases: ["Batgirl"],
      "place-of-birth": "-",
      "first-appearance": "Birds of Prey #96",
      publisher: "Batgirl V",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Blue",
      "hair-color": "Red"
    },
    work: { occupation: "-", base: "Dalten Towers, Metropolis" },
    connections: { "group-affiliation": "Birds of Prey", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1114.jpg"
    }
  },
  {
    response: "success",
    id: "455",
    name: "Miss Martian",
    powerstats: {
      intelligence: "63",
      strength: "85",
      speed: "58",
      durability: "100",
      power: "100",
      combat: "45"
    },
    biography: {
      "full-name": "M'gann M'orzz",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Megan Morse; M'Gann M'Orzz (alternate spelling); Martian Girlhunter; Martian Manhunter (Titans Tomorrow alias)",
        "Star-Spangled Kid"
      ],
      "place-of-birth": "Mars",
      "first-appearance": "Teen Titans Vol 3 #37 (August, 2006)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'10", "178 cm"],
      weight: ["135 lb", "61 kg"],
      "eye-color": "Red",
      "hair-color": "Red"
    },
    work: {
      occupation: "Adventurer",
      base:
        "Arizona; San Francisco, California; formerly the Tanami Desert, Australia"
    },
    connections: { "group-affiliation": "Teen Titans", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1394.jpg"
    }
  },
  {
    response: "success",
    id: "456",
    name: "Mister Fantastic",
    powerstats: {
      intelligence: "100",
      strength: "10",
      speed: "18",
      durability: "70",
      power: "33",
      combat: "64"
    },
    biography: {
      "full-name": "Reed Richards",
      "alter-egos": "No alter egos found.",
      aliases: ["Mr Fantastic"],
      "place-of-birth": "Central City, California",
      "first-appearance": "FANTASTIC FOUR #1",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human / Radiation",
      height: ["6'1", "185 cm"],
      weight: ["180 lb", "81 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: { occupation: "Scientist, adventurer", base: "New York City" },
    connections: {
      "group-affiliation": "Fantastic Four",
      relatives:
        "Nathaniai (father), Evelyn (mother, deceased), Susan Storm - Invisible Woman (wife), Franklin (son), Johnny Storm - Human Torch (brother-inlaw), Cassandra (stepmother, deceased), Immortus (father's descendant, see Immortus, Kang, Rama-Tut)."
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/408.jpg"
    }
  },
  {
    response: "success",
    id: "457",
    name: "Mister Freeze",
    powerstats: {
      intelligence: "75",
      strength: "32",
      speed: "12",
      durability: "70",
      power: "37",
      combat: "28"
    },
    biography: {
      "full-name": "Victor Fries",
      "alter-egos": "No alter egos found.",
      aliases: ["Mister Zero", "Doctor Zero", "Doctor Schimmell"],
      "place-of-birth": "-",
      "first-appearance": "Batman #121 (Feb. 1959)",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'0", "183 cm"],
      weight: ["190 lb", "86 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "Assorted Batman rogues, The Society",
      relatives:
        "Nora Fries (wife, deceased, then resurrected as Lazara), Charles (Father) and Lorraine Fries (Mother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/742.jpg"
    }
  },
  {
    response: "success",
    id: "458",
    name: "Mister Knife",
    powerstats: {
      intelligence: "75",
      strength: "10",
      speed: "17",
      durability: "30",
      power: "13",
      combat: "65"
    },
    biography: {
      "full-name": "J'son",
      "alter-egos": "No alter egos found.",
      aliases: ["Jason of Spartax", "Jason of Sparta", "Star-Lord", "Mr Knife"],
      "place-of-birth": "Spartax, Spartoi Empire, near the Shi'ar Galaxy",
      "first-appearance": "Inhumans Vol 3 #2 (July, 2000)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Spartoi",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Blue",
      "hair-color": "Brown"
    },
    work: {
      occupation: "Crimelord; former emperor, prince",
      base: "Formerly Spartax, Spartoi Empire, near the Shi'ar Galaxy"
    },
    connections: {
      "group-affiliation":
        "Slaughter Lords (leader); formerly Galactic Council, ruler of the Spartoi Empire",
      relatives:
        "Eson (father, deceased), Peter Quill (Star-Lord, son), Victoria (daughter)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10633.jpg"
    }
  },
  {
    response: "success",
    id: "459",
    name: "Mister Mxyzptlk",
    powerstats: {
      intelligence: "100",
      strength: "85",
      speed: "100",
      durability: "100",
      power: "100",
      combat: "50"
    },
    biography: {
      "full-name": "Mr. Mxyzptlk",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Superman #30",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "God / Eternal",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/744.jpg"
    }
  },
  {
    response: "success",
    id: "46",
    name: "Arsenal",
    powerstats: {
      intelligence: "null",
      strength: "54",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Roy William Harper, Jr.",
      "alter-egos": "Speedy",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Speedy",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1014.jpg"
    }
  },
  {
    response: "success",
    id: "460",
    name: "Mister Sinister",
    powerstats: {
      intelligence: "100",
      strength: "48",
      speed: "46",
      durability: "90",
      power: "100",
      combat: "50"
    },
    biography: {
      "full-name": "Nathaniel Essex",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Sinister",
        "Robert Windsor",
        "Arnold Bocklin",
        "Mike Milbury",
        "Apocalypse",
        "Steven Shaffran",
        "Edmond Atkinson",
        "Nate",
        "Administrator Pearson",
        "Nosferatu",
        "Nathan Milbury",
        "Pale Man"
      ],
      "place-of-birth": "London, England",
      "first-appearance": "Uncanny X-Men #221 (September, 1987)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human / Altered",
      height: ["6'5", "196 cm"],
      weight: ["285 lb", "128 kg"],
      "eye-color": "Red",
      "hair-color": "Black"
    },
    work: {
      occupation: "Geneticist, Criminal, biologist and mutant-supremacist",
      base:
        "Many bases throughout the world including his State Home for Foundlings and the Center for Homo Superior Medical Care."
    },
    connections: {
      "group-affiliation":
        "Marauders (founder), Nasty Boys (founder); formerly Weapon X, Third Reich",
      relatives:
        'Rebecca Essex (wife, deceased), Adam Stanislaus Essex (son, deceased), N2 (creation, deceased), Madelyne Pryor (creation, deceased), Claudine Renko (clone "daughter")'
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/856.jpg"
    }
  },
  {
    response: "success",
    id: "461",
    name: "Mister Zsasz",
    powerstats: {
      intelligence: "88",
      strength: "22",
      speed: "33",
      durability: "28",
      power: "18",
      combat: "85"
    },
    biography: {
      "full-name": "Victor Zsasz",
      "alter-egos": "No alter egos found.",
      aliases: ["Mr Zsasz"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: { occupation: "Serial Killer", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1486.jpg"
    }
  },
  {
    response: "success",
    id: "462",
    name: "Mockingbird",
    powerstats: {
      intelligence: "75",
      strength: "31",
      speed: "38",
      durability: "20",
      power: "48",
      combat: "95"
    },
    biography: {
      "full-name": "Barbara Morse",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Barbara Morse-Barton",
        "Roberta Morse",
        "Agent 19",
        "Huntress",
        "Bobbi Van Dyne; once posed as Shooting Star"
      ],
      "place-of-birth": "San Diego, California",
      "first-appearance": "Astonishing Tales #6 (June, 1971)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["5'9", "175 cm"],
      weight: ["135 lb", "61 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation:
        "Adventurer; former counter-terrorist agent, private investigator, government operative, S.H.I.E.L.D. agent, biologist",
      base: "New York City, New York"
    },
    connections: {
      "group-affiliation":
        "World Counterterrorism Agency; formerly Secret Avengers, New Avengers, West Coast Avengers, Avengers, Great Lakes Avengers, S.H.I.E.L.D.; partner of Hawkeye; associate of Dr. Wilma Calvin",
      relatives:
        "Susan Morse (mother); Ben Morse (brother); Hawkeye (Clint Barton) (ex-husband)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1328.jpg"
    }
  },
  {
    response: "success",
    id: "463",
    name: "MODOK",
    powerstats: {
      intelligence: "100",
      strength: "18",
      speed: "25",
      durability: "25",
      power: "79",
      combat: "15"
    },
    biography: {
      "full-name": "George Tarleton",
      "alter-egos": "No alter egos found.",
      aliases: ["M.O.D.O.K.", "Mental Organism Designed Only for Killing"],
      "place-of-birth": "-",
      "first-appearance": "Tales of Suspense #93",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Cyborg",
      height: ["12'0", "366 cm"],
      weight: ["750 lb", "338 kg"],
      "eye-color": "White",
      "hair-color": "Brownn"
    },
    work: {
      occupation:
        "Would-be conqueror, AIM leader, terrorist; former AIM agent, technician",
      base: "-"
    },
    connections: {
      "group-affiliation": "-",
      relatives:
        "M.O.D.O.K. Superior (clone), Head Case (son), Number None (son)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10438.jpg"
    }
  },
  {
    response: "success",
    id: "465",
    name: "Mohinder Suresh",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Mohinder Suresh",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "India",
      "first-appearance": "Heroes S01E01 - Genesis",
      publisher: "NBC - Heroes",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: {
      occupation:
        "Former agent of Pinehearst Company, former Company medical professional & agent, former taxi driver, former genetics professor",
      base: "Apartment in Brooklyn, NY"
    },
    connections: {
      "group-affiliation": "-",
      relatives:
        "formerly Maya Herrera, formerly Mira Shenoy, Chandra Suresh (deceased), Unnamed mother, Shanti Suresh"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1313.jpg"
    }
  },
  {
    response: "success",
    id: "466",
    name: "Moloch",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Edgar William Jacobi",
      "alter-egos": "No alter egos found.",
      aliases: ["William Edgar Bright", "Moloch the Mystic"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1061.jpg"
    }
  },
  {
    response: "success",
    id: "467",
    name: "Molten Man",
    powerstats: {
      intelligence: "50",
      strength: "73",
      speed: "23",
      durability: "84",
      power: "53",
      combat: "56"
    },
    biography: {
      "full-name": "Mark Raxton",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Amazing Spider-Man #28 (1965)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'5", "196 cm"],
      weight: ["550 lb", "248 kg"],
      "eye-color": "Gold",
      "hair-color": "Gold"
    },
    work: {
      occupation:
        "Security guard for Osborn industries, former criminal, lab assistant",
      base: "-"
    },
    connections: {
      "group-affiliation": "Exterminators",
      relatives:
        "Doris Raxton (mother), Liz Allan Osborn (step-sister), Harry Osborn (Green Goblin II , step-brother-in-law, deceased), Norman Osborn Jr. (Green Goblin I, step-nephew)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/411.jpg"
    }
  },
  {
    response: "success",
    id: "468",
    name: "Monarch",
    powerstats: {
      intelligence: "null",
      strength: "100",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Nathaniel Christopher Adam",
      "alter-egos": "No alter egos found.",
      aliases: ["Monarch", "Allen Adam", "Cameron Scott", "Captain Atom"],
      "place-of-birth": "-",
      "first-appearance": "Captain Atom #1 (D.C., March, 1987)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'4", "193 cm"],
      weight: ["200 lb", "90 kg"],
      "eye-color": "Blue",
      "hair-color": "White"
    },
    work: {
      occupation:
        "Adventurer, former U.S. Special Agent, former U.S. Air Force Captain",
      base: "-"
    },
    connections: {
      "group-affiliation":
        "formally Justice League, Extreme Justice, Super Buddies, L.A.W., United States Air Force",
      relatives:
        "Angela Adams (wife, deceased), Margaret Eiling (daughter), Randall Eiling (son)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1006.jpg"
    }
  },
  {
    response: "success",
    id: "469",
    name: "Monica Dawson",
    powerstats: {
      intelligence: "50",
      strength: "10",
      speed: "35",
      durability: "14",
      power: "48",
      combat: "90"
    },
    biography: {
      "full-name": "Monica Dawson",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Heroes S02E04 - The Kindness of Strangers",
      publisher: "NBC - Heroes",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "Fast food service", base: "New Orleans, LA" },
    connections: {
      "group-affiliation": "-",
      relatives:
        "Nana Dawson (Grandmother), Damon (brother), DL Hawkins (cousin), Niki Sanders (cousin-in-law once removed), Micah Sanders (second cousin)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/942.jpg"
    }
  },
  {
    response: "success",
    id: "47",
    name: "Astro Boy",
    powerstats: {
      intelligence: "null",
      strength: "90",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Atom",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "null",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1159.jpg"
    }
  },
  {
    response: "success",
    id: "470",
    name: "Moon Knight",
    powerstats: {
      intelligence: "50",
      strength: "36",
      speed: "23",
      durability: "42",
      power: "28",
      combat: "75"
    },
    biography: {
      "full-name": "Marc Spector",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Jake Lockley",
        "Steven Grant",
        "Yitzak Topol",
        "Fist of Khonshu",
        "Crescent Crusader",
        "Lunar Legionnaire"
      ],
      "place-of-birth": "Chicago, Illinois",
      "first-appearance": "Werewolf by Night #32 (August, 1975)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'2", "188 cm"],
      weight: ["225 lb", "101 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: {
      occupation:
        "Adventurer, entrepreneur; former prize fighter, spy, soldier, mercenary, cab driver",
      base:
        "New York City; formerly Spector Mansion, Long Island, Avengers Compound, California"
    },
    connections: {
      "group-affiliation":
        "Secret Avengers; formerly: US Marine Corps, Central Intelligence Agency (CIA), partner of Jean-Paul du Champ, partner of Raoul Bushman, partner of Midnight, West Coast Avengers, Marvel Knights, Defenders",
      relatives:
        "Shadowknight (Randall Spector) (brother, deceased), Elias (father, deceased), Seth Phalkon (alleged great-great-grandfather)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/415.jpg"
    }
  },
  {
    response: "success",
    id: "471",
    name: "Moonstone",
    powerstats: {
      intelligence: "56",
      strength: "67",
      speed: "47",
      durability: "52",
      power: "74",
      combat: "80"
    },
    biography: {
      "full-name": "Karla Sofen",
      "alter-egos": "No alter egos found.",
      aliases: ["Meteorite", " Kate Sorenson"],
      "place-of-birth": "Van Nuys, California",
      "first-appearance": "Captain America Vol. 1 #192 (December, 1975)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'11", "180 cm"],
      weight: ["130 lb", "59 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation: "former Adventurer, Psychiatrist",
      base: "formerly Mount Charteris; Four Freedoms Plaza"
    },
    connections: {
      "group-affiliation":
        "Dark Avengers, Formerly; Thunderbolts, Femizons, Masters of Evil, Doctor Faustus, the Corporation, former partner of Blackout (Marcus Daniels)",
      relatives:
        "Karl August Sofen (father), Marion Sofen (mother), unnamed maternal grandparents (only mentioned )"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/100.jpg"
    }
  },
  {
    response: "success",
    id: "472",
    name: "Morlun",
    powerstats: {
      intelligence: "63",
      strength: "60",
      speed: "35",
      durability: "42",
      power: "74",
      combat: "56"
    },
    biography: {
      "full-name": "Morlun",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Amazing Spider-Man #30 (2001)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'2", "188 cm"],
      weight: ["175 lb", "79 kg"],
      "eye-color": "White / Red",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1171.jpg"
    }
  },
  {
    response: "success",
    id: "473",
    name: "Morph",
    powerstats: {
      intelligence: "null",
      strength: "40",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Kevin Sydney",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Pittsburgh, Pennsylvania",
      "first-appearance": "Exiles #1",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["5'10", "178 cm"],
      weight: ["175 lb", "79 kg"],
      "eye-color": "White",
      "hair-color": "No Hair"
    },
    work: { occupation: "Adventurer, reality traveler", base: "Mobile" },
    connections: {
      "group-affiliation":
        "Exiles; (Formerly) X-Men, New Mutants, Avengers all of his home reality",
      relatives: "Unnamed mother (deceased), Unnamed father"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/102.jpg"
    }
  },
  {
    response: "success",
    id: "474",
    name: "Moses Magnum",
    powerstats: {
      intelligence: "75",
      strength: "28",
      speed: "12",
      durability: "42",
      power: "55",
      combat: "56"
    },
    biography: {
      "full-name": "Moses Magnum",
      "alter-egos": "No alter egos found.",
      aliases: ["Magnum Force,"],
      "place-of-birth": "-",
      "first-appearance": "Giant-Size Spider-Man #4 (1975)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["5'9", "175 cm"],
      weight: ["159 lb", "72 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: {
      occupation:
        "Terrorist, president of Magnum Munitions; former ruler of Canaan",
      base: "-"
    },
    connections: {
      "group-affiliation":
        "Magnum Force (leader), agent of Apocalypse; former agent of They Who Wield Power",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1020.jpg"
    }
  },
  {
    response: "success",
    id: "475",
    name: "Mr Immortal",
    powerstats: {
      intelligence: "50",
      strength: "10",
      speed: "8",
      durability: "100",
      power: "69",
      combat: "30"
    },
    biography: {
      "full-name": "Craig Hollis",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "West Coast Avengers Vol 2 #46",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["6'2", "188 cm"],
      weight: ["156 lb", "70 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10794.jpg"
    }
  },
  {
    response: "success",
    id: "476",
    name: "Mr Incredible",
    powerstats: {
      intelligence: "50",
      strength: "83",
      speed: "33",
      durability: "95",
      power: "29",
      combat: "40"
    },
    biography: {
      "full-name": "Robert Parr",
      "alter-egos": "No alter egos found.",
      aliases: ["Mr. I", "The Hero's Hero", "Bob Parr"],
      "place-of-birth": "-",
      "first-appearance": "The Incredibles (Movies, 2004)",
      publisher: "Dark Horse Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'7", "201 cm"],
      weight: ["350 lb", "158 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "Incredible Family",
      relatives:
        "Helen Parr (Elastigirl, wife), Violet Parr(Violet, daughter), Dashiell Parr (Dash, son), Jack-jack (son)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/869.jpg"
    }
  },
  {
    response: "success",
    id: "477",
    name: "Ms Marvel II",
    powerstats: {
      intelligence: "38",
      strength: "63",
      speed: "23",
      durability: "84",
      power: "11",
      combat: "56"
    },
    biography: {
      "full-name": "Sharon Ventura",
      "alter-egos": "She-Thing",
      aliases: ["She-Thing"],
      "place-of-birth": "Pullman, Washington",
      "first-appearance": "-",
      publisher: "She-Thing",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'8", "173 cm"],
      weight: ["135 lb", "61 kg"],
      "eye-color": "Blue",
      "hair-color": "Red"
    },
    work: {
      occupation:
        "Wanderer, former adventurer, wrestler, stunt woman, scuba diver, motorcycle performer",
      base: "-"
    },
    connections: {
      "group-affiliation":
        "Former member of the Fantastic Four, Frightful Four, Unlimited Class Wrestling Federation, Thunderiders",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/897.jpg"
    }
  },
  {
    response: "success",
    id: "478",
    name: "Multiple Man",
    powerstats: {
      intelligence: "63",
      strength: "11",
      speed: "23",
      durability: "70",
      power: "28",
      combat: "62"
    },
    biography: {
      "full-name": "James Arthur",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Los Alamos, New Mexico",
      "first-appearance": "GIANT-SIZE FANTASTIC FOUR #4",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["5'11'", "180 cm"],
      weight: ["155 lb", "70 kg"],
      "eye-color": "Blue",
      "hair-color": "Brown"
    },
    work: {
      occupation: "Private investigator (formerly) Farmer, Adventurer",
      base: "New York City"
    },
    connections: {
      "group-affiliation":
        "X-Factor Investigations (formerly) X-Factor, Fallen Angels, X-Corps, X-Corporation",
      relatives:
        "Dr. Daniel Madrox (father, deceased), Joan Madrox (mother, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/104.jpg"
    }
  },
  {
    response: "success",
    id: "479",
    name: "Mysterio",
    powerstats: {
      intelligence: "81",
      strength: "10",
      speed: "17",
      durability: "40",
      power: "82",
      combat: "70"
    },
    biography: {
      "full-name": "Quentin Beck",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Nicholas Macabes",
        "Rudolph Hines",
        "Gerdes",
        "Doctor Ludwig Rinehart"
      ],
      "place-of-birth": "New York, New York",
      "first-appearance": "Amazing Spider-Man #13 (1964)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'11", "180 cm"],
      weight: ["175 lb", "79 kg"],
      "eye-color": "Brown",
      "hair-color": "No Hair"
    },
    work: {
      occupation:
        "Criminal; former Hollywood special effects designer and stunt man",
      base:
        "New York City, New York State (Earth-1610) formerly New York City, New York (Earth-616)"
    },
    connections: {
      "group-affiliation": "None; Former Sinister Six",
      relatives:
        "Henrietta Beck (mother), Elmore Beck (father), Vincent (uncle), Maguire Beck (Jack O'Lantern) (cousin)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1039.jpg"
    }
  },
  {
    response: "success",
    id: "48",
    name: "Atlas",
    powerstats: {
      intelligence: "63",
      strength: "80",
      speed: "25",
      durability: "100",
      power: "98",
      combat: "50"
    },
    biography: {
      "full-name": "Erik Josten",
      "alter-egos": "Goliath, Power Man, Smuggler",
      aliases: [
        "Power Man",
        "Smuggler",
        "Goliath",
        "Shatterfist",
        "Intruder from Beyond",
        "Edward Jantzen"
      ],
      "place-of-birth": "Milwaukee, Wisconsin",
      "first-appearance": "Incredible Hulk #449",
      publisher: "Goliath",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["6'0", "183 cm"],
      weight: ["225 lb", "101 kg"],
      "eye-color": "Brown",
      "hair-color": "Red"
    },
    work: {
      occupation:
        "Adventurer; former professional criminal, mercenary, dock worker, soldier",
      base: "-"
    },
    connections: {
      "group-affiliation":
        "Thunderbolts, formerly Revengers, Defenders (New Jersey Initiative team), Masters of Evil, Maggia, Grim Reaper's Lethal Legion, Mandarin's Minions, Emissaries of Evil; former partner of Citizen V (Dallas Riordan) and Swordsman, Count Nefaria's Lethal Legi",
      relatives:
        "Unidentified parents (deceased), Carl (brother, deceased), Conrad (brother), Lindy (sister, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/878.jpg"
    }
  },
  {
    response: "success",
    id: "480",
    name: "Mystique",
    powerstats: {
      intelligence: "75",
      strength: "12",
      speed: "23",
      durability: "64",
      power: "64",
      combat: "74"
    },
    biography: {
      "full-name": "Raven Darkholme",
      "alter-egos": "No alter egos found.",
      aliases: ["Mallory Brickman"],
      "place-of-birth": "-",
      "first-appearance":
        "(as Raven Darkholme) MS. MARVEL #16, (as Mystique) MS. MARVEL #18",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Female",
      race: "Mutant",
      height: ["5'10", "178 cm"],
      weight: ["120 lb", "54 kg"],
      "eye-color": "Yellow (without irises)",
      "hair-color": "Red / Orange"
    },
    work: {
      occupation:
        "Special operative for Germany and the United States governments, (former) German Freedom Fighter, special operative in the Weapon X Project Team",
      base: "Arlington, Virginia"
    },
    connections: {
      "group-affiliation":
        "Founder and leader of the third Brotherhood of Evil Mutants, now known as Freedom Force; X-Factor, X-Men",
      relatives:
        "Rogue (unofficial foster daughter), Ralph Brickman (husband), Gloria Brickman (daughter), Graydon Creed (son, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/817.jpg"
    }
  },
  {
    response: "success",
    id: "481",
    name: "Namor",
    powerstats: {
      intelligence: "69",
      strength: "95",
      speed: "58",
      durability: "70",
      power: "73",
      combat: "85"
    },
    biography: {
      "full-name": "Namor McKenzie",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Imperius Rex",
        "Dr. G.W. Falton",
        "Sub-Mariner",
        '"Subby"',
        "Namor the First",
        "Avenging Son",
        "Old Man",
        "Rex",
        "Joe Pierre",
        "Lord of the Seven Seas",
        "the Scion of the Deep",
        "Phoenix"
      ],
      "place-of-birth": "Atlantis",
      "first-appearance": "Motion Picture Funnies Weekly #1 (April, 1939)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Atlantean",
      height: ["6'2", "188 cm"],
      weight: ["278 lb", "125 kg"],
      "eye-color": "Grey",
      "hair-color": "Black"
    },
    work: {
      occupation: "King of Atlantis, Adventurer; former warrior, commando, CEO",
      base:
        "Ultimate Universe; formerly New Atlantis, Utopia, San Francisco Bay, California; Atlantis; Necropolis, Wakanda; occasionally mobile"
    },
    connections: {
      "group-affiliation":
        "Cabal (founder), Invaders, Atlantis; formerly Illuminati, X-Men, Extinction Team, Phoenix Five, Defenders, Osborn's X-Men, Osborn's Cabal, Avengers, All-Winners Squad, Titans Three, Fantastic Four, Oracle Inc., Order, Deep Six (founder and leader); ally o",
      relatives:
        "Elanna (maternal ancestor), Tanas (maternal ancestor), Zartra (maternal ancestor), Orrek (maternal distant relative), Stegor (maternal ancestor), Kamuu (maternal ancestor), Harran (maternal ancestor), Kalen (maternal ancestor), Ossem (maternal ancestor), Balaal (maternal ancestor), Thallo (maternal ancestor), Immanu (maternal great-grandfather-in-law, deceased), Thakorr (maternal grandfather, deceased), Korra (maternal grandmother), Wa-Korr (grandfather-in-law, presumed deceased), Wathan (father-in-law, presumed deceased), Tom Smallwood (father-in-law), Gladys Smallwood (mother-in-law), Zarina (maternal aunt), Namora's father (uncle), Daka (maternal uncle), Brynn (aunt-by-marriage/step-grandmother), Fen (mother, deceased), Leonard McKenzie (father, deceased), Experiment N2 (clone), Lawrence McKenzie (paternal half-brother), Dorma (wife / distant cousin, deceased), Marrina (wife), three unnamed children (by Marrina), Kamar (son, deceased), Black Moray (Leon McKenzie) (paternal half-nephew), Llyron McKenzie (paternal great-nephew), Dan Smallwood (brother-in-law), Namora (maternal cousin), Beemer (maternal cousin), Bobo (maternal cousin), Byrrahna (maternal cousin), Namita (maternal cousin), Daro (maternal cousin), Dara (maternal cousin), Seth (maternal cousin), Argus (maternal cousin), Arkus (maternal cousin), Byrrah (maternal cousin), Namorita (maternal 1st cousin once removed)."
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/137.jpg"
    }
  },
  {
    response: "success",
    id: "482",
    name: "Namor",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/105.jpg"
    }
  },
  {
    response: "success",
    id: "483",
    name: "Namora",
    powerstats: {
      intelligence: "50",
      strength: "85",
      speed: "42",
      durability: "42",
      power: "48",
      combat: "64"
    },
    biography: {
      "full-name": "Aquaria Nautica Neptunia",
      "alter-egos": "No alter egos found.",
      aliases: ["Sub-Mariner", "Avenging Daughter", "the Sea Beauty"],
      "place-of-birth": "Unnamed Atlantean outpost",
      "first-appearance": "Marvel Mystery Comics #82 (1947)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'11", "180 cm"],
      weight: ["189 lb", "85 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation":
        "Agents of Atlas, Long-time ally of Namor; Monster Hunters, Invaders, All Winners Squad; At one time or another was partnered with FBI Agent Jimmy Woo, Sun Girl, Venus, Golden Girl, Hulk",
      relatives:
        'Namor (cousin), Talan (husband, deceased), Namorita ("daughter" cloned)'
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1364.jpg"
    }
  },
  {
    response: "success",
    id: "484",
    name: "Namorita",
    powerstats: {
      intelligence: "50",
      strength: "72",
      speed: "47",
      durability: "70",
      power: "37",
      combat: "70"
    },
    biography: {
      "full-name": "Namorita Prentiss",
      "alter-egos": "No alter egos found.",
      aliases: ["Kymaera", "Hard"],
      "place-of-birth": "Atlantis Outskirts",
      "first-appearance": "SUB-MARINER Vol. 2 #50 (1972)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'6", "168 cm"],
      weight: ["225 lb", "101 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation: "Superhero, formerly Leader of Atlantis",
      base: "Mobile, formerly New Warriors headquarters and Atlantis"
    },
    connections: {
      "group-affiliation":
        "Formerly Council of Three, New Warriors, Fantastic Four, Soldiers of Misfortune, Water Children",
      relatives:
        "Namora (mother); Talan (father, deceased); Namor, Byrrah, Dara, Arkus (first cousins once removed); Fen (great-aunt, deceased); Thakorr (great-grandfather, deceased); Korra (great-grandmother, presumed deceased); large extended family; Betty Prentiss (legal guardian, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/106.jpg"
    }
  },
  {
    response: "success",
    id: "486",
    name: "Nathan Petrelli",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Nathan Petrelli",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Heroes S01E01",
      publisher: "NBC - Heroes",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Brown",
      "hair-color": "-"
    },
    work: {
      occupation:
        "formerly a U.S. Congressman, formerly a district attorney, formerly a Navy officer",
      base: "Mansion in Hyde Park, NY"
    },
    connections: {
      "group-affiliation": "-",
      relatives:
        "Angela Petrelli (mother), unnamed father (deceased), Peter Petrelli (younger brother), Simon Petrelli (son), Monty Petrelli (son), Claire Bennet (daughter)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/949.jpg"
    }
  },
  {
    response: "success",
    id: "487",
    name: "Nebula",
    powerstats: {
      intelligence: "63",
      strength: "52",
      speed: "13",
      durability: "50",
      power: "42",
      combat: "60"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Avengers #257 (July, 1985)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Female",
      race: "Luphomoid",
      height: ["6'1", "185 cm"],
      weight: ["185 lb", "83 kg"],
      "eye-color": "Blue",
      "hair-color": "No Hair"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation":
        "Graces, United Front, former leader of a mercenary band",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10632.jpg"
    }
  },
  {
    response: "success",
    id: "488",
    name: "Negasonic Teenage Warhead",
    powerstats: {
      intelligence: "50",
      strength: "7",
      speed: "8",
      durability: "10",
      power: "45",
      combat: "35"
    },
    biography: {
      "full-name": "Ellie Phimister",
      "alter-egos": "No alter egos found.",
      aliases: ["Warhead"],
      "place-of-birth": "-",
      "first-appearance": "New X-Men #115",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Mutant",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Black",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10556.jpg"
    }
  },
  {
    response: "success",
    id: "49",
    name: "Atlas",
    powerstats: {
      intelligence: "63",
      strength: "100",
      speed: "42",
      durability: "100",
      power: "27",
      combat: "80"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["Atlas the Great", "Atlas the Untamed"],
      "place-of-birth": "Crystal Mountain",
      "first-appearance": "Action Comics #121",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "God / Eternal",
      height: ["6'6", "198 cm"],
      weight: ["280 lb", "126 kg"],
      "eye-color": "Blue",
      "hair-color": "Brown"
    },
    work: { occupation: "-", base: "Formely; Hyssa, Metropolis" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10838.jpg"
    }
  },
  {
    response: "success",
    id: "490",
    name: "Nightcrawler",
    powerstats: {
      intelligence: "50",
      strength: "10",
      speed: "47",
      durability: "14",
      power: "76",
      combat: "80"
    },
    biography: {
      "full-name": "Kurt Wagner",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Somewhere in the Bavarian Alps",
      "first-appearance": "GIANT-SIZE X-MEN #1",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["5'9'", "175 cm"],
      weight: ["195 lb", "88 kg"],
      "eye-color": "Yellow",
      "hair-color": "Indigo"
    },
    work: {
      occupation: "Adventurer, Teacher",
      base:
        "Xavier Institute for Higher Learning, Salem Center, Westchester County, New York (former) Muir Island, Scotland; Braddock Lighthouse"
    },
    connections: {
      "group-affiliation": "X-Men, formerly Excalibur",
      relatives:
        "Eric Wagner (father, deceased), Margali Szardos (foster mother), Jimaine Szardos (Daytripper, alias Amanda Sefton, foster sister), Stefan Szardos (foster brother, deceased), Mystique (mother), Graydon Creed (half-brother, deceased)."
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/107.jpg"
    }
  },
  {
    response: "success",
    id: "491",
    name: "Nightwing",
    powerstats: {
      intelligence: "88",
      strength: "11",
      speed: "33",
      durability: "28",
      power: "36",
      combat: "100"
    },
    biography: {
      "full-name": "Dick Grayson",
      "alter-egos": "Batman II, Robin",
      aliases: [
        "Freddie Dinardo",
        "Freddy Loyd",
        "The Target",
        "Renegade",
        "The Worlds Greatest Acrobat",
        "The Aerial Avenger",
        "Pixie Boots",
        "The Boy / Teen Wonder",
        "The Worlds Greatest Detective",
        "The Caped Crusader"
      ],
      "place-of-birth": "Gotham City",
      "first-appearance":
        "as Dick Grayson and Robin) Detective Comics #38, (as Nightwing) Tales of the Teen Titans #44, (as Batman) Batman #512",
      publisher: "Batman II",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'10", "178 cm"],
      weight: ["175 lb", "79 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: {
      occupation:
        "Vigilante and detective, former police officer, former Circus Acrobat",
      base:
        "Wayne Tower, Gotham City; formerly the Batcave; formerly Bludhaven; formerly New York City"
    },
    connections: {
      "group-affiliation":
        "Batman Family and the JLA; formerly the Teen Titans, the New Titans, the Titans and the Outsiders",
      relatives:
        "John Grayson (father, deceased), Mary Grayson (mother, deceased), Bruce Wayne / Batman (adoptive father), Damian Wayne / Robin (foster brother), Jason Todd / Red Hood (adoptive brother), Tim Drake / Red Robin (adoptive brother), Cassandra Cain / Batgirl IV (adoptive sister)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/851.jpg"
    }
  },
  {
    response: "success",
    id: "492",
    name: "Niki Sanders",
    powerstats: {
      intelligence: "63",
      strength: "52",
      speed: "35",
      durability: "28",
      power: "37",
      combat: "56"
    },
    biography: {
      "full-name": "Nicole Sanders",
      "alter-egos": "No alter egos found.",
      aliases: ["Jessica", "Gina"],
      "place-of-birth": "-",
      "first-appearance": "Heroes S01E01 - Genesis",
      publisher: "NBC - Heroes",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation:
        "Former casino worker and online webcam operator; currently an agent of the Company",
      base: "Las Vegas, NV"
    },
    connections: {
      "group-affiliation": "-",
      relatives:
        "DL Hawkins (husband), Hal Sanders (father), Micah Sanders (son), Jessica Sanders (sister,deceased), Monica Dawson (cousin-in-law), Damon Dawson (cousin-in-law), Paulette Hawkins (mother-in-law)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/952.jpg"
    }
  },
  {
    response: "success",
    id: "493",
    name: "Nina Theroux",
    powerstats: {
      intelligence: "63",
      strength: "5",
      speed: "8",
      durability: "10",
      power: "68",
      combat: "20"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "SyFy",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Alpha",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "Alphas", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1529.jpg"
    }
  },
  {
    response: "success",
    id: "494",
    name: "Nite Owl II",
    powerstats: {
      intelligence: "null",
      strength: "45",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Daniel Dreiberg",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "Watchmen", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1059.jpg"
    }
  },
  {
    response: "success",
    id: "495",
    name: "Northstar",
    powerstats: {
      intelligence: "50",
      strength: "18",
      speed: "83",
      durability: "56",
      power: "65",
      combat: "70"
    },
    biography: {
      "full-name": "Jean-Paul Beaubier",
      "alter-egos": "No alter egos found.",
      aliases: ["Jean-Paul Martin"],
      "place-of-birth": "Montreal, Qu?bec, Canada",
      "first-appearance": "X-Men #120 (1979)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["5'11", "180 cm"],
      weight: ["185 lb", "83 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: {
      occupation:
        "Former terrorist, adventurer, teacher, businessman, novelist, professional skier, trapeze artist, thief",
      base: "-"
    },
    connections: {
      "group-affiliation":
        "None, formerly Hydra, Xavier Institute Faculty/Alpha Squadron (teacher/advisor), X-Men, Alpha Flight, Front de Lib?ration du Qu?bec/Cell Combattre",
      relatives:
        "Jean-Baptiste Beaubier (father, deceased), unnamed mother (deceased), Louis Martin (adoptive father, deceased), unnamed adoptive mother (deceased), Jeanne-Marie Beaubier (Aurora, sister), Joanne Beaubier (adopted daughter, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1287.jpg"
    }
  },
  {
    response: "success",
    id: "496",
    name: "Nova",
    powerstats: {
      intelligence: "100",
      strength: "85",
      speed: "75",
      durability: "100",
      power: "100",
      combat: "80"
    },
    biography: {
      "full-name": "Richard Rider",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Rich",
        "Bucket-Head",
        "Human Rocket",
        "Kid Nova",
        "",
        "Nova Prime",
        "Quasar"
      ],
      "place-of-birth": "Queens, NY",
      "first-appearance": "NOVA Vol. 1 #1 (September, 1976)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'1", "185 cm"],
      weight: ["190 lb", "86 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: {
      occupation: "Superhero, also works parttime at Marvel Burger",
      base: "Mobile & Xandar, also formerly New Warriors headquarters"
    },
    connections: {
      "group-affiliation":
        "Nova Corps formely United Front (Leader), New Warriors, Champions of Xandar, Secret Defenders, Defender for a day",
      relatives:
        "Charles Rider (Father), Gloria Rider (Mother), Robbie Rider (Brother) , Ralph Rider (Uncle, deceased) , Ellen (aunt)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/109.jpg"
    }
  },
  {
    response: "success",
    id: "497",
    name: "Nova",
    powerstats: {
      intelligence: "63",
      strength: "60",
      speed: "100",
      durability: "100",
      power: "100",
      combat: "35"
    },
    biography: {
      "full-name": "Frankie Raye",
      "alter-egos": "No alter egos found.",
      aliases: ["Frances Hyatt", "Human Torch"],
      "place-of-birth": "-",
      "first-appearance": "Fantastic Four #164 (November, 1975)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human / Cosmic",
      height: ["5'4", "163 cm"],
      weight: ["130 lb", "59 kg"],
      "eye-color": "White",
      "hair-color": "Red"
    },
    work: { occupation: "-", base: "World-ship of Galactus" },
    connections: {
      "group-affiliation":
        "Defenders (Valkyrior), formerly Heralds of Galactus, Fantastic Four",
      relatives:
        '"Thomas Raye" (Phineas T. Horton, stepfather, deceased), Thomas Raymond (Toro, possible biological father); Lanette Raye (mother)'
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10313.jpg"
    }
  },
  {
    response: "success",
    id: "498",
    name: "Odin",
    powerstats: {
      intelligence: "100",
      strength: "83",
      speed: "67",
      durability: "95",
      power: "100",
      combat: "90"
    },
    biography: {
      "full-name": "Odin Borson",
      "alter-egos": "No alter egos found.",
      aliases: [
        "All-Father,Sky-Father",
        "Atum-Re",
        "Woden",
        "Wotan",
        "Oden",
        "Orrin",
        "Harbard",
        "King of Asgard"
      ],
      "place-of-birth": "Asgard",
      "first-appearance": "Journey into Mystery #85",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "God / Eternal",
      height: ["6'9", "206 cm"],
      weight: ["650 lb", "293 kg"],
      "eye-color": "Blue",
      "hair-color": "White"
    },
    work: {
      occupation:
        "Deity, Monarch of Asgard, Asgardian God of the Sky, Wind, Wisdom, Crafts, Time, and the Dead, Warrior",
      base: "City of Asgard, Asgard"
    },
    connections: {
      "group-affiliation": "Asgardians, Council of Godheads",
      relatives:
        "Buri (Tiwaz) (paternal grandfather), Bolthorn (maternal grandfather), Bor Burison (father, deceased), Bestla (mother), Mimir Burison (paternal uncle), Njord (paternal uncle), Vili, Ve, Cul (brothers), Frigga (wife), Freyr (father-in-law), Gullveig (sister-in-law), Thor (son by Jord), Vidar (son by Grid), Balder (son by Frigga), Tyr, Hermod (allegedly sons by Frigga), Angela (daughter by Frigga), Laussa (daughter by Frigga and Surtur), Loki (foster son), Hoder (nephew), Skadi (niece)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10388.jpg"
    }
  },
  {
    response: "success",
    id: "499",
    name: "Offspring",
    powerstats: {
      intelligence: "50",
      strength: "10",
      speed: "35",
      durability: "99",
      power: "100",
      combat: "56"
    },
    biography: {
      "full-name": "Luke O'Brian",
      "alter-egos": "No alter egos found.",
      aliases: ["Ernie McDunnagh", "Plastic Lad"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1298.jpg"
    }
  },
  {
    response: "success",
    id: "5",
    name: "Abraxas",
    powerstats: {
      intelligence: "88",
      strength: "63",
      speed: "83",
      durability: "100",
      power: "100",
      combat: "55"
    },
    biography: {
      "full-name": "Abraxas",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Within Eternity",
      "first-appearance": "Fantastic Four Annual #2001",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Cosmic Entity",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: { occupation: "Dimensional destroyer", base: "-" },
    connections: {
      "group-affiliation": "Cosmic Beings",
      relatives: 'Eternity ("Father")'
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/181.jpg"
    }
  },
  {
    response: "success",
    id: "50",
    name: "Atom",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Albert Pratt",
      "alter-egos": "No alter egos found.",
      aliases: ["Little Superman", "the Mighty Mite"],
      "place-of-birth": "-",
      "first-appearance": "All American Comics #19",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["5'10", "178 cm"],
      weight: ["150 lb", "68 kg"],
      "eye-color": "Blue",
      "hair-color": "Red"
    },
    work: {
      occupation: "Adventurer, Retired Professor of Nuclear Physics",
      base: "GBS Building, Gotham City (former) Calvin College on Earth-Two"
    },
    connections: {
      "group-affiliation":
        "formerly Justice Society of America; formerly All-Star Squadron",
      relatives:
        "Mary James (wife, deceased), Grant Albert Emerson (Damage, son), Albert Rothstein (aka Nuklon / Atom-Smasher, godson)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/934.jpg"
    }
  },
  {
    response: "success",
    id: "500",
    name: "Omega Red",
    powerstats: {
      intelligence: "null",
      strength: "61",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Arkady Gregorivich",
      "alter-egos": "No alter egos found.",
      aliases: ["Arkady Rossovich", "Vasyliev Arkady"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'11", "211 cm"],
      weight: ["425 lb", "191 kg"],
      "eye-color": "Red",
      "hair-color": "Blond"
    },
    work: { occupation: "Crimelord; former mercenary, KGB agent", base: "-" },
    connections: {
      "group-affiliation":
        "Red Mafia (kingpin); former employee of Sabretooth, The General, Ivan Pushkin, and Matsu'o Tsurayaba; formerly KGB",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/208.jpg"
    }
  },
  {
    response: "success",
    id: "501",
    name: "Omniscient",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name":
        "Omniscient is the closest English word that compares to his alien tongue.",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Another Unknown World",
      "first-appearance": "Team Epic Episode 101",
      publisher: "Team Epic TV",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["5'11", "180 cm"],
      weight: ["145 lb", "65 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: {
      occupation: "Superhero, Grade 9 physics teacher",
      base: "Toronto, Canada"
    },
    connections: { "group-affiliation": "Team Epic", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1003.jpg"
    }
  },
  {
    response: "success",
    id: "502",
    name: "One Punch Man",
    powerstats: {
      intelligence: "38",
      strength: "100",
      speed: "83",
      durability: "95",
      power: "55",
      combat: "50"
    },
    biography: {
      "full-name": "Saitama",
      "alter-egos": "No alter egos found.",
      aliases: ["Caped Baldy"],
      "place-of-birth": "-",
      "first-appearance": "One Punch - Chapter 1, Volume 1",
      publisher: "Shueisha",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'9", "175 cm"],
      weight: ["154 lb", "69 kg"],
      "eye-color": "-",
      "hair-color": "No Hair"
    },
    work: { occupation: "Superhero, Sensei", base: "Z-City" },
    connections: { "group-affiliation": "-", relatives: "Genos (partner)" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10522.jpg"
    }
  },
  {
    response: "success",
    id: "503",
    name: "One-Above-All",
    powerstats: {
      intelligence: "100",
      strength: "100",
      speed: "100",
      durability: "100",
      power: "100",
      combat: "100"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["One Above All"],
      "place-of-birth": "-",
      "first-appearance": "Doctor Strange Vol 2 #13",
      publisher: "Marvel Comics",
      alignment: "neutral"
    },
    appearance: {
      gender: "-",
      race: "Cosmic Entity",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "-",
      relatives: "Living Tribunal (creation)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10374.jpg"
    }
  },
  {
    response: "success",
    id: "504",
    name: "Onslaught",
    powerstats: {
      intelligence: "88",
      strength: "100",
      speed: "33",
      durability: "100",
      power: "100",
      combat: "55"
    },
    biography: {
      "full-name": "Onslaught",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Charlie Silus",
        "Sir David The Great",
        "Charles Xavier",
        "Magneto",
        "That Which Shall Survive",
        "the Entity",
        "Dark Xavier"
      ],
      "place-of-birth": "-",
      "first-appearance": "X-Man Vol 1 #15 (May, 1996)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["10'0", "305 cm"],
      weight: ["900 lb", "405 kg"],
      "eye-color": "Red",
      "hair-color": "No Hair"
    },
    work: {
      occupation: "Would-be destroyer",
      base: "Central Park Citadel, Astral Fortress"
    },
    connections: {
      "group-affiliation": "-",
      relatives: "Professor Charles Xavier (fusee, deceased); Magneto (fusee)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/13.jpg"
    }
  },
  {
    response: "success",
    id: "506",
    name: "Osiris",
    powerstats: {
      intelligence: "75",
      strength: "85",
      speed: "60",
      durability: "95",
      power: "65",
      combat: "42"
    },
    biography: {
      "full-name": "Amon Tomaz",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: { occupation: "-", base: "Shiruta, Kahndaq" },
    connections: {
      "group-affiliation": "-",
      relatives: "Isis (Sister, deceased), Black Adam (Brother-in-Law)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1165.jpg"
    }
  },
  {
    response: "success",
    id: "508",
    name: "Ozymandias",
    powerstats: {
      intelligence: "100",
      strength: "18",
      speed: "33",
      durability: "20",
      power: "49",
      combat: "95"
    },
    biography: {
      "full-name": "Adrian Veidt",
      "alter-egos": "No alter egos found.",
      aliases: ["The World's Smartest Man"],
      "place-of-birth": "-",
      "first-appearance": "Watchmen #1",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "Formerly The Crimebusters",
      relatives: "Friedrich Werner Veidt (father), Ingrid Renata Veidt (mother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1063.jpg"
    }
  },
  {
    response: "success",
    id: "509",
    name: "Parademon",
    powerstats: {
      intelligence: "9",
      strength: "28",
      speed: "17",
      durability: "50",
      power: "53",
      combat: "25"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Apokalips",
      "first-appearance": "New Gods #1",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "-",
      race: "Parademon",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "Darkseid", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10806.jpg"
    }
  },
  {
    response: "success",
    id: "51",
    name: "Atom",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1379.jpg"
    }
  },
  {
    response: "success",
    id: "510",
    name: "Paul Blart",
    powerstats: {
      intelligence: "8",
      strength: "11",
      speed: "21",
      durability: "50",
      power: "7",
      combat: "5"
    },
    biography: {
      "full-name": "Paul Blart",
      "alter-egos": "No alter egos found.",
      aliases: ["Mall Cop"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Sony Pictures",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'7", "170 cm"],
      weight: ["260 lb", "117 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10479.jpg"
    }
  },
  {
    response: "success",
    id: "511",
    name: "Penance",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "-",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/929.jpg"
    }
  },
  {
    response: "success",
    id: "512",
    name: "Penance I",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/930.jpg"
    }
  },
  {
    response: "success",
    id: "513",
    name: "Penance II",
    powerstats: {
      intelligence: "null",
      strength: "20",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Robert Baldwin",
      "alter-egos": "Speedball",
      aliases: ["Formerly Speedball", "Masked Marvel"],
      "place-of-birth": "Springdale, Connecticut",
      "first-appearance":
        "(as Speedball) Amazing Spider-Man Annual #22 (1988); (as Penance) Civil War: Front Line #10 (2007)",
      publisher: "Speedball",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'", "183 cm"],
      weight: ["197 lb", "89 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation:
        "Government operative; former adventurer, reality TV star, student, television show intern, engineering intern, lab worker",
      base: "-"
    },
    connections: {
      "group-affiliation": "Thunderbolts; formerly New Warriors",
      relatives: "Justin Baldwin (father), Madeline Naylor (mother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/900.jpg"
    }
  },
  {
    response: "success",
    id: "514",
    name: "Penguin",
    powerstats: {
      intelligence: "75",
      strength: "10",
      speed: "12",
      durability: "28",
      power: "30",
      combat: "45"
    },
    biography: {
      "full-name": "Oswald Chesterfield Cobblepot",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "DETECTIVE COMICS #58 (December, 1941)",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'2", "157 cm"],
      weight: ["175 lb", "79 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: { occupation: "Trader", base: "Gotham City" },
    connections: {
      "group-affiliation": "-",
      relatives:
        "Miranda Cobblepot (Aunt), Miranda (Mother, deceased), Father (deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/753.jpg"
    }
  },
  {
    response: "success",
    id: "515",
    name: "Phantom",
    powerstats: {
      intelligence: "null",
      strength: "48",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Christopher Walker",
      "alter-egos": "No alter egos found.",
      aliases: ["Mr Walker; Christopher Standish"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/889.jpg"
    }
  },
  {
    response: "success",
    id: "517",
    name: "Phoenix",
    powerstats: {
      intelligence: "100",
      strength: "100",
      speed: "83",
      durability: "100",
      power: "100",
      combat: "80"
    },
    biography: {
      "full-name": "Jean Grey",
      "alter-egos": "Jean Grey, White Phoenix of The Crown",
      aliases: ["Redd Dayspring", "Marvel Girl"],
      "place-of-birth": "-",
      "first-appearance": "X-Men #1 (September, 1963)",
      publisher: "Jean Grey",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Mutant",
      height: ["5'6", "168 cm"],
      weight: ["115 lb", "52 kg"],
      "eye-color": "Green",
      "hair-color": "Red"
    },
    work: {
      occupation: "Adventurer",
      base: "Xavier Institute of Higher Learning, Westchester County, New York"
    },
    connections: {
      "group-affiliation":
        "Formerly X-Men (founding member); Clan Rebellion, Muir Island X-Men; X-Factor/X-Terminators (founding member); Brides of Set",
      relatives:
        "Rachel Summers (daughter from an alternate universe), X-Man (son from an alternate universe), Cyclops (ex-husband), Havok (former brother-in-law), Corsair (former father-in-law), Madelyne Pryor (clone), Cable (adoptive/biological son), Stryfe (cloned biological son), Genesis (grandson)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/828.jpg"
    }
  },
  {
    response: "success",
    id: "518",
    name: "Plantman",
    powerstats: {
      intelligence: "63",
      strength: "60",
      speed: "25",
      durability: "55",
      power: "61",
      combat: "25"
    },
    biography: {
      "full-name": "Samuel Smithers",
      "alter-egos": "No alter egos found.",
      aliases: ["Blackheath"],
      "place-of-birth": "London, England",
      "first-appearance": "Strange Tales #113 (October, 1963)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["6'0", "183 cm"],
      weight: ["193 lb", "87 kg"],
      "eye-color": "Green",
      "hair-color": "Grey"
    },
    work: {
      occupation: "Professional Criminal, formerly Gardner",
      base:
        "A submarine somewhere in the Atlantic Ocean, formerly London, United Kingdom"
    },
    connections: {
      "group-affiliation":
        "Formerly Thunderbolts (as Blackheath), Crime Wave, Defenders (Villains) , New Enforcers, former associate of the Maggia under Count Nefaria, ally of Wizard.",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10487.jpg"
    }
  },
  {
    response: "success",
    id: "519",
    name: "Plastic Lad",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Luke O'Brian",
      "alter-egos": "No alter egos found.",
      aliases: ["Offspring"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1299.jpg"
    }
  },
  {
    response: "success",
    id: "52",
    name: "Atom Girl",
    powerstats: {
      intelligence: "38",
      strength: "10",
      speed: "23",
      durability: "28",
      power: "38",
      combat: "42"
    },
    biography: {
      "full-name": "Salu Digby",
      "alter-egos": "No alter egos found.",
      aliases: ["Shrinking Violet"],
      "place-of-birth": "-",
      "first-appearance": "Teen Titans/Legion Special #1 (2004)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'6", "168 cm"],
      weight: ["120 lb", "54 kg"],
      "eye-color": "Black",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "United Planets, 31st century" },
    connections: {
      "group-affiliation": "Legion of Super-Heroes",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1180.jpg"
    }
  },
  {
    response: "success",
    id: "520",
    name: "Plastic Man",
    powerstats: {
      intelligence: "50",
      strength: "63",
      speed: "23",
      durability: "100",
      power: "100",
      combat: "56"
    },
    biography: {
      "full-name": "Patrick O'Brian",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Police Comics #1 (August, 1941)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'1", "185 cm"],
      weight: ["178 lb", "80 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: { occupation: "Government Agent", base: "-" },
    connections: {
      "group-affiliation":
        "The FBI; formerly the Justice League of America; the All-Star Squadron and the Freedom Fighters",
      relatives: "Offspring (son)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/756.jpg"
    }
  },
  {
    response: "success",
    id: "521",
    name: "Plastique",
    powerstats: {
      intelligence: "50",
      strength: "10",
      speed: "23",
      durability: "28",
      power: "60",
      combat: "42"
    },
    biography: {
      "full-name": "Bette Sans Souci",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Fury of Firestorm #7",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'6", "168 cm"],
      weight: ["123 lb", "55 kg"],
      "eye-color": "Blue",
      "hair-color": "Red"
    },
    work: {
      occupation: "Government Agent, former Terrorist, Mercenary",
      base: "Mobile; formerly Quebec, Canada"
    },
    connections: {
      "group-affiliation":
        "Suicide Squad, formerly Bomb Squad, Extreme Justice",
      relatives:
        "Nathaniel Adam (Captain Atom,husband), Margaret Eiling (step-daughter), Randall Eiling (step-son)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1176.jpg"
    }
  },
  {
    response: "success",
    id: "522",
    name: "Poison Ivy",
    powerstats: {
      intelligence: "81",
      strength: "14",
      speed: "21",
      durability: "40",
      power: "100",
      combat: "40"
    },
    biography: {
      "full-name": "Pamela Isley",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Seattle, Washington",
      "first-appearance": "Batman #181 (June 1966)",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["5'6", "168 cm"],
      weight: ["110 lb", "50 kg"],
      "eye-color": "Green",
      "hair-color": "Red"
    },
    work: { occupation: "Criminal, Botanist", base: "Gotham City" },
    connections: {
      "group-affiliation":
        "Formerly Injustice Gang, Suicide Squad, Harley Quinn, Secret Society of Super Villains, Joker League of Anarchy",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/757.jpg"
    }
  },
  {
    response: "success",
    id: "523",
    name: "Polaris",
    powerstats: {
      intelligence: "63",
      strength: "73",
      speed: "42",
      durability: "50",
      power: "100",
      combat: "45"
    },
    biography: {
      "full-name": "Lorna Dane",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Pestilence",
        "formerly Malice",
        "Polarity",
        "Magnetrix",
        "M-2",
        "Magneto the Second"
      ],
      "place-of-birth": "Presumably northern California - not confirmed",
      "first-appearance": "X-Men #49 (October, 1968)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Mutant",
      height: ["5'7", "170 cm"],
      weight: ["115 lb", "52 kg"],
      "eye-color": "Green",
      "hair-color": "Green"
    },
    work: {
      occupation:
        "Adventurer, former U.S. government operative, former graduate student in geophysics",
      base:
        "Serval Industries, Virginia; formerly X-Factor Investigations Headquarters, Starjammer; Xavier Institute for Higher Learning, Salem Center, Westchester County, New York; Genosha; X-Factor HQ, Washington D.C., Maryland; Mutant Research Center, Muir Island;"
    },
    connections: {
      "group-affiliation":
        "X-Factor (Serval Industries); formerly X-Factor Investigations, Starjammers, X-Men, Horsemen of Apocalypse, Genoshan Cabinet, X-Factor (Government), The Twelve, Acolytes, Muir Island X-Men, Defenders for a Day, Marauders (possessed by Malice)",
      relatives:
        "Joseph (father's clone/paternal uncle, deceased), Magneto (father), Magda Lehnsherr (step-mother, deceased), Zaladane (sister, status uncertain), Anya Lehnsherr (paternal half-sister, deceased), Scarlet Witch (paternal half-sister), Quicksilver (paternal half-brother), Nightcrawler (half-brother-in-law), Vision (half-brother-in-law), Crystal (half-sister-in-law), Nocturne (half-niece), Speed (half-nephew), Wiccan (half-nephew), Luna Maximoff (half-niece)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1046.jpg"
    }
  },
  {
    response: "success",
    id: "524",
    name: "Power Girl",
    powerstats: {
      intelligence: "94",
      strength: "100",
      speed: "100",
      durability: "100",
      power: "100",
      combat: "75"
    },
    biography: {
      "full-name": "Kara Zor-L",
      "alter-egos": "No alter egos found.",
      aliases: ["Karen Starr", "Nightwing"],
      "place-of-birth": "-",
      "first-appearance": "All-Star Comics #58 (January/February 1976)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Kryptonian",
      height: ["5'11", "180 cm"],
      weight: ["180 lb", "81 kg"],
      "eye-color": "blue",
      "hair-color": "blond"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation":
        "Justice Society of America, Justice League Europe, Infinity, Inc., Sovereign Seven",
      relatives:
        "Zor-L (father, deceased), Allura (mother, deceased), Jor-L (uncle, deceased), Lora (aunt, deceased), Kal-L (Earth-Two Superman, cousin and adopted father, deceased), Earth-Two Lois Lane (adopted mother, deceased), Equinox (son, deceased), Kara Zor-El (alternate universe version)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/758.jpg"
    }
  },
  {
    response: "success",
    id: "525",
    name: "Power Man",
    powerstats: {
      intelligence: "null",
      strength: "82",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Luke Cage",
      "alter-egos": "Luke Cage",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Luke Cage",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1016.jpg"
    }
  },
  {
    response: "success",
    id: "526",
    name: "Predator",
    powerstats: {
      intelligence: "63",
      strength: "30",
      speed: "25",
      durability: "85",
      power: "100",
      combat: "90"
    },
    biography: {
      "full-name": "Yautja",
      "alter-egos": "No alter egos found.",
      aliases: ["Hunters", "Yautja", "Hish"],
      "place-of-birth": "Yautja Prime",
      "first-appearance": "Predator (1987)",
      publisher: "Dark Horse Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Yautja",
      height: ["7'0", "213 cm"],
      weight: ["520 lb", "234 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10448.jpg"
    }
  },
  {
    response: "success",
    id: "527",
    name: "Professor X",
    powerstats: {
      intelligence: "100",
      strength: "8",
      speed: "12",
      durability: "14",
      power: "100",
      combat: "32"
    },
    biography: {
      "full-name": "Charles Francis Xavier",
      "alter-egos": "No alter egos found.",
      aliases: ["Prof", "Dr. X", "Professor Xavier", "formerly Prisoner M-13"],
      "place-of-birth": "New York, New York",
      "first-appearance": "X-Men #1 (September, 1963)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["6'", "183 cm"],
      weight: ["190 lb", "86 kg"],
      "eye-color": "Blue",
      "hair-color": "No Hair"
    },
    work: {
      occupation:
        "Mutant leader, mutant rights activist, geneticist, teacher, adventurer, heir, formerly headmaster, soldier (US Army)",
      base:
        "Formerly Utopia, San Francisco Bay, California; Genosha; Xavier Institute, Salem Center, Westchester County, New York; Imperial Palace, Chandilar, Shi'ar Empire; Columbia University, Manhattan, New York City, New York"
    },
    connections: {
      "group-affiliation":
        "Formerly X-Men (founder; formerly teacher & leader), Illuminati, Genoshan Excalibur, Brotherhood of Evil Mutants (leader), Cadre K, Generation X (founder), Starjammers, The Twelve, New Mutants (founder, teacher & leader), United States Army, X-Corporation",
      relatives:
        "Brian Xavier (father, deceased), Sharon Xavier (mother, deceased), Cassandra Nova (sister), Kurt Marko (stepfather, deceased), Cain Marko (Juggernaut, stepbrother), Lilandra (ex-wife), David Charles Haller (Legion, son, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/113.jpg"
    }
  },
  {
    response: "success",
    id: "528",
    name: "Professor Zoom",
    powerstats: {
      intelligence: "94",
      strength: "10",
      speed: "100",
      durability: "20",
      power: "83",
      combat: "20"
    },
    biography: {
      "full-name": "Eobard Thawne",
      "alter-egos": "No alter egos found.",
      aliases: ["Reverse Flash", "Black Flash", "Adrian Zoom", "Mister Zyx"],
      "place-of-birth": "-",
      "first-appearance": "Flash #139 (September, 1963)",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'11", "180 cm"],
      weight: ["179 lb", "81 kg"],
      "eye-color": "Blue",
      "hair-color": "Strawberry Blond"
    },
    work: { occupation: "-", base: "Central Cityplex, 25th Century" },
    connections: {
      "group-affiliation":
        "Formerly Secret Society of Super-Villains, Black Lantern Corps, White Lantern Corps",
      relatives:
        "Robern Thawne (brother), Malcolm Thawne (Cobalt Blue) (distant ancestor), President Thawne, Meloni Thawne, Bart Allen, Owen Mercer (descendants) - see Allen Family for complete family tree"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/766.jpg"
    }
  },
  {
    response: "success",
    id: "529",
    name: "Psylocke",
    powerstats: {
      intelligence: "63",
      strength: "33",
      speed: "25",
      durability: "40",
      power: "100",
      combat: "90"
    },
    biography: {
      "full-name": "Elizabeth Braddock",
      "alter-egos": "No alter egos found.",
      aliases: ["Betsy", "Captain Britain", "Lady Mandarin"],
      "place-of-birth": "Braddock Manor, England",
      "first-appearance":
        "Captain Britain #8 (December, 1976) / New Mutants Annual #2 (October, 1986) (US)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Mutant",
      height: ["5'11", "180 cm"],
      weight: ["155 lb", "70 kg"],
      "eye-color": "Blue",
      "hair-color": "Purple"
    },
    work: {
      occupation: "Adventurer, formerly a STRIKE operative, fashion model",
      base:
        "Xavier Institute, Salem Center, Westchester County, New York formerly Braddock Manor, United Kingdom; Australian Outback"
    },
    connections: {
      "group-affiliation":
        "X-Men, formerly agent of S.T.R.I.K.E., ally of R.C.X., partner of Captain U.K.",
      relatives:
        "John Braddock (ancestor, possibly grandfather); Sir James Braddock (father, deceased); Lady Elizabeth Braddock (mother, deceased); Brian Braddock (Captain Britain) (twin brother); Jamie Braddock (brother, deceased); Meggan Braddock (sister-in-law);"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/114.jpg"
    }
  },
  {
    response: "success",
    id: "53",
    name: "Atom II",
    powerstats: {
      intelligence: "88",
      strength: "10",
      speed: "33",
      durability: "45",
      power: "40",
      combat: "60"
    },
    biography: {
      "full-name": "Ray Palmer",
      "alter-egos": "No alter egos found.",
      aliases: [
        "The Mighty Mite",
        "the Tiny Titan",
        "the World's Smallest Hero"
      ],
      "place-of-birth": "-",
      "first-appearance": "Showcase #34",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'0", "183 cm"],
      weight: ["180 lb", "81 kg"],
      "eye-color": "Brown",
      "hair-color": "Auburn"
    },
    work: { occupation: "Physics Professor", base: "Ivy Town" },
    connections: {
      "group-affiliation":
        "Justice League of America, formerly; Suicide Squad, Teen Titans",
      relatives:
        "Jean Loring (ex-wife, deceased), Princess Laethwen (wife, deceased), Danny Palmer (brother, deceased), David Palmer (father), Susan Palmer (mother, deceased), David Palmer (uncle)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/938.jpg"
    }
  },
  {
    response: "success",
    id: "530",
    name: "Punisher",
    powerstats: {
      intelligence: "69",
      strength: "16",
      speed: "21",
      durability: "45",
      power: "42",
      combat: "100"
    },
    biography: {
      "full-name": "Frank Castle",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Big Nothing",
        "Major Bateman",
        "Ted Bishop",
        "Cliff Callador",
        "Castigo",
        "Chaloner",
        "Fred D'Amato",
        "Eastman",
        "Charles Fort",
        "Frank Loomis",
        "McRook",
        "Melchior",
        "Joe Rainey",
        "Frank Rook",
        "Richard Rook",
        "Tony Knowlen Ross",
        "Francis Stronghold",
        "Johnny Tower",
        "Dmitri Velikoff",
        "Fra"
      ],
      "place-of-birth": "Queens, New York",
      "first-appearance": "AMAZING SPIDER-MAN #129",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'0'", "183 cm"],
      weight: ["200 lb", "90 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: {
      occupation: "Former United States Marine turned professional vigilante",
      base: "Mobile, usually in New York City"
    },
    connections: {
      "group-affiliation":
        "None; Formerly Secret Avengers, Daredevil's Unnamed Super-Hero Team, Green Berets, U.S. Marine Corps",
      relatives:
        "Maria Castle (Wife, deceased), Christie Castle (Daughter, deceased), Frank Castle Junior (Son, deceased), Mario Castle (Father, deceased), Louisa Castle (Mother, deceased), Rocco Castiglione (Uncle, deceased), Esmerelda Castiglione (Aunt, deceased), Michael Castle (Brother, stillborn, deceased)."
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/112.jpg"
    }
  },
  {
    response: "success",
    id: "531",
    name: "Purple Man",
    powerstats: {
      intelligence: "56",
      strength: "10",
      speed: "8",
      durability: "30",
      power: "92",
      combat: "10"
    },
    biography: {
      "full-name": "Zebediah Killgrave",
      "alter-egos": "No alter egos found.",
      aliases: ["Kilgrave"],
      "place-of-birth": "-",
      "first-appearance": "Daredevil #4 (October, 1964)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'11", "180 cm"],
      weight: ["165 lb", "74 kg"],
      "eye-color": "Purple",
      "hair-color": "Purple"
    },
    work: {
      occupation: "Professional criminal, Megalomaniac, Former spy",
      base:
        "New York City, New York, USA; formerly Canada, Croatia, formerly Yugoslavia"
    },
    connections: {
      "group-affiliation":
        "Formerly Purple Children (leader and father), Villains for Hire, Hood's gang, partner of Electro, his own band of criminals",
      relatives:
        "Melanie Killgrave (ex-wife); Persuasion (Kara Killgrave) (daughter); Joe (son); Shallah (daughter); Connor (son); Jamie (son); Unnamed daughter"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10451.jpg"
    }
  },
  {
    response: "success",
    id: "532",
    name: "Pyro",
    powerstats: {
      intelligence: "38",
      strength: "10",
      speed: "12",
      durability: "14",
      power: "54",
      combat: "28"
    },
    biography: {
      "full-name": "St. John Allerdyce",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Sydney, Australia",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["5'10", "178 cm"],
      weight: ["150 lb", "68 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation:
        "Former government agent, terrorist, bodyguard, novelist, journalist",
      base: "-"
    },
    connections: {
      "group-affiliation":
        "Formerly Freedom Force, Brotherhood of Evil Mutants",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/853.jpg"
    }
  },
  {
    response: "success",
    id: "533",
    name: "Q",
    powerstats: {
      intelligence: "100",
      strength: "12",
      speed: "17",
      durability: "100",
      power: "100",
      combat: "40"
    },
    biography: {
      "full-name": "Q",
      "alter-egos": "No alter egos found.",
      aliases: ["Q Continuum"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Star Trek",
      alignment: "-"
    },
    appearance: {
      gender: "Male",
      race: "God / Eternal",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10578.jpg"
    }
  },
  {
    response: "success",
    id: "534",
    name: "Quantum",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "HarperCollins",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1157.jpg"
    }
  },
  {
    response: "success",
    id: "535",
    name: "Question",
    powerstats: {
      intelligence: "81",
      strength: "14",
      speed: "27",
      durability: "35",
      power: "20",
      combat: "80"
    },
    biography: {
      "full-name": "Charles Victor Szasz",
      "alter-egos": "No alter egos found.",
      aliases: ["Vic Sage"],
      "place-of-birth": "-",
      "first-appearance": "Blue Beetle (Charlton) Vol 4 #1 (June, 1967)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'2", "188 cm"],
      weight: ["185 lb", "83 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation: "Former Television Investigative Journalist",
      base: "Hub City; Chicago, Gotham City, Metropolis"
    },
    connections: {
      "group-affiliation": "Formerly L.A.W., JLA, Black Lantern Corps",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/760.jpg"
    }
  },
  {
    response: "success",
    id: "536",
    name: "Quicksilver",
    powerstats: {
      intelligence: "63",
      strength: "28",
      speed: "100",
      durability: "60",
      power: "81",
      combat: "56"
    },
    biography: {
      "full-name": "Pietro Django Maximoff",
      "alter-egos": "No alter egos found.",
      aliases: ["Pietro Frank", "Gypsy Davey", "Mateo Maximoff"],
      "place-of-birth": "Wundagore Mountain, Transia (in Eastern Europe)",
      "first-appearance": "X-MEN Vol. 1 #4",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["6'0", "183 cm"],
      weight: ["175 lb", "79 kg"],
      "eye-color": "Blue",
      "hair-color": "Silver"
    },
    work: {
      occupation:
        "(current) Adventurer, (former) Terrorist, officer of the Inhumans militia, United States government operative",
      base:
        "Currently a castle on the Hudson River in upstate New York that is owned by the High Evolutionary; (former) Transia; Avengers Mansion, Manhattan; Avengers Compound, Palos Verdes, California; X-Factor headquarters, Washington D. C."
    },
    connections: {
      "group-affiliation":
        "Avengers, unofficial member of the Royal Family of the Inhumans, (former) Brotherhood of Evil Mutants I, X-Factor II",
      relatives:
        "Wanda Maximoff (Scarlet Witch, sister), Magnus (Magneto, father), Magda (mother, deceased), Django Maximoff (adoptive father), Marya Maximoff (adoptive mother, deceased), Crystal (wife), Maximoff, Luna (daughter), Medusa (sister-in-law), Black Bolt, Gorgon, Karnak, Triton, Maximus (cousins by marriage), Vision (ex-brother-in-law)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/115.jpg"
    }
  },
  {
    response: "success",
    id: "537",
    name: "Quill",
    powerstats: {
      intelligence: "38",
      strength: "10",
      speed: "12",
      durability: "14",
      power: "23",
      combat: "14"
    },
    biography: {
      "full-name": "Maxwell Jordan",
      "alter-egos": "No alter egos found.",
      aliases: ["Max"],
      "place-of-birth": "-",
      "first-appearance": "New X-Men: Academy X #1",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["5'4", "163 cm"],
      weight: ["124 lb", "56 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: { occupation: "-", base: "X-Mansion" },
    connections: { "group-affiliation": "Corsairs", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/830.jpg"
    }
  },
  {
    response: "success",
    id: "538",
    name: "Ra's Al Ghul",
    powerstats: {
      intelligence: "100",
      strength: "28",
      speed: "32",
      durability: "42",
      power: "27",
      combat: "100"
    },
    biography: {
      "full-name": "Ra's Al Ghul",
      "alter-egos": "No alter egos found.",
      aliases: ["Demon's Head"],
      "place-of-birth": "Egypt",
      "first-appearance": "Batman #232 (June, 1971)",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'4", "193 cm"],
      weight: ["215 lb", "97 kg"],
      "eye-color": "Green",
      "hair-color": "Grey"
    },
    work: {
      occupation: "Eco Terrorist, Businessman, Cult Leader",
      base: "mobile"
    },
    connections: {
      "group-affiliation": "League of Assassins",
      relatives:
        "The Sensei (father), White Ghost (Dusan al Ghul) (son), Talia al Ghul (daughter), Nyssa Raatko (daughter), Robin V (Damian Wayne) (grandson)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/761.jpg"
    }
  },
  {
    response: "success",
    id: "539",
    name: "Rachel Pirzad",
    powerstats: {
      intelligence: "63",
      strength: "4",
      speed: "8",
      durability: "10",
      power: "52",
      combat: "10"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "SyFy",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Alpha",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "Alphas", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1530.jpg"
    }
  },
  {
    response: "success",
    id: "54",
    name: "Atom III",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Adam Cray",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Suicide Squad (Volume 1) #44",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "Red"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "Suicide Squad",
      relatives: "Senator Cray (father, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/939.jpg"
    }
  },
  {
    response: "success",
    id: "540",
    name: "Rambo",
    powerstats: {
      intelligence: "63",
      strength: "14",
      speed: "25",
      durability: "30",
      power: "30",
      combat: "100"
    },
    biography: {
      "full-name": "John Rambo",
      "alter-egos": "No alter egos found.",
      aliases: ["Raven", "Lone Wolf"],
      "place-of-birth": "Bowie, Arizona",
      "first-appearance": "First Blood (Novel, 1972)",
      publisher: "null",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'10", "178 cm"],
      weight: ["185 lb", "83 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: { occupation: "United States Army soldier (former)", base: "-" },
    connections: {
      "group-affiliation": "United States Army (former)",
      relatives:
        "R. Rambo (father), Marie Drago (mother), Col. Sam Trautman (close-friend, father-figure, trainer, best-friend until death)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10475.jpg"
    }
  },
  {
    response: "success",
    id: "541",
    name: "Raphael",
    powerstats: {
      intelligence: "63",
      strength: "17",
      speed: "50",
      durability: "65",
      power: "59",
      combat: "80"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Teenage Mutant Ninja Turtles #1",
      publisher: "IDW Publishing",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "No Hair"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "-",
      relatives:
        "Leonardo (brother), Donatello (brother), Michelangelo (brother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10328.jpg"
    }
  },
  {
    response: "success",
    id: "542",
    name: "Raven",
    powerstats: {
      intelligence: "50",
      strength: "10",
      speed: "29",
      durability: "70",
      power: "84",
      combat: "40"
    },
    biography: {
      "full-name": "Rachel Roth",
      "alter-egos": "No alter egos found.",
      aliases: ["Pride", "Dark Raven"],
      "place-of-birth": "Azarath",
      "first-appearance": "DC Comics Presents #26 (October, 1980)",
      publisher: "DC Comics",
      alignment: "neutral"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["5'5", "165 cm"],
      weight: ["110 lb", "50 kg"],
      "eye-color": "Indigo",
      "hair-color": "Black"
    },
    work: { occupation: "Adventurer, high school student", base: "-" },
    connections: {
      "group-affiliation": "Teen Titans, formerly Sentinels of Magic",
      relatives:
        "Trigon (father), Angela Roth (mother, deceased), Gluttony, Greed, Lust, Wrath, Envy, Sloth (half-brothers, status unknown)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/764.jpg"
    }
  },
  {
    response: "success",
    id: "543",
    name: "Ray",
    powerstats: {
      intelligence: "50",
      strength: "10",
      speed: "92",
      durability: "100",
      power: "100",
      combat: "20"
    },
    biography: {
      "full-name": "Ray Terrill",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Ray #1",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'10", "178 cm"],
      weight: ["155 lb", "70 kg"],
      "eye-color": "Green",
      "hair-color": "Red"
    },
    work: {
      occupation: "Freelance Computer Programmer and Software Designer",
      base: "Philadelphia, Pennsylvania"
    },
    connections: {
      "group-affiliation":
        "Freedom Fighters, formerly Justice League of America, Justice League Task Force, Young Justice, JSA Reserves, Forgotten Heroes, Justice League Internationa",
      relatives:
        "Happy Terrill (father), Nadine Terrill (mother), Joshua Terrill (Spitfire, brother), Thomas Terrill (uncle/foster father, deceased), Hank Terrill (cousin)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10204.jpg"
    }
  },
  {
    response: "success",
    id: "544",
    name: "Razor-Fist II",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Douglas Scott",
      "alter-egos": "No alter egos found.",
      aliases: ["Razorfist"],
      "place-of-birth": "-",
      "first-appearance": "Master of Kung Fu I#105 (October, 1981)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'3", "191 cm"],
      weight: ["260 lb", "117 kg"],
      "eye-color": "Blue",
      "hair-color": "No Hair"
    },
    work: {
      occupation: "Mercenary, assassin, bodyguard, enforcer",
      base:
        "the House of Razor, unrevealed location. Formerly, Roche's estate, Madripoor. Formerly, Carlton Velcro's mansion on an island in the Marquesas"
    },
    connections: {
      "group-affiliation":
        "S.H.I.E.L.D. Deltite Conspiracy, Leader of a band of followers (Anton, Lulu, Mary, Perkins, Piranha Tots, Samantha, others), Architect, Batroc, Bobcat, Brothers Grimm, Bullet Biker, Crossfire, Death-Throws, Inquisitor, Mad Dog, Roche, Sapphire Styx, Shoc",
      relatives: "William Scott (aka Razor-Fist III, brother, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/935.jpg"
    }
  },
  {
    response: "success",
    id: "545",
    name: "Red Arrow",
    powerstats: {
      intelligence: "63",
      strength: "16",
      speed: "25",
      durability: "20",
      power: "23",
      combat: "80"
    },
    biography: {
      "full-name": "Roy Harper",
      "alter-egos": "No alter egos found.",
      aliases: ["Arsenal", "Speedy"],
      "place-of-birth": "-",
      "first-appearance":
        "(as Speedy) More Fun Comics # 73(Nov. 1941); (as Arsenal) The New Titans # 99 (July 1993); (as Red Arrow) Justice League of America Vol. 2 # 7 (May 2007)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'11", "180 cm"],
      weight: ["185 lb", "83 kg"],
      "eye-color": "Green",
      "hair-color": "Red"
    },
    work: {
      occupation: "Adventurer; intelligence agent; musician",
      base:
        "The Hall & JLA Watchtower; New York City; formerly Titans Tower, Station Markovia, and Gabriel's Horn"
    },
    connections: {
      "group-affiliation":
        "Titans, Justice League of America, formerly Outsiders, Teen Titans, Checkmate, Central Bureau of Investigations",
      relatives:
        'Roy William Harper, Sr. (father, deceased); Brave Bow (adoptive father, deceased); Oliver "Ollie" Queen (Green Arrow - adoptive father); Jim Harper (Guardian- great-uncle); Lian Harper (daughter), Vandal Savage (ancestor)'
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1013.jpg"
    }
  },
  {
    response: "success",
    id: "546",
    name: "Red Hood",
    powerstats: {
      intelligence: "75",
      strength: "12",
      speed: "23",
      durability: "28",
      power: "35",
      combat: "95"
    },
    biography: {
      "full-name": "Jason Todd",
      "alter-egos": "Robin II",
      aliases: ["Robin", "Red Robin", "Batman", "Nightwing", "Arkham Knight"],
      "place-of-birth": "-",
      "first-appearance": "Batman #635",
      publisher: "Robin II",
      alignment: "neutral"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'0", "183 cm"],
      weight: ["180 lb", "81 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: { occupation: "Mercenary, Vigilante", base: "-" },
    connections: {
      "group-affiliation": "formerly Batman Family, Teen Titans",
      relatives:
        "Willis Todd (father, deceased); Sheila Haywood (mother, deceased); Catherine Ann Todd (adoptive mother, deceased), Bruce Wayne (adoptive father), Dick Grayson and Tim Drake (adoptive brothers)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/932.jpg"
    }
  },
  {
    response: "success",
    id: "547",
    name: "Red Hulk",
    powerstats: {
      intelligence: "50",
      strength: "100",
      speed: "47",
      durability: "85",
      power: "82",
      combat: "75"
    },
    biography: {
      "full-name": "Thaddeus E. Ross",
      "alter-egos": "No alter egos found.",
      aliases: ["Rulk", "Hulk", "Thunderbolt", "General Ross"],
      "place-of-birth": "-",
      "first-appearance":
        "Incredible Hulk #1 (May, 1962)(as General Ross), Hulk Vol 2 #1 (March, 2008) (as Red Hulk)",
      publisher: "Marvel Comics",
      alignment: "neutral"
    },
    appearance: {
      gender: "Male",
      race: "Human / Radiation",
      height: ["7'0", "213 cm"],
      weight: ["1400 lb", "630 kg"],
      "eye-color": "Yellow",
      "hair-color": "Black"
    },
    work: { occupation: "Lieutenant general in US Air Force", base: "-" },
    connections: {
      "group-affiliation": "Code Red, AIM; Formerly Offenders",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1342.jpg"
    }
  },
  {
    response: "success",
    id: "548",
    name: "Red Mist",
    powerstats: {
      intelligence: "25",
      strength: "10",
      speed: "23",
      durability: "14",
      power: "20",
      combat: "56"
    },
    biography: {
      "full-name": "Chris Genovese",
      "alter-egos": "No alter egos found.",
      aliases: ["The Red Mist"],
      "place-of-birth": "-",
      "first-appearance": "Kick-Ass #5",
      publisher: "Icon Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "Johnny G (father)" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1337.jpg"
    }
  },
  {
    response: "success",
    id: "549",
    name: "Red Robin",
    powerstats: {
      intelligence: "81",
      strength: "11",
      speed: "27",
      durability: "32",
      power: "29",
      combat: "80"
    },
    biography: {
      "full-name": "Tim Drake",
      "alter-egos": "Robin III",
      aliases: [
        "Alvin Draper",
        "Batman",
        "Robin",
        "Timothy Wayne",
        "Time Drake"
      ],
      "place-of-birth": "Gotham City",
      "first-appearance": "Batman #436 (August, 1989)",
      publisher: "Robin III",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'5", "165 cm"],
      weight: ["125 lb", "56 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "Gotham City; Titans Tower, San Francisco" },
    connections: {
      "group-affiliation":
        "Teen Titans, Batman Family, Batman Inc., Wayne Enterprises; formerly Young Justice",
      relatives:
        "Jack Drake (father, deceased), Janet Drake (mother, deceased), Dana Winters Drake (step-mother, status unknown), Bruce Wayne (adoptive father), Damian Wayne (adoptive brother), Dick Grayson (adoptive brother), Jason Todd (adoptive brother), Cassandra Cain (adoptive sister)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10009.jpg"
    }
  },
  {
    response: "success",
    id: "55",
    name: "Atom IV",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Ryan Choi",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Brave New World #1",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["160 lb", "72 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: {
      occupation: "Professor of nuclear physics at Ivy University",
      base: "Ivy Town"
    },
    connections: {
      "group-affiliation": "Lighter Than Air Society",
      relatives:
        "Professor Choi (father); mother (deceased); sister (unnamed); Jia Choi (descendent)."
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/940.jpg"
    }
  },
  {
    response: "success",
    id: "550",
    name: "Red Skull",
    powerstats: {
      intelligence: "75",
      strength: "10",
      speed: "12",
      durability: "14",
      power: "19",
      combat: "80"
    },
    biography: {
      "full-name": "Johann Shmidt",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Dell Rusk",
        "Bettman P. Lyles",
        "the Agent of a Thousand Faces",
        "The Man",
        "Cyrus Fenton",
        "Teacher",
        "Tod March",
        "John Smith",
        "Aleksander Lukin."
      ],
      "place-of-birth": "An unidentified village in Germany",
      "first-appearance":
        "Captain America Comics #1 (1941), (modern) Tales of Suspense #66 (1965)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'2", "188 cm"],
      weight: ["240 lb", "108 kg"],
      "eye-color": "Blue",
      "hair-color": "No Hair"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation":
        "Special operative in the government of Germany's Third Reich, former leader of most currently active Nazi subversives throughout the world, former ally of THEM and A.I.M., former leader of the Nevada-based fragment of Hydra, leader of the People's Militia",
      relatives:
        "Hermann Shmidt (father, deceased), Martha Shmidt (mother, deceased), Sinthea Shmidt (Mother Superior/Sin, daughter)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1392.jpg"
    }
  },
  {
    response: "success",
    id: "551",
    name: "Red Tornado",
    powerstats: {
      intelligence: "75",
      strength: "38",
      speed: "67",
      durability: "60",
      power: "100",
      combat: "40"
    },
    biography: {
      "full-name": "John Smith",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Ulthoon",
        "Tornado Tyrant of Rann",
        "Tornado Champion",
        "Tornado Man Dreaming",
        '"Reddy"'
      ],
      "place-of-birth": "-",
      "first-appearance":
        "As Red Tornado: Justice League of America #64, As Ulthoon: Mystery in Space #61",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Android",
      height: ["6'1", "185 cm"],
      weight: ["325 lb", "146 kg"],
      "eye-color": "Green",
      "hair-color": "No Hair"
    },
    work: { occupation: "-", base: "Happy Harbor, Rhode Island" },
    connections: {
      "group-affiliation":
        "Justice League of America, formerly Parliament of Vapors, T.O. Morrow, Justice Society of America, Young Justice, Primal Force, Leymen, Donna Troy",
      relatives:
        'T.O. Morrow (creator/father),Red Volcano (brother; deceased), Red Inferno (brother; deceased), Red Torpedo (sister; deceased), Tomorrow Woman ("sister"), Kathy Sutton (wife), Traya Sutton (adoptive daughter)'
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1149.jpg"
    }
  },
  {
    response: "success",
    id: "552",
    name: "Redeemer II",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Phil Timper",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Spawn #31",
      publisher: "Image Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1081.jpg"
    }
  },
  {
    response: "success",
    id: "553",
    name: "Redeemer III",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Eddie Frank",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Image Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1092.jpg"
    }
  },
  {
    response: "success",
    id: "554",
    name: "Renata Soliz",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "HarperCollins",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1151.jpg"
    }
  },
  {
    response: "success",
    id: "555",
    name: "Rey",
    powerstats: {
      intelligence: "63",
      strength: "8",
      speed: "21",
      durability: "10",
      power: "87",
      combat: "35"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Jakku",
      "first-appearance": "Star Wars: Episode VII - The Force Awakens (2015)",
      publisher: "George Lucas",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["5'57", "297 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Hazel",
      "hair-color": "Brown"
    },
    work: { occupation: "Scavenger", base: "Jakku" },
    connections: { "group-affiliation": "Resistence", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10561.jpg"
    }
  },
  {
    response: "success",
    id: "556",
    name: "Rhino",
    powerstats: {
      intelligence: "25",
      strength: "80",
      speed: "43",
      durability: "90",
      power: "36",
      combat: "85"
    },
    biography: {
      "full-name": "Aleksei Mikhailovich Sytsevich",
      "alter-egos": "No alter egos found.",
      aliases: ["Alex O'Hirn", "Mecha-Rhino"],
      "place-of-birth": "-",
      "first-appearance": "Amazing Spider-Man #41",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human / Radiation",
      height: ["6'5", "196 cm"],
      weight: ["710 lb", "320 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: {
      occupation: "Professional Criminal ,Henchman of the Russian Mafia",
      base: "Mobile"
    },
    connections: {
      "group-affiliation": "Sinister Syndicate",
      relatives:
        "Miriam Sytsevich (mother, deceased), Alexia (niece, lastname unrevealed), unnamed grandmother"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/15.jpg"
    }
  },
  {
    response: "success",
    id: "557",
    name: "Rick Flag",
    powerstats: {
      intelligence: "88",
      strength: "11",
      speed: "23",
      durability: "28",
      power: "19",
      combat: "95"
    },
    biography: {
      "full-name": "Richard Rogers Flag",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Brave and the Bold #25 (September 1959)",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'1", "185 cm"],
      weight: ["189 lb", "85 kg"],
      "eye-color": "Blue",
      "hair-color": "Brown"
    },
    work: {
      occupation: "Government Agent, Covert Ops field Commander",
      base: "Belle Reve, Louisiana"
    },
    connections: {
      "group-affiliation": "Suicide Squad, Task Force X",
      relatives:
        "Richard Flag, Sr. (father, deceased); Richard Flag III (son); Karin Grace (mother of child)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1352.jpg"
    }
  },
  {
    response: "success",
    id: "558",
    name: "Riddler",
    powerstats: {
      intelligence: "100",
      strength: "10",
      speed: "12",
      durability: "14",
      power: "10",
      combat: "14"
    },
    biography: {
      "full-name": "Edward Nigma",
      "alter-egos": "No alter egos found.",
      aliases: ["E. Nigma", "Edward E. Nigma"],
      "place-of-birth": "-",
      "first-appearance": "Detective Comics #140 (1948)",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/768.jpg"
    }
  },
  {
    response: "success",
    id: "559",
    name: "Rip Hunter",
    powerstats: {
      intelligence: "100",
      strength: "8",
      speed: "8",
      durability: "10",
      power: "100",
      combat: "25"
    },
    biography: {
      "full-name": "Richard Hunter",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Time Lord",
        "Time Master",
        "Boppy",
        "Dr. Hunter",
        "Mr",
        "Hunter",
        "Carter"
      ],
      "place-of-birth": "-",
      "first-appearance": "Showcase #20",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: { occupation: "-", base: "Time Lab, Arizona" },
    connections: {
      "group-affiliation":
        "Formerly leader of the Time Masters; former member of the Forgotten Heroes; former member of the Linear Men, Booster Gold International (BGI)",
      relatives:
        "Michael Carter, (Booster Gold, father),  Unknown (mother), Jonar Carter (grandfather), Ellen Carter (grandmother, deceased), Michelle Carter (Goldstar) (aunt), Daniel Carter (21st century ancestor), Rose Levin (ancestor), Dan Hunter (cousin),"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10543.jpg"
    }
  },
  {
    response: "success",
    id: "56",
    name: "Aurora",
    powerstats: {
      intelligence: "63",
      strength: "10",
      speed: "96",
      durability: "60",
      power: "74",
      combat: "56"
    },
    biography: {
      "full-name": "Jeanne-Marie Beaubier",
      "alter-egos": "No alter egos found.",
      aliases: ["Sister Beaubier"],
      "place-of-birth": "Montreal, Quebec, Canada",
      "first-appearance": "X-Men #121 (1979)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Mutant",
      height: ["5'11", "180 cm"],
      weight: ["140 lb", "63 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: {
      occupation:
        "Adventurer; former terrorist, nun, history/geography teacher",
      base: "Laval, Quebec, Canada"
    },
    connections: {
      "group-affiliation":
        "Alpha Flight, Alpha Flight (Space Program), Royal Canadian Mounted Police; formerly Weapon X, ally of the Havok's Brotherhood, Headbangers , Children of the Vault, X-Men (interim member)",
      relatives:
        "Jean-Baptiste Beaubier (father, deceased), unidentified mother (deceased), Jean-Paul Beaubier (Northstar, twin brother) Joanna Beaubier (adopted niece, deceased); Lois and Genevieve Martin (first cousins once removed/adopted parents, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1289.jpg"
    }
  },
  {
    response: "success",
    id: "561",
    name: "Robin",
    powerstats: {
      intelligence: "88",
      strength: "11",
      speed: "27",
      durability: "28",
      power: "32",
      combat: "85"
    },
    biography: {
      "full-name": "Dick Grayson",
      "alter-egos": "Batman II, Nightwing",
      aliases: ["Renegade", "The Target", "Freddie Dinardo"],
      "place-of-birth": "-",
      "first-appearance": "Detective Comics #38 (April, 1940)",
      publisher: "Batman II",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'10", "178 cm"],
      weight: ["175 lb", "79 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: {
      occupation: "-",
      base:
        "Wayne Tower, Gotham City; formerly the Batcave;  formerly Bl?dhaven;  formerly New York City"
    },
    connections: {
      "group-affiliation":
        "Batman Family, Batman Incorporated, Justice League; formerly Teen Titans, Outsiders, Bludhaven Police Department, Secret Society of Super-Villains",
      relatives:
        "John Grayson (father), Mary Grayson (mother), Bruce Wayne (adoptive father), Damian Wayne (adoptive brother), Jason Todd (adoptive brother), Tim Drake (adoptive brother), Cassandra Cain (adoptive sister)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/850.jpg"
    }
  },
  {
    response: "success",
    id: "562",
    name: "Robin II",
    powerstats: {
      intelligence: "75",
      strength: "11",
      speed: "27",
      durability: "28",
      power: "28",
      combat: "85"
    },
    biography: {
      "full-name": "Jason Todd",
      "alter-egos": "Red Hood",
      aliases: [
        "Red Hood",
        "Red Robin",
        "Batman",
        "Nightwing",
        "Wingman",
        "Jaybird",
        "Arkham Knight"
      ],
      "place-of-birth": "-",
      "first-appearance": "Detective Comics #524",
      publisher: "Red Hood",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'0", "183 cm"],
      weight: ["225 lb", "101 kg"],
      "eye-color": "Blue",
      "hair-color": "Red"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation":
        "Batman Family, Teen Titans, Challengers from Beyond",
      relatives:
        "Willis Todd (father), Sheila Haywood (mother), Catherine Todd (step-mother), Bruce Wayne (Batman, adoptive father), Damian Wayne (Robin V, adoptive brother), Dick Grayson (Robin I, adoptive brother), Timothy Drake (Robin III, adoptive brother), Cassandra Cain (Batgirl IV, adoptive sister)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/849.jpg"
    }
  },
  {
    response: "success",
    id: "563",
    name: "Robin III",
    powerstats: {
      intelligence: "81",
      strength: "11",
      speed: "27",
      durability: "28",
      power: "29",
      combat: "85"
    },
    biography: {
      "full-name": "Tim Drake",
      "alter-egos": "Red Robin",
      aliases: ["Alvin Draper", "Batman", "Robin", "Timothy Wayne"],
      "place-of-birth": "-",
      "first-appearance": "Batman #436 (August, 1989)",
      publisher: "Red Robin",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'5", "165 cm"],
      weight: ["125 lb", "56 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: {
      occupation: "High School Student",
      base: "Gotham City; Titans Tower, San Francisco"
    },
    connections: {
      "group-affiliation":
        "Teen Titans, Batman Family, Batman Inc., Wayne Enterprises; formerly Young Justice",
      relatives:
        "Jack Drake (father, deceased), Janet Drake (mother, deceased), Dana Winters Drake (step-mother, status unknown), Bruce Wayne (Batman, adoptive father), Damian Wayne (Robin V, adoptive brother), Dick Grayson (Robin I, adoptive brother), Jason Todd (Robin II, adoptive brother), Cassandra Cain (Batgirl IV, adoptive sister)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/769.jpg"
    }
  },
  {
    response: "success",
    id: "564",
    name: "Robin V",
    powerstats: {
      intelligence: "69",
      strength: "8",
      speed: "33",
      durability: "16",
      power: "29",
      combat: "65"
    },
    biography: {
      "full-name": "Damian Wayne",
      "alter-egos": "No alter egos found.",
      aliases: ["Batman", "Damian al Ghul", "Ibn al Xu'ffasch", "Redbird"],
      "place-of-birth": "-",
      "first-appearance": "Batman: Son of the Demon",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["4'6", "137 cm"],
      weight: ["84 lb", "38 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "Gotham City" },
    connections: {
      "group-affiliation":
        "Batman Family, Batman Inc., Wayne Enterprises; formerly Teen Titans, League of Assassins",
      relatives:
        "Talia al Ghul (mother),\nBruce Wayne (Batman, father),\nRa's Al Ghul (maternal grandfather),\nMelisande (maternal grandmother),\nThomas Wayne (paternal grandfather),\nMartha Wayne (paternal grandmother),\nSensei (great-grandfather),\nSimon Hurt (ancestor),\nNyssa Raatko (aunt, deceased),\nDusan al Ghul (White Ghost, uncle, deceased),\nRichard Grayson (Nightwing, adoptive brother),\nTim Drake (Red Robin, adoptive brother),\nCassandra Cain (Batgirl IV, adoptive sister),\nJason Todd (Red Hood, adoptive brother), \nPatrick Wayne (great-grandfather, deceased); \nCharles Wayne (great-great-grandfather, deceased);\nConstance Wayne (great-great-grandmother, deceased); \nAlan Wayne (ancestor, deceased); \nSolomon Wayne (ancestor, deceased); \nDarius Wayne (ancestor, deceased); \nJoshua Wayne (ancestor, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1473.jpg"
    }
  },
  {
    response: "success",
    id: "565",
    name: "Robin VI",
    powerstats: {
      intelligence: "50",
      strength: "8",
      speed: "25",
      durability: "20",
      power: "17",
      combat: "70"
    },
    biography: {
      "full-name": "Carrie Kelley",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Gotham City",
      "first-appearance": "-",
      publisher: "DC Comics",
      alignment: "neutral"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Green",
      "hair-color": "Red"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10394.jpg"
    }
  },
  {
    response: "success",
    id: "566",
    name: "Rocket Raccoon",
    powerstats: {
      intelligence: "50",
      strength: "5",
      speed: "23",
      durability: "28",
      power: "28",
      combat: "64"
    },
    biography: {
      "full-name": "Rocket Raccoon",
      "alter-egos": "No alter egos found.",
      aliases: ["Sharpshooting Space Racoon", "Rocky Raccoon", "Ranger Rocket"],
      "place-of-birth": "-",
      "first-appearance": "Marvel Preview #7 (June, 1976)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Animal",
      height: ["4'0", "122 cm"],
      weight: ["55 lb", "25 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: {
      occupation:
        "Law enforcement officer, security guard, member of the Guardians of the Galaxy",
      base:
        "Knowhere; Formerly Hala, mobile aboard the Rakk'n'Ruin Halfworld, Keystone Quadrant"
    },
    connections: {
      "group-affiliation":
        "Guardians of the Galaxy; Formerly Star-Lord's unnamed commando team",
      relatives: "Lylla (mate)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10010.jpg"
    }
  },
  {
    response: "success",
    id: "568",
    name: "Ronin",
    powerstats: {
      intelligence: "56",
      strength: "12",
      speed: "21",
      durability: "10",
      power: "13",
      combat: "80"
    },
    biography: {
      "full-name": "Clint Barton",
      "alter-egos": "Goliath, Hawkeye",
      aliases: [
        "Formerly Hawkeye",
        "the Marksman",
        "'Br'er Hawkeye'",
        "Superhuman Cellblock Prisoner 334556",
        "Longbow",
        "Goliath",
        "Father Time",
        "Louis",
        "Robin Hood",
        "the Hawkeye Kid",
        "Golden Archer",
        "'Purple Man'; impersonated Constrictor & Dreadknight"
      ],
      "place-of-birth": "Waverly, Iowa",
      "first-appearance": "-",
      publisher: "Goliath",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'3", "191 cm"],
      weight: ["230 lb", "104 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation:
        "Outlaw adventurer, revolutionary; former professional super hero, fugitive, unnoficial S.H.I.E.L.D. operative, federal inmate, CTE security chief, ranch hand, archery tutor, carnival performer, roustabout, butcher shop worker",
      base: "-"
    },
    connections: {
      "group-affiliation":
        "Avengers; formerly founding member of Avengers West Coast and first chairman, Thunderbolts, S.H.I.E.L.D. (unofficial), Chain Gang 421-011, Shadows, Great Lakes Avengers, Cross Technological Enterprises, Defenders, Carson Carnival of Traveling Wonders, Ti",
      relatives:
        "Harold Barton (father), Edith Barton (mother), Charles Bernard \"Barney\" Barton (brother), Barbara Morse 'Bobbi' Barton (Mockingbird, wife), Brett Barton (ancestor), Mack Barton (ancestor); all deceased"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1202.jpg"
    }
  },
  {
    response: "success",
    id: "569",
    name: "Rorschach",
    powerstats: {
      intelligence: "75",
      strength: "10",
      speed: "29",
      durability: "20",
      power: "23",
      combat: "80"
    },
    biography: {
      "full-name": "Walter Joseph Kovacs",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Watchmen #1 (September, 1986)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'6", "168 cm"],
      weight: ["140 lb", "63 kg"],
      "eye-color": "Blue",
      "hair-color": "Red"
    },
    work: { occupation: "Vigilante, former garment worker", base: "-" },
    connections: { "group-affiliation": "Crimebusters", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/771.jpg"
    }
  },
  {
    response: "success",
    id: "57",
    name: "Azazel",
    powerstats: {
      intelligence: "50",
      strength: "11",
      speed: "47",
      durability: "95",
      power: "100",
      combat: "80"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Semihazah",
        "Duma",
        "Keriel",
        "Mastema",
        "Beliar",
        "Gadreel",
        "Beelzebub",
        "Satan"
      ],
      "place-of-birth": "Isla des Demonas, Caribbean Sea",
      "first-appearance": "Uncanny X-Men #428 (2003)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Neyaphem",
      height: ["6'0", "183 cm"],
      weight: ["149 lb", "67 kg"],
      "eye-color": "Yellow",
      "hair-color": "Black"
    },
    work: {
      occupation: "Leader of the Neyaphem",
      base: "Brimstone Dimension; formerly La Isla des Demonas, Bermuda"
    },
    connections: {
      "group-affiliation": "-",
      relatives:
        "Kurt Wagner (Nightcrawler, son), Nils Styger (Abyss, son), Kiwi Black (son), numberous other offspring (deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1481.jpg"
    }
  },
  {
    response: "success",
    id: "570",
    name: "Sabretooth",
    powerstats: {
      intelligence: "56",
      strength: "48",
      speed: "38",
      durability: "90",
      power: "50",
      combat: "100"
    },
    biography: {
      "full-name": "Victor Creed",
      "alter-egos": "No alter egos found.",
      aliases: ["Slasher", "El Tigre"],
      "place-of-birth": "-",
      "first-appearance": "Iron Fist #14 (August, 1977)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["6'6", "198 cm"],
      weight: ["380 lb", "171 kg"],
      "eye-color": "Amber",
      "hair-color": "Blond"
    },
    work: {
      occupation: "mercenary, professional criminal, assassin, serial killer",
      base: "mobile"
    },
    connections: {
      "group-affiliation": "Weapon X, Marauders, Brotherhood of Evil Mutants",
      relatives: "Grayden Creed (son; deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/17.jpg"
    }
  },
  {
    response: "success",
    id: "571",
    name: "Sage",
    powerstats: {
      intelligence: "75",
      strength: "10",
      speed: "12",
      durability: "14",
      power: "28",
      combat: "56"
    },
    biography: {
      "full-name": "Tessa",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Place of birth unknown",
      "first-appearance": "X-MEN Vol. 1 #132",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'7'", "170 cm"],
      weight: ["135 lb", "61 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: { occupation: "Former Soldier", base: "Base of operations unknown" },
    connections: {
      "group-affiliation":
        "Excalibur, formerly X-Men, X-Treme Sanctions Executive, X-Treme X-Men, Hellfire Club",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/117.jpg"
    }
  },
  {
    response: "success",
    id: "572",
    name: "Sandman",
    powerstats: {
      intelligence: "44",
      strength: "75",
      speed: "46",
      durability: "90",
      power: "100",
      combat: "60"
    },
    biography: {
      "full-name": "William Baker",
      "alter-egos": "No alter egos found.",
      aliases: ["Flint Marko", "Sylvester Mann", "Quarryman"],
      "place-of-birth": "Queens, New York",
      "first-appearance": "Amazing Spider-Man #4 (September, 1963)",
      publisher: "Marvel Comics",
      alignment: "neutral"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'1", "185 cm"],
      weight: ["450 lb", "203 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: { occupation: "Professional Criminal", base: "-" },
    connections: {
      "group-affiliation":
        "(Formerly) Sinister Twelve, the Sinister Six, the Frightful Four, the Outlaws and the Wild Pack, reserve member of the Avengers",
      relatives: "Mrs. Baker (mother), unidentified cousin"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/621.jpg"
    }
  },
  {
    response: "success",
    id: "573",
    name: "Sasquatch",
    powerstats: {
      intelligence: "75",
      strength: "80",
      speed: "23",
      durability: "56",
      power: "15",
      combat: "42"
    },
    biography: {
      "full-name": "Walter Langkowski",
      "alter-egos": "No alter egos found.",
      aliases: ["Box", "Wanda Langkowski"],
      "place-of-birth": "Edmonton, Alberta, Canada",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["10'", "305 cm"],
      weight: ["2000 lb", "900 kg"],
      "eye-color": "Red",
      "hair-color": "Orange"
    },
    work: {
      occupation:
        "Adventurer, bio-physicist, government operative; former college lecturer, professional football player",
      base: "-"
    },
    connections: {
      "group-affiliation":
        "Omega Flight; formerly Alpha Flight, Beta Flight, Gamma Flight, Howling Commandos",
      relatives:
        "Veronica Langkowsi (ex-wife), unidentified son, Lillian von Loont (Gilded Lily, great-aunt, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/863.jpg"
    }
  },
  {
    response: "success",
    id: "574",
    name: "Sauron",
    powerstats: {
      intelligence: "88",
      strength: "85",
      speed: "33",
      durability: "100",
      power: "100",
      combat: "70"
    },
    biography: {
      "full-name": "Sauron",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Annatar",
        "Gorthaur the Cruel",
        "Sauron the Dark",
        "The Necromancer",
        "Dark Lord of Mordor",
        "Lord of the Rings",
        "The Great Eye"
      ],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "J. R. R. Tolkien",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Maiar",
      height: ["9'2", "279 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10849.jpg"
    }
  },
  {
    response: "success",
    id: "575",
    name: "Savage Dragon",
    powerstats: {
      intelligence: "63",
      strength: "70",
      speed: "54",
      durability: "85",
      power: "66",
      combat: "72"
    },
    biography: {
      "full-name": "Kurr",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Image Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation":
        "Liberty League, Chicago Police Department, Special Operations Strikeforce (S.O.S.)",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1117.jpg"
    }
  },
  {
    response: "success",
    id: "576",
    name: "Scarecrow",
    powerstats: {
      intelligence: "81",
      strength: "10",
      speed: "12",
      durability: "14",
      power: "48",
      combat: "50"
    },
    biography: {
      "full-name": "Jonathan Crane",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "WORLD'S FINEST COMICS #3 (Fall, 1941)",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'0", "183 cm"],
      weight: ["140 lb", "63 kg"],
      "eye-color": "Blue",
      "hair-color": "Brown"
    },
    work: { occupation: "Special Professional Criminal", base: "Gotham City" },
    connections: { "group-affiliation": "Injustice Gang", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/819.jpg"
    }
  },
  {
    response: "success",
    id: "577",
    name: "Scarlet Spider",
    powerstats: {
      intelligence: "75",
      strength: "53",
      speed: "60",
      durability: "74",
      power: "46",
      combat: "56"
    },
    biography: {
      "full-name": "Benjamin Reilly",
      "alter-egos": "Spider-Carnage",
      aliases: ["Spider-Clone", "Spider-Man"],
      "place-of-birth": "Place of birth unknown",
      "first-appearance":
        "Amazing Spider-Man # 149 (as Spider-Clone); Web of Spider-Man # 117 (as Ben Reilly)",
      publisher: "Spider-Carnage",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'10'", "178 cm"],
      weight: ["165 lb", "74 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: { occupation: "Crime-fighter", base: "-" },
    connections: {
      "group-affiliation": "None; formerly New Warriors",
      relatives:
        "Peter Parker (clone of), May Parker (Aunt), Ben Parker (Uncle)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/174.jpg"
    }
  },
  {
    response: "success",
    id: "578",
    name: "Scarlet Spider II",
    powerstats: {
      intelligence: "88",
      strength: "55",
      speed: "60",
      durability: "40",
      power: "37",
      combat: "56"
    },
    biography: {
      "full-name": "Kaine Parker",
      "alter-egos": "No alter egos found.",
      aliases: ["Tarantula", "Kaine", "Ara?a Escarlata"],
      "place-of-birth": "-",
      "first-appearance": "Web of Spider-Man #119 (December, 1994)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Clone",
      height: ["6'4", "193 cm"],
      weight: ["250 lb", "113 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: { occupation: "Fugitive", base: "-" },
    connections: {
      "group-affiliation": "-",
      relatives:
        "Miles Warren (creator), Peter Parker (Spider-Man, genetic template), Ben Reilly (Scarlet Spider, fellow clone, deceased), Spidercide (fellow clone, allegedly deceased), Guardian (fellow clone, deceased), Jack (fellow clone, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1536.jpg"
    }
  },
  {
    response: "success",
    id: "579",
    name: "Scarlet Witch",
    powerstats: {
      intelligence: "100",
      strength: "10",
      speed: "29",
      durability: "70",
      power: "100",
      combat: "80"
    },
    biography: {
      "full-name": "Wanda Maximoff",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Wanda Frank",
        "Wanda Magnus",
        "Ana Maximoff",
        "Gypsy Witch",
        "The Witch"
      ],
      "place-of-birth": "Wundagore Mountain, Transia",
      "first-appearance": "Uncanny X-Men #4 (March, 1964)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Female",
      race: "Mutant",
      height: ["5'7", "170 cm"],
      weight: ["132 lb", "59 kg"],
      "eye-color": "Blue",
      "hair-color": "Brown"
    },
    work: {
      occupation: "Adventurer; formerly witchcraft tutor, housewife, terrorist",
      base:
        "Mobile; formerly The Works; Avengers Compound, California; Avengers Mansion, New York"
    },
    connections: {
      "group-affiliation":
        "None, Formerly Avengers, Avengers West Coast, Force Works, Queen's Vengeance, Secret Defenders, Lady Liberators, Brotherhood of Evil Mutants",
      relatives:
        "Pietro (Quicksilver, twin brother), Magnus (Magneto, father), Magda Lehnsherr (mother, deceased), Anya (half-sister, deceased), Lorna Dane (Polaris, half-sister), Vision (estranged husband), Django Maximoff (foster father, deceased), Marya Maximoff (foster mother, deceased), Crystal (sister-in-law), Luna (niece), Tommy & Billy (reincarnated sons), Talia Wagner (Nocturne, alternate reality daughter)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/444.jpg"
    }
  },
  {
    response: "success",
    id: "58",
    name: "Azrael",
    powerstats: {
      intelligence: "63",
      strength: "18",
      speed: "17",
      durability: "20",
      power: "35",
      combat: "80"
    },
    biography: {
      "full-name": "Michael Washington Lane",
      "alter-egos": "No alter egos found.",
      aliases: ["Bat-Devil; Bat-Ghost"],
      "place-of-birth": "Gotham City",
      "first-appearance": "Batman #672 (February, 2008)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: { occupation: "Former Police Officer, vigilante", base: "-" },
    connections: {
      "group-affiliation":
        "Order of St. Dumas; formerly Gotham City Police Department; Three Ghosts of Batman",
      relatives:
        "Mitchell Lane (father; deceased), Barbara Lane (mother; deceased), Marion Lane (brother; deceased), Gwendolyn Lane (sister; deceased), Chante Coles (wife; deceased), Henry Mitchell Lane (son; deceased), Jenny Lane (Sister-in-law)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1532.jpg"
    }
  },
  {
    response: "success",
    id: "580",
    name: "Scorpia",
    powerstats: {
      intelligence: "38",
      strength: "28",
      speed: "42",
      durability: "28",
      power: "34",
      combat: "28"
    },
    biography: {
      "full-name": "Elaine Coll",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance":
        "Spider-Man: Power of Terror limited series #2 (1995)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Green",
      "hair-color": "Red"
    },
    work: { occupation: "Professional criminal", base: "-" },
    connections: {
      "group-affiliation":
        "Hells Kitchen Mob; formerly Sinister Seven, allied with Silvermane",
      relatives: "Vincent Coll (grandfather, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1123.jpg"
    }
  },
  {
    response: "success",
    id: "581",
    name: "Scorpion",
    powerstats: {
      intelligence: "50",
      strength: "52",
      speed: "60",
      durability: "85",
      power: "49",
      combat: "80"
    },
    biography: {
      "full-name": "MacDonald Gargan",
      "alter-egos": "Venom III",
      aliases: ["Venom", "Spider-Man"],
      "place-of-birth": "-",
      "first-appearance": "Amazing Spider-Man #19 (1964)",
      publisher: "Venom III",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'11", "211 cm"],
      weight: ["689 lb", "310 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: {
      occupation:
        "U.S. government agent; former professional criminal, assassin, private detective",
      base: "-"
    },
    connections: {
      "group-affiliation":
        'Avengers (Osborn\'s team); formerly Thunderbolts, Masters of Evil, "Spider-Man Revenge League"; Sinister Twelve; formerly partners with Mister Hyde and Delilah',
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1041.jpg"
    }
  },
  {
    response: "success",
    id: "582",
    name: "Sebastian Shaw",
    powerstats: {
      intelligence: "63",
      strength: "85",
      speed: "12",
      durability: "95",
      power: "36",
      combat: "56"
    },
    biography: {
      "full-name": "Sebastian Hiram Shaw",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1482.jpg"
    }
  },
  {
    response: "success",
    id: "583",
    name: "Sentry",
    powerstats: {
      intelligence: "75",
      strength: "100",
      speed: "100",
      durability: "84",
      power: "100",
      combat: "40"
    },
    biography: {
      "full-name": "Robert Reynolds",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Void",
        "Bob",
        "Golden Guardian of Good",
        "John Victor Williams",
        "Scout"
      ],
      "place-of-birth": "-",
      "first-appearance": "Sentry #1 (September, 2000)",
      publisher: "Marvel Comics",
      alignment: "neutral"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["6'2", "188 cm"],
      weight: ["194 lb", "87 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation: "-",
      base:
        "The Watchtower (on top of Stark Tower, where it was formerly located before all memory of him disappeared)"
    },
    connections: {
      "group-affiliation":
        "Formerly Horsemen of Death, Osborn's Avengers, Mighty Avengers, New Avengers, partner of Scout",
      relatives: "Lindy Reynolds (wife, deceased), Mrs. Reynolds (mother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/447.jpg"
    }
  },
  {
    response: "success",
    id: "584",
    name: "Shadow King",
    powerstats: {
      intelligence: "75",
      strength: "12",
      speed: "27",
      durability: "100",
      power: "100",
      combat: "75"
    },
    biography: {
      "full-name": "Amahl Farouk",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Professor X",
        "Ananasi",
        "Amahl Farouk",
        "Evil One",
        "Master of the Games; he also impersonated the following mind-controlled subjects (in chronological order): Alexander Flynn",
        "Karma",
        "Cypher",
        "Jacob Reisz",
        "Donald Pierce and probably others"
      ],
      "place-of-birth": "-",
      "first-appearance": "X-Men #117 (1979)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "-",
      race: "null",
      height: ["6'1", "185 cm"],
      weight: ["330 lb", "149 kg"],
      "eye-color": "Red",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "The Astral Plane; Formerly Cairo, Egypt." },
    connections: {
      "group-affiliation":
        "Shadow Mob; former head of the Gladiators and the Cairo?s Thieves Quarter",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/121.jpg"
    }
  },
  {
    response: "success",
    id: "585",
    name: "Shadow Lass",
    powerstats: {
      intelligence: "63",
      strength: "10",
      speed: "67",
      durability: "20",
      power: "79",
      combat: "80"
    },
    biography: {
      "full-name": "Tasmia Mallor",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Talok VIII",
      "first-appearance": "Adventure Comics #365",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Talokite",
      height: ["5'8", "173 cm"],
      weight: ["120 lb", "54 kg"],
      "eye-color": "Black",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1195.jpg"
    }
  },
  {
    response: "success",
    id: "586",
    name: "Shadowcat",
    powerstats: {
      intelligence: "88",
      strength: "8",
      speed: "21",
      durability: "25",
      power: "69",
      combat: "70"
    },
    biography: {
      "full-name": "Kitty Pryde",
      "alter-egos": "No alter egos found.",
      aliases: ["Kitty Pryde", "Ariel", "Sprite", "Cat"],
      "place-of-birth": "Deerfield, Illinois",
      "first-appearance": "X-Men #129 (January, 1980)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Mutant",
      height: ["5'6", "168 cm"],
      weight: ["110 lb", "50 kg"],
      "eye-color": "Hazel",
      "hair-color": "Brown"
    },
    work: {
      occupation: "Teacher, Adventurer, former student",
      base:
        "Xavier Insitute for Higher Learning, Salem Center, New York, formerly Muir Island off the coast of Scotland, formerly Excalibur's Lighthouse, formerly Braddock Manor, England"
    },
    connections: {
      "group-affiliation":
        "X-Men (New Charles Xavier School member), X-Men (Past) (tutor); formerly X-Men, Murder Circus (brainwashed), Lights (liaison), Paladins Squad, S.H.I.E.L.D., Gladiators, Excalibur (founding member), New Mutants, Knights of Wundagore",
      relatives:
        "Kate (maternal great-grandmother), Samuel Prydeman (paternal grandfather, deceased), Chava Rosanoff (paternal great-aunt, deceased), Mr. Rosanoff (paternal great-uncle, apparently deceased), Nina (aunt), Carmen Pryde (father, deceased), Theresa Pryde (mother), Kenny (cousin)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/122.jpg"
    }
  },
  {
    response: "success",
    id: "587",
    name: "Shang-Chi",
    powerstats: {
      intelligence: "63",
      strength: "12",
      speed: "30",
      durability: "50",
      power: "29",
      combat: "100"
    },
    biography: {
      "full-name": "Shang-Chi",
      "alter-egos": "No alter egos found.",
      aliases: [
        "The Master of Kung Fu; The Rising and Advancing of the Spirit; Chinaman (by Jack Tarr)"
      ],
      "place-of-birth": "-",
      "first-appearance": "Special Marvel Edition #15 (December, 1973)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'10", "178 cm"],
      weight: ["175 lb", "79 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation":
        'MI-5, MI-6, "Marvel Knights", Heroes For Hire, Freelance Restorations, Si-Fan, Secret Avengers',
      relatives:
        "Fu Manchu, father; unnamed mother; Fah Lo Suee, (half-sister); Whispering Shadow (half-brother, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/454.jpg"
    }
  },
  {
    response: "success",
    id: "588",
    name: "Shatterstar",
    powerstats: {
      intelligence: "63",
      strength: "48",
      speed: "45",
      durability: "64",
      power: "49",
      combat: "84"
    },
    biography: {
      "full-name": "Gaveedra Seven",
      "alter-egos": "No alter egos found.",
      aliases: ["Benjamin Russell"],
      "place-of-birth": "Mojoworld",
      "first-appearance": "New Mutants #99",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'3", "191 cm"],
      weight: ["195 lb", "88 kg"],
      "eye-color": "Brown",
      "hair-color": "Red"
    },
    work: { occupation: "Warrior", base: "-" },
    connections: {
      "group-affiliation": "X-Force, Blood Cadre Alliance (former member)",
      relatives: "Longshot (father), Dazzler (mother), Mojo V"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/124.jpg"
    }
  },
  {
    response: "success",
    id: "589",
    name: "She-Hulk",
    powerstats: {
      intelligence: "81",
      strength: "100",
      speed: "42",
      durability: "100",
      power: "40",
      combat: "70"
    },
    biography: {
      "full-name": "Jennifer Walters",
      "alter-egos": "No alter egos found.",
      aliases: ["Jade Giantess"],
      "place-of-birth": "Los Angeles, California",
      "first-appearance": "She-Hulk (Vol. 1) #1",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["6'7", "201 cm"],
      weight: ["700 lb", "315 kg"],
      "eye-color": "Green",
      "hair-color": "Green"
    },
    work: {
      occupation: "Lawyer, Magistra of the Living Tribunal",
      base:
        "Law offices of Goodman, Lieber, Kurtzberg, & Holliway; formerly Avengers Mansion; Baxter Building, Four Freedoms Plaza"
    },
    connections: {
      "group-affiliation":
        "Goodman, Lieber, Kurtzberg, & Holliway; formerly Avengers, Fantastic Four, Heroes for Hire",
      relatives: "Bruce Banner (Hulk, cousin)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/125.jpg"
    }
  },
  {
    response: "success",
    id: "59",
    name: "Aztar",
    powerstats: {
      intelligence: "null",
      strength: "98",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Aztar",
      "alter-egos": "Spectre",
      aliases: ["Spirit of Vengeance"],
      "place-of-birth": "-",
      "first-appearance": "More Fun Comics #52 (February 1940)",
      publisher: "Spectre",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "The Presence", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1012.jpg"
    }
  },
  {
    response: "success",
    id: "590",
    name: "She-Thing",
    powerstats: {
      intelligence: "69",
      strength: "72",
      speed: "21",
      durability: "80",
      power: "23",
      combat: "65"
    },
    biography: {
      "full-name": "Sharon Ventura",
      "alter-egos": "Ms Marvel II",
      aliases: ["Thing", "Ms Marvel"],
      "place-of-birth": "-",
      "first-appearance": "Thing #27",
      publisher: "Ms Marvel II",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human / Radiation",
      height: ["6'0", "183 cm"],
      weight: ["340 lb", "153 kg"],
      "eye-color": "Blue",
      "hair-color": "No Hair"
    },
    work: {
      occupation:
        "Prisoner, former adventurer, wrestler, stuntwoman, scuba diver, motorcycle performer",
      base: "-"
    },
    connections: {
      "group-affiliation":
        "Frightful Four; formerly Fantastic Four, Unlimited Class Wrestling Federation, Thunderiders",
      relatives:
        "Jack Ventura (father, deceased), Mrs. Ventura (mother, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/461.jpg"
    }
  },
  {
    response: "success",
    id: "591",
    name: "Shocker",
    powerstats: {
      intelligence: "63",
      strength: "10",
      speed: "23",
      durability: "70",
      power: "79",
      combat: "56"
    },
    biography: {
      "full-name": "Herman Schultz",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Amazing Spider-Man #46",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'9", "175 cm"],
      weight: ["175 lb", "79 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: {
      occupation: "Professional thief, hired assassin",
      base: "New York City, New York"
    },
    connections: {
      "group-affiliation":
        "Formerly Masters of Evil, Sinister Syndicate, Sinister Seven, Sinister Twelve",
      relatives: "Mr. & Mrs. Schultz (parents)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/19.jpg"
    }
  },
  {
    response: "success",
    id: "592",
    name: "Shriek",
    powerstats: {
      intelligence: "50",
      strength: "10",
      speed: "23",
      durability: "28",
      power: "45",
      combat: "42"
    },
    biography: {
      "full-name": "Frances Louise Barrison",
      "alter-egos": "No alter egos found.",
      aliases: ["Sandra Deel"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'8", "173 cm"],
      weight: ["115 lb", "52 kg"],
      "eye-color": "Yellow / Blue",
      "hair-color": "Black"
    },
    work: {
      occupation:
        "Former partner of Carnage, Carrion (Malcolm McBride), Demogoblin and Doppelganger). Before she became Shriek, she was a rock band groupie and drug dealer.",
      base: "-"
    },
    connections: {
      "group-affiliation": "Formerly Carnage Family",
      relatives:
        "Carnage (adopted husband), Carrion (Malcolm McBride) and Demogoblin (adopted sons), Doppelganger (adopted pet)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1319.jpg"
    }
  },
  {
    response: "success",
    id: "593",
    name: "Shrinking Violet",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1188.jpg"
    }
  },
  {
    response: "success",
    id: "594",
    name: "Sif",
    powerstats: {
      intelligence: "63",
      strength: "90",
      speed: "67",
      durability: "80",
      power: "100",
      combat: "70"
    },
    biography: {
      "full-name": "Sif",
      "alter-egos": "No alter egos found.",
      aliases: ["Lady Sif", "Erika Velez", "Mrs. Chambers", "Sybil"],
      "place-of-birth": "-",
      "first-appearance": "Journey into Mystery #102 (March, 1964)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Asgardian",
      height: ["6'2", "188 cm"],
      weight: ["425 lb", "191 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "Broxton/Asgard; Formerly New York City" },
    connections: {
      "group-affiliation": "The Gods of Asgard",
      relatives: "Heimdall (brother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1533.jpg"
    }
  },
  {
    response: "success",
    id: "595",
    name: "Silk",
    powerstats: {
      intelligence: "75",
      strength: "48",
      speed: "71",
      durability: "70",
      power: "71",
      combat: "65"
    },
    biography: {
      "full-name": "Cindy Moon",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Amazing Spider-Man Vol 3 #4",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: {
      occupation:
        "Vigilante, intern at Fact Channel News, adventurer; former student",
      base:
        "Sims Tower, Times Square, Manhattan, New York City, New York; formerly Sims Tower, Times Square, Manhattan, New York City, New York, Earth-3145; Central Park, Manhattan, New York City, New York, Earth-13"
    },
    connections: {
      "group-affiliation":
        "Black Cat's Gang, Fact Channel News; formerly Spider-Army, partner of Spider-Man, Ezekiel Sims",
      relatives:
        "Albert Moon. Sr. (father, estranged), unnamed mother (estranged), Albert Moon, Jr. (brother, estranged), Spider-Man (Peter Parker, bit by same spider)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10495.jpg"
    }
  },
  {
    response: "success",
    id: "596",
    name: "Silk Spectre",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Sally Juspeczyk",
      "alter-egos": "No alter egos found.",
      aliases: ["Sally Jupiter"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "Watchmen, Minutemen",
      relatives: "Silk Spectre II (daughter)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1057.jpg"
    }
  },
  {
    response: "success",
    id: "597",
    name: "Silk Spectre II",
    powerstats: {
      intelligence: "null",
      strength: "51",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Laurie Juspeczyk",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "Watchmen",
      relatives: "Silk Spectre I (mother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1058.jpg"
    }
  },
  {
    response: "success",
    id: "598",
    name: "Silver Surfer",
    powerstats: {
      intelligence: "56",
      strength: "100",
      speed: "100",
      durability: "90",
      power: "100",
      combat: "32"
    },
    biography: {
      "full-name": "Norrin Radd",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Zenn-La",
      "first-appearance": "Fantastic Four, Vol. 1 #48",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Alien",
      height: ["6'4", "193 cm"],
      weight: ["225 lb", "101 kg"],
      "eye-color": "White",
      "hair-color": "No Hair"
    },
    work: {
      occupation: "Adventurer, formerly Galactus' Herald",
      base: "mobile throughout the universe"
    },
    connections: {
      "group-affiliation":
        "Former member of Defenders, former member of the Star Masters",
      relatives:
        "Jartran Radd (father, deceased), Elmar Radd (mother, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/127.jpg"
    }
  },
  {
    response: "success",
    id: "599",
    name: "Silverclaw",
    powerstats: {
      intelligence: "50",
      strength: "28",
      speed: "35",
      durability: "42",
      power: "34",
      combat: "42"
    },
    biography: {
      "full-name": "Maria de Guadalupe Santiago",
      "alter-egos": "No alter egos found.",
      aliases: ["La Garra Argentado", "Daughter of the Volcano God,"],
      "place-of-birth": "The village of Kamekeri, Costa Verde",
      "first-appearance": "Avengers #8 (1998)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'2", "157 cm"],
      weight: ["110 lb", "50 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: {
      occupation: "University student, adventurer",
      base: "Empire State University and Avengers Mansion, New York City, NY"
    },
    connections: {
      "group-affiliation":
        "The Secret Avengers, formerly reserve member of the Avengers",
      relatives:
        'Jaime Santiago (father), Peliali (mother), Edwin Jarvis ("uncle")'
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1019.jpg"
    }
  },
  {
    response: "success",
    id: "6",
    name: "Absorbing Man",
    powerstats: {
      intelligence: "38",
      strength: "80",
      speed: "25",
      durability: "100",
      power: "98",
      combat: "64"
    },
    biography: {
      "full-name": "Carl Creel",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Greithoth",
        '"Crusher" Creel',
        "Rocky Davis",
        "Dynamite Davis",
        "Lightningbolt",
        "Prisoner #24957"
      ],
      "place-of-birth": "New York City, New York",
      "first-appearance": "Daredevil #1 (April, 1964) (As Rocky Davis)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'4", "193 cm"],
      weight: ["270 lb", "122 kg"],
      "eye-color": "Blue",
      "hair-color": "No Hair"
    },
    work: {
      occupation: "Professional criminal; former professional boxer",
      base: "-"
    },
    connections: {
      "group-affiliation":
        "Masters of Evil, Lethal Legion; formerly Worthy, Frightful Four: former agent of Loki and They Who Wield Power",
      relatives:
        'Mary MacPherran (Titania) (wife); Jerry Sledge (son); Rockwell "Rocky" Davis (Hi-Llite) (cousin)'
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1448.jpg"
    }
  },
  {
    response: "success",
    id: "60",
    name: "Bane",
    powerstats: {
      intelligence: "88",
      strength: "38",
      speed: "23",
      durability: "56",
      power: "51",
      combat: "95"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Batman: Vengeance of Bane #1 (January, 1993)",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'8", "203 cm"],
      weight: ["400 lb", "180 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "Santa Prisca" },
    connections: {
      "group-affiliation":
        "Suicide Squad, The Secret Society of Super Villains",
      relatives: "King Snake (father)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/637.jpg"
    }
  },
  {
    response: "success",
    id: "600",
    name: "Simon Baz",
    powerstats: {
      intelligence: "56",
      strength: "90",
      speed: "42",
      durability: "55",
      power: "100",
      combat: "60"
    },
    biography: {
      "full-name": "Simoon Baz",
      "alter-egos": "No alter egos found.",
      aliases: ["Green Lantern", "White Lantern"],
      "place-of-birth": "Dearborn, Michigan",
      "first-appearance": "The New 52: FCBD Special Edition #1 (June, 2012)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Bown",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "-",
      relatives:
        "Sira Baz (sister), Farid Amar (nephew), Nazir Amar (brother in-law)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10649.jpg"
    }
  },
  {
    response: "success",
    id: "601",
    name: "Sinestro",
    powerstats: {
      intelligence: "75",
      strength: "85",
      speed: "53",
      durability: "64",
      power: "100",
      combat: "55"
    },
    biography: {
      "full-name": "Thaal Sinestro",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Green Lantern",
        "White Lantern",
        "Yellow Lantern",
        "Parallax",
        "Indigo Lantern"
      ],
      "place-of-birth": "Korugar City, Korugar",
      "first-appearance": "Green Lantern Vol 2 #7",
      publisher: "DC Comics",
      alignment: "neutral"
    },
    appearance: {
      gender: "Male",
      race: "Korugaran",
      height: ["6'7", "201 cm"],
      weight: ["205 lb", "92 kg"],
      "eye-color": "Black",
      "hair-color": "Black"
    },
    work: {
      occupation: "-",
      base: "Ranx, Warworld. formerly New Korugar, Qward, Oa"
    },
    connections: {
      "group-affiliation":
        "Sinestro Corps, formerly Green Lantern Corps, Secret Society, Injustice League",
      relatives:
        "Witch Queen (sister, pre-Crisis), Soranik Natu (daughter), Arin Sur (wife, deceased), Abin Sur (brother-in-law, deceased), Amon Sur (nephew)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/781.jpg"
    }
  },
  {
    response: "success",
    id: "602",
    name: "Siren",
    powerstats: {
      intelligence: "56",
      strength: "62",
      speed: "79",
      durability: "60",
      power: "92",
      combat: "60"
    },
    biography: {
      "full-name": "Hila",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Aquaman #22 (August, 1965)",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Female",
      race: "Atlantean",
      height: ["5'9", "175 cm"],
      weight: ["160 lb", "72 kg"],
      "eye-color": "Blue",
      "hair-color": "Purple"
    },
    work: { occupation: "-", base: "formely Atlantis" },
    connections: {
      "group-affiliation": "-",
      relatives: "Mera (twin sister), Aquaman (brother-in-law)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1387.jpg"
    }
  },
  {
    response: "success",
    id: "603",
    name: "Siren II",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "La Sirene la Bailene",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Atlantis",
      "first-appearance": "The Titans #5 (1999)",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Black",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1386.jpg"
    }
  },
  {
    response: "success",
    id: "604",
    name: "Siryn",
    powerstats: {
      intelligence: "38",
      strength: "8",
      speed: "47",
      durability: "28",
      power: "50",
      combat: "42"
    },
    biography: {
      "full-name": "Theresa Rourke Cassidy",
      "alter-egos": "No alter egos found.",
      aliases: ["Theresa Rourke"],
      "place-of-birth": "Cassidy Keep, County Mayo, Ireland",
      "first-appearance": "Spider-Woman (first series) #37",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'6", "168 cm"],
      weight: ["115 lb", "52 kg"],
      "eye-color": "Blue",
      "hair-color": "Strawberry Blond"
    },
    work: {
      occupation: "(current) Adventurer (former) Professional Criminal",
      base: "-"
    },
    connections: {
      "group-affiliation":
        "(Current) X-Factor (former) Ally of Black Tom and the Juggernaut, Fallen Angels, X-Force",
      relatives:
        "Sean Cassidy (Banshee, father), Maeve Rourke (mother, deceased), Black Tom Cassidy (cousin)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/833.jpg"
    }
  },
  {
    response: "success",
    id: "605",
    name: "Skaar",
    powerstats: {
      intelligence: "50",
      strength: "85",
      speed: "27",
      durability: "90",
      power: "69",
      combat: "85"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Savior",
        "Son of Hulk",
        "WorldBreaker",
        "Long Hair",
        "Little Monster",
        "Conan"
      ],
      "place-of-birth": "Sakaar",
      "first-appearance": "World War Hulk #5, 2007",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'6", "198 cm"],
      weight: ["400 lb", "180 kg"],
      "eye-color": "Green",
      "hair-color": "Black"
    },
    work: { occupation: "Warrior", base: "-" },
    connections: {
      "group-affiliation": "-",
      relatives:
        "Morris Walters (granduncle), Elaine Banner-Walters (paternal grandaunt, deceased), Brian Banner (paternal grandfather, deceased), Rebecca Banner (paternal grandmother, deceased), She-Hulk (1st cousin once removed), Hulk (father), Caiera the Oldstrong (mother, deceased), Hiro-Kala (Twin brother), Lyra (half-sister)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1341.jpg"
    }
  },
  {
    response: "success",
    id: "606",
    name: "Snake-Eyes",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["Xanthian Boulder Crusher"],
      "place-of-birth": "-",
      "first-appearance": "Marvel Team-Up Annual Vol 1 #7 October, 1984",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Animal",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10437.jpg"
    }
  },
  {
    response: "success",
    id: "607",
    name: "Snowbird",
    powerstats: {
      intelligence: "50",
      strength: "32",
      speed: "27",
      durability: "42",
      power: "70",
      combat: "52"
    },
    biography: {
      "full-name": "Narya",
      "alter-egos": "No alter egos found.",
      aliases: ["Anne McKenzie-Thompson"],
      "place-of-birth": "Near Resolute Bay, Northwest Territories, Canada",
      "first-appearance": "Uncanny X-Men #120",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'10'", "178 cm"],
      weight: ["108 lb", "49 kg"],
      "eye-color": "White",
      "hair-color": "Blond"
    },
    work: {
      occupation: "Goddess, adventurer, former records officer",
      base: "formerly Department H"
    },
    connections: {
      "group-affiliation":
        "God Squad; formerly Alpha Flight, Eskimo Gods, Royal Canadian Mounted Police, The Flight",
      relatives:
        "Hodiak (grandfather), Nelvanna (mother), Richard Lawrence Easton (father, deceased), Michael Twoyoungmen (Shaman, foster father), Douglas Thompson (husband, deceased), unnamed son (deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/130.jpg"
    }
  },
  {
    response: "success",
    id: "608",
    name: "Sobek",
    powerstats: {
      intelligence: "50",
      strength: "34",
      speed: "23",
      durability: "46",
      power: "20",
      combat: "56"
    },
    biography: {
      "full-name": "Yurrd the Unknown",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Sobek the Talking Crocodile; The Unknown in Formless Time Before Time; Famine"
      ],
      "place-of-birth": "Nile River; Bioengineered at Oolong Island",
      "first-appearance": "52 Week Twenty-Six",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "White",
      "hair-color": "No Hair"
    },
    work: { occupation: "-", base: "Kahndaq" },
    connections: {
      "group-affiliation": "Black Marvel Family, Four Horsemen",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1166.jpg"
    }
  },
  {
    response: "success",
    id: "609",
    name: "Solomon Grundy",
    powerstats: {
      intelligence: "9",
      strength: "93",
      speed: "13",
      durability: "100",
      power: "92",
      combat: "30"
    },
    biography: {
      "full-name": "Cyrus Gold",
      "alter-egos": "No alter egos found.",
      aliases: ["Marshland Monster"],
      "place-of-birth": "Gotham City",
      "first-appearance": "All-American Comics #61 (October, 1944)",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Zombie",
      height: ["9'2", "279 cm"],
      weight: ["971 lb", "437 kg"],
      "eye-color": "Black",
      "hair-color": "White"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation":
        "Formerly, Injustice Society, Injustice League, the Society, Infinity, Inc; Injustice Unlimited, Black Lantern Corps",
      relatives:
        "Unnamed wife (deceased); Karin Rykel (possible descendant, deceased); Chrissie Cavendish (possible descendant)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/782.jpg"
    }
  },
  {
    response: "success",
    id: "61",
    name: "Banshee",
    powerstats: {
      intelligence: "50",
      strength: "10",
      speed: "58",
      durability: "40",
      power: "63",
      combat: "70"
    },
    biography: {
      "full-name": "Sean Cassidy",
      "alter-egos": "No alter egos found.",
      aliases: ["Death"],
      "place-of-birth": "Cassidy Keep, Ireland",
      "first-appearance": "X-Men #28 (January, 1967)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'0", "183 cm"],
      weight: ["170 lb", "77 kg"],
      "eye-color": "Green",
      "hair-color": "Strawberry Blond"
    },
    work: {
      occupation:
        "Currently founder and director of operation for X-Corps, formerly Adventurer and Headmaster at the Massachusetts Academy, in charge of Generation X, Interpol Inspector and Agent, freelance detective, professional criminal, involuntary operative for Factor",
      base:
        "Muir Island, off the coast of Scotland. formerly Massachusetts Academy; Xavier Institute"
    },
    connections: {
      "group-affiliation":
        "Currently X-Corps, formerly Generation X, Factor Three, X-Men",
      relatives:
        "Maeve Rourke Cassidy (wife, deceased), Thomas (Black Tom, cousin), Theresa Rourke (Siryn, daughter)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/26.jpg"
    }
  },
  {
    response: "success",
    id: "610",
    name: "Songbird",
    powerstats: {
      intelligence: "75",
      strength: "36",
      speed: "27",
      durability: "42",
      power: "55",
      combat: "56"
    },
    biography: {
      "full-name": "Melissa Joan Gold",
      "alter-egos": "No alter egos found.",
      aliases: ["Screaming Mimi", "Mimi Schwartz", "Margie Green"],
      "place-of-birth": "Shoshoni, Wyoming",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'5", "165 cm"],
      weight: ["145 lb", "65 kg"],
      "eye-color": "Green",
      "hair-color": "Red / White"
    },
    work: { occupation: "Adventurer; former criminal and wrestler", base: "-" },
    connections: {
      "group-affiliation":
        "Formerly Thunderbolts, Masters of Evil, Unlimited Class Wrestling Federation, Grapplers",
      relatives: "Mimi Gold (mother), Mr. Gold (father)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/131.jpg"
    }
  },
  {
    response: "success",
    id: "611",
    name: "Space Ghost",
    powerstats: {
      intelligence: "38",
      strength: "18",
      speed: "33",
      durability: "40",
      power: "95",
      combat: "80"
    },
    biography: {
      "full-name": "Thaddeus Bach",
      "alter-egos": "No alter egos found.",
      aliases: ["Ted Ghostel", "Tad Ghostal"],
      "place-of-birth": "-",
      "first-appearance": "Space Ghost (1966)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'2", "188 cm"],
      weight: ["250 lb", "113 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "Galactic Heroes", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1505.jpg"
    }
  },
  {
    response: "success",
    id: "612",
    name: "Spawn",
    powerstats: {
      intelligence: "75",
      strength: "60",
      speed: "50",
      durability: "90",
      power: "100",
      combat: "95"
    },
    biography: {
      "full-name": "Al Simmons",
      "alter-egos": "No alter egos found.",
      aliases: ["The One", "Hellspawn"],
      "place-of-birth": "Detroit, Michigan (8th level of Hell after rebirth)",
      "first-appearance": "Spawn #1 (May, 1992)",
      publisher: "Image Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Demon",
      height: ["6'11", "211 cm"],
      weight: ["900 lb", "405 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "Hell" },
    connections: {
      "group-affiliation":
        "Eighth Circle of Hell; formerly (as Al Simmons) CIA (U.S. Security Service), U.S. Secret Service, U.S. Marine Corps",
      relatives: "Wanda (widow), Cyan (widow's daughter)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/842.jpg"
    }
  },
  {
    response: "success",
    id: "613",
    name: "Spectre",
    powerstats: {
      intelligence: "88",
      strength: "100",
      speed: "100",
      durability: "100",
      power: "100",
      combat: "70"
    },
    biography: {
      "full-name": "Aztar",
      "alter-egos": "Aztar",
      aliases: [
        "Spirit of Vengeance",
        "Wrath of God",
        "Spirit of Redemption",
        "Raguel",
        "James Corrigan",
        "Hal Jordan",
        "Cripus Allen"
      ],
      "place-of-birth": "-",
      "first-appearance": "More Fun Comics #52 (February, 1940)",
      publisher: "Aztar",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "God / Eternal",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "White",
      "hair-color": "No Hair"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/784.jpg"
    }
  },
  {
    response: "success",
    id: "614",
    name: "Speedball",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Robert Baldwin",
      "alter-egos": "Penance II",
      aliases: ["Penance", "Masked Marvel"],
      "place-of-birth": "Springdale, Connecticut",
      "first-appearance":
        "Amazing Spider-Man Annual #22, (chronologically) Speedball #1",
      publisher: "Penance II",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: {
      occupation: "Student, superhero",
      base: "Mobile; formerly New Warriors Headquarters"
    },
    connections: {
      "group-affiliation": "New Warriors",
      relatives: "Maddie Baldwin (mother), Justin Baldwin (father)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/132.jpg"
    }
  },
  {
    response: "success",
    id: "615",
    name: "Speedy",
    powerstats: {
      intelligence: "50",
      strength: "6",
      speed: "33",
      durability: "20",
      power: "26",
      combat: "70"
    },
    biography: {
      "full-name": "Thea Queen",
      "alter-egos": "No alter egos found.",
      aliases: ["Thea Merlyn", "Mia", "Red Arrow"],
      "place-of-birth": "Starling City",
      "first-appearance": 'Arrow (TV Series) - "Pilot"',
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Green",
      "hair-color": "Brown"
    },
    work: { occupation: "Nightclub Owner", base: "-" },
    connections: {
      "group-affiliation": "Team Arrow",
      relatives:
        "Moira Queen (mother, deceased), Robert Queen (foster father, deceased), Walter Steele (step-father, formerly), Malcolm Merlyn (biological father), Oliver Queen (Green Arrow, half-brother), Tommy Merlyn (half-brother, deceased), William Clayton (nephew)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10558.jpg"
    }
  },
  {
    response: "success",
    id: "616",
    name: "Speedy",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Roy William Harper, Jr.",
      "alter-egos": "Arsenal",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Arsenal",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1015.jpg"
    }
  },
  {
    response: "success",
    id: "617",
    name: "Spider-Carnage",
    powerstats: {
      intelligence: "null",
      strength: "69",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Benjamin Reilly",
      "alter-egos": "Scarlet Spider",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Scarlet Spider",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Symbiote",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/957.jpg"
    }
  },
  {
    response: "success",
    id: "618",
    name: "Spider-Girl",
    powerstats: {
      intelligence: "63",
      strength: "38",
      speed: "60",
      durability: "65",
      power: "53",
      combat: "75"
    },
    biography: {
      "full-name": "May 'Mayday' Parker",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "New York City, New York",
      "first-appearance": "What If? Vol 2 #105 (February, 1998)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["5'7", "170 cm"],
      weight: ["119 lb", "54 kg"],
      "eye-color": "Blue",
      "hair-color": "Brown"
    },
    work: { occupation: "-", base: "New York City, New York" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/480.jpg"
    }
  },
  {
    response: "success",
    id: "619",
    name: "Spider-Gwen",
    powerstats: {
      intelligence: "75",
      strength: "55",
      speed: "63",
      durability: "70",
      power: "66",
      combat: "70"
    },
    biography: {
      "full-name": "Gwen Stacy",
      "alter-egos": "No alter egos found.",
      aliases: ["Spider-Woman"],
      "place-of-birth": "-",
      "first-appearance": "Edge of Spider-Verse #2",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["5'5", "165 cm"],
      weight: ["125 lb", "56 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation":
        "Warriors of the Great Web; formerly Mary Janes, Spider-Army",
      relatives: "George Stacy (father), Helen Stacy (mother, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10507.jpg"
    }
  },
  {
    response: "success",
    id: "62",
    name: "Bantam",
    powerstats: {
      intelligence: "25",
      strength: "53",
      speed: "23",
      durability: "54",
      power: "21",
      combat: "56"
    },
    biography: {
      "full-name": "Roberto Velasquez",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Civil War: Front Line #3 (September, 2006)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["5'5", "165 cm"],
      weight: ["119 lb", "54 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: { occupation: "Adventurer, boxing trainer, former boxer", base: "-" },
    connections: {
      "group-affiliation": "Captain America, Pro-Registration forces",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/229.jpg"
    }
  },
  {
    response: "success",
    id: "620",
    name: "Spider-Man",
    powerstats: {
      intelligence: "90",
      strength: "55",
      speed: "67",
      durability: "75",
      power: "74",
      combat: "85"
    },
    biography: {
      "full-name": "Peter Parker",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Spiderman",
        "Bag-Man",
        "Black Marvel",
        "Captain Universe",
        "Dusk",
        "Green Hood",
        "Hornet",
        "Mad Dog 336",
        "Peter Palmer",
        "Prodigy",
        "Ricochet",
        "Scarlet Spider",
        "Spider-Boy",
        "Spider-Hulk",
        "Spider-Morphosis"
      ],
      "place-of-birth": "New York, New York",
      "first-appearance": "Amazing Fantasy #15",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'10", "178 cm"],
      weight: ["165 lb", "74 kg"],
      "eye-color": "Hazel",
      "hair-color": "Brown"
    },
    work: {
      occupation: "Freelance photographer, teacher",
      base: "New York, New York"
    },
    connections: {
      "group-affiliation":
        "Member of the Avengers, formerly member of Outlaws, alternate Fantastic Four",
      relatives:
        "Richard Parker (father, deceased), Mary Parker(mother, deceased), Benjamin Parker (uncle, deceased), May Parker (aunt), Mary Jane Watson-Parker (wife), May Parker (daughter, allegedly deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/133.jpg"
    }
  },
  {
    response: "success",
    id: "621",
    name: "Spider-Man",
    powerstats: {
      intelligence: "null",
      strength: "57",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Miguel O'Hara",
      "alter-egos": "No alter egos found.",
      aliases: ["Spider-Man 2099", "Spiderman"],
      "place-of-birth": "-",
      "first-appearance": "Amazing Spider-Man #365 (August, 1992)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "-",
      race: "Human",
      height: ["5'10", "178 cm"],
      weight: ["170 lb", "77 kg"],
      "eye-color": "Red",
      "hair-color": "Brown"
    },
    work: {
      occupation: "CEO of Alchemax Corporation, Executive Assistant",
      base: "-"
    },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/479.jpg"
    }
  },
  {
    response: "success",
    id: "622",
    name: "Spider-Man",
    powerstats: {
      intelligence: "null",
      strength: "58",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Miles Morales",
      "alter-egos": "No alter egos found.",
      aliases: ["Spiderman"],
      "place-of-birth": "-",
      "first-appearance": "Ultimate Comics Fallout #4 (October, 2011)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'2", "157 cm"],
      weight: ["125 lb", "56 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: { occupation: "Student, adventurer, vigilante", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10647.jpg"
    }
  },
  {
    response: "success",
    id: "623",
    name: "Spider-Woman",
    powerstats: {
      intelligence: "56",
      strength: "42",
      speed: "42",
      durability: "60",
      power: "68",
      combat: "70"
    },
    biography: {
      "full-name": "Jessica Drew",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Arachne",
        "Ariadne Hyde",
        "Dark Angel",
        "Dark Angel of San Francisco"
      ],
      "place-of-birth": "London, England",
      "first-appearance": "Marvel Spotlight #32 (February, 1977)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["5'10", "178 cm"],
      weight: ["130 lb", "59 kg"],
      "eye-color": "Green",
      "hair-color": "Black"
    },
    work: {
      occupation:
        "Form agent of HYDRA, former bounty hunter, private investigator, adventurer",
      base: "-"
    },
    connections: {
      "group-affiliation": "Former agent of HYDRA",
      relatives: "Jonathan (father, deceased), Merriem (mother, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/481.jpg"
    }
  },
  {
    response: "success",
    id: "624",
    name: "Spider-Woman II",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/483.jpg"
    }
  },
  {
    response: "success",
    id: "625",
    name: "Spider-Woman III",
    powerstats: {
      intelligence: "50",
      strength: "48",
      speed: "27",
      durability: "42",
      power: "60",
      combat: "28"
    },
    biography: {
      "full-name": "Martha Franklin",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Rochester, New York",
      "first-appearance":
        "(cameo) Spectacular Spider-Man #263 (1998); (full) Amazing Spider-Man #441 (1998)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'8", "173 cm"],
      weight: ["123 lb", "55 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "Formerly Gathering of the Five",
      relatives:
        "Jeremy Franklin (father, deceased), Bernice Franklin (mother, deceased), J. Jonah Jameson (foster father), Marla Madison (foster mother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/482.jpg"
    }
  },
  {
    response: "success",
    id: "626",
    name: "Spider-Woman IV",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Charlotte Witter",
      "alter-egos": "No alter egos found.",
      aliases: ["Spider-Woman"],
      "place-of-birth": "-",
      "first-appearance": "Amazing Spider-Man Volume 2 #5 (# 446)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'10", "178 cm"],
      weight: ["128 lb", "58 kg"],
      "eye-color": "Red",
      "hair-color": "White"
    },
    work: {
      occupation: "Fashion designer, professional criminal",
      base: "New York City"
    },
    connections: {
      "group-affiliation": "-",
      relatives: "Cassandra Webb (aka Madame Web, grandmother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/883.jpg"
    }
  },
  {
    response: "success",
    id: "627",
    name: "Spock",
    powerstats: {
      intelligence: "81",
      strength: "18",
      speed: "17",
      durability: "40",
      power: "56",
      combat: "40"
    },
    biography: {
      "full-name": "S'chn T'gai Spock",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Star Trek S01E01: The Man Trap",
      publisher: "Star Trek",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human-Vulcan",
      height: ["6'1", "185 cm"],
      weight: ["180 lb", "81 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10566.jpg"
    }
  },
  {
    response: "success",
    id: "628",
    name: "Spyke",
    powerstats: {
      intelligence: "50",
      strength: "12",
      speed: "17",
      durability: "60",
      power: "48",
      combat: "30"
    },
    biography: {
      "full-name": "Evan Daniels",
      "alter-egos": "No alter egos found.",
      aliases: ["Porcupine", "Armadillo"],
      "place-of-birth": "-",
      "first-appearance": '"Speed & Spyke" (December 9, 2000)',
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["6'0", "183 cm"],
      weight: ["185 lb", "83 kg"],
      "eye-color": "Brown",
      "hair-color": "Blond"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "Morlocks; Formerly: X-Men",
      relatives:
        "Mr. Daniels (father), Vivian Munroe-Daniels (mother), Storm (maternal aunt)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1455.jpg"
    }
  },
  {
    response: "success",
    id: "629",
    name: "Stacy X",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/485.jpg"
    }
  },
  {
    response: "success",
    id: "63",
    name: "Batgirl",
    powerstats: {
      intelligence: "88",
      strength: "11",
      speed: "33",
      durability: "40",
      power: "34",
      combat: "90"
    },
    biography: {
      "full-name": "Barbara Gordon",
      "alter-egos": "Oracle",
      aliases: ["Oracle", "Bluebelle"],
      "place-of-birth": "-",
      "first-appearance": "Detective Comics #359",
      publisher: "Oracle",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["5'7", "170 cm"],
      weight: ["126 lb", "57 kg"],
      "eye-color": "Green",
      "hair-color": "Red"
    },
    work: {
      occupation: "-",
      base: "Gotham City, formerly Metropolis, Platinum Flats"
    },
    connections: {
      "group-affiliation": "-",
      relatives:
        "James Gordon (father) ? Barbara Eileen (mother) ? James Gordon, Jr. (brother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1111.jpg"
    }
  },
  {
    response: "success",
    id: "630",
    name: "Star-Lord",
    powerstats: {
      intelligence: "69",
      strength: "20",
      speed: "33",
      durability: "50",
      power: "25",
      combat: "70"
    },
    biography: {
      "full-name": "Peter Jason Quill",
      "alter-egos": "No alter egos found.",
      aliases: ["Starlord"],
      "place-of-birth": "-",
      "first-appearance": "Marvel Preview #4 (January, 1976)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human-Spartoi",
      height: ["6'2", "188 cm"],
      weight: ["175 lb", "79 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation: "Adventurer; Royal Prince of Spartax",
      base: "C.I.T.T.; formerly Kree space; Hala, Daedalus 5"
    },
    connections: {
      "group-affiliation":
        "Guardians of the Galaxy (leader); formerly unnamed commando team, United Front, Imperial Guard, partner of Ship, NASA",
      relatives:
        "Eson (grandfather, deceased), Gareth (great-uncle, deceased), Jason of Sparta (father), Meredith Quill (mother, deceased), Victoria (half-sister), Kip Holm (adopted brother), Sandy (adopted sister in-law), Alain (adopted niece), Rhys, Robyn (adopted nephews), Kitty Pryde (fiance), Unnamed former Symbiote"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10015.jpg"
    }
  },
  {
    response: "success",
    id: "631",
    name: "Stardust",
    powerstats: {
      intelligence: "88",
      strength: "85",
      speed: "100",
      durability: "110",
      power: "100",
      combat: "85"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["Entity Lambda-Zero"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "Herald of Galactus", base: "-" },
    connections: {
      "group-affiliation": "Heralds of Galactus ; Formerly United Front",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1052.jpg"
    }
  },
  {
    response: "success",
    id: "632",
    name: "Starfire",
    powerstats: {
      intelligence: "50",
      strength: "80",
      speed: "33",
      durability: "85",
      power: "59",
      combat: "70"
    },
    biography: {
      "full-name": "Koriand'r",
      "alter-egos": "No alter egos found.",
      aliases: ["Princess Koriand'r", "Kory Anders", "Nova"],
      "place-of-birth": "Tamaran",
      "first-appearance": "DC Comics Presents #26 (October, 1980)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Tamaranean",
      height: ["6'4", "193 cm"],
      weight: ["158 lb", "71 kg"],
      "eye-color": "Green",
      "hair-color": "Auburn"
    },
    work: {
      occupation: "Model",
      base: "Formerly Titans Island, New York City; Titans Tower, San Francisco"
    },
    connections: {
      "group-affiliation":
        "Formerly R.E.B.E.L.S., Justice League of America, Teen Titans, Outsiders",
      relatives:
        "King Myand'r (father), Queen Luand'r (mother), Queen Komand'r (sister, Blackfire), Ryand'r (brother), Prince Karras (husband, deceased), Ph'yzzon (husband, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/786.jpg"
    }
  },
  {
    response: "success",
    id: "634",
    name: "Static",
    powerstats: {
      intelligence: "69",
      strength: "8",
      speed: "42",
      durability: "50",
      power: "90",
      combat: "40"
    },
    biography: {
      "full-name": "Virgil Hawkins",
      "alter-egos": "No alter egos found.",
      aliases: ["Sparky", "Virg", "V", "V-Man"],
      "place-of-birth": "Paris Island, Dakota City",
      "first-appearance": "Static #1 (June, 1993)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["5'7", "170 cm"],
      weight: ["140 lb", "63 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: {
      occupation: "Student",
      base:
        "Titans Tower, formerly Abandoned Gas Station of Solitude, Dakota City"
    },
    connections: {
      "group-affiliation": "Shadow Cabinet, Heroes, Teen Titans",
      relatives:
        "Robert Hawkins (father), Jean Hawkins (mother), Sharon Hawkins (sister), Homer Hawkins (grandfather), Teshom? Hawkins (uncle, deceased),"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1471.jpg"
    }
  },
  {
    response: "success",
    id: "635",
    name: "Steel",
    powerstats: {
      intelligence: "81",
      strength: "82",
      speed: "53",
      durability: "90",
      power: "64",
      combat: "64"
    },
    biography: {
      "full-name": "John Henry Irons",
      "alter-egos": "No alter egos found.",
      aliases: ["Man of Steel", "Henry Johnson"],
      "place-of-birth": "Washington, D.C.",
      "first-appearance": "Adventures of Superman #500 (1993)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'7", "201 cm"],
      weight: ["290 lb", "131 kg"],
      "eye-color": "Brown",
      "hair-color": "No Hair"
    },
    work: {
      occupation: "Weapons designer, former steelworker",
      base: "Steelworks, Metropolis; formerly Jersey City and Washington D.C."
    },
    connections: {
      "group-affiliation": "Reserve member of the Justice League of America",
      relatives:
        "Mrs. Irons (mother, deceased), Mr. Irons (father, deceased), Maternal Grandmother (deceased), maternal grandfather (deceased), Butter (grandfather), Bess (grandmother, deceased), Clay Irons (brother), Jemahl Irons (nephew), Blondell Irons (sister-in-law), Natasha Irons (Starlight, niece), Paco (nephew), Tyke (former foster nephew)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1383.jpg"
    }
  },
  {
    response: "success",
    id: "636",
    name: "Stephanie Powell",
    powerstats: {
      intelligence: "69",
      strength: "10",
      speed: "54",
      durability: "10",
      power: "24",
      combat: "10"
    },
    biography: {
      "full-name": "Stephanie Powell",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "No Ordinary Family S01E01 (2010)",
      publisher: "ABC Studios",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "Blond"
    },
    work: {
      occupation: "Executive Vice President of Research at Global Tech",
      base: "-"
    },
    connections: {
      "group-affiliation": "-",
      relatives:
        "Jim Powell (husband), Daphne Powell (daughter), JJ Powell (son)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1355.jpg"
    }
  },
  {
    response: "success",
    id: "637",
    name: "Steppenwolf",
    powerstats: {
      intelligence: "94",
      strength: "100",
      speed: "83",
      durability: "100",
      power: "100",
      combat: "100"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["Steppenwulf"],
      "place-of-birth": "-",
      "first-appearance": "The New Gods #7",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "New God",
      height: ["6'0", "183 cm"],
      weight: ["203 lb", "91 kg"],
      "eye-color": "Red",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10653.jpg"
    }
  },
  {
    response: "success",
    id: "638",
    name: "Storm",
    powerstats: {
      intelligence: "75",
      strength: "10",
      speed: "47",
      durability: "30",
      power: "88",
      combat: "75"
    },
    biography: {
      "full-name": "Ororo Munroe",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Ororo Iqadi T'Challa",
        "Queen Ororo",
        "Ororo Komo Wakandas,White Queen",
        "Weather Witch",
        "Windrider",
        "Goddess",
        "Mistress of the Elements",
        "Princess of N'Dare",
        "High Priestess Windrider",
        "Goddess",
        "Mistress of the Elements",
        "Princess of N'Dare",
        "High Priestess"
      ],
      "place-of-birth": "New York, New York",
      "first-appearance": "Giant-Size X-Men #1 (May, 1975)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Mutant",
      height: ["5'11", "180 cm"],
      weight: ["127 lb", "57 kg"],
      "eye-color": "Blue",
      "hair-color": "White"
    },
    work: {
      occupation: "Adventurer",
      base: "Xavier Institute, Salem Center, Westchester County, New York State"
    },
    connections: {
      "group-affiliation":
        "X-Men (Jean Grey School member, leader); formerly X-Force (Strike Team); Murder Circus (brainwashed), Extinction Team, Avengers[3], Fantastic Four, X.S.E., X-Treme X-Men, Tokyo Arena, The Twelve, Seven Brides of Set, Hellfire Club (Inner Circle), Morlocks",
      relatives:
        "Ayesha of Balobedu (ancestor), Ashake of Egypt (ancestor), Ashake of Mero? (ancestor), unnamed ancestor, Harriet Munroe (paternal grandmother), unnamed paternal grandfather, unnamed maternal grandmother, David Munroe (father, deceased), N'Dar? Munroe (mother, deceased), Ainet (unofficial foster mother), Achmed El Gib?r (unofficial foster father), Colonel Shetani (maternal uncle), unnamed paternal aunt (deceased), David Munroe, Jr. (cousin), Munroe Family (relatives), Black Panther (T'Challa) (ex-husband, marriage annulled)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/135.jpg"
    }
  },
  {
    response: "success",
    id: "639",
    name: "Stormtrooper",
    powerstats: {
      intelligence: "10",
      strength: "8",
      speed: "8",
      durability: "15",
      power: "5",
      combat: "20"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Star Wars: Episode IV - A New Hope (1977)",
      publisher: "George Lucas",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'0", "183 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10539.jpg"
    }
  },
  {
    response: "success",
    id: "64",
    name: "Batgirl",
    powerstats: {
      intelligence: "null",
      strength: "27",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Mary Elizabeth Kane",
      "alter-egos": "Hawkfire",
      aliases: ["Bette Kane", "Bat-Girl"],
      "place-of-birth": "-",
      "first-appearance": "Batman #139",
      publisher: "Hawkfire",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "Crime-fighter", base: "Gotham City" },
    connections: {
      "group-affiliation":
        "Former associated partner of Batman and Robin of Earth-One; Partner of Katherine Kane",
      relatives: "Katherine Kane (Batwoman I,  Aunt)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/638.jpg"
    }
  },
  {
    response: "success",
    id: "640",
    name: "Sunspot",
    powerstats: {
      intelligence: "63",
      strength: "63",
      speed: "35",
      durability: "25",
      power: "90",
      combat: "70"
    },
    biography: {
      "full-name": "Roberto DaCosta",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Robert DaCosta",
        "Bobby; Black Rook",
        "Black King",
        "Reignfire"
      ],
      "place-of-birth": "Rio de Janeiro, Brazil",
      "first-appearance": "Marvel Graphic Novel #4 (October, 1982)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["5'8", "173 cm"],
      weight: ["170 lb", "77 kg"],
      "eye-color": "brown",
      "hair-color": "black"
    },
    work: {
      occupation: "Adventurer, businessman",
      base: "1128 Mission Street, San Francisco, California"
    },
    connections: {
      "group-affiliation":
        "Avengers; formerly X-Men, New Mutants, Young X-Men, X-Corporation (Los Angeles branch), MLF, X-Force, Fallen Angels, Hellfire Club, Bratpack",
      relatives:
        "Emmanuel da Costa (father, deceased), Nina da Costa (mother), Reignfire (genetic copy, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/138.jpg"
    }
  },
  {
    response: "success",
    id: "641",
    name: "Superboy",
    powerstats: {
      intelligence: "75",
      strength: "95",
      speed: "83",
      durability: "90",
      power: "95",
      combat: "60"
    },
    biography: {
      "full-name": "Kon-El / Conner Kent",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Experiment 13; Superman; Project: Superman; Carl Krummett; Project: Lionel Luthor; The Metropolis Kid",
        "Superman"
      ],
      "place-of-birth": "Project Cadmus cloning facility",
      "first-appearance": "Adventures of Superman #500 (June, 1993)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["5'7", "170 cm"],
      weight: ["150 lb", "68 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: {
      occupation: "-",
      base: "San Francisco; Smallville; Formerly Metropolis; Formerly Honolulu"
    },
    connections: {
      "group-affiliation":
        "Teen Titans, Legion of Super-Heroes, Team Superman; Formerly Young Justice, Project Cadmus, Ravers",
      relatives:
        "Superman (Kryptonian genetic template), Lex Luthor (Human genetic template), Match (clone)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/789.jpg"
    }
  },
  {
    response: "success",
    id: "642",
    name: "Superboy-Prime",
    powerstats: {
      intelligence: "94",
      strength: "100",
      speed: "100",
      durability: "100",
      power: "100",
      combat: "85"
    },
    biography: {
      "full-name": "Kal-El",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Superman-Prime; Prime; Superboy; Clark Kent; Clarkie; Time Trapper"
      ],
      "place-of-birth": "Krypton (Earth-Prime)",
      "first-appearance": "DC Comics Presents #87 (November, 1985)",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Kryptonian",
      height: ["5'11", "180 cm"],
      weight: ["170 lb", "77 kg"],
      "eye-color": "Blue",
      "hair-color": "Black / Blue"
    },
    work: {
      occupation: "-",
      base:
        "currently a recreation of Earth-Prime, formerly Qward, Anti-Matter Universe."
    },
    connections: {
      "group-affiliation":
        "Formerly Black Lantern Corps, Legion of Super-Villains, Sinestro Corps",
      relatives:
        "Jor-El (father; deceased); Lara (mother, deceased); Jerry Kent (adoptive father); Naomi Kent (adoptive mother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1535.jpg"
    }
  },
  {
    response: "success",
    id: "643",
    name: "Supergirl",
    powerstats: {
      intelligence: "94",
      strength: "100",
      speed: "100",
      durability: "100",
      power: "100",
      combat: "75"
    },
    biography: {
      "full-name": "Kara Zor-El",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Linda Lang",
        "Kara-El",
        "Kara Kent",
        "Flamebird",
        "Trinity Child",
        "Teen of Tomorrow",
        "The Girl of Steel",
        "The Maid of Might",
        "The Princess of Power",
        "Mighty Maid",
        "Claire Connors",
        "Bluebird"
      ],
      "place-of-birth": "Argo City, Krypton",
      "first-appearance": "Superman/Batman #8 (May, 2004)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Kryptonian",
      height: ["5'5", "165 cm"],
      weight: ["120 lb", "54 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation: "Intern, Adventurer, Student, Crime-Fighter",
      base: "Metropolis"
    },
    connections: {
      "group-affiliation":
        "Formerly Justice League of America, Supermen of America, Justice League of Amazons, Kent Family, Superman Family, Kryptonian Science Guild, Teen Titans, Legion of Super-Heroes, Outsiders",
      relatives:
        "Zor-El (father), Allura In-Ze (mother), Jor-El II (uncle, deceased), Lara Lor-Van (aunt, deceased), Kal-El (Superman,Clark Kent, cousin), Lois Lane (cousin-in-law), Jonathan Kent (adopted uncle), Martha Kent (adopted aunt), Kon-El (Superboy, Conner Kent, clone cousin, deceased), Nim-El (uncle), Dondra Klu-Ta (aunt), Don-El (cousin), Jor-El I (praternal grandfather, deceased), Nimda An-Dor (paternal grandmother, deceased), Lar-Van (maternal grandfather, deceased), Lara Rok-Var (maternal grandmother, deceased), Val-El, Sul-El, Tala-El, Hatu-El, Gam-El (ancestors, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/790.jpg"
    }
  },
  {
    response: "success",
    id: "644",
    name: "Superman",
    powerstats: {
      intelligence: "94",
      strength: "100",
      speed: "100",
      durability: "100",
      power: "100",
      combat: "85"
    },
    biography: {
      "full-name": "Clark Kent",
      "alter-egos": "Superman Prime One-Million",
      aliases: [
        "Clark Joseph Kent",
        "The Man of Steel",
        "the Man of Tomorrow",
        "the Last Son of Krypton",
        "Big Blue",
        "the Metropolis Marvel",
        "the Action Ace"
      ],
      "place-of-birth": "Krypton",
      "first-appearance": "ACTION COMICS #1",
      publisher: "Superman Prime One-Million",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Kryptonian",
      height: ["6'3", "191 cm"],
      weight: ["225 lb", "101 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: {
      occupation: "Reporter for the Daily Planet and novelist",
      base: "Metropolis"
    },
    connections: {
      "group-affiliation":
        "Justice League of America, The Legion of Super-Heroes (pre-Crisis as Superboy); Justice Society of America (pre-Crisis Earth-2 version); All-Star Squadron (pre-Crisis Earth-2 version)",
      relatives:
        "Lois Lane (wife), Jor-El (father, deceased), Lara (mother, deceased), Jonathan Kent (adoptive father), Martha Kent (adoptive mother), Seyg-El (paternal grandfather, deceased), Zor-El (uncle, deceased), Alura (aunt, deceased), Supergirl (Kara Zor-El, cousin), Superboy (Kon-El/Conner Kent, partial clone)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/791.jpg"
    }
  },
  {
    response: "success",
    id: "645",
    name: "Swamp Thing",
    powerstats: {
      intelligence: "88",
      strength: "95",
      speed: "25",
      durability: "100",
      power: "100",
      combat: "55"
    },
    biography: {
      "full-name": "Alec Holland",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Green Man",
        "Swampy",
        "the Weed",
        "Le Bon Gumbo",
        "Smalsh-Yegger (on Rann)"
      ],
      "place-of-birth": "-",
      "first-appearance": "Swamp Thing #1 (November, 1972)",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "God / Eternal",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Red",
      "hair-color": "No Hair"
    },
    work: { occupation: "Planet Elemental, former Biochemist", base: "-" },
    connections: {
      "group-affiliation":
        "formerly (Parliament of Trees; Parliament of Stones, Parliament of Flames, Parliament of Waves, and Parliament of Vapors), The Parliament of Worlds",
      relatives:
        "Larry Holland (father, deceased); Alice Holland (mother, deceased); Edward Holland (brother); Linda Holland (first wife, deceased); Abigail Holland (second wife); Tef? Holland (daughter); Gregori Arcane (father-in-law, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/792.jpg"
    }
  },
  {
    response: "success",
    id: "646",
    name: "Swarm",
    powerstats: {
      intelligence: "75",
      strength: "18",
      speed: "50",
      durability: "90",
      power: "38",
      combat: "35"
    },
    biography: {
      "full-name": "Fritz von Meyer",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Champions #14 (July, 1977)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["6'5", "196 cm"],
      weight: ["104 lb", "47 kg"],
      "eye-color": "Yellow",
      "hair-color": "No Hair"
    },
    work: {
      occupation: "Ph.D. in toxicology & entomology",
      base: "Formerly South Africa"
    },
    connections: {
      "group-affiliation":
        "Leader of the All-New Sinister Six; formerly Exterminators, Nazi Party",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10428.jpg"
    }
  },
  {
    response: "success",
    id: "647",
    name: "Sylar",
    powerstats: {
      intelligence: "75",
      strength: "10",
      speed: "12",
      durability: "28",
      power: "91",
      combat: "56"
    },
    biography: {
      "full-name": "Gabriel Gray",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Gabriel Sylar",
        "Drew O'Grady",
        "Dr. Suresh",
        "Zane Taylor",
        "Isaac Mendez"
      ],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "NBC - Heroes",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "Timepiece restorer", base: "New York, NY" },
    connections: {
      "group-affiliation": "-",
      relatives: "Virginia Gray (mother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/953.jpg"
    }
  },
  {
    response: "success",
    id: "648",
    name: "Synch",
    powerstats: {
      intelligence: "75",
      strength: "67",
      speed: "23",
      durability: "28",
      power: "74",
      combat: "56"
    },
    biography: {
      "full-name": "Everett Thomas",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "X-Men #36 (1994)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["5'11", "180 cm"],
      weight: ["165 lb", "74 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: { occupation: "Student", base: "Massachusetts Academy" },
    connections: {
      "group-affiliation": "Generation X",
      relatives:
        "Stan Thomas (father), Ida Thomas (mother), Kim Ho Twae (adopted sister)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/175.jpg"
    }
  },
  {
    response: "success",
    id: "649",
    name: "T-1000",
    powerstats: {
      intelligence: "75",
      strength: "34",
      speed: "33",
      durability: "100",
      power: "100",
      combat: "75"
    },
    biography: {
      "full-name": "Cyberdyne Systems Series 1000 Terminator",
      "alter-egos": "No alter egos found.",
      aliases: ["T-1001", "T-1002"],
      "place-of-birth": "-",
      "first-appearance": "Terminator 2: Judgment Day",
      publisher: "Dark Horse Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Android",
      height: ["6'0", "183 cm"],
      weight: ["325 lb", "146 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "Skynet", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10411.jpg"
    }
  },
  {
    response: "success",
    id: "65",
    name: "Batgirl III",
    powerstats: {
      intelligence: "null",
      strength: "43",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Helena Rosa Bertinelli",
      "alter-egos": "Huntress",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Huntress",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1112.jpg"
    }
  },
  {
    response: "success",
    id: "650",
    name: "T-800",
    powerstats: {
      intelligence: "75",
      strength: "34",
      speed: "17",
      durability: "60",
      power: "73",
      combat: "65"
    },
    biography: {
      "full-name": "Cyberdyne Systems Series 800 Terminator Model 101",
      "alter-egos": "No alter egos found.",
      aliases: ["Terminator"],
      "place-of-birth": "-",
      "first-appearance": "The Terminator (1984)",
      publisher: "Dark Horse Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Cyborg",
      height: ["-", "0 cm"],
      weight: ["390 lb", "176 kg"],
      "eye-color": "Red",
      "hair-color": "-"
    },
    work: { occupation: "Assassin", base: "-" },
    connections: { "group-affiliation": "Skynet", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10409.jpg"
    }
  },
  {
    response: "success",
    id: "651",
    name: "T-850",
    powerstats: {
      intelligence: "75",
      strength: "80",
      speed: "25",
      durability: "90",
      power: "83",
      combat: "75"
    },
    biography: {
      "full-name": "Cyberdyne Systems Series 850 Terminator",
      "alter-egos": "No alter egos found.",
      aliases: ["Terminator"],
      "place-of-birth": "-",
      "first-appearance": "Terminator 3: Rise of the Machines (2003)",
      publisher: "Dark Horse Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Cyborg",
      height: ["-", "0 cm"],
      weight: ["440 lb", "198 kg"],
      "eye-color": "Red",
      "hair-color": "-"
    },
    work: { occupation: "Assassin", base: "-" },
    connections: { "group-affiliation": "Skynet", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10410.jpg"
    }
  },
  {
    response: "success",
    id: "652",
    name: "T-X",
    powerstats: {
      intelligence: "75",
      strength: "63",
      speed: "29",
      durability: "85",
      power: "100",
      combat: "80"
    },
    biography: {
      "full-name": "Cyberdyne Systems Series X Terminator",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Dark Horse Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Female",
      race: "Cyborg",
      height: ["-", "0 cm"],
      weight: ["330 lb", "149 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "Assassin / Genesis Overseer", base: "-" },
    connections: { "group-affiliation": "Skynet", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10412.jpg"
    }
  },
  {
    response: "success",
    id: "653",
    name: "Taskmaster",
    powerstats: {
      intelligence: "75",
      strength: "12",
      speed: "50",
      durability: "20",
      power: "63",
      combat: "100"
    },
    biography: {
      "full-name": "Tony Masters",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Avengers #195",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'2", "188 cm"],
      weight: ["220 lb", "99 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: {
      occupation:
        "Sheriff, Assassin, Mercenary; formerly Military Trainer, Combat Instructor, Head of Initiative training camp",
      base: "Bagalia; A.I.M Island, Taskmaster's Academy"
    },
    connections: {
      "group-affiliation": "-",
      relatives:
        "Mercedes Merced (wife), Jeanne Foucault (Finesse, alleged daughter)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/21.jpg"
    }
  },
  {
    response: "success",
    id: "654",
    name: "Tempest",
    powerstats: {
      intelligence: "38",
      strength: "10",
      speed: "45",
      durability: "28",
      power: "66",
      combat: "60"
    },
    biography: {
      "full-name": "Angel Salvadore Bohusk",
      "alter-egos": "Angel Salvadore",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "New X-Men #118 (November, 2001)",
      publisher: "Angel Salvadore",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'4", "163 cm"],
      weight: ["121 lb", "54 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "Formerly New Warriors; Special Class",
      relatives:
        "Tito Bohusk (son); Axel Bohusk (son); Kara Bohusk (daughter); three other unidentified children;"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1407.jpg"
    }
  },
  {
    response: "success",
    id: "655",
    name: "Thanos",
    powerstats: {
      intelligence: "100",
      strength: "100",
      speed: "33",
      durability: "100",
      power: "100",
      combat: "80"
    },
    biography: {
      "full-name": "Thanos",
      "alter-egos": "No alter egos found.",
      aliases: ["The Mad Titan", "Masterlord", "The Overmaster", "Chins"],
      "place-of-birth": "Titan",
      "first-appearance": "Iron Man #55",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Eternal",
      height: ["6'7", "201 cm"],
      weight: ["985 lb", "443 kg"],
      "eye-color": "Red",
      "hair-color": "No Hair"
    },
    work: {
      occupation: "Conqueror, worshiper of Death",
      base: "Mobile, formerly Sanctuary II, Titan"
    },
    connections: {
      "group-affiliation": "Zodiac (ally); formerly Infinity Watch, Defenders",
      relatives:
        'A\'Lars (father): Sui-San (mother, deceased; Eros (brother);Kronos (paternal Grandfather, deceased); Daina (paternal grandmother, deceased); Zuras (uncle, deceased); Thena (cousin); Gamora (foster daughter);Nebula (alleged granddaughter); Rot ("child" by Death);'
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1305.jpg"
    }
  },
  {
    response: "success",
    id: "656",
    name: "The Cape",
    powerstats: {
      intelligence: "38",
      strength: "10",
      speed: "23",
      durability: "32",
      power: "22",
      combat: "64"
    },
    biography: {
      "full-name": "Vince Faraday",
      "alter-egos": "No alter egos found.",
      aliases: ["Cape"],
      "place-of-birth": "-",
      "first-appearance": "The Cape S01E01 (2011)",
      publisher: "null",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "-",
      relatives: "Trip Faraday (son), Dana Thompson-Faraday (wife)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1375.jpg"
    }
  },
  {
    response: "success",
    id: "657",
    name: "The Comedian",
    powerstats: {
      intelligence: "63",
      strength: "14",
      speed: "17",
      durability: "10",
      power: "12",
      combat: "80"
    },
    biography: {
      "full-name": "Edward Morgen Blake",
      "alter-egos": "No alter egos found.",
      aliases: ["Eddie Blake"],
      "place-of-birth": "-",
      "first-appearance": "Watchmen #1 (September, 1986)",
      publisher: "DC Comics",
      alignment: "neutral"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'2", "188 cm"],
      weight: ["225 lb", "101 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: {
      occupation: "Former Adventurer; Government Agent",
      base: "New York City"
    },
    connections: {
      "group-affiliation": "Formerly Crimebusters, Minutemen",
      relatives: 'Silk Spectre (Laurel "Laurie" Juspeczyk) (daughter)'
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1062.jpg"
    }
  },
  {
    response: "success",
    id: "658",
    name: "Thing",
    powerstats: {
      intelligence: "75",
      strength: "84",
      speed: "21",
      durability: "100",
      power: "38",
      combat: "80"
    },
    biography: {
      "full-name": "Ben Grimm",
      "alter-egos": "No alter egos found.",
      aliases: ["Blackbeard the Pirate", "Grim Ben", "Dr. Josiah Verpoorteen"],
      "place-of-birth": "New York City, New York",
      "first-appearance": "Fantastic Four #1 (November, 1961)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human / Radiation",
      height: ["6'0", "183 cm"],
      weight: ["500 lb", "225 kg"],
      "eye-color": "Blue",
      "hair-color": "No Hair"
    },
    work: {
      occupation: "Adventurer, former Air Force test pilot",
      base:
        "Baxter Building, New York City, New York (formerly) Four Freedoms Plaza, Pier Four;"
    },
    connections: {
      "group-affiliation":
        "Fantastic Four formerly Avengers West Coast, Unlimited Class Wrestling Federation, Thunderiders",
      relatives:
        "Daniel (father, deceased), Elsie (mother, deceased), Daniel Jr. (brother, deceased), Jacob ('Jake,' uncle), Alyce (aunt, deceased), Pentunia ('Penny,' aunt, Jacob's second wife)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/139.jpg"
    }
  },
  {
    response: "success",
    id: "659",
    name: "Thor",
    powerstats: {
      intelligence: "69",
      strength: "100",
      speed: "83",
      durability: "100",
      power: "100",
      combat: "100"
    },
    biography: {
      "full-name": "Thor Odinson",
      "alter-egos": "Rune King Thor",
      aliases: [
        "Donald Blake",
        "Sigurd Jarlson",
        "Jake Olsen",
        "Donar the Mighty"
      ],
      "place-of-birth": "Asgard",
      "first-appearance": "Journey into Mystery #83 (August, 1962)",
      publisher: "Rune King Thor",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Asgardian",
      height: ["6'6", "198 cm"],
      weight: ["640 lb", "288 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation: "King of Asgard; formerly EMS Technician; Physician",
      base: "New York, New York"
    },
    connections: {
      "group-affiliation": "Avengers",
      relatives:
        "Odin (father), Gaea (mother), Frigga (step-mother), Loki (step-brother), Vidar (half-brother), Buri (paternal great-grandfather), Bolthorn (maternal great grandfather), Bor (grandfather), Bestla (grandmother), Vili (uncle), Ve (uncle), Sigyn (former sister-in-law), Hela (alleged niece), Jormungand (alleged nephew), Fernis Wolf (alleged nephew)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/140.jpg"
    }
  },
  {
    response: "success",
    id: "66",
    name: "Batgirl IV",
    powerstats: {
      intelligence: "69",
      strength: "12",
      speed: "27",
      durability: "56",
      power: "46",
      combat: "100"
    },
    biography: {
      "full-name": "Cassandra Cain",
      "alter-egos": "No alter egos found.",
      aliases: ["Kasumi", "various mundane persona,"],
      "place-of-birth": "League of Assassins (exact base is unknown)",
      "first-appearance": "Batman: Legends of the Dark Knight #120",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["5'5", "165 cm"],
      weight: ["115 lb", "52 kg"],
      "eye-color": "Green",
      "hair-color": "Black"
    },
    work: {
      occupation: "-",
      base: "Gotham City; Bl?dhaven; Tibet; New York City"
    },
    connections: {
      "group-affiliation":
        "Titans East, League of Assassins, Batman Family, Justice League Elite, Young Justice",
      relatives:
        "David Cain (father), Lady Shiva (mother), Carolyn (aunt, deceased), Annalea (sibling, deceased), 'The Mad Dog' (sibling)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1113.jpg"
    }
  },
  {
    response: "success",
    id: "660",
    name: "Thor Girl",
    powerstats: {
      intelligence: "75",
      strength: "83",
      speed: "70",
      durability: "84",
      power: "100",
      combat: "70"
    },
    biography: {
      "full-name": "Tarene",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Asgard Lass",
        "the Designate",
        "the Destroyer",
        "Hammerette",
        "Hammer Girl",
        "Hammer Lass",
        "Tara Olson",
        "Spirit of the Jewel",
        "the Supreme",
        "Thoreta",
        "Thorita",
        "Thor Lass"
      ],
      "place-of-birth": "-",
      "first-appearance":
        "Thor, Volume 2, #22; (as Thor Girl) Thor, Volume 2, #33",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Asgardian",
      height: ["5'9", "175 cm"],
      weight: ["317 lb", "143 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation: "-",
      base: "Camp Hammond; FormerlyNew York City, Formerly Asgard"
    },
    connections: {
      "group-affiliation": "Ally of the Asgardians",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1296.jpg"
    }
  },
  {
    response: "success",
    id: "661",
    name: "Thunderbird",
    powerstats: {
      intelligence: "50",
      strength: "32",
      speed: "27",
      durability: "32",
      power: "13",
      combat: "70"
    },
    biography: {
      "full-name": "John Proudstar",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Camp Verde, Arizona",
      "first-appearance": "Giant-Size X-Men #1 (1975)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'1", "185 cm"],
      weight: ["225 lb", "101 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: {
      occupation: "Former adventurer, student, Marine",
      base:
        "Xavier's School for Gifted Youngsters, Salem Center, Westchester County, New York"
    },
    connections: {
      "group-affiliation": "X-Men, formerly US Marine Corp",
      relatives:
        "Unidentified grandfather (deceased), Neal Proudstar (father, deceased), Maria Proudstar (mother, deceased), James Proudstar (Warpath, brother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/611.jpg"
    }
  },
  {
    response: "success",
    id: "662",
    name: "Thunderbird II",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "James Proudstar",
      "alter-egos": "Warpath",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Warpath",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/927.jpg"
    }
  },
  {
    response: "success",
    id: "663",
    name: "Thunderbird III",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Neal Shaara",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Bangladesh",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["5'9'", "175 cm"],
      weight: ["165 lb", "74 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: { occupation: "Adventurer", base: "-" },
    connections: {
      "group-affiliation": "None; formerly X-Men, X-Corporation",
      relatives: "Sanjit (brother,deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/141.jpg"
    }
  },
  {
    response: "success",
    id: "664",
    name: "Thunderstrike",
    powerstats: {
      intelligence: "63",
      strength: "80",
      speed: "70",
      durability: "84",
      power: "42",
      combat: "72"
    },
    biography: {
      "full-name": "Eric Kevin Masterson",
      "alter-egos": "No alter egos found.",
      aliases: ["Thor"],
      "place-of-birth": "-",
      "first-appearance":
        "(as Masterson) Thor #391; (as Thor) Thor #432; (as Thunderstrike) Thunderstrike #1",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'6", "198 cm"],
      weight: ["640 lb", "288 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation:
        "(as Thunderstrike) Adventurer, crimefighter, (as Masterson) Architect",
      base: "-"
    },
    connections: {
      "group-affiliation":
        "(At time of death) Avengers; (Formerly) Legion of the Unliving, Thor Corps",
      relatives:
        "Marcy Masterson Steele (wife, divorced), Kevin Masterson (son)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/177.jpg"
    }
  },
  {
    response: "success",
    id: "665",
    name: "Thundra",
    powerstats: {
      intelligence: "38",
      strength: "81",
      speed: "32",
      durability: "64",
      power: "26",
      combat: "54"
    },
    biography: {
      "full-name": "Thundra",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Fantastic Four #129 (December, 1972)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["7'2", "218 cm"],
      weight: ["350 lb", "158 kg"],
      "eye-color": "Green",
      "hair-color": "Red"
    },
    work: {
      occupation: "Ruler, warrior",
      base: "Mobile; United Sisterhood Republic of North America"
    },
    connections: {
      "group-affiliation":
        "Lady Liberators; Empress of the Sisterhood; formerly Frightful Four, Fantastic Four, former agent of Roxxon Oil Corporation",
      relatives:
        "Superia (alleged ancestor), Arkon (consort) Lyra (alternate reality daughter)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/508.jpg"
    }
  },
  {
    response: "success",
    id: "666",
    name: "Tiger Shark",
    powerstats: {
      intelligence: "38",
      strength: "72",
      speed: "46",
      durability: "70",
      power: "51",
      combat: "28"
    },
    biography: {
      "full-name": "Todd Arliss",
      "alter-egos": "No alter egos found.",
      aliases: ["Arlys Tigershark"],
      "place-of-birth": "Pasadena, California",
      "first-appearance": "Sub-Mariner #5 (September, 1968)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'1", "185 cm"],
      weight: ["450 lb", "203 kg"],
      "eye-color": "Grey",
      "hair-color": "No Hair"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation":
        "Villains for Hire, Lethal Legion, Dr. Dorcas; Masters of Evil; Namor's Deep Six; Attuma's Deep Six; Offenders",
      relatives:
        "Diane Newell (sister); Mara (wife, deceased); Walter Newell (brother-in-law);"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10047.jpg"
    }
  },
  {
    response: "success",
    id: "667",
    name: "Tigra",
    powerstats: {
      intelligence: "63",
      strength: "32",
      speed: "53",
      durability: "38",
      power: "33",
      combat: "90"
    },
    biography: {
      "full-name": "Greer Grant Nelson",
      "alter-egos": "No alter egos found.",
      aliases: ["The Cat", "Greer Sorenson"],
      "place-of-birth": "Presumably Chicago Illinois USA",
      "first-appearance": "The Cat #1",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'10", "178 cm"],
      weight: ["180 lb", "81 kg"],
      "eye-color": "Green",
      "hair-color": "Auburn"
    },
    work: {
      occupation: "Laboratory assistant, model, adventurer, NYC police",
      base: "New York City, New York USA"
    },
    connections: {
      "group-affiliation": "Avengers",
      relatives:
        "Mr. Grant (father), Mrs. Grant (mother, deceased), William Nelson (husband, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/42.jpg"
    }
  },
  {
    response: "success",
    id: "668",
    name: "Tinkerer",
    powerstats: {
      intelligence: "100",
      strength: "10",
      speed: "23",
      durability: "14",
      power: "10",
      combat: "14"
    },
    biography: {
      "full-name": "Phineas Mason",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Amazing Spider-Man #2 (1963)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["5'4", "163 cm"],
      weight: ["120 lb", "54 kg"],
      "eye-color": "Brown",
      "hair-color": "White"
    },
    work: {
      occupation: "Inventor and technician serving the underworld",
      base: "-"
    },
    connections: {
      "group-affiliation": "-",
      relatives:
        "Deborah Watts Mason (wife, deceased), Rick Mason (aka Agent, son, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1036.jpg"
    }
  },
  {
    response: "success",
    id: "669",
    name: "Titan",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "HarperCollins",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1154.jpg"
    }
  },
  {
    response: "success",
    id: "67",
    name: "Batgirl V",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Charlotte Gage-Radcliffe",
      "alter-egos": "Misfit",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Misfit",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1115.jpg"
    }
  },
  {
    response: "success",
    id: "670",
    name: "Toad",
    powerstats: {
      intelligence: "50",
      strength: "34",
      speed: "58",
      durability: "56",
      power: "70",
      combat: "28"
    },
    biography: {
      "full-name": "Mortimer Toynbee",
      "alter-egos": "No alter egos found.",
      aliases: ["The Terrible Toad-King"],
      "place-of-birth": "York, England",
      "first-appearance": "X-Men #4 (March, 1964)",
      publisher: "Marvel Comics",
      alignment: "neutral"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["5'9", "175 cm"],
      weight: ["169 lb", "76 kg"],
      "eye-color": "Black",
      "hair-color": "Brown"
    },
    work: { occupation: "Former criminal", base: "-" },
    connections: {
      "group-affiliation":
        "198; (formerly) Brotherhood of Evil Mutants, Misfits; (formerly) associate of Gideon, Emma Frost",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1125.jpg"
    }
  },
  {
    response: "success",
    id: "671",
    name: "Toxin",
    powerstats: {
      intelligence: "56",
      strength: "73",
      speed: "70",
      durability: "84",
      power: "82",
      combat: "70"
    },
    biography: {
      "full-name": "Patrick Mulligan",
      "alter-egos": "No alter egos found.",
      aliases: ["Larry"],
      "place-of-birth": "New York City",
      "first-appearance": "Venom vs. Carnage #1 (2004)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Symbiote",
      height: ["6'2", "188 cm"],
      weight: ["215 lb", "97 kg"],
      "eye-color": "Blue",
      "hair-color": "Brown"
    },
    work: { occupation: "Police officer", base: "-" },
    connections: {
      "group-affiliation": "Ally of Spider-Man and Black Cat",
      relatives:
        'Gina Mulligan (wife), Edward Mulligan (son), Mr. Mulligan (father), Mrs. Mulligan (mother), Carnage ("father"), Venom ("grandfather")'
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/848.jpg"
    }
  },
  {
    response: "success",
    id: "672",
    name: "Toxin",
    powerstats: {
      intelligence: "75",
      strength: "80",
      speed: "42",
      durability: "85",
      power: "97",
      combat: "70"
    },
    biography: {
      "full-name": "Eddie Brock",
      "alter-egos": "Anti-Venom, Venom",
      aliases: [
        "Eddie",
        "Sister Edwina",
        '"Ed"',
        "Edwin Brock",
        "Venom",
        "Lethal Protector",
        "998th",
        "Anti-Venom",
        "White Venom"
      ],
      "place-of-birth": "San Francisco, California",
      "first-appearance": "Venom Vol 2 #17",
      publisher: "Anti-Venom",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Symbiote",
      height: ["6'3", "191 cm"],
      weight: ["260 lb", "117 kg"],
      "eye-color": "Black",
      "hair-color": "Blond"
    },
    work: {
      occupation:
        "Vigilante; former symbiote hunter, shelter attendant, government operative, journalist for the Daily Globe",
      base: "New York, New York"
    },
    connections: {
      "group-affiliation":
        "Formerly; temporary partner of Agent Venom, Savage Six, Sinister Six, Revengers, former partner of Vengeance, Spider-Man, Scarlet Spider. Volunteer at F.E.A.S.T.",
      relatives:
        "Carl Brock (father, estranged), Janine Brock (mother, deceased), Mary Brock (sister), Ann Weying (ex-wife, deceased), Symbiotes' relatives: Anti-Venom Symbiote (former symbiote, uncle and former brother, deceased), Venom Symbiote (former symbiote, grandfather, former brother), Agony, Phage, Riot, Lasher (uncles, former sons), Scorn (sister, former niece), Carnage (father, former son), Scream (aunt, former daughter, deceased), Hybrid (uncle, former son, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10494.jpg"
    }
  },
  {
    response: "success",
    id: "673",
    name: "Tracy Strauss",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Tracy Strauss",
      "alter-egos": "No alter egos found.",
      aliases: ["Ice Queen"],
      "place-of-birth": "Beverly Hills, CA",
      "first-appearance": "-",
      publisher: "NBC - Heroes",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: {
      occupation:
        "Former aide to Senator Nathan Petrelli, Former Pinehearst consultant, former political adviser to Governor Robert Malden",
      base: "-"
    },
    connections: {
      "group-affiliation": "-",
      relatives:
        "Niki Sanders (estranged triplet sister, deceased), Barbara (estranged triplet sister), W. Strauss (father), Rebecca Rosenthal (mother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1312.jpg"
    }
  },
  {
    response: "success",
    id: "674",
    name: "Trickster",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Giovanni Giuseppe",
      "alter-egos": "No alter egos found.",
      aliases: ["James Jesse"],
      "place-of-birth": "-",
      "first-appearance": "Flash #113 (July, 1960)",
      publisher: "DC Comics",
      alignment: "-"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'0", "183 cm"],
      weight: ["179 lb", "81 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation: "Special effects designer, con artist",
      base: "Keystone City"
    },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1468.jpg"
    }
  },
  {
    response: "success",
    id: "675",
    name: "Trigon",
    powerstats: {
      intelligence: "null",
      strength: "99",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Lucifer",
        "Satan,The Devil",
        "Lord Trigon",
        "Master Trigon",
        "King Trigon",
        "Conqueror of Worlds",
        "Ruler of the Five Under Realms"
      ],
      "place-of-birth": "-",
      "first-appearance": "New Teen Titans #5 (March, 1981)",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "God / Eternal",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Yellow",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "-",
      relatives: "Belial (son), Ruskoff (son), Suge (son), Raven (daughter)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10703.jpg"
    }
  },
  {
    response: "success",
    id: "676",
    name: "Triplicate Girl",
    powerstats: {
      intelligence: "63",
      strength: "10",
      speed: "23",
      durability: "42",
      power: "44",
      combat: "42"
    },
    biography: {
      "full-name": "Luornu Durgo",
      "alter-egos": "No alter egos found.",
      aliases: ["Duo Damsel", "Una", "Triad"],
      "place-of-birth": "-",
      "first-appearance": "Teen Titans/Legion Special #1",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'6", "168 cm"],
      weight: ["130 lb", "59 kg"],
      "eye-color": "Purple",
      "hair-color": "Brown"
    },
    work: { occupation: "-", base: "Earth, 31st century" },
    connections: {
      "group-affiliation": "Legion of Super-Heroes",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1185.jpg"
    }
  },
  {
    response: "success",
    id: "677",
    name: "Triton",
    powerstats: {
      intelligence: "56",
      strength: "63",
      speed: "50",
      durability: "65",
      power: "35",
      combat: "55"
    },
    biography: {
      "full-name": "Triton",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Island of Attilan, Atlantic Ocean",
      "first-appearance": "Fantastic Four #45 (December, 1965)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Inhuman",
      height: ["6'2", "188 cm"],
      weight: ["190 lb", "86 kg"],
      "eye-color": "Green",
      "hair-color": "No Hair"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation":
        "Inhuman Royal Family, Universal Inhumans, Royal Guard, New Inhuman Elite; formerly Shi'ar Army Elite Corps & Imperial Guard[citation needed], Namor's Deep Six",
      relatives:
        "Mander, Azur (parents, deceased), Karnak (brother, deceased), Magnar, Zeta (paternal grandparents), Kobar, La (maternal grandparents), Rynda (paternal aunt), Ambur (maternal aunt) ,Black Bolt, Maximus, Medusa, Crystal (cousins)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/513.jpg"
    }
  },
  {
    response: "success",
    id: "678",
    name: "Two-Face",
    powerstats: {
      intelligence: "88",
      strength: "10",
      speed: "12",
      durability: "14",
      power: "9",
      combat: "28"
    },
    biography: {
      "full-name": "Harvey Dent",
      "alter-egos": "No alter egos found.",
      aliases: ["Apollo"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'0", "183 cm"],
      weight: ["182 lb", "82 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: {
      occupation: "Reformed criminal; former district attorney",
      base: "-"
    },
    connections: {
      "group-affiliation": "-",
      relatives:
        "Duela Dent (Daughter), Gilda Dent (Wife), Poison Ivy (Fianc?e), Rachel Dawes (Girlfriend)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/802.jpg"
    }
  },
  {
    response: "success",
    id: "679",
    name: "Ultragirl",
    powerstats: {
      intelligence: "50",
      strength: "80",
      speed: "35",
      durability: "70",
      power: "35",
      combat: "80"
    },
    biography: {
      "full-name": "Tsu-Zana",
      "alter-egos": "No alter egos found.",
      aliases: ["Suzy Sherman", "Ultra-Girl"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'6", "168 cm"],
      weight: ["233 lb", "105 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: { occupation: "Model", base: "-" },
    connections: {
      "group-affiliation": "Initiative, New Warriors",
      relatives: "Toby Sherman (father)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1295.jpg"
    }
  },
  {
    response: "success",
    id: "68",
    name: "Batgirl VI",
    powerstats: {
      intelligence: "75",
      strength: "10",
      speed: "23",
      durability: "28",
      power: "22",
      combat: "80"
    },
    biography: {
      "full-name": "Stephanie Brown",
      "alter-egos": "Spoiler",
      aliases: ["Steph", "Robin", "Marion Todd", "Spoiler"],
      "place-of-birth": "-",
      "first-appearance":
        "Detective Comics #647. As Batgirl in Batgirl (Volume 3) #1. (2009)",
      publisher: "Spoiler",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'6", "168 cm"],
      weight: ["135 lb", "61 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation: "College student at Gotham University",
      base: "Gotham Heights, Gotham City"
    },
    connections: {
      "group-affiliation":
        "The Batman Family, formerly the Birds of Prey, Tim Drake (on-and-off boyfriend)",
      relatives:
        "Arthur Brown (The Cluemaster, father), Crystal Brown (mother), unnamed daughter (given up for adoption)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1398.jpg"
    }
  },
  {
    response: "success",
    id: "680",
    name: "Ultron",
    powerstats: {
      intelligence: "88",
      strength: "83",
      speed: "42",
      durability: "100",
      power: "100",
      combat: "64"
    },
    biography: {
      "full-name": "Ultron",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Crimson Cowl",
        "Great Devil",
        "Great Ultron",
        "Iron Man",
        "Mark",
        "Omega",
        "Ultimate Ultron",
        "Ultron-5 (and hundreds of other sequential numerical designations)",
        "Ultron Mark Twelve",
        "Ho Yinsen"
      ],
      "place-of-birth": "Created in Cresskill, New Jersey",
      "first-appearance": "Avengers #54 (July, 1968)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Android",
      height: ["6'9", "206 cm"],
      weight: ["735 lb", "331 kg"],
      "eye-color": "Red",
      "hair-color": "-"
    },
    work: {
      occupation:
        "Mass murderer, scientist, would-be world conqueror, ruler of Phalanx",
      base: "-"
    },
    connections: {
      "group-affiliation":
        "Phalanx; formerly Sons of Yinsen, Lethal Legion, Masters of Evil",
      relatives:
        'Hank Pym (Yellowjacket, creator, "father"), Janet Van Dyne (Wasp, regarded by Ultron as "mother" due to marriage to Pym), Jocasta (creation, former mate), Alkhema (creation, former mate, deactivated), Vision (creation, "son"), Victor Mancha (creation, son), Rex (creation, pet, deactivated), Robos & Bio-Synthezoids (creations of Alkhema, "grandchildren";, destroyed); Simon Williams (Wonder Man), Eric Williams (Grim Reaper) & Wanda Maximoff (Scarlet Witch), all regarded by Ultron as part of his "extended family" due to their familial connections with the Vision'
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1339.jpg"
    }
  },
  {
    response: "success",
    id: "681",
    name: "Utgard-Loki",
    powerstats: {
      intelligence: "50",
      strength: "80",
      speed: "23",
      durability: "84",
      power: "85",
      combat: "64"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Jotunheim",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Frost Giant",
      height: ["50'0", "15.2 meters"],
      weight: ["128000 lb", "58 tons"],
      "eye-color": "Blue",
      "hair-color": "White"
    },
    work: { occupation: "Monarch", base: "-" },
    connections: { "group-affiliation": "Giants of Jotunheim", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1484.jpg"
    }
  },
  {
    response: "success",
    id: "682",
    name: "Vagabond",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Priscilla Lyons",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance":
        "(as Lyons) CAPTAIN AMERICA #325, (as Vagabond) CAPTAIN AMERICA #342",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'6'", "168 cm"],
      weight: ["120 lb", "54 kg"],
      "eye-color": "Blue",
      "hair-color": "Strawberry Blond"
    },
    work: { occupation: "Adventurer", base: "Mobile" },
    connections: {
      "group-affiliation": "Former partner of Nomad",
      relatives: "Phil (brother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/145.jpg"
    }
  },
  {
    response: "success",
    id: "683",
    name: "Valerie Hart",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "East Coast, Canada",
      "first-appearance": "Team Epic Episode 101",
      publisher: "Team Epic TV",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'9", "175 cm"],
      weight: ["125 lb", "56 kg"],
      "eye-color": "Hazel",
      "hair-color": "Black"
    },
    work: { occupation: "Vigilante, Superhero", base: "Toronto" },
    connections: { "group-affiliation": "Team Epic", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1004.jpg"
    }
  },
  {
    response: "success",
    id: "684",
    name: "Valkyrie",
    powerstats: {
      intelligence: "null",
      strength: "94",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Brunnhilde (also spelled Brunnhilda)",
      "alter-egos": "No alter egos found.",
      aliases: ["Barbara Norriss", "Samantha Parrington"],
      "place-of-birth": "Presumably Asgard",
      "first-appearance":
        "(Enchantress in Valkyrie's form) AVENGERS #87, (Samantha Parrington in Valkyrie's form) INCREDIBLE HULK #142, (Brunnhilde in Barbara Norriss's body) DEFENDERS #3, (Brunnhilde in her own body) DEFENDERS #109",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["6'3'", "191 cm"],
      weight: ["475 lb", "214 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation: "Chooser of the Slain, Adventurer",
      base:
        "Asgard, later New York City area, later Defenders Mansion, Colorado."
    },
    connections: {
      "group-affiliation": "Gods at Asgard, Valkyrior, Defenders",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/147.jpg"
    }
  },
  {
    response: "success",
    id: "685",
    name: "Vanisher",
    powerstats: {
      intelligence: "63",
      strength: "10",
      speed: "75",
      durability: "56",
      power: "61",
      combat: "42"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["Telford Porter"],
      "place-of-birth": "Boston, Massachusetts",
      "first-appearance": "X-Men (Vol 1) #2",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["5'5", "165 cm"],
      weight: ["175 lb", "79 kg"],
      "eye-color": "Green",
      "hair-color": "No Hair"
    },
    work: {
      occupation: "Professional criminal, former subversive",
      base:
        "former) Factor Three headquarters, Europe; Beat Street Club, New York City"
    },
    connections: {
      "group-affiliation":
        "(former) Outer Circle of Enforcers II, Factor Three, Fallen Angels",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1105.jpg"
    }
  },
  {
    response: "success",
    id: "686",
    name: "Vegeta",
    powerstats: {
      intelligence: "81",
      strength: "100",
      speed: "92",
      durability: "95",
      power: "100",
      combat: "100"
    },
    biography: {
      "full-name": "Vegeta",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Prince Vegeta",
        "The Saiyan Prince",
        "The Prince of all Saiyans",
        "Majin Vegeta",
        "Bejiita",
        "Bejiita no Ouji",
        "Vejita",
        "Vegita",
        "Captain Vegeta",
        "Vegeta-Sama",
        "Makita (Hebrew dub)",
        "Bezita (Malaysian dub)",
        "Super Vegeta"
      ],
      "place-of-birth": "-",
      "first-appearance": "Dragon Ball #17",
      publisher: "Shueisha",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Saiyan",
      height: ["5'6", "168 cm"],
      weight: ["163 lb", "73 kg"],
      "eye-color": "-",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1206.jpg"
    }
  },
  {
    response: "success",
    id: "687",
    name: "Venom",
    powerstats: {
      intelligence: "75",
      strength: "57",
      speed: "65",
      durability: "84",
      power: "86",
      combat: "84"
    },
    biography: {
      "full-name": "Eddie Brock",
      "alter-egos": "Anti-Venom, Toxin",
      aliases: ["-"],
      "place-of-birth": "New York, New York",
      "first-appearance":
        "(as alien costume) Secret Wars #8, (behind the scenes) Web of Spider-Man #18, (actual appearance) Amazing Spider-Man #300",
      publisher: "Anti-Venom",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Symbiote",
      height: ["6'3", "191 cm"],
      weight: ["260 lb", "117 kg"],
      "eye-color": "Blue",
      "hair-color": "Strawberry Blond"
    },
    work: {
      occupation:
        "Vigilante; former journalist for the Daily Globe, government operative",
      base: "New York, New York"
    },
    connections: {
      "group-affiliation": "Sinister Six (formerly)",
      relatives:
        "Eddie Brock: Carl Brock (father), Jamie Brock (mother), Anne Weying (She-Venom, ex wife, deceased); Venom symbiote: Carnage (bonded to Cletus Kasidy, 1st generation offspring), five forced offspring - one independant (bonded to Donna, last name unrevealed, 1st generation offspring), four forming a composite symbiote (Hybrid (bonded to Scott Washington, 1st generation offspring), Toxin (bonded to Patrick Mulligan, 2nd generation offspring)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/22.jpg"
    }
  },
  {
    response: "success",
    id: "688",
    name: "Venom II",
    powerstats: {
      intelligence: "50",
      strength: "57",
      speed: "47",
      durability: "70",
      power: "54",
      combat: "56"
    },
    biography: {
      "full-name": "Angelo Fortunato",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Marvel Knights Spider-Man #7 (2005)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["5'9", "175 cm"],
      weight: ["110 lb", "50 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "-",
      relatives:
        "Vincente Paolo Fortunato (father), unidentified mother (deceased), Giacomo Fortunato (Jimmy-Six, brother), Anna Fortunato (sister), Mary Fortunato (sister-in-law), James Fortunato (nephew), other unidentified neices or nephews"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1124.jpg"
    }
  },
  {
    response: "success",
    id: "689",
    name: "Venom III",
    powerstats: {
      intelligence: "63",
      strength: "73",
      speed: "35",
      durability: "90",
      power: "73",
      combat: "56"
    },
    biography: {
      "full-name": "MacDonald Gargan",
      "alter-egos": "Scorpion",
      aliases: ["Scorpion"],
      "place-of-birth": "-",
      "first-appearance":
        "(As Gargan) Amazing Spider-Man #19 (1964); (as Scorpion) Amazing Spider-Man #20 (1965); (as Venom) Marvel Knights: Spider-Man #10 (2005)",
      publisher: "Scorpion",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Symbiote",
      height: ["7'6", "229 cm"],
      weight: ["742 lb", "334 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: {
      occupation:
        "Government operative; former professional criminal, private eye",
      base: "-"
    },
    connections: {
      "group-affiliation":
        'Thunderbolts; formerly (as Scorpion) Masters of Evil, "Spider-Man Revenge League"; (as Venom) Sinister Twelve',
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1042.jpg"
    }
  },
  {
    response: "success",
    id: "69",
    name: "Batman",
    powerstats: {
      intelligence: "81",
      strength: "40",
      speed: "29",
      durability: "55",
      power: "63",
      combat: "90"
    },
    biography: {
      "full-name": "Terry McGinnis",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Batman II",
        "The Tomorrow Knight",
        "The second Dark Knight",
        "The Dark Knight of Tomorrow",
        "Batman Beyond"
      ],
      "place-of-birth": "Gotham City, 25th Century",
      "first-appearance": "Batman Beyond #1",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'10", "178 cm"],
      weight: ["170 lb", "77 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "21st Century Gotham City" },
    connections: {
      "group-affiliation": "Batman Family, Justice League Unlimited",
      relatives:
        "Bruce Wayne (biological father), Warren McGinnis (father, deceased), Mary McGinnis (mother), Matt McGinnis (brother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg"
    }
  },
  {
    response: "success",
    id: "690",
    name: "Venompool",
    powerstats: {
      intelligence: "69",
      strength: "57",
      speed: "63",
      durability: "100",
      power: "100",
      combat: "100"
    },
    biography: {
      "full-name": "Wade Wilson",
      "alter-egos": "Deadpool, Evil Deadpool",
      aliases: ["Deadpool"],
      "place-of-birth": "-",
      "first-appearance":
        "What If? Iron Man: Demon in an Armor #1 (February, 2011)",
      publisher: "Deadpool",
      alignment: "-"
    },
    appearance: {
      gender: "Male",
      race: "Symbiote",
      height: ["7'5", "226 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "Conqueror; Adventurer", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10618.jpg"
    }
  },
  {
    response: "success",
    id: "691",
    name: "Vertigo II",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "-",
      "alter-egos": "Blaquesmith",
      aliases: ["-"],
      "place-of-birth": "The Savage Land",
      "first-appearance": "MARVEL FANFARE #1",
      publisher: "Blaquesmith",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'6'", "168 cm"],
      weight: ["115 lb", "52 kg"],
      "eye-color": "Blue",
      "hair-color": "Silver"
    },
    work: {
      occupation: "Assassin",
      base: "Formerly the Savage Land, now mobile"
    },
    connections: {
      "group-affiliation":
        "Former member of the Savage Land Mutates, later a member of the Marauders",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/149.jpg"
    }
  },
  {
    response: "success",
    id: "692",
    name: "Vibe",
    powerstats: {
      intelligence: "50",
      strength: "10",
      speed: "17",
      durability: "30",
      power: "99",
      combat: "30"
    },
    biography: {
      "full-name": "Cisco Ramon",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "The New 52: FCBD Special Edition #1",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'10", "178 cm"],
      weight: ["157 lb", "71 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "-",
      relatives: "Rapture (Armando Ramon, brother), Dante Ramon (brother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10509.jpg"
    }
  },
  {
    response: "success",
    id: "693",
    name: "Vindicator",
    powerstats: {
      intelligence: "63",
      strength: "63",
      speed: "53",
      durability: "64",
      power: "58",
      combat: "70"
    },
    biography: {
      "full-name": "Heather Hudson",
      "alter-egos": "Vindicator II",
      aliases: ["Guardian"],
      "place-of-birth": "Calgary, Alberta, Canada",
      "first-appearance": "X-Men #139 (November, 1980)",
      publisher: "Vindicator II",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["5'5", "165 cm"],
      weight: ["120 lb", "54 kg"],
      "eye-color": "Green",
      "hair-color": "Red"
    },
    work: {
      occupation: "former secretary, researcher",
      base: "Ottawa, Canada"
    },
    connections: {
      "group-affiliation": "Alpha Flight",
      relatives: "Guardian, husband"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/150.jpg"
    }
  },
  {
    response: "success",
    id: "694",
    name: "Vindicator",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Dr. James McDonald Hudson",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/530.jpg"
    }
  },
  {
    response: "success",
    id: "695",
    name: "Violator",
    powerstats: {
      intelligence: "null",
      strength: "53",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["The Clown"],
      "place-of-birth": "-",
      "first-appearance": "as Clown (Spawn #1), as Violator (Spawn #2)",
      publisher: "Image Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1064.jpg"
    }
  },
  {
    response: "success",
    id: "696",
    name: "Violet Parr",
    powerstats: {
      intelligence: "56",
      strength: "9",
      speed: "13",
      durability: "50",
      power: "79",
      combat: "15"
    },
    biography: {
      "full-name": "Violet Parr",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Vi (nickname)",
        "The Queen of the Unseen",
        "Invisagirl (InvisaVi)"
      ],
      "place-of-birth": "-",
      "first-appearance": "The Incredibles (Movies, 2004)",
      publisher: "Dark Horse Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["4'6", "137 cm"],
      weight: ["90 lb", "41 kg"],
      "eye-color": "Violet",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "Incredible Family, National Supers Agency",
      relatives:
        "Robert Parr (Mr Incredible, father), Helen Parr (Elastigirl, mother), Dashiel Parr(Dash, brother), Jack-jack (brother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/825.jpg"
    }
  },
  {
    response: "success",
    id: "697",
    name: "Vision",
    powerstats: {
      intelligence: "100",
      strength: "72",
      speed: "54",
      durability: "95",
      power: "100",
      combat: "70"
    },
    biography: {
      "full-name": "Vision",
      "alter-egos": "Anti-Vision, Vision II",
      aliases: ["Victor Shade"],
      "place-of-birth": "-",
      "first-appearance": "Avengers Vol.1 #57, Young Avengers # 4",
      publisher: "Anti-Vision",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Android",
      height: ["6'3", "191 cm"],
      weight: ["300 lb", "135 kg"],
      "eye-color": "Gold",
      "hair-color": "No Hair"
    },
    work: {
      occupation: "-",
      base:
        "Mobile. Formerly Avengers Mansion, New York City and Avengers Compound"
    },
    connections: {
      "group-affiliation":
        "Young Avengers, formerly; Avengers, West Coast Avengers, Defenders, Queen's Vengeance",
      relatives:
        'Wanda Maximoff (Scarlet Witch, ex-wife), Thomas Shepherd (Speed, son), William Kaplan (Wiccan, son), Ultron ("father"), Henry Pym (Ant-Man, "grandfather"), Pietro Maximoff (Quicksilver, ex-brother-in-law), Erik Magnus Lensher (Magneto, ex-father-in-law), Jocasta (fellow creation, "sister"), Simon Williams (Wonder Man, "brother"), Victor Mancha (fellow creation, half brother), Alkhema (fellow creation, "stepmother")'
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/532.jpg"
    }
  },
  {
    response: "success",
    id: "698",
    name: "Vision II",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Vision",
      "alter-egos": "Anti-Vision, Vision",
      aliases: ["Victor Shade", "Ghost of Stone"],
      "place-of-birth": "Place of birth unknown",
      "first-appearance": "Avengers (Vol. 1) #57",
      publisher: "Anti-Vision",
      alignment: "good"
    },
    appearance: {
      gender: "-",
      race: "null",
      height: ["6'3'", "191 cm"],
      weight: ["300 lb", "135 kg"],
      "eye-color": "Red",
      "hair-color": "No Hair"
    },
    work: { occupation: "Adventurer", base: "Avengers Mansion, New York City" },
    connections: { "group-affiliation": "Avengers", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/151.jpg"
    }
  },
  {
    response: "success",
    id: "699",
    name: "Vixen",
    powerstats: {
      intelligence: "50",
      strength: "38",
      speed: "50",
      durability: "50",
      power: "62",
      combat: "25"
    },
    biography: {
      "full-name": "Mari McCabe",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Zambesi",
      "first-appearance": "Action Comics #521 (July, 1981)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["5'9", "175 cm"],
      weight: ["140 lb", "63 kg"],
      "eye-color": "Amber",
      "hair-color": "Black"
    },
    work: { occupation: "Former Model", base: "-" },
    connections: {
      "group-affiliation":
        "Formerly Suicide Squad, Checkmate, Ultramarines, Birds of Prey, Justice League of America",
      relatives:
        "Reverend Richard Jiwe (father, deceased), Jeanne-Mari Jiwe (mother, deceased), General Mustapha Maksai (uncle, deceased), Tantu (ancestor)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10109.jpg"
    }
  },
  {
    response: "success",
    id: "7",
    name: "Adam Monroe",
    powerstats: {
      intelligence: "63",
      strength: "10",
      speed: "12",
      durability: "100",
      power: "100",
      combat: "64"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["Takezo Kensei", "Richard Sanders"],
      "place-of-birth": "-",
      "first-appearance": "Heroes S02E01 - Four Months Later...",
      publisher: "NBC - Heroes",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation:
        "former samurai swordsman, former British mercenary commander, former soldier in the Confederate Army",
      base:
        "U.S.; formerly Diedenshausen, Germany; Milan, Italy; Paris, France; Japan; England; Atlanta, GA; Montreal, Canada"
    },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1026.jpg"
    }
  },
  {
    response: "success",
    id: "70",
    name: "Batman",
    powerstats: {
      intelligence: "100",
      strength: "26",
      speed: "27",
      durability: "50",
      power: "47",
      combat: "100"
    },
    biography: {
      "full-name": "Bruce Wayne",
      "alter-egos": "No alter egos found.",
      aliases: ["Insider", "Matches Malone"],
      "place-of-birth": "Crest Hill, Bristol Township; Gotham County",
      "first-appearance": "Detective Comics #27",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'2", "188 cm"],
      weight: ["210 lb", "95 kg"],
      "eye-color": "blue",
      "hair-color": "black"
    },
    work: {
      occupation: "Businessman",
      base:
        "Batcave, Stately Wayne Manor, Gotham City; Hall of Justice, Justice League Watchtower"
    },
    connections: {
      "group-affiliation":
        "Batman Family, Batman Incorporated, Justice League, Outsiders, Wayne Enterprises, Club of Heroes, formerly White Lantern Corps, Sinestro Corps",
      relatives:
        "Damian Wayne (son), Dick Grayson (adopted son), Tim Drake (adopted son), Jason Todd (adopted son), Cassandra Cain (adopted ward)\nMartha Wayne (mother, deceased), Thomas Wayne (father, deceased), Alfred Pennyworth (former guardian), Roderick Kane (grandfather, deceased), Elizabeth Kane (grandmother, deceased), Nathan Kane (uncle, deceased), Simon Hurt (ancestor), Wayne Family"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
    }
  },
  {
    response: "success",
    id: "700",
    name: "Vulcan",
    powerstats: {
      intelligence: "null",
      strength: "56",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Gabriel Summers",
      "alter-egos": "No alter egos found.",
      aliases: ["Kid Vulcan"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Black",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "Formerly X-Men",
      relatives:
        "Philip Summers (grandfather), Deborah Summers (grandmother), Christopher Summers (Father), Katherine Anne Summers (Mother), Scott Summers (Cyclops, brother), Alexander Summers (Havok, brother), Jean Grey-Summers (Phoenix, sister-in-law, deceased), Madelyne Pryor-Summers (ex-sister-in-law, deceased), Nathan Christopher Summers (Cable, nephew), Aliya Jenskot (niece-in-law, deceased), Tyler Dayspring (Genesis, grandnephew, deceased), Stryfe (clone nephew, deceased), Rachel Summers (Marvel Girl, alternate timeline niece)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/854.jpg"
    }
  },
  {
    response: "success",
    id: "701",
    name: "Vulture",
    powerstats: {
      intelligence: "75",
      strength: "22",
      speed: "42",
      durability: "25",
      power: "26",
      combat: "30"
    },
    biography: {
      "full-name": "Adrian Toomes",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Staten Island, New York City",
      "first-appearance": "Amazing Spider-Man #2",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'11", "180 cm"],
      weight: ["175 lb", "79 kg"],
      "eye-color": "Brown",
      "hair-color": "No Hair"
    },
    work: {
      occupation: "Professional criminal; formerly electronics engineer",
      base: "-"
    },
    connections: {
      "group-affiliation": "Formerly Sinister Twelve, Sinister Six",
      relatives:
        "Marcus (brother, possibly deceased), Malachi Toomes (nephew, deceased), Valeria Toomes (daughter), unnamed son, Ramona (daughter-in-law), unnamed grandson"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1031.jpg"
    }
  },
  {
    response: "success",
    id: "702",
    name: "Walrus",
    powerstats: {
      intelligence: "50",
      strength: "28",
      speed: "8",
      durability: "50",
      power: "11",
      combat: "20"
    },
    biography: {
      "full-name": "Hubert Carpent",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Brooklyn, New York",
      "first-appearance": "Defenders #131 (May, 1984)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'0", "183 cm"],
      weight: ["360 lb", "162 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: { occupation: "Cab driver", base: "-" },
    connections: {
      "group-affiliation": "-",
      relatives: "Humbert Carpenter (uncle)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10058.jpg"
    }
  },
  {
    response: "success",
    id: "703",
    name: "War Machine",
    powerstats: {
      intelligence: "63",
      strength: "80",
      speed: "63",
      durability: "100",
      power: "100",
      combat: "85"
    },
    biography: {
      "full-name": "James Rupert Rhodes",
      "alter-egos": "No alter egos found.",
      aliases: ["Rhodey", "Iron Man", "Jim Rhodes"],
      "place-of-birth": "Philadelphia, Pennsylvania",
      "first-appearance": "Iron Man #118 (1979)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'1", "185 cm"],
      weight: ["210 lb", "95 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: {
      occupation:
        "Initiative instructor, adventurer, government agent; formerly: Sentinel Squad O*N*E combat instructor, soldier, pilot",
      base: "-"
    },
    connections: {
      "group-affiliation":
        "Initiative; formerly: Sentinel Squad O*N*E, Office of National Emergency (O*N*E), Crew, Secret Defenders, Worldwatch, Stark Enterprises, Force Works, West Coast Avengers, U.S. Marine Corps",
      relatives:
        "David Rhodes (father), Roberta Rhodes (mother), Jeanette Rhodes (sister, deceased), Josh (uncle, last name unrevealed), unnamed alleged son"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/536.jpg"
    }
  },
  {
    response: "success",
    id: "704",
    name: "Warbird",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Carol Danvers",
      "alter-egos": "Binary, Captain Marvel",
      aliases: ["Ms. Marvel", "Binary"],
      "place-of-birth": "Boston, Massachusetts",
      "first-appearance":
        "(as Carol Danvers) MARVEL SUPER HEROES #13, (as Ms. Marvel) MS. MARVEL #1, (as Binary) X-MEN # 164, AVENGERS Vol. 3, # 4",
      publisher: "Binary",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'11'", "180 cm"],
      weight: ["120 lb", "54 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation:
        "Former National Aeronautics and Space Administration security Chief, former magazine editor, former freelance writer, former military intelligence officer.",
      base: "Avengers Mansion"
    },
    connections: {
      "group-affiliation":
        "currently Avengers, former companion to the X-Men (as Carol Danvers), former member of the Starjammers (as Binary), Former Avenger (as Ms. Marvel)",
      relatives: "Joseph (father), Marie (mother), Steve (brother, deceased),"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/153.jpg"
    }
  },
  {
    response: "success",
    id: "705",
    name: "Warlock",
    powerstats: {
      intelligence: "88",
      strength: "36",
      speed: "79",
      durability: "95",
      power: "71",
      combat: "95"
    },
    biography: {
      "full-name": "Adam Warlock",
      "alter-egos": "No alter egos found.",
      aliases: ["Him", "(in an alternate future) the Magus"],
      "place-of-birth": "The Beehive, Shard Island, Atlantic Ocean",
      "first-appearance": "Fantastic Four #66",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'2'", "188 cm"],
      weight: ["240 lb", "108 kg"],
      "eye-color": "Red",
      "hair-color": "Blond"
    },
    work: {
      occupation: "Avenger, savior of worlds",
      base: "Counter-Earth, later mobile"
    },
    connections: {
      "group-affiliation":
        "Infinity Watch, (as the Magus) head of Universal Church of Truth in an alternate future",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/154.jpg"
    }
  },
  {
    response: "success",
    id: "706",
    name: "Warp",
    powerstats: {
      intelligence: "38",
      strength: "10",
      speed: "23",
      durability: "28",
      power: "85",
      combat: "50"
    },
    biography: {
      "full-name": "Emil LaSalle",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "The New Teen Titans #14 (December 1981)",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["5'8", "173 cm"],
      weight: ["148 lb", "67 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "Brotherhood of Evil, The Society",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1353.jpg"
    }
  },
  {
    response: "success",
    id: "707",
    name: "Warpath",
    powerstats: {
      intelligence: "38",
      strength: "72",
      speed: "47",
      durability: "70",
      power: "26",
      combat: "84"
    },
    biography: {
      "full-name": "James Proudstar",
      "alter-egos": "Thunderbird II",
      aliases: ["Thunderbird"],
      "place-of-birth": "Camp Verde, Arizona",
      "first-appearance": "New Mutants #16 (June, 1984)",
      publisher: "Thunderbird II",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["7'2", "218 cm"],
      weight: ["350 lb", "158 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: { occupation: "Adventurer", base: "-" },
    connections: {
      "group-affiliation":
        "X-Men (Team Cyclops), Security Recon; formerly X-Force (Strike Team), X-Corporation, X-Force, New Mutants, Hellions",
      relatives:
        "Thunderbird (John Proudstar, brother, deceased), Maria Proudstar (mother, deceased), Neal Proudstar (father, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/541.jpg"
    }
  },
  {
    response: "success",
    id: "708",
    name: "Wasp",
    powerstats: {
      intelligence: "63",
      strength: "17",
      speed: "58",
      durability: "52",
      power: "29",
      combat: "42"
    },
    biography: {
      "full-name": "Janet Van Dyne",
      "alter-egos": "No alter egos found.",
      aliases: ["Pixie"],
      "place-of-birth": "Cresskill, New Jersey",
      "first-appearance": "TALES TO ASTONISH #44",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["5'4", "163 cm"],
      weight: ["110 lb", "50 kg"],
      "eye-color": "Blue",
      "hair-color": "Auburn"
    },
    work: {
      occupation:
        "Adventurer, fashion designer, independently wealthy socialite",
      base: "Avengers Mansion"
    },
    connections: {
      "group-affiliation": "Avengers",
      relatives:
        'Vernon Van Dyne (father, deceased), unnamed mother (deceased), Henry "Hank" Pym (ex-husband)'
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/155.jpg"
    }
  },
  {
    response: "success",
    id: "709",
    name: "Watcher",
    powerstats: {
      intelligence: "100",
      strength: "80",
      speed: "67",
      durability: "89",
      power: "100",
      combat: "56"
    },
    biography: {
      "full-name": "Uatu",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Fantastic Four #13 (April, 1963)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation":
        "The Watchers, Friend and Ally of the Fantastic Four, among other Earth heroes",
      relatives: "Ikor (father); Aron (nephew); Qyre, Zoma (cousins)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/516.jpg"
    }
  },
  {
    response: "success",
    id: "71",
    name: "Batman II",
    powerstats: {
      intelligence: "88",
      strength: "11",
      speed: "33",
      durability: "28",
      power: "36",
      combat: "100"
    },
    biography: {
      "full-name": "Dick Grayson",
      "alter-egos": "Nightwing, Robin",
      aliases: ["Dick Grayson"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Nightwing",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'10", "178 cm"],
      weight: ["175 lb", "79 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: {
      occupation: "-",
      base: "Gotham City; formerly Bludhaven, New York City"
    },
    connections: {
      "group-affiliation": "Justice League Of America, Batman Family",
      relatives:
        "John Grayson (father, deceased), Mary Grayson (mother, deceased), Bruce Wayne / Batman (adoptive father), Damian Wayne / Robin (foster brother), Jason Todd / Red Hood (adoptive brother), Tim Drake / Red Robin (adoptive brother), Cassandra Cain / Batgirl IV (adoptive sister)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1496.jpg"
    }
  },
  {
    response: "success",
    id: "710",
    name: "Weapon XI",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Weapon XI",
      "alter-egos": "No alter egos found.",
      aliases: ["weapon 10"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1318.jpg"
    }
  },
  {
    response: "success",
    id: "711",
    name: "White Canary",
    powerstats: {
      intelligence: "63",
      strength: "7",
      speed: "33",
      durability: "15",
      power: "49",
      combat: "90"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["Silk Sister", "Sara Lance"],
      "place-of-birth": "-",
      "first-appearance": "Birds of Prey #1",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10542.jpg"
    }
  },
  {
    response: "success",
    id: "712",
    name: "White Queen",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Emma Grace Frost",
      "alter-egos": "No alter egos found.",
      aliases: ["White Queen"],
      "place-of-birth": "Boston, Massachusetts",
      "first-appearance": "UNCANNY X-MEN #129",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'10'", "178 cm"],
      weight: ["144 lb", "65 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation:
        "Co-Headmistress of Xavier Institute, Chairperson of the Board and Chief Executive of Frost International",
      base:
        "Xavier Institute, Salem Center, Westchester, New York; formerly Massachusetts Academy"
    },
    connections: {
      "group-affiliation":
        "X-Men formerly Generation X headmistress, Hellions controller, Hellfire Club Inner Circle",
      relatives:
        "Winston (father), Hazel (mother), Cordelia (sister), Adrienne (sister, deceased), Christian (brother), Steven (brother-in-law, deceased), Jocasta (cousin)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/157.jpg"
    }
  },
  {
    response: "success",
    id: "713",
    name: "Wildfire",
    powerstats: {
      intelligence: "50",
      strength: "32",
      speed: "23",
      durability: "100",
      power: "77",
      combat: "42"
    },
    biography: {
      "full-name": "Drake Burroughs",
      "alter-egos": "No alter egos found.",
      aliases: ["ERG-1", "Atom'x", "Randall Burroughs", "Jahr-Drake Nigle"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "Legion of Super-Heroes",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1186.jpg"
    }
  },
  {
    response: "success",
    id: "714",
    name: "Winter Soldier",
    powerstats: {
      intelligence: "56",
      strength: "32",
      speed: "35",
      durability: "65",
      power: "60",
      combat: "84"
    },
    biography: {
      "full-name": "Bucky Barnes",
      "alter-egos": "No alter egos found.",
      aliases: ["Bucky", "Captain America"],
      "place-of-birth": "-",
      "first-appearance":
        "Captain America Vol 5 #1 (January, 2005) (as Winter Soldier)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'9", "175 cm"],
      weight: ["260 lb", "117 kg"],
      "eye-color": "Brown",
      "hair-color": "Brown"
    },
    work: {
      occupation:
        'Adventurer; former SHIELD operative, Assassin (See Note under "Winter Soldier" article), Army Mascot, Student',
      base: "-"
    },
    connections: {
      "group-affiliation":
        "Black Widow (partner), Nick Fury (employer); formerly Avengers, New Avengers, Invaders, Kid Commandos, Liberty Legion, Young Allies, Crazy S.U.E.S., Captain America (partner), Falcon (partner)",
      relatives:
        "George M. Barnes (father, deceased), Winifred C. Barnes (mother, deceased), Rebecca P. Barnes Proctor (sister), Ida (aunt, presumed deceased), Mr. Proctor (brother-in-law), unidentified niece and nephew, Scott Proctor (grandnephew), Kimberly Proctor (grandniece)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10027.jpg"
    }
  },
  {
    response: "success",
    id: "715",
    name: "Wiz Kid",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Takashi Matsuya",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Place of birth unknown",
      "first-appearance": "X-TERMINATORS # 1",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "-",
      race: "null",
      height: ["4'7'", "140 cm"],
      weight: ["87 lb", "39 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: {
      occupation: "Student",
      base: "Saint Simons Academy, New Hampshire"
    },
    connections: {
      "group-affiliation": "X-Terminators",
      relatives: "Unnamed parents deceased"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/159.jpg"
    }
  },
  {
    response: "success",
    id: "716",
    name: "Wolfsbane",
    powerstats: {
      intelligence: "38",
      strength: "16",
      speed: "35",
      durability: "42",
      power: "26",
      combat: "42"
    },
    biography: {
      "full-name": "Rahne Sinclair",
      "alter-egos": "No alter egos found.",
      aliases: ["Grimfang", "Mutate #490"],
      "place-of-birth": "Somewhere in Ross and Cromarty, Scotland",
      "first-appearance": "Marvel Graphic Novel #4: New Mutants",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["12'", "366 cm"],
      weight: ["1050 lb", "473 kg"],
      "eye-color": "Green",
      "hair-color": "Auburn"
    },
    work: {
      occupation: "Teacher",
      base:
        "(current) X-Factor Investigations, New York City (former)Professor Xavier's School of Gifted Youngsters, Salem Center, Westchester County, New York; Muir Island, Scotland; X-Factor headquarters, Embassy Row, Washington, D.C.; X-Factor Headquarters, New Yo"
    },
    connections: {
      "group-affiliation":
        "(current) X-Factor Investigations, (former) X-Factor, New Mutants, Hellions, Excalibur",
      relatives:
        "Reverand Craig (father), Moira MacTaggert (surrogate mother, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/160.jpg"
    }
  },
  {
    response: "success",
    id: "717",
    name: "Wolverine",
    powerstats: {
      intelligence: "63",
      strength: "32",
      speed: "50",
      durability: "100",
      power: "89",
      combat: "100"
    },
    biography: {
      "full-name": "Logan",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Weapon X",
        "Weapon Ten",
        "Death",
        "Mutate 9601",
        "Jim Logan",
        "Emilio Garra",
        "Weapon Chi",
        "Experiment X",
        "Agent Ten",
        "Peter Richards",
        "Mai kethLogan",
        "Mr. Patch"
      ],
      "place-of-birth": "Alberta, Canada",
      "first-appearance": "Incredible Hulk Vol. 2 #180",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["5'3", "160 cm"],
      weight: ["300 lb", "135 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: {
      occupation:
        "Adventurer, instructor, former bartender, bouncer, spy, government operative, mercenary, soldier, sailor, miner",
      base:
        "Xavier Institute, Salem Center, Westchester County, New York; Avengers Tower, New York City"
    },
    connections: {
      "group-affiliation":
        "X-Men, formerly Horsemen of Apocalypse, Fantastic Four, Secret Defenders, Clan Yashida, Department H, Alpha Flight, Department K, Team X, Team_Weapon_X, Devil's Brigade, Canadian Army",
      relatives:
        "John Howlett Sr. (father, deceased), Elizabeth Howlett (mother, deceased), John Howlett Jr. (brother, allegedly deceased), Viper (ex-wife), Amiko (foster daughter), Erista (son), X-23 (clone)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/161.jpg"
    }
  },
  {
    response: "success",
    id: "718",
    name: "Wonder Girl",
    powerstats: {
      intelligence: "75",
      strength: "90",
      speed: "25",
      durability: "80",
      power: "39",
      combat: "60"
    },
    biography: {
      "full-name": "Cassandra Elizabeth Sandsmark",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Cassandra Sandsmark",
        "Cassie",
        "Helen Troy",
        "Wonder Woman",
        "Cassie Sandsmark"
      ],
      "place-of-birth": "-",
      "first-appearance": "Wonder Woman (vol. 2) #105 (January 1996)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Demi-God",
      height: ["5'5", "165 cm"],
      weight: ["114 lb", "51 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "Teen Titans, Young Justice, Themyscira",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1497.jpg"
    }
  },
  {
    response: "success",
    id: "719",
    name: "Wonder Man",
    powerstats: {
      intelligence: "75",
      strength: "100",
      speed: "53",
      durability: "90",
      power: "64",
      combat: "64"
    },
    biography: {
      "full-name": "Simon Williams",
      "alter-egos": "No alter egos found.",
      aliases: ["Wondie", "JQ-272712-K"],
      "place-of-birth": "Paterson, New Jersey",
      "first-appearance": "AVENGERS #9",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'2", "188 cm"],
      weight: ["380 lb", "171 kg"],
      "eye-color": "Red",
      "hair-color": "Black"
    },
    work: {
      occupation: "Former industrialist, now stuntman, actor, adventurer",
      base: "Mobile"
    },
    connections: {
      "group-affiliation":
        "Former ally of the original Masters of Evil, former member of the East Coast Avengers, current member of the West Coast Avengers",
      relatives:
        "Sanford (father, deceased) Martha (mother), Eric (alias the Grim Reaper, brother, deceased), Vision II ('brother')"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/162.jpg"
    }
  },
  {
    response: "success",
    id: "72",
    name: "Battlestar",
    powerstats: {
      intelligence: "50",
      strength: "53",
      speed: "35",
      durability: "74",
      power: "48",
      combat: "74"
    },
    biography: {
      "full-name": "Lemar Hoskins",
      "alter-egos": "No alter egos found.",
      aliases: ["Bucky"],
      "place-of-birth": "Chicago, Illinois",
      "first-appearance": "Captain America #323 (1986); (as Bucky)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'6", "198 cm"],
      weight: ["295 lb", "133 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: { occupation: "Former wrestler, federal operative", base: "-" },
    connections: {
      "group-affiliation":
        "Formerly Wild Pack, Bold Urban Commandos (Buckies), former partner of U.S.Agent, operative of the Commission on Superhuman Activities",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/231.jpg"
    }
  },
  {
    response: "success",
    id: "41",
    name: "Wonder Woman",
    powerstats: {
      intelligence: "88",
      strength: "100",
      speed: "79",
      durability: "100",
      power: "100",
      combat: "100"
    },
    biography: {
      "full-name": "Diana Prince",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Princess Diana",
        "Princess of the Amazons",
        "Goddess of Truth",
        " Wondy",
        "Wonder Girl",
        "The Amazon Princess"
      ],
      "place-of-birth": "Themyscira",
      "first-appearance": "All-Star Comics #8 (December, 1941)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Amazon",
      height: ["6'0", "183 cm"],
      weight: ["165 lb", "74 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: {
      occupation:
        "Adventurer, Emissary to the world of Man, Protector of Paradise Island; former Goddess of Truth",
      base: "-"
    },
    connections: {
      "group-affiliation":
        "Justice League of America, Justice Society of America (pre-Crisis Earth-2 version); All-Star Squadron (pre-Crisis Earth-2 version)",
      relatives:
        "Queen Hippolyta (mother, deceased), Donna Troy (Troia) (magically-created duplicate)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/807.jpg"
    }
  },
  {
    response: "success",
    id: "721",
    name: "Wondra",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1290.jpg"
    }
  },
  {
    response: "success",
    id: "722",
    name: "Wyatt Wingfoot",
    powerstats: {
      intelligence: "10",
      strength: "10",
      speed: "12",
      durability: "1",
      power: "1",
      combat: "56"
    },
    biography: {
      "full-name": "Wyatt Wingfoot",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Keewazi Reservation, Oklahoma",
      "first-appearance": "FANTASTIC FOUR #50",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'5'", "196 cm"],
      weight: ["260 lb", "117 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: {
      occupation: "Occasional adventurer",
      base:
        "Fantastic Four headquarters, New York City, and Keewazi Reservation, Oklahoma"
    },
    connections: {
      "group-affiliation": "Ally and companion of the Fantastic Four",
      relatives:
        "Will Wingfoot (father, deceased), Chief Silent Fox (grandfather, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/164.jpg"
    }
  },
  {
    response: "success",
    id: "723",
    name: "X-23",
    powerstats: {
      intelligence: "75",
      strength: "24",
      speed: "42",
      durability: "100",
      power: "55",
      combat: "95"
    },
    biography: {
      "full-name": "Laura Kinney",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Laura Logan",
        "Laura Howlett",
        "Laura X",
        "Talon",
        "Wolverine",
        "X23"
      ],
      "place-of-birth": "The Facility, location unrevealed",
      "first-appearance": "NYX #3",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Mutant / Clone",
      height: ["5'1", "155 cm"],
      weight: ["110 lb", "50 kg"],
      "eye-color": "Green",
      "hair-color": "Black"
    },
    work: {
      occupation: "Adventurer, Student, former; Assassin, Prostitute",
      base:
        "Mobile. Formerly Avengers Mansion, New York City and Avengers Compound"
    },
    connections: {
      "group-affiliation":
        "New X-Men, formerly Xavier Institute Student Body, The Facility",
      relatives:
        "Sarah Kinney (surrogate mother, deceased), James Howlett (Wolverine, genetic progenitor)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/565.jpg"
    }
  },
  {
    response: "success",
    id: "724",
    name: "X-Man",
    powerstats: {
      intelligence: "88",
      strength: "53",
      speed: "53",
      durability: "95",
      power: "100",
      combat: "84"
    },
    biography: {
      "full-name": "Nate Grey",
      "alter-egos": "No alter egos found.",
      aliases: ["Nate the Great"],
      "place-of-birth": "American Northeast of Earth-295",
      "first-appearance": "X-Man #1 (1995)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["5'9", "175 cm"],
      weight: ["135 lb", "61 kg"],
      "eye-color": "Blue",
      "hair-color": "Brown"
    },
    work: {
      occupation: "Former shaman, adventurer, freedom fighter",
      base: "-"
    },
    connections: {
      "group-affiliation":
        "Formerly X-Men, Brotherhood of Mutants, Forge's resistance",
      relatives:
        "Scott Summers of Earth-295 (Cyclops, genetic template), Jean Grey of Earth-295 (genetic template)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1150.jpg"
    }
  },
  {
    response: "success",
    id: "725",
    name: "Yellow Claw",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["The Claw"],
      "place-of-birth": "Somewhere in mainland China",
      "first-appearance":
        "(historical) YELLOW CLAW #1; (modern) (telepathic 'voice' of Yellow Claw) STRANGE TALES #160, (robot Yellow Claw) STRANGE TALES # 161, (actual Yellow Claw)CAPTAIN AMERICA #164",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'2", "188 cm"],
      weight: ["210 lb", "95 kg"],
      "eye-color": "Blue",
      "hair-color": "No Hair"
    },
    work: {
      occupation: "Would-be conqueror",
      base: "Various hidden bases throughout the world"
    },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/23.jpg"
    }
  },
  {
    response: "success",
    id: "726",
    name: "Yellowjacket",
    powerstats: {
      intelligence: "88",
      strength: "10",
      speed: "12",
      durability: "28",
      power: "12",
      combat: "14"
    },
    biography: {
      "full-name": "Hank Pym",
      "alter-egos": "Ant-Man, Giant-Man, Goliath, Wasp II",
      aliases: ["Hank Pym"],
      "place-of-birth": "Elmsford, New York",
      "first-appearance":
        "(as Pym) TALES TO ASTONISH #27, (as Ant-Man) TALES TO ASTONISH #35, (as Giant-Man) TALES TO ASTONISH #49, (as Goliath) AVENGERS #28, (as Yellowjacket) AVENGERS #59",
      publisher: "Ant-Man",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'", "183 cm"],
      weight: ["185 lb", "83 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation: "Adventurer, Biochemist, former manager of Avengers Compound",
      base:
        "Avengers Mansion, New York City, New York, (formerly)Avengers Compound, Los Angeles, California"
    },
    connections: {
      "group-affiliation":
        "The Avengers, The West Coast Avengers, Secret Defenders",
      relatives:
        'Maria Trovaya (first wife, deceased), Janet Van Dyne a.k.a. The Wasp (second wife, divorced), Ultron (creation, "son"), Jocasta ("first daughter-in-law"), Alkhema ("second daughter-in-law"), Vision ("grandson"), Scarlet Witch (former granddaughter-in-law), Victor Mancha ("grandson")'
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/70.jpg"
    }
  },
  {
    response: "success",
    id: "727",
    name: "Yellowjacket II",
    powerstats: {
      intelligence: "50",
      strength: "10",
      speed: "35",
      durability: "28",
      power: "31",
      combat: "28"
    },
    biography: {
      "full-name": "Rita DeMara",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Avengers #264",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["5'5", "165 cm"],
      weight: ["115 lb", "52 kg"],
      "eye-color": "Blue",
      "hair-color": "Strawberry Blond"
    },
    work: {
      occupation: "Adventurer; former criminal, electronics engineer",
      base: "New York City area"
    },
    connections: {
      "group-affiliation":
        "Formerly Guardians of the Galaxy, Avengers, Masters of Evil",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/178.jpg"
    }
  },
  {
    response: "success",
    id: "728",
    name: "Ymir",
    powerstats: {
      intelligence: "50",
      strength: "100",
      speed: "27",
      durability: "100",
      power: "98",
      combat: "28"
    },
    biography: {
      "full-name": "Ymir",
      "alter-egos": "No alter egos found.",
      aliases: ["Aurgelmir"],
      "place-of-birth": "Niffleheim",
      "first-appearance": "JOURNEY INTO MYSTERY #97",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Frost Giant",
      height: ["1000", "304.8 meters"],
      weight: ["- lb", "0 kg"],
      "eye-color": "White",
      "hair-color": "No Hair"
    },
    work: { occupation: "-", base: "Niffleheim" },
    connections: {
      "group-affiliation": "-",
      relatives: "Utgard-Loki, Loki, and the race of Frost Giants (descendants)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/179.jpg"
    }
  },
  {
    response: "success",
    id: "729",
    name: "Yoda",
    powerstats: {
      intelligence: "88",
      strength: "52",
      speed: "33",
      durability: "25",
      power: "100",
      combat: "90"
    },
    biography: {
      "full-name": "Yoda",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance":
        "Star Wars: Episode V - The Empire Strikes Back (1980)",
      publisher: "George Lucas",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Yoda's species",
      height: ["2'2", "66 cm"],
      weight: ["38 lb", "17 kg"],
      "eye-color": "Brown",
      "hair-color": "White"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "Jedi Order, Jedi High Counsl, Galactic Republic",
      relatives:
        "Master: N'Kata Del Gormo, Apprentices: Dooku, Cin Drallig, Ikrit, Rahm Kota, Ki-Adi-Mundi, Oppo Rancisis, Luke Skywalker"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10454.jpg"
    }
  },
  {
    response: "success",
    id: "73",
    name: "Batwoman V",
    powerstats: {
      intelligence: "81",
      strength: "8",
      speed: "29",
      durability: "25",
      power: "27",
      combat: "80"
    },
    biography: {
      "full-name": "Katherine Rebecca Kane",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "52 #7 (June, 2006)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["5'10", "178 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Green",
      "hair-color": "Red"
    },
    work: { occupation: "-", base: "Gotham City" },
    connections: {
      "group-affiliation": "Batman Family (unofficially), D.E.O, Unknowns",
      relatives:
        'Jacob Kane (father), Gabi Kane (mother; deceased), Beth Kane (twin sister), Mary Elizabeth "Bette" Kane (cousin), Catherine Hamilton-Kane (stepmother), Philip Kane (uncle), Kane Family'
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10234.jpg"
    }
  },
  {
    response: "success",
    id: "730",
    name: "Zatanna",
    powerstats: {
      intelligence: "81",
      strength: "10",
      speed: "23",
      durability: "28",
      power: "100",
      combat: "56"
    },
    biography: {
      "full-name": "Zatanna Zatara",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Hawkman #4",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["5'7", "170 cm"],
      weight: ["127 lb", "57 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation":
        "Misty Kilgore, Seven Soldiers of Victory, Justice League, Sentinels of Magic",
      relatives:
        'Giovanni "John" Zatara (father, deceased), Sindella (mother, deceased), Leonardo da Vinci (paternal ancestor, deceased)'
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/809.jpg"
    }
  },
  {
    response: "success",
    id: "731",
    name: "Zoom",
    powerstats: {
      intelligence: "50",
      strength: "10",
      speed: "100",
      durability: "28",
      power: "100",
      combat: "28"
    },
    biography: {
      "full-name": "Hunter Zolomon",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Flash Secret Files #3",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'1", "185 cm"],
      weight: ["181 lb", "81 kg"],
      "eye-color": "Red",
      "hair-color": "Brown"
    },
    work: { occupation: "-", base: "Keystone City, Kansas" },
    connections: {
      "group-affiliation":
        "Secret Society of Super Villains, formerly Keystone Police Department, F.B.I.",
      relatives: "Ashley Zolomon (ex-wife)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1384.jpg"
    }
  },
  {
    response: "success",
    id: "74",
    name: "Beak",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Barnell Bohusk",
      "alter-egos": "No alter egos found.",
      aliases: ["Blackwing"],
      "place-of-birth": "Cheverly, Maryland",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["5'9", "175 cm"],
      weight: ["140 lb", "63 kg"],
      "eye-color": "Black",
      "hair-color": "White"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation":
        "Formerly New Warriors, Exiles, Brotherhood Of Mutants, Xavier Institute Student Body",
      relatives:
        "Charles (father), Kathy (mother), Angel Salvadore (wife), Tito (son), Axel (son), Kara (daughter), three unidentified children"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/232.jpg"
    }
  },
  {
    response: "success",
    id: "75",
    name: "Beast",
    powerstats: {
      intelligence: "94",
      strength: "48",
      speed: "38",
      durability: "60",
      power: "43",
      combat: "85"
    },
    biography: {
      "full-name": "Henry Philip McCoy",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Dr. McCoy",
        "Hanko",
        "Kreature",
        "Mutate #666",
        "Magilla Gorilla",
        "Golden Armed Boy"
      ],
      "place-of-birth": "Dunfee, Illinois",
      "first-appearance":
        "X-MEN Vol. 1 #1, (in furry ape form) AMAZING ADVENTURES #11, (in current feline form) NEW X-MEN Vol. 1 #114",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["5'11", "180 cm"],
      weight: ["402 lb", "181 kg"],
      "eye-color": "Blue",
      "hair-color": "Blue"
    },
    work: {
      occupation:
        "Biochemist, formerly Xavier Institute for Higher Learning science and math Instructor, mutant activist, college lecturer, researcher, professional wrestler",
      base: "Xavier Institute, Salem Center, Westchester County, New York"
    },
    connections: {
      "group-affiliation":
        "Secret Avengers, S.W.O.R.D.; formerly X-Men (founding member); X-Club (founding member); Initiative; 198; X-Treme X-Men; Acolytes (while mind-controlled); Queen's Vengeance; X-Factor/X-Terminators (founding member); Rejects; Defenders, Avengers",
      relatives:
        "Sadie McCoy (paternal grandmother), Norton McCoy (father), Edna McCoy (mother), Robert McCoy (paternal great-uncle), John McCoy (uncle)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/27.jpg"
    }
  },
  {
    response: "success",
    id: "76",
    name: "Beast Boy",
    powerstats: {
      intelligence: "50",
      strength: "28",
      speed: "50",
      durability: "70",
      power: "79",
      combat: "40"
    },
    biography: {
      "full-name": "Garfield Mark Logan",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Changeling",
        "Beast-Brat",
        "Green Jeans",
        "Salad-head",
        "Sprout",
        "Tork",
        "Craig Logan"
      ],
      "place-of-birth": "-",
      "first-appearance": "Doom Patrol #99 (November, 1965)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["5'8", "173 cm"],
      weight: ["150 lb", "68 kg"],
      "eye-color": "Green",
      "hair-color": "Green"
    },
    work: {
      occupation: "Adventurer, Struggling Actor",
      base:
        "Prague; formerly Hollywood, California; formerly Manhattan, New York"
    },
    connections: {
      "group-affiliation":
        "Teen Titans; former member of the original Doom Patrol, Titans West",
      relatives:
        "Mark Logan (father, deceased), Marie Logan (mother, deceased), Steve Dayton/Mento (adoptive father), Rita Farr/Elasti-Girl (adoptive mother), Matt Logan (cousin)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/640.jpg"
    }
  },
  {
    response: "success",
    id: "77",
    name: "Beetle",
    powerstats: {
      intelligence: "null",
      strength: "54",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1122.jpg"
    }
  },
  {
    response: "success",
    id: "78",
    name: "Ben 10",
    powerstats: {
      intelligence: "10",
      strength: "7",
      speed: "8",
      durability: "10",
      power: "90",
      combat: "40"
    },
    biography: {
      "full-name": "Benjamin Kirby Tennyson",
      "alter-egos": "No alter egos found.",
      aliases: ["Ben Ten"],
      "place-of-birth": "-",
      "first-appearance": "Ben 10 S01E01",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1365.jpg"
    }
  },
  {
    response: "success",
    id: "79",
    name: "Beta Ray Bill",
    powerstats: {
      intelligence: "63",
      strength: "80",
      speed: "35",
      durability: "95",
      power: "100",
      combat: "84"
    },
    biography: {
      "full-name": "Beta Ray Bill (translation of his Korbinite name)",
      "alter-egos": "No alter egos found.",
      aliases: ["Beta Ray Thor", "Simon Walters"],
      "place-of-birth": "Burning Galaxy",
      "first-appearance": "Thor #337",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'7", "201 cm"],
      weight: ["480 lb", "216 kg"],
      "eye-color": "-",
      "hair-color": "No Hair"
    },
    work: {
      occupation: "Guardian of the Korbinite race",
      base:
        "currently New York City, formerly Asgard, formerly the fleet of Korbinite ships."
    },
    connections: {
      "group-affiliation": "ally of the Asgardians, Thor Corps, Star Masters",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/28.jpg"
    }
  },
  {
    response: "success",
    id: "8",
    name: "Adam Strange",
    powerstats: {
      intelligence: "69",
      strength: "10",
      speed: "33",
      durability: "40",
      power: "37",
      combat: "50"
    },
    biography: {
      "full-name": "Adam Strange",
      "alter-egos": "No alter egos found.",
      aliases: ["Warrior of Two Worlds", "Savior of Rann"],
      "place-of-birth": "Chicago, Illinois",
      "first-appearance": "Outsiders #6 (April, 1986)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["6'1", "185 cm"],
      weight: ["195 lb", "88 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation: "Adventurer, archaelogist, ambassador",
      base: "Rann, Alpha Centauri System"
    },
    connections: {
      "group-affiliation":
        "Omega Men, L.E.G.I.O.N., R.E.B.E.L.S., formerly Seven Soldiers of Victory",
      relatives:
        "Alanna Strange (wife); Aleea Strange (daughter); Sardath (father-in-law); Janey Strange (sister); Todd Strange (brother, deceased); Bantteir (mother-in-law); Adam Strange II (descendent)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/626.jpg"
    }
  },
  {
    response: "success",
    id: "80",
    name: "Beyonder",
    powerstats: {
      intelligence: "100",
      strength: "100",
      speed: "100",
      durability: "100",
      power: "100",
      combat: "84"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Ataxi",
        "The Beyond Realm",
        "Frank",
        "Goblin Force",
        "Goblin King",
        "Goblyn King",
        "Goblin Queen",
        "The One From Beyond",
        "God",
        "Kosmos",
        "Maker"
      ],
      "place-of-birth": "Created in the Beyond",
      "first-appearance": "Marvel Super-Heroes Secret Wars #1",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "God / Eternal",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "Former student", base: "-" },
    connections: {
      "group-affiliation":
        "Was once in a merged form with the Molecule Man but is no longer merged with him.",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1293.jpg"
    }
  },
  {
    response: "success",
    id: "81",
    name: "Big Barda",
    powerstats: {
      intelligence: "88",
      strength: "100",
      speed: "79",
      durability: "100",
      power: "100",
      combat: "100"
    },
    biography: {
      "full-name": "Barda Free",
      "alter-egos": "No alter egos found.",
      aliases: ["Barda", "the Strongest Woman in the World"],
      "place-of-birth": "-",
      "first-appearance": "Mister Miracle (Volume 1) #4",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Female",
      race: "New God",
      height: ["6'2", "188 cm"],
      weight: ["300 lb", "135 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: {
      occupation: "-",
      base: "Gotham City, New Genesis, formerly Apokolips"
    },
    connections: {
      "group-affiliation":
        "Apocalypse, New Gods, Birds of Prey, formerly Female Furies, formerly Justice League of America",
      relatives:
        "Big Breeda (mother), Scott Free (Mister Miricle, husband), Highfather Izaya (father-in-law, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1169.jpg"
    }
  },
  {
    response: "success",
    id: "82",
    name: "Big Daddy",
    powerstats: {
      intelligence: "38",
      strength: "10",
      speed: "12",
      durability: "32",
      power: "22",
      combat: "64"
    },
    biography: {
      "full-name": "Damon Macready",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Kick-Ass #4",
      publisher: "Icon Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "Hit-Girl (daughter)" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1338.jpg"
    }
  },
  {
    response: "success",
    id: "83",
    name: "Big Man",
    powerstats: {
      intelligence: "75",
      strength: "12",
      speed: "23",
      durability: "28",
      power: "19",
      combat: "70"
    },
    biography: {
      "full-name": "Frederick Foswell",
      "alter-egos": "No alter egos found.",
      aliases: ["Patch"],
      "place-of-birth": "-",
      "first-appearance": "Amazing Spider-Man # 10 (1964)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["5'5", "165 cm"],
      weight: ["157 lb", "71 kg"],
      "eye-color": "Blue",
      "hair-color": "Brown"
    },
    work: { occupation: "Reporter, professional criminal", base: "-" },
    connections: {
      "group-affiliation": "Daily Bugle, the Enforcers",
      relatives: "Janice Foswell (daughter), unnamed wife"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1038.jpg"
    }
  },
  {
    response: "success",
    id: "84",
    name: "Bill Harken",
    powerstats: {
      intelligence: "63",
      strength: "36",
      speed: "33",
      durability: "60",
      power: "27",
      combat: "40"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "SyFy",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Alpha",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "Alphas", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1527.jpg"
    }
  },
  {
    response: "success",
    id: "85",
    name: "Billy Kincaid",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Billy Kincaid",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Spawn #5 (October 1992)",
      publisher: "Image Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1072.jpg"
    }
  },
  {
    response: "success",
    id: "86",
    name: "Binary",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Carol Danvers",
      "alter-egos": "Captain Marvel, Warbird",
      aliases: ["Ms. Marvel", "Binary"],
      "place-of-birth": "Boston, Massachusetts",
      "first-appearance":
        "(as Carol Danvers) MARVEL SUPER HEROES #13, (as Ms. Marvel) MS. MARVEL #1, (as Binary) X-MEN # 164, AVENGERS Vol. 3, # 4",
      publisher: "Captain Marvel",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'11", "180 cm"],
      weight: ["120 lb", "54 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation:
        "Former National Aeronautics and Space Administration security Chief, former magazine editor, former freelance writer, former military intelligence officer.",
      base: "Avengers Mansion"
    },
    connections: {
      "group-affiliation":
        "currently Avengers, former companion to the X-Men (as Carol Danvers), former member of the Starjammers (as Binary), Former Avenger (as Ms. Marvel)",
      relatives: "Joseph (father), Marie (mother), Steve (brother, deceased),"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/30.jpg"
    }
  },
  {
    response: "success",
    id: "87",
    name: "Bionic Woman",
    powerstats: {
      intelligence: "56",
      strength: "37",
      speed: "33",
      durability: "40",
      power: "20",
      combat: "40"
    },
    biography: {
      "full-name": "Jamie Sommers",
      "alter-egos": "No alter egos found.",
      aliases: ["Clarissa Whyte"],
      "place-of-birth": "-",
      "first-appearance": "-",
      publisher: "",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Cyborg",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/10648.jpg"
    }
  },
  {
    response: "success",
    id: "88",
    name: "Bird-Brain",
    powerstats: {
      intelligence: "25",
      strength: "10",
      speed: "35",
      durability: "28",
      power: "21",
      combat: "42"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["Bird-Boy"],
      "place-of-birth": "-",
      "first-appearance": "The New Mutants #56 (October, 1987)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "-",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: {
      "group-affiliation": "New Mutants, Ani-Mate",
      relatives: "-"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/240.jpg"
    }
  },
  {
    response: "success",
    id: "89",
    name: "Bird-Man",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Henry Hawk",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Daredevil #10 (October, 1965)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "Ani-Men", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1503.jpg"
    }
  },
  {
    response: "success",
    id: "732",
    name: "Agent 13",
    powerstats: {
      intelligence: "null",
      strength: "46",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Sharon Carter",
      "alter-egos": "Sharon Carter",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Tales of Suspense #75",
      publisher: "Sharon Carter",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "null",
      height: ["5'8", "173 cm"],
      weight: ["135 lb", "61 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation: "Agent of SHIELD",
      base: "S.H.I.E.L.D. Headquarters, New York City"
    },
    connections: {
      "group-affiliation": "Agent of SHIELD.; former member of the Femme Force",
      relatives:
        'Harrison Carter (father), Amanda Carter (mother), Margaret "Peggy" Carter (sister)'
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/167.jpg"
    }
  },
  {
    response: "success",
    id: "90",
    name: "Bird-Man II",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Achille DiBacco",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "The Bar with No Name, Medina County, Ohio",
      "first-appearance": "Daredevil #157 (March, 1979)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "Human",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "Ani-Men", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1504.jpg"
    }
  },
  {
    response: "success",
    id: "91",
    name: "Birdman",
    powerstats: {
      intelligence: "null",
      strength: "35",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "Ray Randal",
      "alter-egos": "No alter egos found.",
      aliases: [
        "Bird-Man",
        "Harvey Birdman",
        "Ray Randal",
        "Harvey Birdman Attorney at Law",
        "Harry",
        "Henry",
        "Birdbath",
        "Bootyliciuos"
      ],
      "place-of-birth": "-",
      "first-appearance": "Birdman and the Galaxy Trio (1967)",
      publisher: "Hanna-Barbera",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "God / Eternal",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "-",
      "hair-color": "-"
    },
    work: { occupation: "-", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1506.jpg"
    }
  },
  {
    response: "success",
    id: "92",
    name: "Bishop",
    powerstats: {
      intelligence: "63",
      strength: "14",
      speed: "23",
      durability: "75",
      power: "100",
      combat: "65"
    },
    biography: {
      "full-name": "Lucas Bishop",
      "alter-egos": "No alter egos found.",
      aliases: ["Archbishop"],
      "place-of-birth":
        "A mutant relocation camp in an undisclosed location on an alternate 21st Century Earth",
      "first-appearance": "Uncanny X-Men #282 (November, 1991)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Mutant",
      height: ["6'6", "198 cm"],
      weight: ["275 lb", "124 kg"],
      "eye-color": "Brown",
      "hair-color": "No Hair"
    },
    work: {
      occupation:
        "(current) Adventurer, (former) Commander in the XSE (Xavier's Security Enforcers)",
      base:
        "Formerly Xavier Institute for Higher Learning, Salem Center, Westchester County, New York"
    },
    connections: {
      "group-affiliation":
        "\"Clean City\"; formerly Stryfe; X-Men; X.S.E. (Storm's team); X-Treme X-Men; X.S.E. (Hecate'e's team); The Twelve",
      relatives:
        "Burnum Bishop (father, deceased), Kadee Bishop (mother, deceased), Shard (sister, deceased), unnamed grandmother, Gateway (great-grandfather), Aliyah Bishop (alternate reality daughter);"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/31.jpg"
    }
  },
  {
    response: "success",
    id: "93",
    name: "Bizarro",
    powerstats: {
      intelligence: "38",
      strength: "95",
      speed: "100",
      durability: "100",
      power: "100",
      combat: "85"
    },
    biography: {
      "full-name": "Bizarro",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Superboy Vol. 1 #68 (1958)",
      publisher: "DC Comics",
      alignment: "neutral"
    },
    appearance: {
      gender: "Male",
      race: "Bizarro",
      height: ["6'3", "191 cm"],
      weight: ["345 lb", "155 kg"],
      "eye-color": "Black",
      "hair-color": "Black"
    },
    work: { occupation: "-", base: "Bizarro World" },
    connections: {
      "group-affiliation":
        "Superman Revenge Squad; Bizarros of Bizarro World; former associate of the Secret Society of Super-Villains; Joker League of Anarchy; former partner of Batzarro",
      relatives:
        "Bizarro-Lois No. 1 (wife, Pre-Crisis only), Bizarro, Jr. (son, Pre-Crisis only), Bizarro-Lois, Jr. (daughter, Pre-Crisis only)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/642.jpg"
    }
  },
  {
    response: "success",
    id: "94",
    name: "Black Abbott",
    powerstats: {
      intelligence: "null",
      strength: "null",
      speed: "null",
      durability: "null",
      power: "null",
      combat: "null"
    },
    biography: {
      "full-name": "",
      "alter-egos": "No alter egos found.",
      aliases: ["Lord Abbott"],
      "place-of-birth": "-",
      "first-appearance": "Marvel Team Up #146 (1984)",
      publisher: "Marvel Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["-", "0 cm"],
      weight: ["- lb", "0 kg"],
      "eye-color": "Red",
      "hair-color": "Black"
    },
    work: { occupation: "Cult leader, former monk", base: "-" },
    connections: { "group-affiliation": "-", relatives: "-" },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1049.jpg"
    }
  },
  {
    response: "success",
    id: "95",
    name: "Black Adam",
    powerstats: {
      intelligence: "88",
      strength: "100",
      speed: "92",
      durability: "100",
      power: "100",
      combat: "56"
    },
    biography: {
      "full-name": "Teth-Adam",
      "alter-egos": "No alter egos found.",
      aliases: ["Hassan Bari", "Theo Adam", "Mighty Adam", "Khem-Adam"],
      "place-of-birth": "Kahndaq, Egypt",
      "first-appearance": "Marvel Family #1 (December, 1945)",
      publisher: "DC Comics",
      alignment: "bad"
    },
    appearance: {
      gender: "Male",
      race: "null",
      height: ["6'3", "191 cm"],
      weight: ["250 lb", "113 kg"],
      "eye-color": "Brown",
      "hair-color": "Black"
    },
    work: {
      occupation: "-",
      base: "Mobile; Formerly Kahndaq; Fawcett City; New York City"
    },
    connections: {
      "group-affiliation":
        "None; Formerly the Black Marvel Family, Society of Villains, Injustice Society, Justice Society of America",
      relatives:
        "Shiruta (wife, deceased), Gon and Hurut (sons, deceased) Theo Adam (descendant, currently in control of his body), Sarah Primm (descendant, Theo's sister), Adrianna Tomaz (wife. deceased), Amon Tomaz (brother-in-law, deceased)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/643.jpg"
    }
  },
  {
    response: "success",
    id: "96",
    name: "Black Bolt",
    powerstats: {
      intelligence: "75",
      strength: "67",
      speed: "100",
      durability: "84",
      power: "100",
      combat: "56"
    },
    biography: {
      "full-name": "Blackagar Boltagon",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "Attilan, Atlantic Ocean",
      "first-appearance": "Fantastic Four #45 (December, 1965)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Male",
      race: "Inhuman",
      height: ["6'2", "188 cm"],
      weight: ["210 lb", "95 kg"],
      "eye-color": "Blue",
      "hair-color": "Black"
    },
    work: {
      occupation: "King of the Inhumans",
      base: "Attilan, Blue Area of the Moon"
    },
    connections: {
      "group-affiliation":
        "Universal Inhumans; Inhuman Royal Family; formerly Illuminati",
      relatives:
        "Medusa (wife and first cousin), Ahura (son), Agon (father, deceased), Rynda(mother, deceased), Maximus (brother), Crystal (sister-in-law), Gorgon, Karnak, Triton (cousins)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/243.jpg"
    }
  },
  {
    response: "success",
    id: "97",
    name: "Black Canary",
    powerstats: {
      intelligence: "63",
      strength: "8",
      speed: "33",
      durability: "20",
      power: "52",
      combat: "80"
    },
    biography: {
      "full-name": "Laurel Lance",
      "alter-egos": "No alter egos found.",
      aliases: ["Dinah Laurel Lance Queen; Dinah Laurel Lance-Windrow"],
      "place-of-birth": "-",
      "first-appearance": "Justice League of America (Volume 1) #75",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Metahuman",
      height: ["5'7", "170 cm"],
      weight: ["130 lb", "59 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation:
        "Detective/Crime-fighter, Chairperson of the Justice League of America; former florist, judo instructor",
      base:
        "Formerly Oracle's clock tower in Gotham City; formerly Seattle, Washington; formerly Star City, California; formerly New York City, New York (as a member of the JSA); currently mobile"
    },
    connections: {
      "group-affiliation":
        "Birds of Prey; formerly Justice League of America, Justice Society of America, Justice League Task Force, Justice League International, Team Arrow",
      relatives:
        "Larry Lance (father, deceased), Dinah Drake Lance (Black Canary, mother, deceased); Oliver Queen (Green Arrow, husband); Craig Windrow (ex-husband); Sin (adoptive daughter)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/1005.jpg"
    }
  },
  {
    response: "success",
    id: "98",
    name: "Black Canary",
    powerstats: {
      intelligence: "63",
      strength: "8",
      speed: "33",
      durability: "15",
      power: "45",
      combat: "80"
    },
    biography: {
      "full-name": "Dinah Drake Lance",
      "alter-egos": "No alter egos found.",
      aliases: ["-"],
      "place-of-birth": "-",
      "first-appearance": "Flash Comics #86 (August, 1947)",
      publisher: "DC Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["5'5", "165 cm"],
      weight: ["128 lb", "58 kg"],
      "eye-color": "Blue",
      "hair-color": "Blond"
    },
    work: {
      occupation: "Florist, former private investigator",
      base: "Gotham City, Park City"
    },
    connections: {
      "group-affiliation": "Justice Society of America",
      relatives:
        "Richard Drake (father), Lawrence Lance (husband), Dinah Laurel Lance (Black Canary, daughter), Oliver Queen (Green Arrow, son-in-law)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/644.jpg"
    }
  },
  {
    response: "success",
    id: "99",
    name: "Black Cat",
    powerstats: {
      intelligence: "75",
      strength: "16",
      speed: "33",
      durability: "10",
      power: "23",
      combat: "70"
    },
    biography: {
      "full-name": "Felicia Hardy",
      "alter-egos": "No alter egos found.",
      aliases: ["Felicity Harmon"],
      "place-of-birth": "Queens, New York",
      "first-appearance": "Amazing Spider-Man #194 (July, 1979)",
      publisher: "Marvel Comics",
      alignment: "good"
    },
    appearance: {
      gender: "Female",
      race: "Human",
      height: ["5'10", "178 cm"],
      weight: ["120 lb", "54 kg"],
      "eye-color": "Green",
      "hair-color": "Blond"
    },
    work: {
      occupation:
        "Cat burglar; Private investigator, founder of Cat's Eye Investigations.",
      base: "-"
    },
    connections: {
      "group-affiliation": "Formerly Heroes for Hire",
      relatives: "Walter Hardy (father, deceased), Lydia Hardy (mother)"
    },
    image: {
      url: "https://www.superherodb.com/pictures2/portraits/10/100/32.jpg"
    }
  }
];
exports.allData = allData;
