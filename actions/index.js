import * as artist from './artist';
import * as albums from './albums';
import * as videos from './videos';
import * as events from './events';

const actions = {
  ...artist,
  ...albums,
  ...videos,
  ...events
};

export default actions;
