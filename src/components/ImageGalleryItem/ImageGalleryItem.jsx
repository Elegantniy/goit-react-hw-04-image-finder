import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  item: { webformatURL, largeImageURL, tags },
  onClickImg,
}) => {
  return (
    <li>
      <img
        className={css.galleryItemImg}
        src={webformatURL}
        alt={tags}
        onClick={() => onClickImg(largeImageURL)}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onClickImg: PropTypes.func.isRequired,
};
