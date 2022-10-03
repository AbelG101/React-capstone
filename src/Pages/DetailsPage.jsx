import { Link } from 'react-router-dom';

const DetailsPage = () => (
  <div className="player-details-container">
    <Link to="/" className="return-btn"><i className="fa-solid fa-chevron-left" /></Link>
    <header className="player-details-header">
      <div className="image">
        <img src="https://media.api-sports.io/football/players/1100.png" alt="E.Haaland" />
      </div>
      <div className="player-details-info">
        <h3 className="name">E.Haaland</h3>
        <h5 className="age">22 yrs old</h5>
        <h5 className="country">Norway</h5>
      </div>
    </header>
    <div className="player-details-stats-container">
      <h3 className="stats-header">Statistics</h3>
      <table className="stats-table">
        <tr>
          <td>Team</td>
          <td>Manchester City</td>
        </tr>
        <tr>
          <td>Apperances</td>
          <td>8</td>
        </tr>
        <tr>
          <td>Minutes played</td>
          <td>665 mins</td>
        </tr>
        <tr>
          <td>Goals</td>
          <td>14</td>
        </tr>
        <tr>
          <td>Assists</td>
          <td>3</td>
        </tr>
      </table>
    </div>
  </div>
);

export default DetailsPage;
