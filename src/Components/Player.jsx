import { Link } from 'react-router-dom';

const Player = (props) => {
  const {
    name, age, nationality, img, clubName, appearences, minsPlayed, goals, assists,
  } = props;
  const state = {
    name, age, nationality, img, clubName, appearences, minsPlayed, goals, assists,
  };
  return (
    <Link
      to="/player-details"
      state={{
        state,
      }}
      className="player"
    >
      <div className="image"><img src={img} alt={name} /></div>
      <div className="info-container">
        <div className="info">
          <h5 className="name font-lato">{name}</h5>
          <h4 className="goals font-lato">
            {goals}
            {' '}
            goals
          </h4>
        </div>
        <i className="fa-solid fa-circle-arrow-right" />
      </div>
    </Link>
  );
};

export default Player;
