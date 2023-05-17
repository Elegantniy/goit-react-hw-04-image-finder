import { Component } from 'react';
import { ImageGalleryArr } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from 'components/Button/Button';
import { Modal } from './Modal/Modal';
import { Searchbar } from './Searchbar/Searchbar';
import { fetchImages } from './Services/getPhoto';
import css from './App.module.css'

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    largeImage: '',
    showModal: false,
    isLoading: false,
    isActiveBtn: false,
    error: null,
  };


  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) this.getImg();
  }


  getImg = async () => {
    const { searchQuery, page, images } = this.state;
    this.setState({ isLoading: true, isActiveBtn: false });

    try {
      const { hits, totalHits } = await fetchImages(searchQuery, page);

      this.setState(({ page, images }) => ({
        images: [...images, ...hits],
        page: page + 1,
        isActiveBtn: true,
      }));

      if (images.length === totalHits) this.setState({ isActiveBtn: false });
    } catch (error) {
      this.setState({
        error: 'sorry, the server is not responding, try again later',
      });
    } finally {
      this.setState({ isLoading: false });
    }
  };


  getLargeImg = largeImage => {
    this.setState({ largeImage, showModal: true });
  };

  toggleModal = () => {
    this.setState({ showModal: !this.state.showModal });
  };



  onFormSubmit = searchQuery => {
    this.setState({ images: [], searchQuery, page: 1 });
  };

  render() {
    const { showModal, isLoading, images, largeImage, error, isActiveBtn } =
      this.state;

    return (
      <div className={css.mainDiv}>
        <Searchbar onSubmit={this.onFormSubmit} />
        {error}
        <ImageGalleryArr items={images} onGetImages={this.getLargeImg} />
        {isLoading && <Loader />}
        {isActiveBtn && <Button onLoadMoreImg={() => this.getImg} />}
        {showModal && (
          <Modal largeImage={largeImage} onClick={this.toggleModal} />
        )}
      </div>
    );
  }
}
