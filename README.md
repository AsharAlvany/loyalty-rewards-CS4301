# loyalty-rewards-CS4301

## How to Compile

1. Install/clone the project
2. Open in VSCode
3. (Make sure to have node.js installed)
4. Open your VSCode terminal into the root of the folder
5. Run `npm install --force`
6. Do into the react directory `cd react` and install those npm modules `npm install`
7. Go back to the root directory `cd ..`
8. Move on to "How to Use"

---

## How to Use

1. Start Blockchain with
`npx hardhat node`
2. Open a new terminal and deploy the smart contract to the blockchain using
`npx hardhat run --network localhost scripts/deploy.js`
3. Step 2 will output the address of the deployed Smart Contract, make sure `node/server.js` has the same address in line 11
4. Run the backend service with
`node node/server.js`
5. In a new terminal begin the front-end react environment in the `react` folder within the using
`npm start` 
6. Navigate to `http://localhost:3000` and interact with the front-end

---

## Known Bugs

- Don't redeem points a user does not have, please (fix: soon)
- Don't create a user that already exists (fix: soon?)
- The FE is ugly (fix: no, you 🙃)

---

## TODO

- [X] Setup Blockchain Environment (Hardhat)
- [X] Design Smart Contract Structure (Solidity)
- [X] Create API for Smart Contract Transactions (Ether.js)
- [X] Create API endpoints for Front-End to Utilize (Node.js)
- [X] Create Front-End to use API (React)
- [X] Connect Front-End and Backend (API)

---

## Platforms and Technologies
| Platform | Usage |
| --- | --- |
| Hardhat | Ethereum Development Environment |
| Etherjs | Ethereum Blockchain Development |
| Nodejs | API Development (FE -> Blockchain Comms) |
| Solidity | Smart Contract Programming Language |
| React | Framework for Front-End Design |

---

## Use Cases

#### Register User
- Actor: Admin
1. Admin selects the option to register a user
2. System creates a user (assign the user's name or credentials to a uid)
3. System notifies the actor that the user has been created

#### View Loyalty Points
- Actor: Admin 
- Prerequisite: The user must have an existing profile
1. Admin selects a user's profile
2. System shows the admin the user's loyalty points

#### Add Loyalty Points
- Actor: Admin
- Prerequisite: View Loyalty Points
1. Admin selects the option to add points to the selected user
2. Admin enters the number of loyalty points to add to the user
3. System shows the admin the number of remaining points

#### Redeem Loyalty Points
- Actor: Admin
- Prerequisite: View Loyalty Points
1. Admin selects the option to redeem loyalty points
2. Admin enters the number of points to redeem
3. Fork
    a. Success: the points are removed from the user's profile, and a success message is shown
    b. Failure: the points are not able to be removed from the user's profile, and a failure message is shown

---

## Functional Requirements

- The system must allow admins to create new users
- The system must allow admins to update (increment/decrement) users points