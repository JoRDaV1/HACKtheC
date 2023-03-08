import { ethers } from "ethers";
import { ContractAddress, abi } from "./constants";

function App() {
  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      console.log("metamask");
      await window.ethereum.request({ method: "eth_requestAccounts" });
    } else alert("Install metamask");
  }

  async function register() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(ContractAddress, abi, signer);

    console.log(contract);
    var contractName = "abc";
    var contractID = "adsd443232352";
    var contractAddress = "0xEbfbeb160bcc8637248EBD378feCF1cd94058405";
    var initialBalance = "1000";
    var bounty = "0.1";

    try {
      const transactionResponse = await contract.registration(
        contractName,
        contractID,
        contractAddress,
        initialBalance,
        { value: ethers.utils.parseEther(bounty) }
      );
      await listenForTransactionMine(transactionResponse, provider);
    } catch (error) {
      console.log(error);
    }
  }

  async function Bounty(contractID, winner) {
    const provider = new ethers.providers.JsonRpcProvider(
      "https://rpc.ankr.com/fantom_testnet"
    );

    const signer = new ethers.Wallet(
      "your_private_key",
      provider
    );
    const contract = new ethers.Contract(ContractAddress, abi, signer);

    // var contractID = "adsd4432323";
    // var winner = "0xbE5C450ae99cD36D118822295c051C650FBbb7c8"

    try {
      const transactionResponse = await contract.awardBounty(
        contractID,
        winner
      );
      await listenForTransactionMine(transactionResponse, provider);
    } catch (error) {
      console.log(error);
    }
  }

  async function verify() {
    // h--> hacker  s--> smart contract
    var h_address = "0x4809d60B1062873C7f02A4983361cCcAb1d6c9f7";
    var s_address = "0xbE5C450ae99cD36D118822295c051C650FBbb7c8";
    var ini_balance = "1000";

    const res1 = await fetch(
      `https://hyperspace.filfox.info/api/v1/address/${h_address}/transfers?pageSize=1&page=0`
    );
    const data1 = await res1.json();

    console.log("first data", data1);
    const from = data1.transfers[0].from;
    const to = data1.transfers[0].to;
    const value = data1.transfers[0].value;

    const res2 = await fetch(
      `https://hyperspace.filfox.info/api/v1/address/${from}`
    );
    const res3 = await fetch(
      `https://hyperspace.filfox.info/api/v1/address/${to}`
    );
    const data2 = await res2.json();
    const data3 = await res3.json();
    const n_from = data2.ethAddress;
    const n_to = data3.ethAddress;
    console.log(value);
    console.log(
      n_from === s_address && n_to === h_address && value === ini_balance
    );
    if (n_from === s_address && n_to === h_address && value === ini_balance)
      Bounty("adsd4432323", h_address);
    return n_from === s_address && n_to === h_address && value === ini_balance;
  }

  async function retrieveContracts() {
    const provider = new ethers.providers.JsonRpcProvider(
      "https://rpc.ankr.com/fantom_testnet"
    );
    const contract = new ethers.Contract(ContractAddress, abi, provider);
    const size = await contract.getArraySize();
    console.log(size);

    for (var i = 0; i < size; i++) {
      const contractID = await contract.arrayID(i);
      console.log(contractID);
      const contractDetails = await contract.getContract(contractID);
      console.log(contractDetails);
    }
  }

  function listenForTransactionMine(transactionResponse, provider) {
    console.log(`Mining ${transactionResponse.hash}`);

    return new Promise((resolve, revert) => {
      try {
        provider.once(transactionResponse.hash, (transactionReciept) => {
          console.log(`Done`);
        });
        resolve();
      } catch (error) {
        console.log(error);
      }
    });
  }

  return (
    <div>
      <button onClick={connect}>Connect</button>
      <button onClick={register}>register</button>
      <button onClick={Bounty}>Bounty</button>
      <button onClick={verify}>Submit</button>
      <button onClick={retrieveContracts}>Contracts</button>
    </div>
  );
}

export default App;
