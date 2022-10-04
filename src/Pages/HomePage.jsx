import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Player from '../Components/Player';
import fetchTopScorers from '../Redux/reducer';

const HomePage = () => {
  const topScorers = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  useEffect(() => {
    if (topScorers.length === 0) {
      dispatch(fetchTopScorers(2022));
    }
  });

  const getBySeason = (event) => {
    if (event.key === 'Enter') {
      let season = document.querySelector('.search-feild').value;
      season = season.trim() === '' ? 2022 : season;
      dispatch(fetchTopScorers(season));
    }
  };

  return (
    <>
      <header className="header">
        <h1>Premier League  🇬🇧</h1>
        <h2>Top Scorers 🥅</h2>
        <div className="search-feild-container">
          <input onKeyDown={getBySeason} placeholder="Enter the season/year, e.g: 2020, 2021" className="search-feild" type="search" />
        </div>
      </header>
      <main className="home-container">
        {topScorers.map((scorer) => (
          <Player
            key={scorer.player.id}
            name={scorer.player.name}
            age={scorer.player.age}
            nationality={scorer.player.nationality}
            img={scorer.player.photo}
            clubName={scorer.statistics[0].team.name}
            appearences={scorer.statistics[0].games.appearences}
            minsPlayed={scorer.statistics[0].games.minutes}
            goals={scorer.statistics[0].goals.total}
            assists={scorer.statistics[0].goals.assists}
          />
        ))}
      </main>
    </>
  );
};

export default HomePage;
