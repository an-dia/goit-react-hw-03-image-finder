import PropTypes from 'prop-types';

const Button = ({ onClick, ...allProps }) => {
  return (
    <button className="Button" type="button" onClick={onClick} {...allProps}>
      Load more
    </button>
  );
};

// Button.defaultProps = {
//   onClick: () => null,
//   children: null,
// }

Button.propTypes = {
  onClick: PropTypes.func,
  'aria-label': PropTypes.string.isRequired,
};

export default Button;
