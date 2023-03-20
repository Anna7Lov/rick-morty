import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../store/user/selectors';
import './ProfilePage.css';

export const ProfilePage = (): JSX.Element => {
  const user = useSelector(selectUser);

  return (
    <div className="profile">
      {user
        ? (<>
          <img
            className="profile__image"
            src={
              user.photoURL
                ? user.photoURL
                : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png'
            }
            alt="User photo"
          />
          <span>{user.displayName}</span>
          <span>{user.email}</span>
        </>)
        : null}
    </div>
  );
};
