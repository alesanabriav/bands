import React from 'react';
import Head from 'next/head';

export default (props) => (
  <div>
    <Head>
      <title>My band info</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="/static/css/app.css"/>
    </Head>
    <div className="app container">
      {props.children}
    </div>
  </div>
)
