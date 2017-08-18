import React from 'react';
import { shallow } from 'enzyme';
import Events from '../../components/events';

describe('Events component', () => {
  it('should render items', () => {
    const props = {items: [
      {
        id: 1,
        venue: {
          name: 'some place',
          country: 'Colombia',
          country: 'Bogotá',
          datetime: '07-07-2017'
        }
      },
      {
        id: 2,
        venue: {
          name: 'some place',
          country: 'Colombia',
          country: 'Bogotá',
          datetime: '07-08-2017'
        }
      }
    ]};

    const component = shallow(<Events {...props}/>);
    expect(component.find('.card--event').length).toEqual(2);
  })

  it('should render loading', () => {
    const props = {items: [], loading: true};
    const component = shallow(<Events {...props}/>);
    expect(component.render().find('.section__loading').length).toEqual(1);
  })

  it('should render fail', () => {
    const props = {items: [], fail: true};
    const component = shallow(<Events {...props}/>);
    expect(component.render().find('.section__fail').length).toEqual(1);
  })
});
