import React, { Component } from 'react';
import { debounce } from 'lodash';
import { connect } from 'react-redux';

class Search extends Component {
  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
    this.state = {
      query: ''
    }

  }

  onSearch(e) {
    this.setState({query: e.target.value});
    clearTimeout(this.t);

    this.t = setTimeout(() => {
      const { query } = this.state;
      this.props.onChange(query);
    }, 300)
  }


  render() {
    return (
      <form className="search">
        <input
          type="text"
          placeholder="Search band"
          onChange={this.onSearch}
          value={this.state.query}
          className="form-control search__input"
        />
      </form>
    )
  }
}

export default Search;
