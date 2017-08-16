
const initialState = {
	items: [],
	band: {}
};

function bandsReducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH':
			return action.payload
      break;
    default:
    return state;
  }
}

export default bandsReducer;
