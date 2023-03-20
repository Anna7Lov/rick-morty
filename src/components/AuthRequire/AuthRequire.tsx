import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectUser } from '../../store/user/selectors';

interface AuthRequireProps {
  children: React.ReactElement;
}

export const AuthRequire = ({ children }: AuthRequireProps): JSX.Element | null => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, [user, navigate]);

  return user ? children : null;
};
