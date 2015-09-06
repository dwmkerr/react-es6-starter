import React from 'react';
import Quotes from './quotes';

//  The quotes we'll show on the home page.
var quotes = [
  {
    quote: "Live long and prosper",
    author: "Mr Spock",
    source: "Star Trek"
  },
  {
    quote: "Five - and that's my final offer... Four",
    author: "Zapp Brannigan",
    source: "Futurama"
  }
]

//  The home component, renders a title and some quotes.
class Home extends React.Component {
  render () {
    return <div>
        <h1>React Redux Starter</h1>
        <p>Welcome to the React Redux Starter home page!</p>
        <Quotes quotes={quotes} />
        </div>;
  }
}

export default Home;