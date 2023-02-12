import React from 'react'
import "./sitebar.css"
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import InventoryIcon from '@mui/icons-material/Inventory';
import BorderColorIcon from '@mui/icons-material/BorderColor';

export default function Sitebar() {
  return (
    <div className="sitebar">
        <div className="sitebarWrapper">
            <div className="sitebarMenu">
            <h3 className="sitebarTitle">Dashboard</h3>
                <ul className="sidebarList">
                    <a href='/' className="sidebarLink">
                        <li className="sitebarListItem" >
                            <HomeIcon style={{marginRight:5, fontSize:20}}/>
                                Home
                        </li>
                    </a>
                </ul>
                <h3 className="sitebarTitle">Quick Menu</h3>
                <ul className="sidebarList">
                    <a href="/users" className="sidebarLink">
                        <li className="sitebarListItem" >
                            <PeopleAltIcon style={{marginRight:5, fontSize:20}}/>
                                Users
                        </li>
                    </a>
                    <a href="/products" className="sidebarLink">
                        <li className="sitebarListItem">
                            <InventoryIcon style={{marginRight:5, fontSize:20}}/>
                                Products
                        </li>
                    </a>
                    <a href="/order" className="sidebarLink">
                        <li className="sitebarListItem">
                            <BorderColorIcon style={{marginRight:5, fontSize:20}}/>
                                Orders
                        </li>
                    </a>
                </ul>
            </div>
        </div>
    </div>
  )
}
