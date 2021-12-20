import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Post from '../../components/Feed/Post';
import axios from 'axios';

export default function Profile({ user }) {
  const [userPosts, setUserPosts] = useState([]);
  // const [profilePic, setProfilePic] = useState('');
  const [userInfo, setUserInfo] = useState({});
  let { id } = useParams();

  const myProfile = {
    userId: '60d19b47f777f1075cdb3167',
    username: 'Gianluigi Trontini',
  };

  useEffect(() => {
    const fetchUserPosts = async () => {
      const res = user
        ? await axios.get(`/posts/${id}/all`)
        : await axios.get(`/posts/${myProfile.userId}/all`);
      setUserPosts(res.data);
    };
    fetchUserPosts();
  }, [id, myProfile.userId, user]);

  useEffect(() => {
    const fetchUserInfo = async () => {
      const res = user
        ? await axios.get(`/users/${id}`)
        : await axios.get(`/users/${myProfile.userId}`);
      setUserInfo(res.data);
      // setProfilePic(res.data.profilePicture);
    };
    fetchUserInfo();
  }, [id, myProfile.userId, user]);

  const CoverImage = () => (
    <div className='coverImage-wrapper'>
      <img
        className='coverImage'
        src={
          userInfo.coverPicture
            ? `/assets/uploaded/profile/profile-cover/${userInfo.coverPicture}`
            : `/assets/uploaded/profile/profile-cover/no-cover.jpg`
        }
        alt=''
      />
    </div>
  );

  const ProfileImage = () => (
    <div className='profileImage-wrapper'>
      <img
        className='profileImage'
        src={`/assets/uploaded/profile/${userInfo.profilePicture}`}
        alt=''
      />
    </div>
  );

  const ProfileInfo = () => (
    <div className='profileInfo'>
      <p className='profileInfo--name'>
        {user ? userInfo.username : myProfile.username}
      </p>
      <div className='universityInfo'>
        <div className='universityInfoBadgeWrapper'>
          <img
            src='/assets/uploaded/profile/unicam-badge.png'
            className='universityBadge'
            alt='Universitá di Camerino'
          />
        </div>
        <div className='universityInfo--info'>
          <span className='universityInfo--name'>UNICAM</span>
          <span className='universityInfo--course'>
            Design Industriale e Ambientale
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <div id='profile'>
      <CoverImage />
      <div className='profileWrapper'>
        <div className='profileInfo-wrapper'>
          <ProfileImage />
          <ProfileInfo />
        </div>

        {userPosts &&
          userPosts.map((post) => (
            <Post isFeed={false} key={post._id} post={post} />
          ))}
      </div>
    </div>
  );
}
