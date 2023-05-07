import "assets/css/app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "pages/Homepage";
import Details from "pages/Details";
import Cart from "pages/Cart";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route
          path="/categories/:categoryID/products/:productID"
          Component={Details}
        />
        <Route path="/cart" Component={Cart} />
      </Routes>
    </Router>
  );
}

export default App;
