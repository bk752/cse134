import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import PartsPage from './components/parts/PartsPage';
import PickPage from './components/pick/PickPage';
import ProgressPage from './components/progress/ProgressPage';
import DescriptionPage from './components/description/DescriptionPage';
import ChatPage from './components/chat/ChatPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="parts" component={PartsPage} />
    <Route path="pick" component={PickPage} />
    <Route path="progress" component={ProgressPage} />
    <Route path="about" component={AboutPage} />
    <Route path="description" component={DescriptionPage} />
    <Route path="chat" component={ChatPage} />
  </Route>
);
