// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;
// Define the CryptoPoints token
contract CryptoPoints {
    // Define total token supply
    uint public totalSupply;
    // Mapping to store user balances
    mapping(string => uint) public balances;

    // Function to award points (remember to implement logic for earning points)
    function awardPoints(string calldata recipient, uint amount) public {
        balances[recipient] += amount;
        totalSupply += amount;
    }

    // Function to redeem points (implement logic for spending points)
    function redeemPoints(string calldata recipient, uint amount) public {
        require(balances[recipient] >= amount, "Insufficient points");
        balances[recipient] -= amount;
    // Logic for what happens with redeemed points
    }
    // This function needs to run until an address that does not exist yet is returned
}