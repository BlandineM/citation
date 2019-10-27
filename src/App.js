import React from "react";
import "./App.css";
import Citation from "./component/Citation";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: {}
    };
    this.getQuote = this.getQuote.bind(this);
    this.getQuote();
  }
  getQuote() {
    // Send the request
    axios
      .get("https://quests.wilders.dev/simpsons-quotes/quotes")
      // Extract the DATA from the received response
      .then(response => response.data)
      // Use this data to update the state
      .then(data => {
        this.setState({
          quotes: data[0]
        });
      });
  }
  render() {
    return (
      <div className="App">
        <Citation quotes={this.state.quotes} />
        <button type="button" onClick={this.getQuote}>
          New quotation
        </button>
      </div>
    );
  }
}

export default App;
