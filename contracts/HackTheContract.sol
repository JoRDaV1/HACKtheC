// SPDX-License-Identifier: UNLISENCED
pragma solidity ^0.8.0;

error HackTheContract__TransactionFailed();
error HackTheContract__ContractAlreadyExist();

contract HackTheContract {

    struct s_smartContract {
        string s_contractName;
        string s_contractID;
        address s_contractAddress;
        uint256 s_initialBalance;
        uint256 s_bounty;
        bool s_solved;
    }
    
    address immutable i_owner;
    string[] public arrayID;
    mapping (string => bool) contractIDbool;
    mapping(string => s_smartContract) s_IdToSmartContract;

    event Registration(address indexed customer);
    event bountyAwarded(address indexed winner);

    constructor() {
        i_owner = msg.sender;
    }

    modifier onlyowner() {
        require(msg.sender == i_owner, "You are not allowed to call this function");
        _;
    }

    function registration(string memory contractName,
        string memory contractID,
        address contractAddress,
        uint256 initialBalance
        ) public payable {

        if(contractIDbool[contractID]) {
            revert HackTheContract__ContractAlreadyExist();
        }
            
        uint256 bounty = msg.value;
        s_smartContract memory smartContract = s_smartContract(contractName,contractID,contractAddress,initialBalance,bounty,false);

        arrayID.push(contractID);
        contractIDbool[contractID] = true;
        s_IdToSmartContract[contractID] = smartContract;   
        emit Registration(msg.sender);      
    }

    function awardBounty(string memory contractID,address payable winner) public onlyowner{
        uint256 bounty = s_IdToSmartContract[contractID].s_bounty;
        (bool success,) = winner.call{value:bounty}("");

        if(!success) {
            revert HackTheContract__TransactionFailed();
        }
        else {
            s_IdToSmartContract[contractID].s_solved = true;
            s_IdToSmartContract[contractID].s_bounty = 0;
            emit bountyAwarded(winner);
        }
    }

    function getArraySize() public view returns(uint256) {
        return arrayID.length;
    }

    function getContract(string memory contractID) public view returns(s_smartContract memory){
        return s_IdToSmartContract[contractID];
    }
}