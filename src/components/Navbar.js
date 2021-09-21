import '../styles/Navbar.css';
import logo from '../Vector.png';
import search from '../search.png';
import photo from '../Ellipse.png';
//import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h2>AB Test Real</h2>
                <input type="text" className="search_text" />
                <img src={search} className="search_logo" alt="search_icon"/>
                <img src={photo} alt="profile" className="profile" />
                <img src={logo} alt="logo" className="exit" />
        </nav>
     );
}
 
export default Navbar;