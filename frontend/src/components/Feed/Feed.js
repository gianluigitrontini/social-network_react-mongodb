import React, { useEffect, useState } from 'react';
// import SimpleBar from 'simplebar-react';
// import 'simplebar/dist/simplebar.min.css';
import axios from 'axios';
import Post from './Post';
import ShareOnFeed from './ShareOnFeed';

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get('/posts/60d19b47f777f1075cdb3167/feed');
      return setPosts(res.data);
    };
    fetchPosts();
  }, []);

  return (
    <div id='feed'>
      <div className='feedWrapper'>
        <ShareOnFeed />
        <div className='feedContentWrapper'>
          {posts.map((post, index) => (
            <Post key={post._id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
