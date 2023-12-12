import React,{useEffect, useState} from 'react'
import "./StudentDetails.css"
import EachStudent from '../EachStudent/EachStudent';

const StudentDetails = () => {
    const [students,setStudents] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:8080/getAll")
        .then(res => res.json())
        .then((result)=>{
            setStudents(result)
        })
    },[students])

    if (students.length === 0){
        return <div></div>
    }

  return (
    <div className='card'>
        <h1>Student Details</h1>
        <table>
            <tr id='table-heading'>
                <th>ID</th>
                <th>NAME</th>
                <th>ADDRESS</th>
            </tr>
        {students.map((student,index)=>{
            return <EachStudent key={index} id={student.id} name={student.name} address={student.address}/>
        })}
        </table>
    </div>
  )
}

export default StudentDetails