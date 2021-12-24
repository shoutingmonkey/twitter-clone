import React from 'react';
import './Sidebar.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ListIcon from '@material-ui/icons/List';
import ProfileIcon from '@material-ui/icons/Person';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import MailOutline from '@material-ui/icons/MailOutline';
import { Button } from '@material-ui/core';

function Sidebar() {
  return (
    <div className="sidebar">
      {/* Twitter Icon */}
      <TwitterIcon className="sidebar__twitterIcon" />

      <SidebarOption text='Home' Icon={HomeIcon} />
      <SidebarOption text='Explore' Icon={SearchIcon} />
      <SidebarOption text='Notifications' Icon={NotificationIcon} />
      <SidebarOption text='Messages' Icon={MailOutlineIcon} />
      <SidebarOption text='Bookmarks' Icon={BookmarkIcon} />
      <SidebarOption text='Lists' Icon={ListIcon} />
      <SidebarOption text='Profile' Icon={ProfileIcon} />
      <SidebarOption text='More' Icon={MoreHorizIcon} />

      {/* Button->Tweet */}
      <Button variant='outlined' className='sidebar__tweet' fullWidth>Tweet</Button>

    </div>
  );
}

export default Sidebar;