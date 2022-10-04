import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from '../configureStore';
import DetailsPage from '../Pages/DetailsPage';

afterEach(cleanup);
test('Check if Details page is rendering correctly', () => {
  const state = {};
  const detailsPage = renderer
    .create(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/player-details" element={<DetailsPage state={{ state }} />} />
          </Routes>
          ,
        </BrowserRouter>
      </Provider>,
    )
    .toJSON();
  expect(detailsPage).toMatchSnapshot();
});

test('Check the player details render correctly', () => {
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
          <Routes>
            <Route path="/player-details" element={<DetailsPage />} state={{ state }} />
          </Routes>
          ,
        </BrowserRouter>
      </Provider>,
    )
    .toJSON();
  expect(detailsPage).toMatchSnapshot();
});
