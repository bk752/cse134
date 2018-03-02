import React from 'react';
import { BrowserRouter, Route, IndexRoute } from 'react-router-dom';
import App from './components/App';
import Header from './components/common/Header';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import PartsPage from './components/parts/PartsPage';
import PickPage from './components/pick/PickPage';
import ProgressPage from './components/progress/ProgressPage';

export default (
	<div>
        <Header/>
		<Route path="/parts" component={PartsPage} />
		<Route path="/pick" component={PickPage} />
		<Route path="/progress" component={ProgressPage} />
		<Route path="/about" component={AboutPage} />
	</div>
);
