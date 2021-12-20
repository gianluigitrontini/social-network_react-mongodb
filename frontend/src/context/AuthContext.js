import { createContext, useReducer } from 'react';
import { authReducer } from './AuthReducers';

const INITIAL_STATE = {
  user: JSON.parse(localStorage.getItem('user')) ?? null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
