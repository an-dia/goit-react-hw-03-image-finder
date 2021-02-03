// import { Component } from 'react';
// import { toast } from 'react-toastify';
import ImageGalleryItem from '../ImageGalleryItem';
// import pixabayApi from '../../servises/pixabay-api';
// import Loader from '../Loader';
// import { Status } from '../../App';

// const Status = {
//   IDLE: 'idle',
//   PENDING: 'pending',
//   RESOLVED: 'resolved',
//   REJECTED: 'rejected',
// };

import PropTypes from 'prop-types';

const ImageGallery = ({ images }) => {
  return (
    <ul className="ImageGallery">
      {images.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem key={id} webformatURL={webformatURL} tags={tags} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }),
  ),
};

export default ImageGallery;

// export default class ImageGallery extends Component {
//    state = {
//     images: [],
//     error: null,
//     status: Status.IDLE,
//   }

//    componentDidUpdate(prevProps, prevState) {
//     // const BASE_URL = 'https://pixabay.com/api/';
//     // const KEY = '19252909-b3fce789e9067414046d74c47';
//     const prevImg = prevProps.imgName;
//     const nextImg = this.props.imgName;

//      if (prevImg !== nextImg) {
//        this.setState({ status: Status.PENDING});

//         // fetch(`${BASE_URL}?q=${this.props.imgName}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
//         // .then(response => {
//         //   if (response.ok) {
//         //     return response.json()
//         //   }
//         //   return Promise.reject(
//         //     new Error(`Oh my god, everything is gone !!!`),
//         //   );
//         // })
//        pixabayApi.fetchImgPixabay(this.props.imgName)
//         .then(images => this.setState({ images: [...images.hits], status: Status.RESOLVED }))
//         .catch(error => this.setState({ error, status: Status.REJECTED }))
//      }

//   }

//   render() {
//     const { images} = this.state;

//     // if (status === Status.IDLE) {
//     //   return toast('Please enter a search name!')
//     // }

//     // if (status === Status.PENDING) {
//     //   return <Loader/>
//     // }

//     //  if (status === Status.REJECTED) {
//     //    return toast.error(error.message)
//     // }

//     // if (status === Status.RESOLVED ) {
//     //    return <>
//     //   <ul className="ImageGallery">
//     //       {images.length !== 0 &&
//     //         images.map(({ id, webformatURL, tags }) => (
//     //           <ImageGalleryItem
//     //             key={id}
//     //             webformatURL={webformatURL}
//     //             tags={tags}
//     //           />
//     //         )
//     //         )}
//     //       </ul>

//     //   </>
//     // }

//     return (
//       <ul className="ImageGallery">
//           {images.length !== 0 &&
//             images.map(({ id, webformatURL, tags }) => (
//               <ImageGalleryItem
//                 key={id}
//                 webformatURL={webformatURL}
//                 tags={tags}
//               />
//             )
//             )}
//       </ul>
//     )
//   }
// }
