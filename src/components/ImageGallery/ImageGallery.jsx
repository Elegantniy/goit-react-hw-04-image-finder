import PropTypes from 'prop-types';

import React from 'react';
import css from './ImageGallery.module.css'
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGalleryArr = ({ items, onGetImages }) => {
  return (
    <>
      <ul className={css.gallery}>
        {items.map(item => (
          <ImageGalleryItem
            key={item.id}
            item={item}
            onClickImg={onGetImages}
          />
        ))}
      </ul>
    </>
  );
};

ImageGalleryArr.propTypes = {
  items: PropTypes.array.isRequired,
  onGetImages: PropTypes.func.isRequired,
};
