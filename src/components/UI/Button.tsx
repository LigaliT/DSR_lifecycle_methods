import React from "react";
import styled, { css } from "styled-components";
import { IPropsButton } from "../../types/Interfaces";

const ButtonStyled = styled.button`
  margin: 5px;
  padding: 5px 15px;
  color: teal;
  font-size: 14px;
  font-weight: bold;
  background: transparent;
  border: ${(props: { primary: boolean }) =>
    props.primary ? css`1px solid teal` : css`1px solid red`};
  cursor: pointer;
`;

class Button extends React.Component<IPropsButton> {
  render() {
    return <ButtonStyled {...this.props}>{this.props.children}</ButtonStyled>;
  }
}

export default Button;
