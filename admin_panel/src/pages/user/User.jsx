import React from 'react'
import "./user.css"
import userimg from '../../img/userProfile.png'
import {Link, useLocation} from "react-router-dom"
import { useSelector } from "react-redux";
import { useState } from "react";
import { updateUser } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";

export default function User() {

    const location = useLocation();
    const userId = location.pathname.split("/")[2];
    const [inputs, setInputs] = useState({});
    const [refresh, setRefresh] = useState(false);
    const dispatch = useDispatch();

    const user = useSelector((state) =>
        state.user.users.find((user) => user._id === userId)
    );

    const handleChange = (e) => {
        setInputs((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleClick = (e) => {
        const user = { ...inputs};
        updateUser(userId, user, dispatch);
        window.location.reload(true)
    };

  return (
    <div className='userPage'>
        <div className="titleContainer">
        <h1 className="userTitle">
            User Information
        </h1>
        <Link to={`/createUser`} className="creaeUser" href="">
            <div className="createUserBtn">Create New User</div>
        </Link>
        </div>
        <div className="userContainer">
            <div className="userShow">
                <div className="userShowTop">
                    <span><img src={userimg} alt="user" className='userImg'/></span>
                    <span className="userName">{user.name} {user.lastName}</span>
                    <span className='userEmail'>{user.email}</span>
                    <span className="userId">ID: {user._id}</span>
                </div>
                <div className="userShowBottom"></div>
            </div>
            <div className="userUpdate">
            <h3 className="widgetSmTitle">Edit Users</h3>
            <form className="userForm">
                <div className="inputForm">
                    <label className="imputLabelForm">User Name</label>
                    <input type="test" name="name"  placeholder="Enter User Name" onChange={handleChange}/>
                </div>
                <div className="inputForm">
                    <label className="imputLabelForm">User Last Name</label>
                    <input type="test" name="lastName" placeholder='Enter User Last Name'  onChange={handleChange}/>
                </div>
                <div className="inputForm">
                    <label className="imputLabelForm">User Email</label>
                    <input type="email" name="email" placeholder='Enter User Email' onChange={handleChange} />
                </div>
                <button onClick={handleClick} className="btn creaeUser" style={{padding: 0}}>
                    <div className="createUserBtn">Update</div>
                </button>
            </form>
            </div>
        </div>
    </div>
  )
}
