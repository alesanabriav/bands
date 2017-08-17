import React from 'react';
import { shallow } from 'enzyme';
import Artist from '../../components/artist';

describe('Artist component', () => {
  it('should render artist name', () => {
    const props = {artist: {name: 'the weeknd', image_url: 'https://localhost/imgtest.jpg'}};
    const component = shallow(<Artist {...props}/>);

    expect(component.find('h1').text()).toEqual('the weeknd');
  })

  it('should render artist bg', () => {
    const props = {artist: {name: 'the weeknd', image_url: 'https://localhost/imgtest.jpg'}};
    const component = shallow(<Artist {...props}/>);
    expect(component.find('.jumbotron').get(0).props.style).toEqual({"background": "url(https://localhost/imgtest.jpg)"});
  })
});
