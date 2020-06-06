import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

export const Landing = ({ isAuthenticated }) => {

  if (isAuthenticated) {
    return <Redirect to='/main' />
  }
  return (
    <div>
      <h1>Welcome to Cinema Tracker. Find and track your favorite movies.</h1>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Landing);
