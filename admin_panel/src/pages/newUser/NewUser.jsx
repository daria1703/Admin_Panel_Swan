import React from 'react'
import "./newUser.css"
import { Link} from 'react-router-dom'

export default function NewUser() {
  return (
    <div className="newUser">
        <h1 className="userNewTitle">
            Create New User
        </h1>
        <form className="createUser">
            <div className='userCreateInput'>
                <label className="createLabel">User Name</label>
                <input className="createInput" type="text" placeholder='Enter User Name'/>
            </div>
            <div className='userCreateInput'>
                <label className="createLabel">User Last Name</label>
                <input className="createInput" type="text" placeholder='Enter User Last Name'/>
            </div>
            <div className='userCreateInput'>
                <label className="createLabel">User Eamil</label>
                <input className="createInput" type="email" placeholder='Enter User Email'/>
            </div>
            <div className='userCreateInput'>
                <label className="createLabel">User Password</label>
                <input className="createInput" type="password" placeholder='Enter User Password'/>
            </div>
            <div className='userCreateInput'>
                <label className="createLabel">User Password</label>
                <input className="createInput" type="password" placeholder='Reenter User Password'/>
            </div>
            <Link to={`/users`} className="creaeUser" style={{marginTop: 16}}>
                <div className="createUserBtn">Create New User</div>
            </Link>
        </form>
    </div>
  )
}

