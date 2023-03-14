import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './GoBack.css';

export const GoBack = (): JSX.Element => {
  const navigate = useNavigate();
  const handleGoBackClick = useCallback(() => {
    navigate(-1);
  }, []);

  return (
    <button
      className="go-back"
      onClick={handleGoBackClick}
      disabled={window.history.length === 1}
    >
      GO BACK
    </button>
  );
};
