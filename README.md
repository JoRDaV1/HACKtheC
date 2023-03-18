## Project Name - HACKtheC

##### Bug Bounty platform for smart contracts

### Project Details

The impact of blockchain technology on the world is widely acknowledged. Applications built on blockchain rely heavily on smart contracts, which contain vast amounts of valuable information and funds. If a hacker were to find a way to extract private data or funds from these contracts, it could have severe consequences. To address this issue, there is a need for a platform where organizations can upload their smart contracts and hackers can search for bugs in exchange for rewards.

This Project is mainly about hacking the contracts and claiming its ownership. our project mainly has 2 entities one is a company and other is a hacker. The company challenges the hackers by uploading their contract and some initial balance and some bounty in our application which we save their smart contract file in IPFS and we will store the mapping of the IPFS link with the company details in the smart contract. So whenever a hacker tries to make balance of smart contract zero we will ask to submit his wallet address address and we will verify the latest transaction of the smart contract and transfer the bounty if it is valid

# Project

# Overview

##### Members: 

```
Divanshu Prajapat
Kanakam Venkatam Vishnu Swaroop
Jay Patel
Rajat Singh
```
### What it does

Under our platform, organizations can register and provide their smart contracts and address of the smart contract( on testnet). They can indicate whether their smart contracts involve funds or not. If it does, and a hacker is able to transfer all the funds from the smart contract to their own account, they will be awarded a bounty. The organizations do not need to manually transfer the bounty, but instead set the bounty amount on the contract during registration. The bounty amount will be stored in the smart contract and will be automatically transferred to the hacker. The organizations can then address the bug through the submitted proof of concept and the hacker's wallet address history. If the smart contract deals with data, and a hacker discovers a bug, they can submit proof of concept and the organization will manually award the hacker after validating the bug.

### How we built it
We utilized React to construct the front-end of our website and have no back-end. Instead, our website is supported by two smart contracts that are decentralized, which enables us to classify it as a completely decentralized application. These smart contracts have been deployed on the Fantom testnet and organization's smart contracts is being saved on IPFS utilizing Web3.storage. Moreover, we used the FTMScan API to monitor transactions between the hacker and the organization's smart contract to confirm whether the hacker had successfully transferred funds to their account or not.

### Challenges we ran into
Our goal was to establish a process that would automatically confirm and reward a hacker upon transferring funds from a smart contract to their account. Although this was a demanding undertaking, we persisted with our research and discovered a solution. We utilized the FTMScan API to inspect the most recent transaction associated with the hacker's wallet address and validate whether the transfer of funds from the smart contract to the hacker's wallet had occurred. Once confirmed, we transferred the bounty to the hacker's account.

### Accomplishments that we're proud of
Developing a fully decentralized application using smart contracts and React, which required a deep understanding of emerging technologies and innovative approaches to software development.Successfully deploying smart contracts on the Fantom testnet and utilizing IPFS through Web3.storage to store organization's smart contract. Implementing a method for automatically verifying and transferring bounties to hackers who successfully transfer funds from a smart contract to their account FTMScan API. Building a website that is backed by smart contracts, which qualifies it as a completely decentralized application and represents a significant achievement in the field of blockchain technology.

### What's next for HackC
Our next plan is to enhance our user interface and introduce a leaderboard for hackers. Additionally, we aim to decentralize our verification function by moving it to the on-chain. At present, our system experiences delays when processing smart contracts, so we are seeking to optimize our code to resolve this issue.

### Built With
```
ether.js
fantom
ftmscanapi
ipfs
react
```





