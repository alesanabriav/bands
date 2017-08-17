import React, { Component } from 'react';
import { debounce } from 'lodash';
import { connect } from 'react-redux';

class Search extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);

    this.state = {
      query: ''
    }
  }

  handleChange(e) {
    this.setState({query: e.target.value});
  }

  handleSearch(e) {
    if(e) e.preventDefault();
    const { query } = this.state;
    this.props.onChange(query);
  }

  render() {
    return (
      <form className="search" onSubmit={this.handleSearch}>
        <input
          type="text"
          placeholder="Search band"
          onChange={this.handleChange}
          value={this.state.query}
          className="form-control search__input"
        />
      </form>
    )
  }
}

export default Search;
