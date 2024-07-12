import React , {useState}from 'react'

function CreateStudent() {
    const [firstname, setFirstname] = useState('');
    const [secondname, setSecondname] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = async (e) => {
        await fetch('http://127.0.0.1:8000/api/students/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ firstname, secondname, email, age })
        });
    };

    return (
        <div>
            <h1>Add Student</h1>
            <form onSubmit={handleSubmit}>
                <input type='text' value={firstname} onChange={(e) => setFirstname(e.target.value)} placeholder='FirstName' />
                <input type='text' value={secondname} onChange={(e) => setSecondname(e.target.value)} placeholder='SecondName' />
                <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                <input type='number' value={age} onChange={(e) => setAge(e.target.value)} placeholder='Age' />

                <button type="submit">Add</button>

            </form>
        </div>
    )
}

export default CreateStudent