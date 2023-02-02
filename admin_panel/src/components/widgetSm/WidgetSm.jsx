import React from 'react'
import "./widgetsm.css"
import CreateIcon from '@mui/icons-material/Create';
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import { Link } from 'react-router-dom';

export default function WidgetSm() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await userRequest.get("users/?new=true");
        setUsers(res.data);
      } catch {}
    };
    getUsers();
  }, []);

  return (
    <div className="wigdetSm">
        <h3 className="widgetSmTitle">New Users</h3>
        <ul className="widgetSmList">
        {users.map((user) => (
            <li className="widgetSmListItem" key={user._id}>
                <p className="userData">{user.name} {user.lastName} </p>
            <Link className='userA' to={`/user/${user._id}`}>
                <div className="btnUserEdit">
                  <CreateIcon /> 
                </div>
            </Link>
            </li>
            ))}
        </ul>
    </div>
  )
}
