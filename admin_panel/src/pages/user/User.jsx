import React from 'react'
import "./user.css"
import user from '../../img/userProfile.png'
import {Link} from "react-router-dom"

export default function User() {
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
                    <span><img src={user} alt="user" className='userImg'/></span>
                    <span className="userName">User Name</span>
                    <span className='userEmail'>test@gmail.com</span>
                    <span className="userId">ID: 123456</span>
                </div>
                <div className="userShowBottom"></div>
            </div>
            <div className="userUpdate">
            <h3 className="widgetSmTitle">Edit Users</h3>
            <form className="userForm">
                <div className="inputForm">
                    <label className="imputLabelForm">User Name</label>
                    <input type="test" name="user name"  placeholder="Enter User Name"/>
                </div>
                <div className="inputForm">
                    <label className="imputLabelForm">User Last Name</label>
                    <input type="test" name="user last name" placeholder='Enter User Last Name'  />
                </div>
                <div className="inputForm">
                    <label className="imputLabelForm">User Email</label>
                    <input type="email" name="user email" placeholder='Enter User Email'  />
                </div>
                <a className="btn creaeUser" href="" style={{padding: 0}}>
                    <div className="createUserBtn">Update</div>
                </a>
            </form>
            </div>
        </div>
    </div>
  )
}
