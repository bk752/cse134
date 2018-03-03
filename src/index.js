/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';
import './styles/styles.css'; //Webpack can import CSS files too!

const store = configureStore();

render(
	<Provider store={store}>
		<BrowserRouter>
			{routes}
		</BrowserRouter>
	</Provider>,
	document.getElementById('app')
);
