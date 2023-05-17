import React, { useState } from 'react';
import './User.css';
import axios from 'axios';

const User = ({
  id,
  firstName,
  lastName,
  patronymic,
  pin,
  age,
  email,
  birthDate,
  address,
  handleDelete,
  handleUpdate,
  data,
  setData,
}) => {
  const [editUser, setEditUser] = useState(false);
  const [updatedFirstName, setUpdatedFirstName] = useState(firstName);
  const [updatedLastName, setUpdatedLastName] = useState(lastName);
  const [updatedEmail, setUpdatedEmail] = useState(email);
  const [updatedAddress, setUpdatedAddress] = useState(address);

  const handleEdit = () => {
    setEditUser(true);
  };

  const handleCancel = () => {
    setUpdatedFirstName(firstName);
    setUpdatedLastName(lastName);
    setUpdatedEmail(email);
    setUpdatedAddress(address);
    setEditUser(false);
  };

  const handleSave = () => {
    // Prepare the updated user data
    const updatedUser = {
      firstName: updatedFirstName,
      lastName: updatedLastName,
      email: updatedEmail,
      address: updatedAddress,
    };

    // Send the updated user data to the server
    axios
      .put(
        `https://metaverse-production.up.railway.app/api/v1/user/by-pin?pin=${pin}`,
        updatedUser
      )
      .then(response => {
        // Handle successful response, e.g., show a success message
        alert('User updated successfully:');
        // Call the handleUpdate function passed as props to update the user in the parent component
        // handleUpdate(response.data);
        axios
          .get('https://metaverse-production.up.railway.app/api/v1/user/all')
          .then(res => {
            setData(res.data);
          })
          .catch(err => console.log(err.message));
      })
      .catch(error => {});
    setEditUser(false);
  };

  return (
    <div>
      <div className="user-card">
        <div className="firstName-container">
          <p>Firstname:</p>
          {editUser ? (
            <input
              type="text"
              placeholder="Edit firstname..."
              value={updatedFirstName}
              onChange={e => setUpdatedFirstName(e.target.value)}
            />
          ) : (
            <h1>{firstName}</h1>
          )}
        </div>
        <div className="lastName-container">
          <p>Lastname:</p>
          {editUser ? (
            <input
              type="text"
              placeholder="Edit lastname..."
              value={updatedLastName}
              onChange={e => setUpdatedLastName(e.target.value)}
            />
          ) : (
            <h1>{lastName}</h1>
          )}
        </div>
        <div className="patronymic-container">
          <p>Patronymic:</p>
          <h1>{patronymic}</h1>
        </div>
        <div className="pin-container">
          <p>Pin:</p>
          <h1>{pin}</h1>
        </div>
        <div className="age-container">
          <p>Age:</p>
          <h1>{age}</h1>
        </div>
        <div className="email-container">
          <p>Email:</p>
          {editUser ? (
            <input
              type="text"
              placeholder="Edit email..."
              value={updatedEmail}
              onChange={e => setUpdatedEmail(e.target.value)}
            />
          ) : (
            <h1>{email}</h1>
          )}
        </div>
        <div className="birthDate-container">
          <p>BirthDate:</p>
          <h1>{birthDate}</h1>
        </div>
        <div className="address-container">
          <p>Address:</p>
          {editUser ? (
            <input
              type="text"
              placeholder="Edit address.."
              value={updatedAddress}
              onChange={e => setUpdatedAddress(e.target.value)}
            />
          ) : (
            <h1>{address}</h1>
          )}
        </div>
        <div className="control-container">
          {!editUser && <button onClick={handleEdit}>Edit</button>}
          {editUser && <button onClick={handleSave}>Save</button>}
          {!editUser && (
            <button onClick={() => handleDelete(id)}>Delete</button>
          )}
          {editUser && <button onClick={handleCancel}>Cancel</button>}
        </div>
      </div>
    </div>
  );
};

export default User;
