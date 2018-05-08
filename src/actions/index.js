import {LOAD_DESTINATIONS} from './types';

export function loadDestinations(destinations) {
		return {
				type: LOAD_DESTINATIONS,
				payload: destinations
		}
};
