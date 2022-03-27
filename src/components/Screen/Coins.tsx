import React from "react";
import styled from "styled-components";
import Coin from "../UI/Coin";
import { IPropsCoins } from "../../types/Interfaces";

const CoinsStyled = styled.div`
  border: 1px solid teal;
  height: 100vh;
`;

class Coins extends React.Component<IPropsCoins> {
  render() {
    return (
      <CoinsStyled>
        <Coin name={"Coin"} price={"Price"} />
        {this.props.coins.map((c) => (
          <Coin
            key={c.name}
            name={c.name}
            price={c.price?.USD}
            priceIndex={c.priceIndex}
            handleRemoveCoin={this.props.handleRemoveCoin}
          />
        ))}
      </CoinsStyled>
    );
  }
}

export default Coins;
