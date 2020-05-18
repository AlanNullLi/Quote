import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

  //A new and simpler way to write state is simply
  //state = {quote: null}, without constructor / super props
  //both are acceptable
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: null
    }
  }

   //Love the implementation of axios.
  getQuote = () => {
    axios
      .get("http://quotes.stormconsultancy.co.uk/random.json")
      .then(response => {
        this.setState({
          quote: response.data
        })
      //Never leave comments or console.logs in your final code
        console.log(response.data.quote);
      })
  }

  changeQuote = (str) => {
    /*Because you don't use prevState in this.setState function,
    you can remove this as an argument and simply use ().
    You might already know this but just so it's top of mind, I commonly
    use prevState if I have a true / false attribute in this.setState
    and I want to just say the opposite of the current state. If I had showQuote: true
    in this.state and I want to change this to false, the preferred method of doing this
    is showQuote: !prevState.showQuote. We use prevState instead of simple !this.state.showQuote
    in the event state is being updated at the same time we're changing or updating
    the state and these actions don't happen in the order we would like. Lmk if 
    this isn't clear. */
    this.setState(prevState => {
      return { quote: str };
    });
  };

  render() {
        /*The organization of this file is great.
    I like that you placed your functions before the render and variables that 
    control what appears on our user interface after render and before return. */
    let q = "Click the button for a quote!"
    let start = <button onClick={() => this.getQuote()}>Get Quote!</button>
    if (this.state.quote) {
      start = <button onClick={() => this.getQuote()}>Get New Quote!</button>
      q = this.state.quote.quote
    }

    return (
      <div>
        {/* I have my preferences set to format on cmd S for saving. That will autoformat your doc */}
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
