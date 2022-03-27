import React from "react";
import styled from "styled-components";
import { IPropsInput } from "../../types/Interfaces";

const InputStyled = styled.input`
  width: 100%;
  padding: 5px 15px;
  margin: 5px;
  border: 1px solid teal;
  font-size: 14px;
`;

class Input extends React.Component<IPropsInput> {
  render() {
    return <InputStyled {...this.props} />;
  }
}

export default Input;
