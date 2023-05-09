import './App.css';
import axios from 'axios';
import { useState } from 'react';
function App() {
  const [data, setData] = useState({
    name: '',
    email: '',
    date: '',
  });
  const submit = e => {
    e.preventDefault();
    axios
      .post('https://reqres.in/api/users', {
        name: data.name,
        date: data.date,
        email: data.email,
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  const handle = e => {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  };

  return (
    <div className="App">
      <form onSubmit={e => submit(e)}>
        <input
          type="text"
          id="name"
          onChange={e => {
            handle(e);
          }}
          value={data.name}
        />
        <input
          type="email"
          onChange={e => {
            handle(e);
          }}
          id="email"
          value={data.email}
        />
        <input
          type="date"
          onChange={e => {
            handle(e);
          }}
          id="date"
          value={data.date}
        />

        <button type="submit" onClick={submit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
