import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

const UsersPage = async () => {
  const usersApiResponse = await fetch(
    'https://jsonplaceholder.typicode.com/users',
    { cache: 'no-store' },
  );
  const users: User[] = await usersApiResponse.json();

  return (
    <>
      <h1>Users</h1>
      <p>{(new Date).toLocaleTimeString()}</p>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
        {users.map(user => {
          return <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>;
        })}
        </tbody>
      </table>
    </>
  );
};

export default UsersPage;
