// SPDX-License-Identifier: UNLISENCED
pragma solidity ^0.8.0;

contract BountyContract {
    mapping(address => uint256) addressTOAmount;

    function getMoney() public payable {
        msg.sender.call{value: address(this).balance};
    }

    function sendMoney() public payable {
        addressTOAmount[msg.sender] += msg.value; 
    }
}

