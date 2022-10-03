import { Link } from 'react-router-dom';

const Player = () => (
  <Link to="/player-details" className="player">
    <div className="image"><img src="https://media.api-sports.io/football/players/1100.png" alt="" /></div>
    <div className="info-container">
      <div className="info">
        <h5 className="name font-lato">E.Haaland</h5>
        <h4 className="goals font-lato">14 goals</h4>
      </div>
      <i className="fa-solid fa-circle-arrow-right" />
    </div>
  </Link>
);

export default Player;
