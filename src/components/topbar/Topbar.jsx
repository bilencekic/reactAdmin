import React from 'react'
import "./topbar.css"
import { NotificationsNone, Language, Settings } from '@mui/icons-material';

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topbarLeft"> <span className="logo">Admin Dashboard</span></div>
               
                <div className="topbarRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBrojgk5xZa7UjzNP9bgKOK18tCwdW0de4H-W9QTLKHYECXCDxpsq3-nJpDfIrwK6CBnk&usqp=CAU" alt="" className="topAvatar"></img>
                </div>
            </div>
           
        </div>
    )
}
