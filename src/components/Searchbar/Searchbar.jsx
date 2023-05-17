import { Component } from 'react';
import { FcSearch } from 'react-icons/fc';
import css from './Searchbar.module.css';

export class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChangeSearchQuery = e => {
    const searchQuery = e.currentTarget.value.toLowerCase();
    this.setState({ searchQuery });
  };

  onSubmitEvent = e => {
    e.preventDefault();
    const { searchQuery } = this.state;

    if (searchQuery.trim() === '') {
      return;
    }
    this.props.onSubmit(searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.onSubmitEvent}>
          <input
            className={css.serchInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Enter text to find"
            value={this.state.searchQuery}
            onChange={this.handleChangeSearchQuery}
          />
          <button type="submit" className={css.searchBtn}>
            <FcSearch />
          </button>
        </form>
      </header>
    );
  }
}
