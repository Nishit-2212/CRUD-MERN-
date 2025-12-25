import React, { useState } from 'react';
import './adduser.css';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

function AddUser() {


    const users = {
        name: "",
        email: "",
        address: ""
    };


    const[user,setUser] = useState(users);
    const navigate = useNavigate();
    
    

    const inputHandler = (e) => {
        const {name, value} = e.target;
        console.log(name, value);

        setUser({...user, [name]: value});
    }

    const submitForm = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8000/api/user", user)
        .then((res) => {
            // console.log(res);
            toast.success(res.data.message,{position: "top-right"});
            navigate("/");
        })
        .catch((err) => console.log(err));
    }



  return (
          
    <div clasName = "addUser">

        <Link to="/" className="btn btn-secondary mb-3">Back to Home</Link>

        <h3>Add New User</h3>
        <form onSubmit={submitForm}>
            
                <label  className="form-label">Name</label>
                <input type="text" className="form-control" onChange={inputHandler} name="name" placeholder='Enter your Name'/>
            {/* </div> */}
            {/* <div className="mb-3"> */}
                <label  className="form-label">Email</label>
                <input type="email" className="form-control" onChange={inputHandler} name="email" placeholder='Enter your Email'/>
            {/* </div> */}
            {/* <div className="mb-3"> */}
                <label  className="form-label">Address</label>
                <input type="text" className="form-control" onChange={inputHandler} name="address" placeholder='Enter your Address'/>
            {/* </div> */}
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>

    </div>
  )
}

export default AddUser