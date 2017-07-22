import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Header = () => {
  return(
    <nav>
      <NavLink to='/home'     activeClassName="active">Home</NavLink>
      {" | "}
      <Link to='/about' activeClassName="active">About</Link>
    </nav>
  )
}

export default Header;
