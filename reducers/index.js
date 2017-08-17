import { combineReducers } from 'redux';
import artist from './artist';
import albums from './albums';
import videos from './videos';
import events from './events';

const reducers = combineReducers({
  artist,
  albums,
  videos,
  events
});

export default reducers;
