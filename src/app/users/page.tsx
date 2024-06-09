import React from 'react';

interface User {
  id: number;
  name: string;
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
      <ul>
        {users.map(user => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </>
  );
};

export default UsersPage;
