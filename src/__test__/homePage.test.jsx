import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../configureStore';
import Player from '../Components/Player';
import HomePage from '../Pages/HomePage';

afterEach(cleanup);

test('Check if Home is rendering correctly', () => {
  const homePage = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <HomePage />
        </BrowserRouter>
      </Provider>,
    )
    .toJSON();
  expect(homePage).toMatchSnapshot();
});

test('Check the player cards render correctly', () => {
  const state = {
    name: 'E. Haaland',
    age: 22,
    nationality: 'Norway',
    img: 'https://media.api-sports.io/football/players/278.png',
    clubName: 'Manchester City',
    appearences: 8,
    minutes: 665,
    total: 14,
    assists: 3,
  };
  const detailsPage = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <Player
            name={state.name}
            age={state.age}
            nationality={state.nationality}
            img={state.photo}
            clubName={state.clubName}
            appearences={state.appearences}
            minsPlayed={state.minutes}
            goals={state.total}
            assists={state.assists}
          />
        </BrowserRouter>
      </Provider>,
    )
    .toJSON();
  expect(detailsPage).toMatchSnapshot();
});
