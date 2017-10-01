export default function(state = {}, action) {
	switch (action.type) {        // action jest zwracany przez action creatory
		case 'type_name':           // type zwracany przez action creatora
			return action.payload;    // nowy częściowy stan aplikacji
		default:
			return state;
	}
}
