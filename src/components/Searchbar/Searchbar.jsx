import { Component } from 'react';
import { toast } from 'react-toastify';

export default class Searchbar extends Component {
  state = {
    imgName: '',
  };

  handleImgNameChange = event => {
    this.setState({ imgName: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    const { imgName } = this.state;
    event.preventDefault();

    if (imgName.trim() === '') {
      return toast.error('Please, add name pokemon!');
    }

    this.props.onSubmit(imgName);
    this.setState({ imgName: '' });
  };

  render() {
    const { imgName } = this.state;

    return (
      <header className="Searchbar">
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={imgName}
            onChange={this.handleImgNameChange}
          />
        </form>
      </header>
    );
  }
}
