import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import PropTypes from 'prop-types';

import { Component } from 'react';

export default class LoaderSpinner extends Component {
  state = {};
  render() {
    return (
      <div>
        <Loader style={{ margin: 'auto' }} type="ThreeDots" color="#00BFFF" height={60} width={60} />
      </div>
    );
  }
}

// const Loader = () => {
//   return (
//     <div>
//        <Loader
//         style={{ margin: "auto" }}
//         type="ThreeDots"
//         color="#00BFFF"
//         height={60}
//         width={60} />
//     </div>
//   );
// };

// Loader.propTypes = {

// };
