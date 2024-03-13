// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

import "hardhat/console.sol";
// Define the CryptoPoints token
contract CryptoPoints {
    // Define total token supply
    string[] public recipientNames;

    uint public totalSupply;
    // Mapping to store user balances
    mapping(string => uint) public balances;

    // Function to award points (remember to implement logic for earning points)

    event pointChange(string recipient, uint amount);

    function awardPoints(string calldata recipient, uint amount) public {
        for (uint i = 0; i < recipientNames.length; i++){
            if(keccak256(bytes(recipientNames[i])) == keccak256(bytes(recipient))){
                balances[recipient] += amount;
                totalSupply += amount;
                emit pointChange(recipient, balances[recipient]);
                return;
            }
        }
        revert("User must have opened an account first!");
    }

    // Function to redeem points (implement logic for spending points)
    function redeemPoints(string calldata recipient, uint amount) public {
        for (uint i = 0; i < recipientNames.length; i++){
            if(keccak256(bytes(recipientNames[i])) == keccak256(bytes(recipient))){
                require(balances[recipient] >= amount, "Insufficient points");
                balances[recipient] -= amount;
                totalSupply -= amount;
                emit pointChange(recipient, balances[recipient]);
                return;
            }
        }
        revert("User must have opened an account first!");
    }
    // Create a function to create a new user
    function createUser(string calldata recipient) public {
        for (uint i = 0; i < recipientNames.length; i++){
            if(keccak256(bytes(recipientNames[i])) == keccak256(bytes(recipient))){
                emit pointChange(recipient, balances[recipient]);
                revert("User already exists!");
            }
        }
        recipientNames.push(recipient);
        emit pointChange(recipient, balances[recipient]);
    }

    function getPoints(string calldata recipient) view public returns (uint amount) {
        for (uint i = 0; i < recipientNames.length; i++){
            if(keccak256(bytes(recipientNames[i])) == keccak256(bytes(recipient))){
                amount = balances[recipient];
                console.log("%s has %s points", recipient, amount);
                return amount;
            }
        }
        revert("User must have opened an account first!");
    }

    function getUsers() view public returns (string[] memory users) {
        return recipientNames;
    }
}