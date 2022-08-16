import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <header className="header-analytics">
        <h3>Analytics</h3>
        <Link
          className="back-to-tracker"
          style={ { textDecoration: 'none' } }
          to="/carteira"
        >
          go back to tracker
          <span className="material-symbols-outlined">
            priority
          </span>
        </Link>
      </header>
    );
  }
}

export default Header;
