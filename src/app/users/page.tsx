import React from 'react';
import type { Metadata } from "next";
import styles from './UsersTable.module.scss';

interface User {
  id: number;
  name: string;
  email: string;
}


export const metadata: Metadata = {
  title: "Users",
};

export const UsersPage = async () => {
  const usersApiResponse = await fetch(
    'https://jsonplaceholder.typicode.com/users',
    { cache: 'no-store' },
  );
  const users: User[] = await usersApiResponse.json();

  return (
    <>
      <h1>Users</h1>
      <p>{(new Date).toLocaleTimeString()}</p>
      <table className={styles.usersTable}>
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
