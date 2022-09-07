import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <>
      <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <NavLink className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`} to='/'>
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              to='/about'
            >
              About
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              to='/login'
            >
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
