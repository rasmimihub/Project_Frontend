import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
 
function Navbar  ()  {
    return (
        <nav >
            <Link to="/"  style={{paddingRight: '100px', paddingLeft: '20px'}}>Home</Link>
            <Link to="/shop" style={{paddingRight: '100px'}}>Shop</Link>
            <Link to="/cart" style={{paddingRight: '60px'}}>Cart</Link>
            <Link to="/search" style={{paddingRight: '80px'}}>Search</Link>
        </nav>
 
    );
}

export default Navbar;