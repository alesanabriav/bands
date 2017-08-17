const TYPE = 'VIDEOS';

const initialState = {
	items: [],
  loading: false
};

function videosReducer(state = initialState, action) {

  switch (action.type) {
		case `FETCH_${TYPE}`:
			return { ...state, items: action.payload };
			break;
    case `FETCHING_${TYPE}`:
  		return { ...state, loading: true};
  		break;
    case `FETCHED_${TYPE}`:
        return { ...state, loading: false };
      break;
    default:
    	return state;
  }
}

export default videosReducer;
