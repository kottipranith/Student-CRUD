import React from 'react';
import './App.css';
import AddStudent from './components/AddStudent/AddStudent';
import Navbar from './components/Navbar/Navbar';
import StudentDetails from './components/StudentDetails/StudentDetails';

function App() {
  return (
    <div className="App">
        <Navbar/>
        <AddStudent/>
        <StudentDetails/>
    </div>
  );
}

export default App;
