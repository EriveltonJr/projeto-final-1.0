import React, { useEffect, useState } from 'react';
import { getUsers } from './services/api'; 
const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getUsers();
        setUsers(usersData);
      } catch (error) {
        console.error('Erro ao buscar usuários', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            {user.name} - {user.age} anos
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
