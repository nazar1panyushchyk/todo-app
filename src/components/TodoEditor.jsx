import { Component } from "react";

export default class TodoEditor extends Component {
  state = {
    textValue: "",
  };
  handleChange = (e) => {
    this.setState({ textValue: e.target.value });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { textValue } = this.state;
    console.log(textValue);
    this.props.onSubmit(textValue);
    this.setState({ textValue: ""});
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.textValue}
          required
        />
        <button>Додати</button>
      </form>
    );
  }
}
