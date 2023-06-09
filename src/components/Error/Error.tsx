import React from 'react';
import './Error.css';

interface ErrorProps {
  error: string | null;
}

export const Error = ({ error }: ErrorProps): JSX.Element => (
  <div className="error">
    {error === '404'
      ? 'The character does not exist'
      : 'Something went wrong'}
  </div>
);
