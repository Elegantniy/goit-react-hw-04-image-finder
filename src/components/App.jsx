import { useState, useEffect } from 'react';
import { ImageGalleryArr } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from 'components/Button/Button';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from './Services/getPhoto';
import css from './App.module.css';

export const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [largeImage, setLargeImage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isActiveBtn, setIsActiveBtn] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    const getImages = async () => {
      setIsLoading(true);
      setIsActiveBtn(false);

      try {
        const { hits } = await fetchImages(searchQuery, page);

        setImages(state => [...state, ...hits]);
        setIsActiveBtn(true);

        if (hits.length === 0) setIsActiveBtn(false);
      } catch (error) {
        setError('sorry, the server is not responding, try again later');
      } finally {
        setIsLoading(false);
      }
    };

    getImages();
  }, [searchQuery, page]);

  const getLargeImg = largeImage => {
    setLargeImage(largeImage);
    setShowModal(true);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onFormSubmit = searchQuery => {
    setImages([]);
    setSearchQuery(searchQuery);
    setPage(1);
  };
  const onClickLoadMore = () => {
    setPage(s => s + 1);
  };

  return (
    <div className={css.mainDiv}>
      <Searchbar onSubmit={onFormSubmit} />
      {error}
      <ImageGalleryArr items={images} onGetImages={getLargeImg} />
      {isLoading && <Loader />}
      {isActiveBtn && <Button onLoadMoreImg={() => onClickLoadMore} />}
      {showModal && <Modal largeImage={largeImage} onClick={toggleModal} />}
    </div>
  );
};
