import Web3 from "web3";

async function useBuyContract(account, contract) {
  // console.log(account);
  try {
    const result = await contract.methods.buy(productId).send({
      value: Web3.utils.toWei(product["_value"], "ether"),
      from: account,
    });

    return true;
  } catch (err) {
    return false;
  }
}
export default useBuyContract;
