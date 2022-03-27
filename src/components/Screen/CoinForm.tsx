import React from "react";
import Button from "../UI/Button";
import Input from "../UI/Input";
import styled from "styled-components";
import { IPropsCoinForm } from "../../types/Interfaces";

const MyForm = styled.form`
  display: flex;
  justify-content: space-between;
`;

class CoinForm extends React.Component<IPropsCoinForm> {
  shouldComponentUpdate(nextProps: IPropsCoinForm): boolean {
    if (this.props.input !== nextProps.input) return true;
    return false;
  }
  render() {
    return (
      <MyForm onSubmit={this.props.handleSubmit}>
        <Input
          value={this.props.input}
          onChange={this.props.handleChange}
          type="text"
          placeholder="Enter coin name"
        />
        <Button disabled={!(this.props.input.length > 0)} primary type="submit">
          Add Coin
        </Button>
      </MyForm>
    );
  }
}

export default CoinForm;
