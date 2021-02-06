import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Loader.module.css';

import { Component } from 'react';

export default class LoaderSpinner extends Component {
  state = {};
  render() {
    return (
      <div className={s.Container}>
        <Loader type="BallTriangle" color="#00BFFF" height={60} width={60} />
      </div>
    );
  }
}
