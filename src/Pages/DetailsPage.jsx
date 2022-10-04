import { Link, useLocation } from 'react-router-dom';

const DetailsPage = () => {
  const location = useLocation();
  console.log(location);
  const {
    name, age, nationality, img, clubName, appearences, minsPlayed, goals, assists,
  } = location.state.state;
  return (
    <div className="player-details-container">
      <Link to="/" className="return-btn"><i className="fa-solid fa-chevron-left" /></Link>
      <header className="player-details-header">
        <div className="image">
          <img src={img} alt={name} />
        </div>
        <div className="player-details-info">
          <h3 className="name">{name}</h3>
          <h5 className="age">
            {age}
            {' '}
            yrs old
          </h5>
          <h5 className="country">{nationality}</h5>
        </div>
      </header>
      <div className="player-details-stats-container">
        <h3 className="stats-header">Statistics</h3>
        <table className="stats-table">
          <tbody>
            <tr>
              <td>Club</td>
              <td>{clubName}</td>
            </tr>
            <tr>
              <td>Apperances</td>
              <td>{appearences}</td>
            </tr>
            <tr>
              <td>Minutes played</td>
              <td>
                {minsPlayed}
                {' '}
                mins
              </td>
            </tr>
            <tr>
              <td>Goals</td>
              <td>{goals}</td>
            </tr>
            <tr>
              <td>Assists</td>
              <td>{assists === null ? 0 : assists }</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DetailsPage;
