import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function EditStudent() {

  const { id } = useParams();
  const [firstname, setFirstname] = useState('');
  const [secondname, setSecondname] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/students/${id}/`)
      .then(response => response.json())
      .then(data => {
        setFirstname(data.firstname);
        setSecondname(data.secondname);
        setAge(data.age);
        setEmail(data.email);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://127.0.0.1:8000/api/students/${id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstname, secondname, age, email }),
    });
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">Edit Student</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          placeholder="First Name"
          className="block mb-2 p-2 border"
        />
        <input
          type="text"
          value={secondname}
          onChange={(e) => setSecondname(e.target.value)}
          placeholder="Second Name"
          className="block mb-2 p-2 border"
        />
         <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="block mb-2 p-2 border"
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
          className="block mb-2 p-2 border"
        />
       
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white">Save</button>
      </form>
    </div>
  );
};

export default EditStudent;

