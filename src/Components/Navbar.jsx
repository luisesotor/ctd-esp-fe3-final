import React from 'react';
import { Link } from 'react-router-dom';
import { useDentistsState } from './utils/global.context';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
  const { state, dispatch } = useDentistsState();

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav>
      <h1>DentSky</h1>
      <div className='menu'>
        <Link to={'/'}> <h4>Home</h4> </Link>
        <Link to={'/Contact'}> <h4>Contact</h4> </Link>
        <Link to={'/Favs'}> <h4>Favs</h4> </Link>

        {/* Botón interactivo con íconos de sol/luna */}
        <button onClick={toggleTheme} className="theme-toggle-btn">
          {state.theme === 'light' ? (
            <FaMoon size="24px" style={{ cursor: 'pointer' }} />
          ) : (
            <FaSun size="24px" style={{ cursor: 'pointer' }} />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
