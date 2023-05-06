import "assets/css/app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "pages/Homepage";
import Details from "pages/Details";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route
          path="/categories/:categoryID/products/:productID"
          Component={Details}
        />
      </Routes>
    </Router>
  );
}

export default App;
