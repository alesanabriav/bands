import React from 'react';
import { shallow } from 'enzyme';
import Albums from '../../components/albums';

describe('Albums component', () => {
  it('should render items', () => {
    const props = {items: [{collectionId: 1}, {collectionId: 2}]};
    const component = shallow(<Albums {...props}/>);
    expect(component.find('.card--album').length).toEqual(1);
  })

  it('should render loading', () => {
    const props = {items: [], loading: true};
    const component = shallow(<Albums {...props}/>);
    expect(component.render().find('.section__loading').length).toEqual(1);
  })

  it('should render fail', () => {
    const props = {items: [], fail: true};
    const component = shallow(<Albums {...props}/>);
    expect(component.render().find('.section__fail').length).toEqual(1);
  })
});
