import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Artists from "./pages/Artists";
import Artworks from './pages/Artworks';
import './App.css';

function App() {
  return (
    <Router>
        <div className="App">
        <Routes>
          <Route path="" Component={HomePage} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/signup" Component={SignupPage} />
          <Route path="/artists" Component={Artists} />
          <Route path="/artworks" Component={Artworks} />
        </Routes>
        </div>
      </Router>
  );
}

export default App;
