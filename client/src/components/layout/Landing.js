import React from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { IconContext } from 'react-icons'
import { FaFilm } from 'react-icons/fa'

export const Landing = ({ isAuthenticated }) => {

  if (isAuthenticated) {
    return <Redirect to='/main' />
  }
  return (
    <section class="landing">
      <div class="container">
        <div>
          <h1>Cinema Tracker</h1>
          <p>Browse today's most popular movies and save them to your Favorites list.</p>
          <Link class="btn" to="/Register">Sign up</Link>
        </div>
        <IconContext.Provider value={{ size: '32rem' }}>
          <FaFilm />
        </IconContext.Provider>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps)(Landing);
