import React, { useState, useContext } from 'react';
import { AddAPhoto } from '@material-ui/icons';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

export default function ShareOnFeed({ setUpdateTimeline, updateTimeline }) {
  const { state } = useContext(AuthContext);

  const [post, setPost] = useState({
    userId: state.user._id,
    content: '',
    media: '',
    likes: [],
    comments: [],
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/posts', post).then(setUpdateTimeline(!updateTimeline));
  };
  return (
    <div className='feedShare'>
      <div className='feedShare--top'>
        <img
          className='feedProfilePicture'
          src='/assets/uploaded/profile/profile-avatar.jpg'
          alt=''
        />
        <form onSubmit={handleSubmit} className='feedShare--PostInputWrapper'>
          <textarea
            onChange={(e) => setPost({ ...post, content: e.target.value })}
            name='content'
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
        </form>
      </div>
    </div>
  );
}
