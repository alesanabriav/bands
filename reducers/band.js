const TYPE = 'BAND';

const initialState = {
	artist: {},
	artistItunesId: null,
	videos: [],
	events: [],
	albums: []
};

function bandReducer(state = initialState, action) {

  switch (action.type) {
    case `FETCH_${TYPE}_ARTIST`:
			return { ...state, artist: action.payload };
      break;
		case `FETCH_${TYPE}_VIDEOS`:
			return { ...state, videos: action.payload };
	  	break;
		case `FETCH_${TYPE}_EVENTS`:
			return { ...state, events: action.payload };
		  break;
		case `FETCH_${TYPE}_ALBUMS`:
			return { ...state, albums: action.payload };
			break;
    default:
    	return state;
  }
}

export default bandReducer;
