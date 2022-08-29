import ReactDOM from "react-dom";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import Connector from "./Connectors";

const getLibrary = (provider) => new Web3Provider(provider);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Web3ReactProvider getLibrary={getLibrary}>
    <Connector />
  </Web3ReactProvider>,
  rootElement
);
