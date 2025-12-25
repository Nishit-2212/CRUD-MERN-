import React, { useEffect } from 'react'
import './user.css'
import { Link } from 'react-router-dom';

const User = () => {

    const [users,setUsers] = React.useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8000/api/user");
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.log("Error while fetching data", error);
            }
        };
        fetchData();
    },[])


    const deleteButton = () => {
        
    }



  return (
    <div className='userTable'>

        <Link to="/add" className='btn btn-success mb-3'>Add User</Link>
    
    
    <table class="table table-striped">

        <thead>
            <tr>
            <th scope="col">S.No.#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Adress</th>
            <th scope="col">Action</th>
            </tr>
        </thead> 

        <tbody>

            {users.map((user, index) => {

                return(

                    <tr>
                    <td>{index+1}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.address}</td>
                    <td>
                        <Link to={`/update/${user._id}`} className="btn btn-primary">Edit</Link>
                        <button className="btn btn-danger" onClick={deleteButton}>Delete</button>
                    </td>
                    </tr>
                )
            })}



        </tbody>  
    </table>


    </div>

  )
}

export default User