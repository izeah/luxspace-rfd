import "assets/css/app.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "pages/Homepage";
import Details from "pages/Details";
import Cart from "pages/Cart";
import Congratulations from "pages/Congratulations";
import ErrorPage from "pages/ErrorPage";
import Provider from "helpers/hooks/useGlobalContext";

function App() {
  return (
    <Provider>
      <Router>
        <Routes>
          <Route path="/" Component={Homepage} />
          <Route
            path="/categories/:categoryID/products/:productID"
            Component={Details}
          />
          <Route path="/cart" Component={Cart} />
          <Route path="/congratulations" Component={Congratulations} />
          <Route path="*" Component={ErrorPage} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
