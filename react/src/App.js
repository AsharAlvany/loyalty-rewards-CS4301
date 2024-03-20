import React, { useState, useEffect } from 'react';

const UserPointsPage = () => {
  // Sample user data
  const initialUsers = [
    { id: 1, name: 'John', points: 100 },
    { id: 2, name: 'Jane', points: 150 },
    { id: 3, name: 'Doe', points: 200 },
  ];
  const [users, setUsers] = useState(initialUsers);
  const [reload, setReload] = useState(true);
  const [inputVal, setInputVal] = useState();

  function fetchUsers(){
    return new Promise((resolve, reject) =>{
      fetch(`http://localhost:3030/getUsers`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        resolve(data);
      })
      .catch((error)=>{
        console.log(error)
        reject(error)
      })
    })
  }

  function fetchPoint(user){
    return new Promise((resolve, reject) =>{
      fetch(`http://localhost:3030/getPoints/${user}`)
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) =>{
        console.log(error)
        reject(error)
      })
    })
  }

  async function fetchPoints(users){
    let pointDict = []
    await Promise.all(
      users.map(async (element) =>{
        let object = {}
        object["id"] = element;
        object["name"] = element;
        object["points"] = await fetchPoint(element);
        pointDict.push(object);
      })
    )
    console.log(pointDict)
    return pointDict;
  }

  useEffect(() => {
    fetchUsers().then((users) =>{
      return fetchPoints(users)
    })
    .then((points) =>{
      setUsers(points)
    })

  }, [reload])
  
  const handleRedeemPoints = (userId, pointsToRedeem) => {
    fetch(`http://localhost:3030/redeemPoints/${userId}/${pointsToRedeem}`)
    setTimeout(()=>{
      setReload(!reload)
    }, [500])
  };

  const handleAwardPoints = (userId, pointsToAward) => {
    fetch(`http://localhost:3030/awardPoints/${userId}/${pointsToAward}`)
    setTimeout(()=>{
      setReload(!reload)
    }, [500])
  };

  function handleKeyPress(e){
    if (e.code == "Enter"){
      fetch(`http://localhost:3030/createUser/${inputVal}`)
      .then(()=>{
        setInputVal("")
        setTimeout(()=>{
          setReload(!reload)
        }, [500])
      })
    }
  }
  
  return (
    <div>
      <h1>User Points</h1>
      <h2>Create User:</h2>
      <input type='text' value={inputVal} onChange={(e) => {setInputVal(e.target.value)}} onKeyDown={(e) => handleKeyPress(e)}></input>
      <br/>
      <br/>
      <br/>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Points</th>
            <th>Redeem Points</th>
            <th>Award Points</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.points}</td>
              <td>
                <button onClick={() => handleRedeemPoints(user.id, 10)}>Redeem 10 Points</button>
                {/* You can customize the points to redeem */}
              </td>
              <td>
                <button onClick={() => handleAwardPoints(user.id, 10)}>Award 10 Points</button>
                {/* You can customize the points to award */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserPointsPage;
