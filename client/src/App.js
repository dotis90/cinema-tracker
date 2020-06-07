import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navibar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import AlertMessage from './components/layout/Alert';
import { findUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import MainPage from './components/main/MainPage';
import MovieDetailPage from './components/MovieDetailPage/MovieDetailPage';
import Dashboard from './components/dashboard/Dashboard';
import PrivateRoute from './components/routing/PrivateRoute';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(findUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navibar />
          <Route exact path="/" component={Landing} />
          <AlertMessage />
          <Switch>

            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/main" component={MainPage} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/movies/:movieId" component={MovieDetailPage} />
            <PrivateRoute exact path="/favorites/:userId" component={null} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
