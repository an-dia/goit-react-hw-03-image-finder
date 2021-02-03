import PropTypes from 'prop-types';

const ImageGalleryItem = ({ webformatURL, tags }) => (
  <li className="ImageGalleryItem">
    <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
  </li>
);

ImageGalleryItem.propTypes = {
  key: PropTypes.string,
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
};

export default ImageGalleryItem;
