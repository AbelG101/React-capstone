import { Route, Routes } from 'react-router-dom';
import './App.css';
import DetailsPage from './Pages/DetailsPage';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/player-details" element={<DetailsPage />} />
      </Routes>
    </>
  );
}

export default App;
