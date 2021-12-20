import React from 'react';
import { AddAPhoto } from '@material-ui/icons';

export default function ShareOnFeed() {
  return (
    <div className='feedShare'>
      <div className='feedShare--top'>
        <img
          className='feedProfilePicture'
          src='/assets/uploaded/profile/profile-avatar.jpg'
          alt=''
        />
        <div className='feedShare--PostInputWrapper'>
          <textarea
            name=''
            id=''
            cols='30'
            rows='3'
            placeholder='Come va oggi, Gian?'></textarea>
          <div className='feedShare--ButtonsWrapper'>
            <div className='addContent-wrapper'>
              <span className='addContent-icon'>
                <AddAPhoto />
              </span>
              Foto o Video
            </div>
            <button>Invia</button>
          </div>
        </div>
      </div>
    </div>
  );
}
