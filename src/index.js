// import './index.css'
import React from 'react'
import { render } from 'react-dom'
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';
import App from './App'

// render(<App/>, document.querySelector('#app'))
// ReactDOM.
const client = new ApolloClient({
    networkInterface: createNetworkInterface({
      uri: 'https://api.graphcms.com/simple/v1/lunchapp',
    }),
});

render(
    <ApolloProvider client={client}>
      <App/>
    </ApolloProvider>,
    document.getElementById('app'),
);