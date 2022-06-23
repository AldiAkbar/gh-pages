import { Link } from "react-router-dom";
import StyledNavbar from './index.styled';

function Navbar() {
  return (
    <StyledNavbar>
      <nav>
        <div>
          <h1>Covid ID</h1>
        </div>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/indonesia">Indonesia</Link></li>
            <li><Link to="/indonesia/provinsi">Provinces</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </nav>
    </StyledNavbar>
  );
}

export default Navbar;
