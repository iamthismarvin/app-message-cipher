import React, { Component } from "react";
import "./App.css";
import Encryption from "./components/Encryption";
import Decryption from "./components/Decryption";

class App extends Component {
  // getMessage = message => {
  //   console.log(message);
  // };
  // getPassword = password => {
  //   console.log(password);
  // };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>message-cipher-react</h1>
          <div className="App-boxes">
            <div className="App-box">
              <Encryption
              // sendMessage={this.getMessage}
              // sendPassword={this.getPassword}
              />
            </div>

            <div className="App-box">
              <Decryption />
            </div>
          </div>
        </header>
        <p>
          by{" "}
          <a
            href="https://github.com/iamthismarvin"
            target="_blank"
            rel="noopener noreferrer"
          >
            @iamthismarvin
          </a>
        </p>
      </div>
    );
  }
}

export default App;
