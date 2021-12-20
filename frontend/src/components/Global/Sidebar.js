import React from 'react';
import { ViewAgenda, School, Event } from '@material-ui/icons';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const MenuItem = ({ text, icon }) => {
    return (
      <>
        <span className='menuItem-icon'>{icon}</span>
        {text}
      </>
    );
  };
  return (
    <div id='sidebar'>
      <div className='sidebarWrapper'>
        <NavLink
          to='/'
          exact
          activeClassName='active'
          className='menuItem-wrapper'>
          <MenuItem icon={<ViewAgenda />} text='News' />
        </NavLink>
        <NavLink
          to='/courses'
          exact
          activeClassName='active'
          className='menuItem-wrapper'>
          <MenuItem icon={<School />} text='Corsi' />
        </NavLink>
        <NavLink
          to='/events'
          exact
          activeClassName='active'
          className='menuItem-wrapper'>
          <MenuItem icon={<Event />} text='Eventi' />
        </NavLink>
      </div>
    </div>
  );
}
