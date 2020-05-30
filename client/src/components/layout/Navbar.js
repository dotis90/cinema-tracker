import React, { Fragment } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../../actions/auth';
import { Link } from 'react-router-dom';

export const Navibar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const guestLinks = (
    <>
      <Link to="/login" className="nav-link">
        Login
      </Link>
      {''}
      <Link to="/register" className="nav-link">
        Sign Up
      </Link>
    </>
  );

  const authLinks = (
    <>
      <Link to="#" className="nav-link">
        Community
      </Link>
      <Link href="/favorites" className="nav-link">
        Favorites
      </Link>
      <Link href="/profile" className="nav-link">
        Movies
      </Link>
      <Link onClick={logout} to="/" className="nav-link">
        Logout
      </Link>
    </>
  );

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Navbar.Brand>
        <Link to="/">Cinema Tracker</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basiv-navbar-nav" className="justify-content-end">
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
