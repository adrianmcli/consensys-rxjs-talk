pragma solidity ^0.5.0;

contract Counter {
    uint count = 0;
    event Update(uint count);

    function increment() public {
        count = count + 1;
        emit Update(count);
    }

    function getCount() public view returns (uint) {
        return count;
    }
}
