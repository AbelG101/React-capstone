import Player from '../Components/Player';

const HomePage = () => (
  <>
    <header className="header">
      <h1>Premier League</h1>
      <h2>Top Scorers</h2>
    </header>
    <main className="home-container">
      <Player />
      <Player />
      <Player />
      <Player />
    </main>
  </>
);

export default HomePage;
