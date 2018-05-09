import axios from 'axios';

import {LOAD_DESTINATIONS, SET_ERROR_MESSAGE, START_LOADING_DESTINATIONS} from './types';

export function loadDestinations(destinations) {
		return {
				type: LOAD_DESTINATIONS,
				payload: destinations
		}
}

export function setErrorMessage(message) {
		return {
				type: SET_ERROR_MESSAGE,
				payload: message
		}
}

export function startLoadingDestinations() {
		return {
				type: START_LOADING_DESTINATIONS
		}
}

const DESTINATION_PATH = 'http://static.bidflyer.com.s3.amazonaws.com/promotional/test.json';

export function fetchDestinations() {
		return dispatch => {
				dispatch(startLoadingDestinations());
				axios.get(DESTINATION_PATH)
						.then((response) => {
								dispatch(loadDestinations(response.data));
						})
						.catch((error) => {
								dispatch(setErrorMessage(error.message));
						});
		}
}
