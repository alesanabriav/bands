import React from 'react';
import Head from 'next/head';

export default (props) => (
  <div>
    <Head>
      <title>My Band</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"/>
      <link href="https://fonts.googleapis.com/css?family=Cabin|Roboto:400,700|Roboto+Condensed:400,700" rel="stylesheet"/>
      <link rel="stylesheet" href="/static/css/app.css"/>
    </Head>
    <div className="app container">
      {props.children}
    </div>
  </div>
)
