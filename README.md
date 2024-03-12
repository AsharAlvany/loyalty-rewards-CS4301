# loyalty-rewards-CS4301

## TODO

- [X] Setup Blockchain Environment (Hardhat)
- [X] Design Smart Contract Structure (Solidity)
- [ ] Create API for Smart Contract Transactions (Ether.js)
- [ ] Create Front-End to use API (React)

---

## Platforms and Technologies
| Platform | Usage |
| --- | --- |
| Hardhat | Ethereum Development Environment |
| Etherjs | Ethereum Blockchain Development |
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
- The system must allow admins to update (increment/decrement) users