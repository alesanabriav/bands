import React, { Component } from 'react';

class Events extends Component {

  render() {
    const { events } = this.props;

    return (
      <section>
        <h4 className="section__title">Events</h4>
        <div className="row">
          {events.map(event =>
            <div className="col-lg-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{event.venue.name}</h5>
                  <h6 className="card-subtitle text-muted">{event.datetime}</h6>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">  {event.venue.city}</li>
                  <li className="list-group-item">{event.venue.country}</li>
                </ul>
                <div className="card-body">
                   <a href={event.url} target="new" className="btn btn-primary">Get tickets</a>
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
