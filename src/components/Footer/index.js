import { Link } from "react-router-dom";
import { StyledFooter, StyledFooterLeft } from './index.styled';


function Footer() {
  return (
    <StyledFooter>
      <footer>
        <StyledFooterLeft>
          <h4>Covid ID</h4>
          <p>Developed by Aldi Akbar</p>
        </StyledFooterLeft>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/indonesia">Indonesia</Link></li>
            <li><Link to="/indonesia/provinces">Provinces</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
      </footer>
    </StyledFooter>
  );
}

export default Footer;
