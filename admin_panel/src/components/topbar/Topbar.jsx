import React from 'react'
import "./topbar.css"
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import Badge from '@mui/material/Badge';

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbarWrapper">
        <div className="topLeft">
            <h1 className='logo'>The Swan House</h1>
        </div>
        <div className="topRight">
            <div className="topbarIcons">
                <SettingsIcon style={{marginRight:5}}/>
                <PersonIcon style={{marginRight:5}}/>
                <Badge badgeContent={4} color="primary">
                    <NotificationsIcon  />
                </Badge>
            </div>
        </div>
        </div>
    </div>
  )
}
