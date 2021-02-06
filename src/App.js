import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import LoaderSpinner from './components/Loader';
import Modal from './components/Modal';
import Button from './components/Button';
import pixabayApi from './servises/pixabay-api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class App extends Component {
  state = {
    imgName: '',
    images: [],
    error: null,
    status: Status.IDLE,
    page: 1,
    largeImageURL: '',
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevImg = prevState.imgName;
    const nextImg = this.state.imgName;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevImg !== nextImg) {
      this.setState({ status: Status.PENDING });

      pixabayApi
        .fetchImgPixabay(nextImg)
        .then(images => {
          if (images.hits.length === 0) {
            return this.setState({
              error: `Could not find picture for request ${nextImg}`,
              status: Status.REJECTED,
            });
          }
          this.setState({
            images: images.hits,
            status: Status.RESOLVED,
          });
        })
        .catch(error => this.setState({ error, status: Status.REJECTED }));
      // this.resetPage();
    }

    if (prevPage !== nextPage) {
      this.setState({ status: Status.PENDING });
      pixabayApi
        .fetchImgPixabay(nextImg, nextPage)
        .then(images => {
          this.setState(prevState => ({
            images: [...prevState.images, ...images.hits],
            status: Status.RESOLVED,
          }));
        })
        .catch(error => this.setState({ error, status: Status.REJECTED }));
    }
  }

  onScroll = () => {
    setTimeout(() => {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }, 1000);
  };

  handleFormSubmit = imgName => {
    this.setState({ imgName });
  };

  handleClickLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));

    this.onScroll();
  };

  toggleModal = largeImageURL => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
    this.setState({ largeImageURL: largeImageURL });
  };

  // resetPage = () => {
  //   this.setState({ page: 1 });
  // }

  render() {
    const { images, status, showModal, largeImageURL, error } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {status === Status.RESOLVED && images.length !== 0 && <ImageGallery images={images} onClose={this.toggleModal} />}
        {status === Status.PENDING && <LoaderSpinner />}
        {status === Status.RESOLVED && images.length !== 0 && (
          <Button onClick={this.handleClickLoadMore} aria-label="Найти картинку" />
        )}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImageURL} alt={images.tags} />
          </Modal>
        )}
        {status === Status.REJECTED && (
          <div style={{ textAlign: 'center', color: 'red' }}>
            <p>{error}</p>
          </div>
        )}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
