import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";
import { PriceIndex } from "../utils/enums";

export interface IStateApp {
  coins: ICoin[];
  input: string;
  error: string;
}

interface ICoin {
  name: string;
  price: {
    USD: number;
  };
  priceIndex: PriceIndex;
}

export interface IPropsCoinForm {
  input: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: {
    target: HTMLInputElement[];
    preventDefault: () => void;
  }) => Promise<any>;
}

export interface IPropsCoins {
  coins: ICoin[];
  handleRemoveCoin: (name: string) => void;
}

export interface IPropsCoin {
  name: string;
  price: string | number;
  priceIndex?: PriceIndex;
  handleRemoveCoin?: (name: string) => void;
}

export interface IPropsInput extends InputHTMLAttributes<HTMLInputElement> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface IPropsButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  onClick?: () => void;
}
