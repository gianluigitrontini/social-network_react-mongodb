import React, { useState, useEffect } from 'react';
import { FavoriteBorder, Favorite } from '@material-ui/icons';
import axios from 'axios';
import { format } from 'timeago.js';
import { Link } from 'react-router-dom';

export default function Post({ post, isFeed = true }) {
  const [user, setUser] = useState([]);
  const [profilePic, setProfilePic] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`/users/${post.userId}`);
      setUser(res.data);
      setProfilePic(`/assets/uploaded/profile/${res.data.profilePicture}`);
    };
    fetchUser();
  }, [post.userId]);

  const [comment, setComment] = useState({
    userId: '60d19b47f777f1075cdb3167',
    author: 'Gianluigi Trontini',
    content: '',
  });
  const [showComment, setShowComment] = useState(false);

  const sendComment = (e) => {
    e.type !== 'keydown' && e.preventDefault();

    comment.content !== '' && post.comments.push(comment);
    setComment({ ...comment, content: '' });
  };

  const submitOnEnter = (e) => {
    e.preventDefault();
    sendComment(e);
  };

  const [like, setLike] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(
    post.likes.includes('60d19b47f777f1075cdb3167')
  );

  const handleLike = () => {
    if (isLiked) {
      post.likes.splice(post.likes.indexOf('1'), 1);
      setLike(post.likes);
    } else {
      post.likes.push('1');
      setLike(post.likes);
    }
    setIsLiked(!isLiked);
  };

  return (
    <div className={`feedPost ${isFeed ? 'feed' : ''}`}>
      <div className='feedPost-header'>
        <Link to={`/profile/${post.userId}`}>
          <img className='profile-avatar' src={profilePic} alt='' />
        </Link>
        <div className='post_user-and-date'>
          <Link to={`/profile/${post.userId}`}>
            <span className='post_user'>{user.username}</span>
          </Link>
          <span className='post_date'>{format(post.createdAt)}</span>
        </div>
      </div>
      <div className='feedPost-body'>{post.content}</div>
      {post.media && (
        <div className='feedPost-media'>
          <img src={`/assets/uploaded/media/${post.media}`} alt='media' />
        </div>
      )}
      <div className='feedPost-footer'>
        <div className='feedPost-likes'>
          {isLiked ? (
            <Favorite onClick={handleLike} />
          ) : (
            <FavoriteBorder onClick={handleLike} />
          )}

          {like.length > 0 && (
            <span>{`${like.length} ${
              like.length === 1 ? 'like' : 'likes'
            }`}</span>
          )}
        </div>
        <div
          className='feedPost-comments-number'
          onClick={() => setShowComment(!showComment)}>
          {post.comments.length > 0
            ? `${post.comments.length} 
            ${post.comments.length === 1 ? 'risposta' : 'risposte'}`
            : 'Scrivi una risposta'}
        </div>
      </div>
      <div className={`feedPost-comment ${showComment ? '' : 'hidden'}`}>
        <div className='feedPost-comment--write'>
          <img className='profile-avatar' src={profilePic} alt='Profile' />
          <div className={`comment-input`}>
            <form>
              <textarea
                type='text'
                value={comment.content}
                placeholder='Scrivi una risposta...'
                onChange={(e) =>
                  setComment({ ...comment, content: e.target.value })
                }
                onKeyDown={(e) =>
                  e.key === 'Enter' && !e.shiftKey && submitOnEnter(e)
                }
              />
              <button onClick={sendComment}>Invia</button>
            </form>
          </div>
        </div>
        {/* {post.comments.length > 0 && (
          <div className='feedPost-commentsWrapper'>
            {post.comments.map((comment, index) => {
              return (
                <div className='feedPost-commentSingle' key={index}>
                  <img
                    className='profile-avatar'
                    src={getProfilePicture(comment)}
                    alt='Profile'
                  />
                  <div className='feedPost-comment--content'>
                    <span className='author'>{getAuthor(comment)}</span>
                    <span className='comment'>{comment.content}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )} */}
      </div>
    </div>
  );
}
