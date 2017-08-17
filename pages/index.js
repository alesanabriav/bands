import React, { Component } from 'react';
import withRedux from "next-redux-wrapper";
import Layout from '../components/layout';
import Band from '../components/band';
import store from '../store';

class Index extends Component {

  render() {
    return (
      <div>
        <Layout>
          <h1 className="app__title">My Band</h1>
          <Band />
        </Layout>
      </div>
    )
  }
}

export default withRedux(store, state => state)(Index);
