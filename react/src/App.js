import React, { useState } from 'react';

const UserPointsPage = () => {
  // Sample user data
  const initialUsers = [
    { id: 1, name: 'John', points: 100 },
    { id: 2, name: 'Jane', points: 150 },
    { id: 3, name: 'Doe', points: 200 },
  ];

  const [users, setUsers] = useState(initialUsers);

  const handleRedeemPoints = (userId, pointsToRedeem) => {
    const updatedUsers = users.map(user => {
      if (user.id === userId) {
        return { ...user, points: user.points - pointsToRedeem };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  const handleAwardPoints = (userId, pointsToAward) => {
    const updatedUsers = users.map(user => {
      if (user.id === userId) {
        return { ...user, points: user.points + pointsToAward };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  return (
    <div>
      <h1>User Points</h1>
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
