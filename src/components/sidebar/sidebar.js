// Sidebar.js
import React, { useState } from 'react';
import './sidebar.css'; // Import    your sidebar styles
import DashBoard from '../Dashboard/DashBoard';
import Routees from '../routes/routees';
import { Link } from 'react-router-dom';
import { Badge } from '@mui/material';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
const Sidebar = () => {

    const [activeWorkspace, setActiveWorkspace] = useState('home');
    const [isProfileOpen, setIsProfileOpen] = useState(false); 
     const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    const [unreadNotifications, setUnreadNotifications] = useState(true);
    const switchWorkspace = (workspace) => {
      setActiveWorkspace(workspace);
    };
    
  const toggleProfileDropdown = () => {
    setIsProfileOpen(!isProfileOpen);
    // Close the notification dropdown when opening the profile dropdown
    setIsNotificationOpen(false);
    // Mark notifications as read when opening the profile dropdown
    setUnreadNotifications(false);
  };

  const toggleNotificationDropdown = () => {
    setIsNotificationOpen(!isNotificationOpen);
    // Close the profile dropdown when opening the notification dropdown
    setIsProfileOpen(false);
    // Mark notifications as read when opening the notification dropdown
    setUnreadNotifications(false);
  };
    return (
      <>
      
          <div className="top-bar">
          <div className="notification-icon" onClick={toggleNotificationDropdown}>
          <Badge color="error" invisible={!unreadNotifications}>
            <i className="fa fa-bell"></i>
          </Badge>
          {/* Notification Dropdown */}
          {isNotificationOpen && (
            <div className="profile-dropdown">
              <ul>
                <li>
                  <span>
                    {' '}
                    <ThumbUpIcon />
                    {' '}&nbsp;&nbsp;You received an upvote for your news!
                  </span>
                </li>
                {/* Add more sample notifications */}
              </ul>
            </div>
          )}
        </div>

        {/* {isNotificationVisible && <span className="notification-icon"></span>} */}
        <div className="profile-icon" onClick={toggleProfileDropdown}>
          <i className="fa fa-user"></i>
          {/* Profile Dropdown */}
          {isProfileOpen && (
            <div className="profile-dropdown">
              <ul>
                <li>
                  <a href="#">View Profile</a>
                </li>
                <li>
                  <a href="#">Logout</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
        <div className="landing-container">
        <div className="sidebar" >
        <Link  className='Link' to="/"><div  className={`sidebar-item ${activeWorkspace === 'home' ? 'active' : ''}`}
            
            onClick={() => switchWorkspace('home')}
          >
            <i className="fa fa-home"></i>&nbsp;&nbsp;&nbsp;Dashboard
          </div></Link> 
          <Link className='Link' to="/quickcheck"><div
     className={`sidebar-item ${activeWorkspace === 'search' ? 'active' : ''}`}
    onClick={() => switchWorkspace('search')}
  >
    <i className="fa fa-search"></i> &nbsp;&nbsp;&nbsp;Quick Check
  </div></Link>
  <Link  className='Link' to="/education" >
          <div className={`sidebar-item ${activeWorkspace === 'chat' ? 'active' : ''}`} onClick={() => switchWorkspace('chat')}>
            <i className="fa fa-comments"></i>&nbsp;&nbsp;&nbsp;Education
          </div>
          </Link>
          <Link  className='Link' to="/tools" >
          <div
            className={`sidebar-item ${activeWorkspace === 'tools' ? 'active' : ''}`}
            onClick={() => switchWorkspace('tools')}
          >
            <i className="fa fa-wrench"></i>&nbsp;&nbsp;&nbsp; Tools
          </div></Link>
          <Link  className='Link' to="/activity" >
  <div
            className={`sidebar-item ${activeWorkspace === 'recents' ? 'active' : ''}`}
            onClick={() => switchWorkspace('recents')}
          >
            <i className="fa fa-history"></i>&nbsp;&nbsp;&nbsp;Activities
          </div></Link>
        </div>
        <div className="workspace" >
          <Routees/>
        </div>
      </div>
      </>
      
    );
  };
  



export default Sidebar;
