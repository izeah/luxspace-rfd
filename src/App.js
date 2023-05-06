import "assets/css/app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "pages/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomePage} />
      </Routes>
    </Router>
  );
}

export default App;
