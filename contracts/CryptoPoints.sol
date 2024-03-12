// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;
// Define the CryptoPoints token
contract CryptoPoints {
    // Define total token supply
    string[] public recipientNames = new string[](10);

    uint public totalSupply;
    // Mapping to store user balances
    mapping(string => uint) public balances;

    // Function to award points (remember to implement logic for earning points)
    function awardPoints(string calldata recipient, uint amount) public {
        balances[recipient] += amount;
        totalSupply += amount;
        for (uint i = 0; i < recipientNames.length; i++){
            if(keccak256(bytes(recipientNames[i])) == keccak256(bytes(recipient))){
                return;
            }
        }
        recipientNames.push(recipient);
    }

    // Function to redeem points (implement logic for spending points)
    function redeemPoints(string calldata recipient, uint amount) public {
        for (uint i = 0; i < recipientNames.length; i++){
            if(keccak256(bytes(recipientNames[i])) == keccak256(bytes(recipient))){
                require(balances[recipient] >= amount, "Insufficient points");
                balances[recipient] -= amount;
                totalSupply -= amount;
                return;
            }
        }
        revert("User must have opened an account first!");
        
    // Logic for what happens with redeemed points
    }
    // This function needs to run until an address that does not exist yet is returned
}