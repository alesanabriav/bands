import React from 'react';
import { shallow, mount } from 'enzyme';
import Videos from '../../components/videos';
import Video from '../../components/video';

describe('Videos component', () => {
  it('should render items', () => {
    const props = {items: [{trackId: 1, artworkUrl100: '', trackName: ''}, {trackId: 2, artworkUrl100: '', trackName: ''}]};
    const component = shallow(<Videos {...props}/>);
    expect(component.render().find('.card--video').length).toEqual(2);
  })

  it('should render video', () => {
    const props = {video: {trackId: 1, artworkUrl100: 'http://localhost/artwork-url-100.jpg', trackName: 'track name'}};
    const component = shallow(<Video {...props}/>);
    expect(component.find('.card-body').text()).toEqual('track name');
    expect(component.find('.card--video__bg').props().style)
      .toEqual({backgroundImage: 'url(http://localhost/artwork-url-100.jpg)'});
  })

  it('should open modal video', () => {
    const props = {video: {trackId: 1, artworkUrl100: '', trackName: 'track name'}};
    const component = shallow(<Video {...props}/>);
    component.setState({show: true});
    expect(component.render().find('.video-modal--show').length).toEqual(1);

  })

  it('should render loading', () => {
    const props = {items: [], loading: true};
    const component = shallow(<Videos {...props}/>);
    expect(component.render().find('.section__loading').length).toEqual(1);
  })

  it('should render fail', () => {
    const props = {items: [], fail: true};
    const component = shallow(<Videos {...props}/>);
    expect(component.render().find('.section__fail').length).toEqual(1);
  })



});
