import React,{useEffect, useState} from 'react'
import "./AddStudent.css"
import axios from 'axios'

const AddStudent = () => {
    const [data,setData] = useState({
        name : "",
        address : "",
    })
    const [students,setStudents] = useState([])

    const handleChange = (e) =>{
        setData({...data, [e.target.name] : e.target.value})
    }
    const handleSubmit = (e) =>{
        //const student = data
        e.preventDefault();
        console.log(data);
        axios.post("http://localhost:8080/add",{
            name : data.name,
            address : data.address
        }).then((res)=>{
            console.log(res.data);
        })
        
    }
    useEffect(() => {

        fetch("http://localhost:8080/getAll")
        .then(res => res.json())
        .then((result)=>{
            setStudents(result)
        })
    }, [students])
    
  return (
    <div className="container">
    <div className='card'>
        <form onSubmit={handleSubmit}>
            <div className="content">
                    Add Student
            </div>
            <div className="text-feilds">
                <input type='text' name='name' value={data.name} placeholder='Name' onChange={handleChange}/>
                <input type='text' name='address' value={data.address} placeholder='Address' onChange={handleChange}/>
            </div>
            <div className="btn">
                <input type='submit' value="Add"/>
            </div>
        </form>
    </div>    
    </div>

  )

}

export default AddStudent