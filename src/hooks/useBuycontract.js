import Web3 from "web3";

function useBuycontract() {
  async function buy(account, contract, product,id) {
    try {
      const result = await contract.methods.buy(id).send({
        value: Web3.utils.toWei(product["_value"], "ether"),
        from: account,
      });
      return result;
    } catch (err) {
      return err;
    }
  }

  return { buy };
}
export default useBuycontract;
