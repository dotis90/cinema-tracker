import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Navibar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import MainPage from './components/main/MainPage';
import MovieDetailPage from './components/MovieDetailPage/MovieDetailPage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navibar />
          <Route exact path="/" component={Landing} />
          <Switch>
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/main" component={MainPage} />
            <Route exact path="/movies/:movieId" component={MovieDetailPage} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
