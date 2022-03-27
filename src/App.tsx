import React from "react";
import "./styles.css";
import CoinForm from "./components/Screen/CoinForm";
import Coins from "./components/Screen/Coins";
import { PriceIndex } from "./utils/enums";
import { url } from "./utils/url";
import { IStateApp } from "./types/Interfaces";

class App extends React.Component<{}, IStateApp> {
  private interval: any;
  constructor(props = {}) {
    super(props);
    this.state = {
      coins: [
        { name: "DOGE", price: { USD: 0 }, priceIndex: PriceIndex.NO_PRICE }
      ],
      input: "",
      error: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemoveCoin = this.handleRemoveCoin.bind(this);
  }
  async componentDidMount() {
    this.interval = setInterval(() => this.fetchCoins(), 5000);
  }

  async fetchCoins() {
    try {
      const coins = await Promise.all(
        this.state.coins.map(async (coin) => {
          const res = await fetch(url(coin.name));
          const price = await res.json();
          const coinIndex =
            coin.price?.USD === price.USD
              ? PriceIndex.NO_PRICE
              : coin.price?.USD < price.USD
              ? PriceIndex.PRICE_UP
              : PriceIndex.PRICE_DOWN;
          return { ...coin, price: price, priceIndex: coinIndex };
        })
      );
      this.setState({
        ...this.state,
        coins
      });
    } catch (e) {
      console.log(e);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({
      input: e.target.value
    });
  }

  handleRemoveCoin(name: string): void {
    let coins = [...this.state.coins];
    let filteredCoins = coins.filter((c) => c.name !== name);
    this.setState({
      ...this.state,
      coins: filteredCoins
    });
  }

  async handleSubmit(e: {
    target: HTMLInputElement[];
    preventDefault: () => void;
  }): Promise<any> {
    e.preventDefault();
    const coinName = (e.target[0] as HTMLInputElement).value.toUpperCase();
    const res = await fetch(url(coinName));
    const json = await res.json();
    const coins = [...this.state.coins];
    const isIncludes = coins.some((c) => c.name === coinName);
    if (json.Response !== "Error" && !isIncludes) {
      this.setState({
        coins: [
          ...coins,
          { name: coinName, price: json, priceIndex: PriceIndex.NO_PRICE }
        ],
        input: "",
        error: ""
      });
    } else {
      this.setState({
        ...this.state,
        input: "",
        error: json.Message || "Already exist"
      });
    }
  }

  render() {
    return (
      <div className="App">
        <CoinForm
          input={this.state.input}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <div style={{ color: "red" }}>{this.state.error}</div>
        <Coins
          coins={this.state.coins}
          handleRemoveCoin={this.handleRemoveCoin}
        />
      </div>
    );
  }
}

export default App;
