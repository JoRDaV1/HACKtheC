// SPDX-License-Identifier: UNLISENCED
pragma solidity ^0.8.0;

error ManualContract__ContractAlreadyExist();

contract ManualContract {

    struct s_smartContract {
        string s_contractName;
        string s_contractID;
        address s_contractAddress;
        bool s_solved;
    }
    
    string[] public arrayID;
    mapping (string => bool) contractIDbool;
    mapping(string => s_smartContract) s_IdToSmartContract;
    mapping(address => string[]) s_companyAddressToContractID;
    mapping(string => string[]) s_contractIDtoPOC;

    event Registration(address indexed customer);

    function registration(string memory contractName,
        string memory contractID,
        address contractAddress
        ) public payable {

        if(contractIDbool[contractID]) {
            revert ManualContract__ContractAlreadyExist();
        }
            
        s_smartContract memory smartContract = s_smartContract(contractName,contractID,contractAddress,false);

        s_companyAddressToContractID[msg.sender].push(contractID);
        arrayID.push(contractID);
        contractIDbool[contractID] = true;
        s_IdToSmartContract[contractID] = smartContract;   
        emit Registration(msg.sender);      
    }

    function submitPOC(string memory contractID,string memory poc) public payable {
        s_contractIDtoPOC[contractID].push(poc);
    }

    function getArraySize() public view returns(uint256) {
        return arrayID.length;
    }

    function getContract(string memory contractID) public view returns(s_smartContract memory){
        return s_IdToSmartContract[contractID];
    }

    function getContractIds(address add) public view returns(string[] memory) {
        return s_companyAddressToContractID[add];
    }

    function getPOC(string memory contractID) public view returns(string[] memory) {
        return s_contractIDtoPOC[contractID];
    }
}