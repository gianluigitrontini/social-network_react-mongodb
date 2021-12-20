import { Visibility, VisibilityOff } from '@material-ui/icons';
import React, { useState } from 'react';
import axios from 'axios';
export default function Register() {
  const [registerData, setRegisterData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/auth/register', registerData);
    } catch (error) {
      console.log(error.response.data);
    }
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
    <form onSubmit={handleRegister}>
      <div className='auth_formGroupWrapper'>
        <input
          type='text'
          id='firstName'
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
          value={registerData.firstName}
          onChange={(e) =>
            setRegisterData({ ...registerData, firstName: e.target.value })
          }
          required
          placeholder='First Name'
        />
      </div>
      <div className='auth_formGroupWrapper'>
        <input
          type='text'
          id='lastName'
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
          value={registerData.lastName}
          onChange={(e) =>
            setRegisterData({ ...registerData, lastName: e.target.value })
          }
          required
          placeholder='Last Name'
        />
      </div>
      <div className='auth_formGroupWrapper'>
        <input
          type='email'
          id='email'
          className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
          value={registerData.email}
          onChange={(e) =>
            setRegisterData({ ...registerData, email: e.target.value })
          }
          required
          placeholder='Email Address'
        />
      </div>
      <div className='auth_formGroupWrapper'>
        <div className='input-with-end-icon-wrapper'>
          <input
            type={showPassword ? 'text' : 'password'}
            id='password'
            className='with-end-icon mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'
            value={registerData.password}
            onChange={(e) =>
              setRegisterData({ ...registerData, password: e.target.value })
            }
            required
            minLength='6'
            placeholder='Password'
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

      <button className='inline-flex items-center justify-center'>
        {/* {isFetching ? <>{LoadingSvg} Loading...</> : 'Register'} */}
        Register
      </button>
    </form>
  );
}
