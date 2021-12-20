import { Visibility, VisibilityOff } from '@material-ui/icons';
import axios from 'axios';
import React, { useState, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function Login() {
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  const { dispatch } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await axios.post('/auth/login', loginData);
    await dispatch({ type: 'LOGIN', payload: res.data });
  };

  const LoadingSvg = (
    <svg
      class='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'>
      <circle
        class='opacity-25'
        cx='12'
        cy='12'
        r='10'
        stroke='currentColor'
        stroke-width='4'></circle>
      <path
        class='opacity-75'
        fill='currentColor'
        d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
    </svg>
  );

  return (
    <form onSubmit={handleLogin}>
      <div className='auth_formGroupWrapper'>
        <input
          id='email'
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
          type='email'
          value={loginData.email}
          onChange={(e) =>
            setLoginData({ ...loginData, email: e.target.value })
          }
          required
          placeholder='Email Address'
        />
      </div>
      <div className='auth_formGroupWrapper'>
        <div className='input-with-end-icon-wrapper'>
          <input
            id='password'
            className='with-end-icon'
            type={showPassword ? 'text' : 'password'}
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
            required
            placeholder='Password'
            minLength='6'
          />
          {showPassword ? (
            <VisibilityOff
              className='absolute text-gray-400'
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <Visibility
              className='absolute text-gray-400'
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </div>
      </div>
      {/* <button>{isFetching ? <>{LoadingSvg} Loading...</> : 'Login'}</button> */}
      <button className='inline-flex items-center justify-center'>
        {/* {isFetching ? <>{LoadingSvg} Loading...</> : 'Login'} */}
        Login
      </button>
    </form>
  );
}
