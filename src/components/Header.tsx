import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink to="/admin">Admin page</NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Header;
