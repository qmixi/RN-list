import {LOAD_DESTINATIONS} from '../actions/types';

export default function (state = [], action) {
		switch (action) {
				case LOAD_DESTINATIONS:
						console.log('payload', action.payload);
						return [...action.payload];
				default:
						return state;
		}
}
