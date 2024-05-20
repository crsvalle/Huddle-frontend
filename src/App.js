import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import TeamsList from "./Pages/TeamsIndex";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import NewTeams from "./Pages/NewTeams";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<TeamsList />} />
          <Route path="/teams/new" element={<NewTeams />} />
          <Route path="login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
