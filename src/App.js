import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Search from "./pages/Search";
function App() {
  
  return (
    <Router>  
         <Navbar /> 
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/search" element={<Search />} />
            <Route path="/shop" element={<Shop />} />
         </Routes>
    </Router>
  );
}

export default App;
