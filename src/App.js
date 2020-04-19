import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: null
    }
  }

  getQuote = () => {
    axios
      .get("http://quotes.stormconsultancy.co.uk/random.json")
      .then(response => {
        this.setState({
          quote: response.data
        })
        console.log(response.data.quote);
      })
  }

  changeQuote = (str) => {
    this.setState(prevState => {
      return { quote: str };
    });
  };

  render() {
    let q = "Click the button for a quote!"
    let start = <button onClick={() => this.getQuote()}>Get Quote!</button>
    if (this.state.quote) {
      start = <button onClick={() => this.getQuote()}>Get New Quote!</button>
      q = this.state.quote.quote
    }

    return (
      <div>

        <div>
          {start}
        </div>
        <div className="quote">
          <h3>{q}</h3>
        </div>

      </div>
    )

  }


}

export default App;
