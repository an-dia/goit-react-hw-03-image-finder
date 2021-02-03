import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import LoaderSpinner from './components/Loader';
import Modal from './components/Modal';
import Button from './components/Button';
import pixabayApi from './servises/pixabay-api';
// import { ReactComponent as LoupeIcon } from "./components/icons/loupe .svg";

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
    showModal: false,
  };

  handleFormSubmit = imgName => {
    this.setState({ imgName });
  };

  handleClickLoadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  // toggleModal = () => {
  //   this.setState(({ showModal }) => ({
  //     showModal: !showModal,
  //   }));
  // }

  componentDidUpdate(prevProps, prevState) {
    const prevImg = prevState.imgName;
    const nextImg = this.state.imgName;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevImg !== nextImg) {
      this.setState({ status: Status.PENDING });

      pixabayApi
        .fetchImgPixabay(nextImg)
        .then(images =>
          this.setState({
            images: [...images.hits],
            status: Status.RESOLVED,
          }),
        )
        .catch(error => this.setState({ error, status: Status.REJECTED }));
      // .finally(() => {
      //   window.scrollTo({
      //     top: document.documentElement.scrollHeight,
      //     behavior: 'smooth',
      //   });
      // });
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
        .catch(error => this.setState({ error, status: Status.REJECTED }))
        .finally(() => {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        });
    }
  }

  render() {
    const { images, status, showModal } = this.state;

    // imgName={imgName}  {images.length !== 0 && this.toggleModal
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {status === Status.RESOLVED && images.length !== 0 && <ImageGallery images={images} />}
        {status === Status.PENDING && <LoaderSpinner />}
        {status === Status.RESOLVED && images.length !== 0 && (
          <Button onClick={this.handleClickLoadMore} aria-label="Найти картинку" />
        )}

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1>This content modal</h1>
            {/* <button type='button' onClick={this.toggleModal}>Closed</button> */}
          </Modal>
        )}
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}
