/**
 * WalletProvider
 * @license MIT
 * @author https://github.com/libertypie
 */
import { providers } from "ethers";
import Web3Standard from "./Web3Standard";
import Provider from "../interface/Provider";
import Exception from "../classes/Exception";

const win = window as any;
class EthereumProvider extends Web3Standard implements Provider {
  async _initialize(providerInfo: any) {
    let provider = new providers.Web3Provider(
      win.ethereum || win.web3.currentProvider
    );
    if (!provider) {
      this._onConnectCallback(
        new Exception("web3_wallet_not_found", "Web3 Wallet was not found")
      );
    }

    this.setProvider(provider);
  }
}

export default EthereumProvider;
