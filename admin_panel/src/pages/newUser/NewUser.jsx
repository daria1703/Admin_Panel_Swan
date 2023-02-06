import React from 'react'
import "./newUser.css"
import { Link} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/apiCalls";
import { useState } from "react";

export default function NewUser() {

const [inputs, setInputs] = useState({});
const dispatch = useDispatch();

const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    const user = { ...inputs};
      addUser(user, dispatch);
};

  return (
    <div className="newUser">
        <h1 className="userNewTitle">
            Create New User
        </h1>
        <form className="createUser">
            <div className='userCreateInput'>
                <label className="createLabel">User Name</label>
                <input name='name' className="createInput" type="text" placeholder='Enter User Name' onChange={handleChange}/>
            </div>
            <div className='userCreateInput'>
                <label className="createLabel">User Last Name</label>
                <input name='lastName' className="createInput" type="text" placeholder='Enter User Last Name' onChange={handleChange}/>
            </div>
            <div className='userCreateInput'>
                <label className="createLabel">User Eamil</label>
                <input name='email' className="createInput" type="email" placeholder='Enter User Email' onChange={handleChange}/>
            </div>
            <div className='userCreateInput'>
                <label className="createLabel">User Password</label>
                <input name='password' className="createInput" type="password" placeholder='Enter User Password' onChange={handleChange}/>
            </div>
            <div className='userCreateInput'>
                <label className="createLabel">User Password</label>
                <input name='reEnteredPassword' className="createInput" type="password" placeholder='Reenter User Password' onChange={handleChange}/>
            </div>
            <button className="creaeUser" onClick={handleClick} style={{marginTop: 16}}>
                <div className="createUserBtn">Create New User</div>
            </button>
        </form>
    </div>
  )
}

