const Counter = artifacts.require("./Counter.sol");

contract("Counter", accounts => {
  it("...should increment.", async () => {
    const counter = await Counter.deployed();

    // get count, increment, then get new count value
    const beforeCount = await counter.getCount.call();
    await counter.increment({ from: accounts[0] });
    const afterCount = await counter.getCount.call();

    assert.equal(beforeCount, 0, "The count before was not 0");
    assert.equal(afterCount, 1, "The count after was not 1");
  });
});
