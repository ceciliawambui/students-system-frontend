import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import StudentList from './components/StudentList'
import CreateStudent from './components/CreateStudent'
import EditStudent from './components/EditStudent'


function App() {
  return (
    <div className="App">
        <div className='container mx-auto p-4'>
          <nav className='mb-4'>
            <Link to ="/" className='mr-4'>Students</Link>
            <Link to="/create-student" className='mr-4'>Add a Student</Link>
          </nav>
          <Routes>
            <Route path='/' element={<StudentList/>} />
            <Route path='/create-student' element={<CreateStudent/>} />
            <Route path='/edit-student/:id' element={<EditStudent/>} />

          </Routes>
        </div>
      
    </div>
  );
}

export default App;
