import {LOAD_DESTINATIONS, START_LOADING_DESTINATIONS, SET_ERROR_MESSAGE} from '../actions/types';

const defaultState = {
		destinations: [],
		loading: false,
		error: ''
};

export default function (state = defaultState, action) {
		switch (action.type) {
				case START_LOADING_DESTINATIONS:
						return {
								...state,
								loading: true,
						};
				case LOAD_DESTINATIONS:
						return {
								destinations: action.payload,
								loading: false,
								error: ''
						};
				case SET_ERROR_MESSAGE:
						return {
								...state,
								loading: false,
								error: action.payload,
						};
				default:
						return state;
		}
}
