import React from "react";
import getWeb3 from "@drizzle-utils/get-web3";
import createDrizzleUtils from "@drizzle-utils/core";
import artifact from "../../build/contracts/counter.json";

export default class extends React.Component {
  state = {
    count: null,
    instance: null,
    drizzleUtils: null,
    contractState: null,
  };

  componentDidMount = async () => {
    const web3 = await getWeb3();
    const drizzleUtils = await createDrizzleUtils({ web3 });
    const instance = await drizzleUtils.getContractInstance({ artifact });

    this.setState({ drizzleUtils, instance });

    // 1. new block stream
    // drizzleUtils.newBlock$.subscribe(console.log);

    // 2. contract call stream
    // const getCount$ = await drizzleUtils.createContractCall$({
    //   methodCall: instance.methods.getCount(),
    // });

    // 3. event stream
    // const event$ = await drizzleUtils.createContractEvent$({ instance });

    // 4. contract state stream
    // const state$ = await drizzleUtils.createContractState$({ artifact });
  };

  increment = async () => {
    const { drizzleUtils, instance } = this.state;
    const accounts = await drizzleUtils.getAccounts();

    await instance.methods.increment().send({ from: accounts[0] });
  };

  render() {
    return (
      <>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <pre>{this.state.contractState}</pre>
      </>
    );
  }
}
