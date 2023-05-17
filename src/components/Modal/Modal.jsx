import PropTypes from 'prop-types';

import React, { useEffect } from 'react';
import css from './Modal.module.css';

export const Modal = ({ largeImage, onClick }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClick();
    }
  };

  const handleClick = e => {
    if (e.target === e.currentTarget) {
      onClick();
    }
  };

  return (
    <div className={css.overlay} onClick={handleClick}>
      <div className={css.modal}>
        <img src={largeImage} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImage: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
