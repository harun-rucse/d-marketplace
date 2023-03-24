import Web3 from "web3";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "../contract";
function useContract() {
  const web3 = new Web3(window.ethereum);
  const contract = new web3.eth.Contract(CONTRACT_ABI, CONTRACT_ADDRESS);
  return { contract };
}

export default useContract;
