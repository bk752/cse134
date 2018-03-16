/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';
import './styles/styles.css'; //Webpack can import CSS files too!
import { loadMessages } from './actions/chatActions';
import {loadParts} from './actions/partsActions';
import { loadSteps } from './actions/progressActions';
import { loadDescription } from './actions/descriptionActions';

const store = configureStore();
store.dispatch(loadMessages());
store.dispatch(loadParts());
store.dispatch(loadSteps());
store.dispatch(loadDescription());
render(
	<Provider store={store}>
		<BrowserRouter>
			{routes}
		</BrowserRouter>
	</Provider>,
	document.getElementById('app')
);
