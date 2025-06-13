import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar  ()  {
    return (
        <nav >
            <Link to="/"  style={{paddingRight: '20px', paddingLeft: '20px'}}>Home</Link>
            <Link to="/about" style={{paddingRight: '20px'}}>About</Link>
            <Link to="/service" style={{paddingRight: '20px'}}>Service</Link>
            <Link to="/contact">Contact</Link>
        </nav>
 
    );
}

export default Navbar;