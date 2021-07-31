import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  //console.log(Web3.providers);
  const provider = new Web3.providers.HttpProvider(
    "https://rinkeby.infura.io/v3/e693dfb0649a40fcb28d5600014560e8"
  );
  web3 = new Web3(provider);
}

export default web3;
