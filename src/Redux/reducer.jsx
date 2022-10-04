import axios from 'axios';

const GET_TOP_SCORERS = 'GET_TOP_SCORERS';

const fetchTopScorers = (season = 2022) => (dispatch) => {
  const API_URL = `https://v3.football.api-sports.io/players/topscorers?season=${season}&league=39`;
  axios({
    method: 'get',
    headers: {
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': '7b85e4216e23400c29a7df8eebb40ca5',
    },
    url: API_URL,
  })
    .then((response) => {
      const topScorers = response.data.response.slice(0, 10);
      dispatch({ type: GET_TOP_SCORERS, topScorers });
    });
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_TOP_SCORERS:
      return [
        ...action.topScorers,
      ];

    default:
      return state;
  }
};

export default fetchTopScorers;
export { reducer };
