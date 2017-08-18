import React, { Component } from 'react';
import dateFns from 'date-fns';
import Minigrid from 'minigrid';
import Loading from './loading';
import Fail from './fail';

class Events extends Component {

  componentDidMount() {
    this.grid = new Minigrid({
      container: '.items',
      item: '.item'
    });

    this.grid.mount();
  }

  render() {
    const { items, loading, fail } = this.props;

    return (
      <section className="section">
        <Loading loading={loading} />
        <Fail fail={fail} />
        <h4 className="section__title">{items.length > 0 ? 'Events' : ''}</h4>
        <div className="row items">
          {items.map(event =>
            <div key={event.id} className="col-lg-2 item">
              <div className="card card--event">
                <div className="card-body">
                  <h6 className="card-title">{event.venue.name}</h6>
                  <h6 className="card-subtitle">{dateFns.format(event.datetime, 'D MMMM YYYY')}</h6>
                  <p>
                    {event.venue.city}, {event.venue.country}
                  </p>

                  <a href={event.url} target="new" className="btn btn-light">Get tickets</a>
                </div>

              </div>
            </div>
          )}
        </div>
      </section>
    )
  }
}

export default Events;
