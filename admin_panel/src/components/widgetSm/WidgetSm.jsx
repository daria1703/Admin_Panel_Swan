import React from 'react'
import "./widgetsm.css"
import CreateIcon from '@mui/icons-material/Create';

export default function WidgetSm() {
  return (
    <div className="wigdetSm">
        <h3 className="widgetSmTitle">New Users</h3>
        <ul className="widgetSmList">
            <li className="widgetSmListItem">
                <p className="userData">Name LastName</p>
            <a className='userA' href="/">
                <div className="btnUserEdit">
                  <CreateIcon /> 
                </div>
            </a>
            </li>
            <li className="widgetSmListItem">
                <p className="userData">Name LastName</p>
            <a className='userA' href="/">
                <div className="btnUserEdit">
                  <CreateIcon /> 
                </div>
            </a>
            </li>
            <li className="widgetSmListItem">
                <p className="userData">Name LastName</p>
            <a className='userA' href="/">
                <div className="btnUserEdit">
                  <CreateIcon /> 
                </div>
            </a>
            </li>
        </ul>
    </div>
  )
}
