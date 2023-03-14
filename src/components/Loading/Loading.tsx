import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import './Loading.css';

export const Loading = (): JSX.Element => (
    <div className="loading">
      <ThreeDots width="128" color="#00B0C8" ariaLabel="three-dots-loading" />
    </div>
);
