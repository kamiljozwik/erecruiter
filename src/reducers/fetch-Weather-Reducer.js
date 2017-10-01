export default function(state = {}, action) {
	console.log(action);
	switch (action.type) {
		case 'fetch_weather':
			return action.payload;
		default:
			return state;
	}
}
