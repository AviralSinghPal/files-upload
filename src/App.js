import Login from "./components/Login";
import UserDashboard from "./components/userdashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./app.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />   
          <Route path="/dashboard" element={<UserDashboard />} />
        </Routes>
      </Router>
      </header>
    </div>
  );
}

export default App;
