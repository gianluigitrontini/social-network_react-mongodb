import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import Post from './Post';

import ShareOnFeed from './ShareOnFeed';
import { AuthContext } from '../../context/AuthContext';

export default function Feed() {
  const { state } = useContext(AuthContext);

  const [posts, setPosts] = useState([]);

  const [updateTimeline, setUpdateTimeline] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      await axios
        .get(`/posts/${state.user._id}/feed`)
        .then((res) => setPosts(res.data));
    };
    fetchPosts();
  }, [updateTimeline]);

  return (
    <div id='feed'>
      <div className='feedWrapper'>
        <ShareOnFeed
          setUpdateTimeline={setUpdateTimeline}
          updateTimeline={updateTimeline}
        />
        <div className='feedContentWrapper'>
          {posts.map((post) => (
            <Post key={post._id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
