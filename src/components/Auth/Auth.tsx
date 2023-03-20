import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  selectisUserFailed,
  selectIsUserLoading,
  selectisUserLogoutFailed,
  selectIsUserLogoutLoading,
  selectUser
} from '../../store/user/selectors';
import { loginUserThunk, logoutUserThunk } from '../../store/user/thunks';
import { Error } from '../Error/Error';
import './Auth.css';

export const Auth = (): JSX.Element => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const isUserLoading = useSelector(selectIsUserLoading);
  const userError = useSelector(selectisUserFailed);
  const isUserLogoutLoading = useSelector(selectIsUserLogoutLoading);
  const userLogoutError = useSelector(selectisUserLogoutFailed);

  const handleGoogleLogin = useCallback(() => {
    dispatch(loginUserThunk());
  }, []);

  const handleLogout = useCallback(() => {
    dispatch(logoutUserThunk());
  }, []);

  if (user === null && !userError && !isUserLoading) {
    return (
      <button
        className="login-button"
        onClick={handleGoogleLogin}
        type="submit"
      >
        Login with Google
      </button>
    );
  } else if (isUserLoading) {
    return <p className="waiting">Waiting for your login...</p>;
  } else if (isUserLogoutLoading) {
    return <p className="waiting">Waiting for logout...</p>;
  } else if (user !== null && user.email && !userLogoutError) {
    return (
      <div className="user">
        <span>
          {user.email.length < 25
            ? user.email
            : `${user.email.substring(0, 22)}...`}
        </span>
        <div className="user-section">
          <Link to={'/profile'} className="profile-link">
            Profile
          </Link>
          <button type="button" className="logout-button" onClick={handleLogout}>
            LogOut
          </button>
        </div>
      </div>
    );
  } else if (userLogoutError) {
    return (
      <div className="error-wrapper">
        <Error error={userLogoutError} />
      </div>
    );
  } else {
    return (
      <div className="error-wrapper">
        <Error error={userError} />
      </div>
    );
  }
};
