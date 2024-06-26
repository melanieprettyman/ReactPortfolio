import { NavLink, useLocation } from "react-router-dom";

function MainNavigation() {
  const location = useLocation(); // Get location object
  const activeStyle = {
    textDecoration: 'underline',
    color: '#c8f5f5', // Example active link color
  };

  // Determine navbar background based on the route
  const navStyle = {
    background: location.pathname === '/' ? 'transparent' : 'white'
  };

  return (
    <header className="navHeader" style={navStyle}>
      <nav>
        <ul className="navList">
          <li>
            <NavLink to="/" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/Aboutme" style={({ isActive }) => (isActive ? activeStyle : undefined)} end>
              About me
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
