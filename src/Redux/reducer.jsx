import axios from 'axios';

const GET_TOP_SCORERS = 'GET_TOP_SCORERS';
const API_URL = 'https://v3.football.api-sports.io/players/topscorers?season=2022&league=39';

const fetchTopScorers = () => (dispatch) => {
  axios({
    method: 'get',
    headers: {
      'x-rapidapi-host': 'v3.football.api-sports.io',
      'x-rapidapi-key': 'f447f4c629a0ff04ab548bcf3bbee263',
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
