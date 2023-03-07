// SPDX-License-Identifier: UNLISENCED
pragma solidity ^0.8.0;

error Transaction_failed();
contract BountyContract {
    mapping(address => uint256) addressTOAmount;

    function getMoney() public payable {
        (bool success,) = msg.sender.call{value: address(this).balance}("");
        if(!success)
            revert Transaction_failed();
    }

    function sendMoney() public payable {
        addressTOAmount[msg.sender] += msg.value; 
    }
}
