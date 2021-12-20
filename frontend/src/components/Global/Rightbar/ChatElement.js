import React from 'react';
import { Badge } from '@material-ui/core';
import { People } from '@material-ui/icons';

export default function ChatElement({ isGroup, username, profilePicture }) {
  if (isGroup) {
    return (
      <>
        <div className='chatItemWrapper'>
          <div className='chatGroupImage-wrapper'>
            <Badge
              badgeContent='36'
              max={20}
              color='secondary'
              overlap='circle'>
              <People />
            </Badge>
          </div>
          <div className='chatItem-name'>
            <span>Chat di Gruppo</span>
          </div>
        </div>
        <div className='divider'></div>
      </>
    );
  }
  return (
    <div className='chatItemWrapper'>
      <div className='profileImage-wrapper'>
        <Badge variant='dot' overlap='circle'>
          <img className='profile-avatar' src={profilePicture} alt='' />
        </Badge>
      </div>
      <div className='chatItem-name'>
        <span>{username}</span>
      </div>
    </div>
  );
}
