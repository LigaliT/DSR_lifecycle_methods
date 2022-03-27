import React from "react";
import styled from "styled-components";
import { css, keyframes } from "styled-components";
import { IPropsCoin } from "../../types/Interfaces";
import { PriceIndex } from "../../utils/enums";
import Button from "./Button";

const up = keyframes`
  from {
    background-color: green;
  }

  to {
    background-color: white;
  }
`;

const down = keyframes`
  from {
    background-color: red;
  }

  to {
    background-color: white;
  }
`;

const stateToAnimation = {
  0: "none",
  1: up,
  2: down
};

const CoinStyled = styled.div`
  display: flex;
  border-bottom: 1px solid teal;
  height: 5vh;
`;

const CoinItemStyled = styled.div`
  flex-basis: 100%;
  display: inherit;
  align-items: center;
  justify-content: center;
  animation: ${(props: { priceIndex: PriceIndex }) =>
    props.priceIndex
      ? css`
          ${stateToAnimation[props.priceIndex]} 1s linear 1
        `
      : `none`};
`;

class Coin extends React.Component<IPropsCoin> {
  render() {
    return (
      <CoinStyled>
        <CoinItemStyled>{this.props.name}</CoinItemStyled>
        <CoinItemStyled priceIndex={this.props.priceIndex}>
          {this.props.price} $
        </CoinItemStyled>
        {!this.props.handleRemoveCoin && <CoinItemStyled />}
        {this.props.handleRemoveCoin && (
          <CoinItemStyled>
            <Button
              onClick={() => this.props.handleRemoveCoin?.(this.props.name)}
            >
              Remove Coin
            </Button>
          </CoinItemStyled>
        )}
      </CoinStyled>
    );
  }
}

export default Coin;
