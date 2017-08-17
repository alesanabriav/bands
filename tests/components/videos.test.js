import React from 'react';
import { shallow } from 'enzyme';
import Videos from '../../components/videos';

describe('Videos component', () => {
  it('should render items', () => {
    const props = {items: [{trackId: 1, artworkUrl100: '', trackName: ''}, {trackId: 2, artworkUrl100: '', trackName: ''}]};
    const component = shallow(<Videos {...props}/>);
    expect(component.find('.card--video').length).toEqual(2);
  })
});
