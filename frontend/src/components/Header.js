import React from 'react';
import { Chat, Person, Notifications } from '@material-ui/icons';
import { Badge, IconButton, withStyles } from '@material-ui/core';
import Searchbar from './Searchbar/Searchbar';
import { Link } from 'react-router-dom';

export default function Header() {
  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: '0 4px',
    },
  }))(Badge);

  function CustomizedBadges({ icon, notifications }) {
    return (
      <IconButton aria-label='cart'>
        <StyledBadge badgeContent={notifications} color='secondary'>
          {icon}
        </StyledBadge>
      </IconButton>
    );
  }

  return (
    <div className='topbarContainer'>
      <div className='container'>
        <div className='topbarLogo'>
          <Link to='/'>
            <span className='logo'>UniSocial</span>
          </Link>
        </div>
        <div className='topbarSearch'>
          <Searchbar />
        </div>
        <div className='topbarRight'>
          <div className='topbarIcons'>
            <div className='topbarIcon'>
              <CustomizedBadges notifications='1' icon={<Person />} />
            </div>
            <div className='topbarIcon'>
              <CustomizedBadges
                notifications='4'
                icon={<Chat fontSize='large' />}
              />
            </div>
            <div className='topbarIcon'>
              <CustomizedBadges
                notifications='3'
                icon={<Notifications fontSize='large' />}
              />
            </div>
          </div>
          <Link to='/profile'>
            <img
              src='/assets/uploaded/profile/profile-avatar.jpg'
              alt=''
              className='topbarProfile'
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
