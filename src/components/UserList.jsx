import React, { useState } from 'react';
import User from './User';
import axios from 'axios';
import AddUser from './AddUser';
import './UserList.css';

const UserList = () => {
  const [showUsers, setShowUsers] = useState(false);
  const [data, setData] = useState([]);

  const handleUsers = () => {
    setShowUsers(true);
    axios
      .get('https://metaverse-production.up.railway.app/api/v1/user/all')
      .then(res => {
        setData(res.data);
      })
      .catch(err => console.log(err.message));
  };
  const handleDelete = pin => {
    axios
      .delete(
        `https://metaverse-production.up.railway.app/api/v1/user/by-pin?pin=${pin}`
      )
      .then(res => {
        alert('User deleted');

        axios
          .get('https://metaverse-production.up.railway.app/api/v1/user/all')
          .then(res => {
            setData(res.data);
          })
          .catch(err => console.log(err.message));
      })
      .catch(err => {
        console.log(err.message);
        alert('Error deleting user');
      });
  };

  return (
    <div className="list">
      {showUsers &&
        data.map(user => (
          <>
            <User
              key={user.pin}
              firstName={user.firstName}
              lastName={user.lastName}
              patronymic={user.patronymic}
              pin={user.pin}
              age={user.age}
              email={user.email}
              birthDate={user.birthDate}
              address={user.address}
              handleDelete={() => handleDelete(user.pin)}
              data={data}
              setData={setData}
            />
          </>
        ))}
      <button onClick={handleUsers}>Show users</button>
      <AddUser />
    </div>
  );
};

export default UserList;
