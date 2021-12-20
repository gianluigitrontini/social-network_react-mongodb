import React from 'react';
import Sidebar from '../components/Global/Sidebar';

import Rightbar from '../components/Global/Rightbar/Rightbar';
import MainContent from '../components/Global/MainContent';

function Layout({
  children,
  sidebar = true,
  rightbar = true,
  isFullpage = false,
}) {
  return (
    <>
      {isFullpage ? (
        <div className='container'>{children}</div>
      ) : (
        <div className='homepage-wrapper'>
          {sidebar && <Sidebar />}
          <MainContent>{children}</MainContent>
          {rightbar && <Rightbar />}
        </div>
      )}
    </>
  );
}

export default Layout;
