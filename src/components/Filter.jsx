import React from "react";
import styled from "styled-components";

const FilterInput = styled.input`
  width: 300px;
  height: 35px;
  border-radius: 50px;
  border: solid 2px black;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 40px;
  
`;

export default class Filter extends React.Component {
  handleChange = (e) => {
    console.log("Hello from Filter");
    this.props.onFilterChange(e.target.value);
  };

  render() {
    return (
      <FilterContainer>
        <label>Filter:</label>
        <FilterInput
          type="text"
          id="filter"
          value={this.props.value}
          onChange={this.handleChange}
        />
      </FilterContainer>
    );
  }
}
