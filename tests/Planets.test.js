const data = {
  planets: [
    {
      name: "Tatooine",
      filmConnection: {
        films: [
          {
            title: "A New Hope",
            episodeID: 4,
            id: "ZmlsbXM6MQ==",
          },
          {
            title: "Return of the Jedi",
            episodeID: 6,
            id: "ZmlsbXM6Mw==",
          },
          {
            title: "The Phantom Menace",
            episodeID: 1,
            id: "ZmlsbXM6NA==",
          },
          {
            title: "Attack of the Clones",
            episodeID: 2,
            id: "ZmlsbXM6NQ==",
          },
          {
            title: "Revenge of the Sith",
            episodeID: 3,
            id: "ZmlsbXM6Ng==",
          },
        ],
      },
    },
    {
      name: "Yavin IV",
      filmConnection: {
        films: [
          {
            title: "A New Hope",
            episodeID: 4,
            id: "ZmlsbXM6MQ==",
          },
        ],
      },
    },
    {
      name: "Hoth",
      filmConnection: {
        films: [
          {
            title: "The Empire Strikes Back",
            episodeID: 5,
            id: "ZmlsbXM6Mg==",
          },
        ],
      },
    },
    {
      name: "Dagobah",
      filmConnection: {
        films: [
          {
            title: "The Empire Strikes Back",
            episodeID: 5,
            id: "ZmlsbXM6Mg==",
          },
          {
            title: "Return of the Jedi",
            episodeID: 6,
            id: "ZmlsbXM6Mw==",
          },
          {
            title: "Revenge of the Sith",
            episodeID: 3,
            id: "ZmlsbXM6Ng==",
          },
        ],
      },
    },
    {
      name: "Bespin",
      filmConnection: {
        films: [
          {
            title: "The Empire Strikes Back",
            episodeID: 5,
            id: "ZmlsbXM6Mg==",
          },
        ],
      },
    },
    {
      name: "Endor",
      filmConnection: {
        films: [
          {
            title: "Return of the Jedi",
            episodeID: 6,
            id: "ZmlsbXM6Mw==",
          },
        ],
      },
    },
  ],
};

test("films", () => {
  let randomNumber = Math.floor(Math.random() * data.planets.length - 1);
  const films = data.planets[randomNumber].filmConnection.films;
  expect(films).toBeTruthy();
});
