import React from 'react';

class Quote extends React.Component {
  render() {
    return <blockquote>
      <p>{this.props.quote}</p>
      <small>{this.props.author} in <cite title="{this.props.source}">{this.props.source}</cite></small>
    </blockquote>;
  }
}

class Quotes extends React.Component {
  render() {
    var quotes = [];
    for(let quote of this.props.quotes) {
      quotes.push(<Quote key={quote.quote} quote={quote.quote} author={quote.author} source={quote.source} />);
    }
    return <div>
        <h2>Quotes</h2>
        {quotes}
      </div>;
  }
}

export default Quotes;