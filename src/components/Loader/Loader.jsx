import React from 'react';
import { ProgressBar } from 'react-loader-spinner';

export const Loader = () => (
  <ProgressBar
    height="100"
    width="100"
    ariaLabel="progress-bar-loading"
    wrapperStyle={{
      display: 'flex',
      justifyContent: 'center',
    }}
    wrapperClass="progress-bar-wrapper"
    visible={true}
    borderColor="#f42e7b"
    barColor="#7bf42e"
  />
);
