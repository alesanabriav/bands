const TYPE = 'ARTIST';

const initialState = {
	item: {},
	id: null,
	loading: false
};

function artistReducer(state = initialState, action) {

  switch (action.type) {
    case `FETCH_${TYPE}`:
			return { ...state, item: action.payload, loading: false };
      break;
		case `FETCHING_${TYPE}`:
			return { ...state, loading: true };
			break;
		case `FETCH_${TYPE}_ID`:
			const { artistId } = action.payload[0];
			return { ...state, id: artistId };
	    break;
		default:
    	return state;
  }
}

export default artistReducer;
