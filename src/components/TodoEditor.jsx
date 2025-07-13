import { Component } from "react";
import styled from "styled-components";

const AddButton = styled.button`
  background-color: #657a00;
  border: solid 2px black;
`;
const AddInput = styled.input`
  width: 300px;
  height: 35px;
  border-radius: 50px;
  border: solid 2px black;
`;
const FormAdd = styled.form`
  display: flex;
  justify-content: space-around;
`;

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
      <FormAdd onSubmit={this.handleSubmit}>
        <AddInput
          type="text"
          onChange={this.handleChange}
          value={this.state.textValue}
          required
        />
        <AddButton>Додати</AddButton>
      </FormAdd>
    );
  }
}
