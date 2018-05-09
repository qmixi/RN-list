import React from 'react';

import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

import reducers from './src/reducers/index';
import DestinationsView from './src/scenes/destinations/DestinationsView';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

export default class App extends React.Component {
		render() {
				return (
						<Provider store={createStoreWithMiddleware(reducers)}>
								<DestinationsView/>
						</Provider>
				)
		}
}
