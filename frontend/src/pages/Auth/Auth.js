import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className='authWrapper'>
      {isLogin ? (
        <>
          <h1 className='text-4xl my-4'>Welcome back!</h1>
          <Login />
          <p>
            Don't have an account?{' '}
            <span
              className='underline text-blue-500 cursor-pointer'
              onClick={() => setIsLogin(false)}>
              Sign up here
            </span>
          </p>
        </>
      ) : (
        <>
          <h1 className='text-4xl my-4'>Create an account</h1>

          <Register />
          <p>
            Have an account?{' '}
            <span
              className='underline text-blue-500 cursor-pointer'
              onClick={() => setIsLogin(true)}>
              Login here
            </span>
          </p>
        </>
      )}
    </div>
  );
}
