import React, { Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons'
import { FaFilm } from 'react-icons/fa'

export const Navibar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const guestLinks = (
    <>
      <Link to="/login" className="nav-link display-link">
        Login
      </Link>
      {''}
      <Link to="/register" className="nav-link display-link">
        Sign Up
      </Link>
    </>
  );

  const authLinks = (
    <>
      {/* <Link to="/community" className="nav-link display-link">
        Community
      </Link> */}
      <Link to="/favorites" className="nav-link display-link">
        Favorites
      </Link>
      <Link to="/main" className="nav-link display-link">
        Movies
      </Link>
      {/* <Link to="/profile" className="nav-link display-link">
        Profile
      </Link> */}
      <Link onClick={logout} to="/" className="nav-link display-link">
        Logout
      </Link>
    </>
  );

  return (
    <Navbar className="color-nav" expand="lg" sticky="top" variant="dark">
      <Navbar.Brand>
        <Link className="display-link" to="/">
          <IconContext.Provider value={{ size: '2rem' }}>
            <FaFilm />{'  '}Cinema Tracker
          </IconContext.Provider>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        {!loading && <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>}
      </Navbar.Collapse>
    </Navbar>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navibar);
