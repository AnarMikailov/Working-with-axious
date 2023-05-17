import React, { useState } from 'react';
import axios from 'axios';
import './AddUser.css';
const AddUser = () => {
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    patronymic: '',
    pin: '',
    age: 0,
    email: '',
    birthDate: '',
    address: '',
  });
  const submit = async e => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://metaverse-production.up.railway.app/api/v1/user',

        data
      );

      console.log('Data posted successfully!', response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handle = e => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
  };
  return (
    <div className="wrapper">
      <div className="app">
        <form className="form-control" onSubmit={e => submit(e)}>
          <label htmlFor="">Firstname</label>
          <input
            placeholder="Enter Firstname..."
            type="text"
            id="firstName"
            onChange={e => {
              handle(e);
            }}
            value={data.firstName}
          />
          <label htmlFor="">LastName</label>
          <input
            placeholder="Enter Lastname..."
            type="text"
            onChange={e => {
              handle(e);
            }}
            id="lastName"
            value={data.lastName}
          />
          <label htmlFor="">Patronymic</label>
          <input
            placeholder="Enter Patronymic..."
            type="text"
            onChange={e => {
              handle(e);
            }}
            id="patronymic"
            value={data.patronymic}
          />
          <label htmlFor="">Pin</label>
          <input
            placeholder="Enter Pin..."
            type="text"
            onChange={e => {
              handle(e);
            }}
            id="pin"
            value={data.pin}
          />
          <label htmlFor="">Age</label>
          <input
            placeholder="Enter Age..."
            type="number"
            onChange={e => {
              handle(e);
            }}
            id="age"
            value={data.age}
          />
          <label htmlFor="">Email</label>
          <input
            placeholder="Enter Email..."
            type="email"
            onChange={e => {
              handle(e);
            }}
            id="email"
            value={data.email}
          />
          <label htmlFor="">Date</label>
          <input
            placeholder="Enter Date..."
            type="date"
            onChange={e => {
              handle(e);
            }}
            id="birthDate"
            value={data.birthDate}
          />
          <label htmlFor="">Address</label>
          <input
            placeholder="Enter Address..."
            type="text"
            onChange={e => {
              handle(e);
            }}
            id="address"
            value={data.address}
          />

          <button type="submit" onClick={submit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
