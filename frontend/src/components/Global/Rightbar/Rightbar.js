import React from 'react';
import ChatElement from './ChatElement';
import { Users, universityClass } from '../../fakeData';

export default function Rightbar() {
  const myProfile = {
    userId: '1',
    username: 'Gianluigi Trontini',
    universityClass: 'design-1',
  };

  return (
    <div id='rightbar'>
      <div className='rightbar-wrapper'>
        <div className='chat-category'>
          <h3>Amici</h3>
          {Users.filter((u) => u.id !== myProfile.userId).map((user) => {
            return (
              <ChatElement
                key={user.id}
                username={user.username}
                profilePicture={user.profilePicture}
              />
            );
          })}
        </div>

        <div className='chat-category'>
          <h3>Classe</h3>
          <ChatElement isGroup />
          {universityClass
            .filter((course) => course.name === myProfile.universityClass)[0]
            .students.filter((student) => student !== myProfile.userId)
            .map((classMate) => {
              return (
                <ChatElement
                  key={classMate}
                  username={
                    Users.filter((user) => user.id === classMate)[0].username
                  }
                  profilePicture={
                    Users.filter((user) => user.id === classMate)[0]
                      .profilePicture
                  }
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
