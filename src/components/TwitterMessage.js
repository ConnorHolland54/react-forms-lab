import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ''
    };
  }

  handleCharLength = (event) => {
    this.setState({
      message: event.target.value
    })
  }


  render() {
    let charNumber = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={event => this.handleCharLength(event)} type="text" name="message" id="message" value={this.state.message} />
        <label>{charNumber}</label>
      </div>
    );
  }
}

export default TwitterMessage;
