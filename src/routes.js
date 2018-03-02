import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import PartsPage from './components/parts/PartsPage';
import PickPage from './components/pick/PickPage';
import ProgressPage from './components/progress/ProgressPage';
import ManageCoursePage from './components/course/ManageCoursePage'; //eslint-disable-line import/no-named-as-default

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="parts" component={PartsPage} />
    <Route path="pick" component={PickPage} />
    <Route path="progress" component={ProgressPage} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="about" component={AboutPage} />
  </Route>
);
