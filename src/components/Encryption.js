import React, { Component } from "react";

export class Encryption extends Component {
  state = {
    message: "",
    password: ""
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    this.encryptMessage(this.state.message, this.state.password);
    // this.props.sendMessage(this.state.message);
    // this.props.sendPassword(this.state.password);
  };

  encryptMessage(message, password) {
    const messageArray = message.split("");
    const newMessageArray = [];
    messageArray.forEach(letter => {
      let newNumber = letter.charCodeAt() + parseInt(password);
      if (parseInt(password) < 0) {
        while (newNumber < 32) {
          newNumber += 95;
        }
      } else {
        while (newNumber > 126) {
          newNumber -= 95;
        }
      }
      newMessageArray.push(String.fromCharCode(newNumber));
    });
    const encryptedMessage = newMessageArray.join("");
    this.setState({
      message: encryptedMessage
    });
    console.log("Your encrypted message is: " + encryptedMessage);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Encrypt your message: </h4>
          <textarea
            type="text"
            name="message"
            placeholder="Input your message..."
            rows="2"
            cols="30"
            required
            value={this.state.message}
            onChange={this.handleChange}
          />
          <h4>Type in your password: </h4>
          <input
            type="number"
            name="password"
            placeholder="Input your password..."
            min="0"
            max="100000000"
            required
            value={this.state.password}
            onChange={this.handleChange}
          />
          <input type="submit" value="Encrypt" />
        </form>
      </div>
    );
  }
}

export default Encryption;
