import { reducer } from '../Redux/reducer';

describe('top scorers reducer', () => {
  it('should return default state', () => {
    const state = reducer(undefined, {});
    expect(state).toEqual([]);
  });

  it(('should return new state if fetching type'), () => {
    const topScorers = [
      {
        player: {
          id: 278,
          name: 'K. Mbappé',
          age: 22,
          nationality: 'France',
          photo: 'https://media.api-sports.io/football/players/278.png',
        },
        statistics: [
          {
            team: {
              name: 'Paris Saint Germain',
            },
            games: {
              appearences: 29,
              minutes: 2340,
            },
            goals: {
              total: 33,
              assists: 7,
            },
          },
        ],
      },
      {
        player: {
          id: 3246,
          name: 'N. Pépé',
          age: 25,
          nationality: "Côte d'Ivoire",
          photo: 'https://media.api-sports.io/football/players/3246.png',
        },
        statistics: [
          {
            team: {
              name: 'Lille',
            },
            games: {
              appearences: 38,
              minutes: 3332,
            },
            goals: {
              total: 22,
              assists: 11,
            },
          },
        ],
      },
    ];
    const newState = reducer(undefined, {
      type: 'GET_TOP_SCORERS',
      topScorers,
    });
    expect(newState).toEqual(topScorers);
  });
});
