import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import TeamsIndex from "./Pages/TeamsIndex";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import NewTeams from "./Pages/NewTeams";
import TeamPage from "./Pages/TeamPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<TeamsIndex />} />
          <Route path="/teams/:id" element={<TeamPage />} />
          <Route path="/teams/new" element={<NewTeams />} />
          <Route path="login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
