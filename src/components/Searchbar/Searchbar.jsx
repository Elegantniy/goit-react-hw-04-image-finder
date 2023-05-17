import PropTypes from 'prop-types';
import { useState } from 'react';
import { FcSearch } from 'react-icons/fc';
import css from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChangeSearchQuery = e => {
    const searchQuery = e.currentTarget.value.toLowerCase();
    setSearchQuery(searchQuery);
  };

  const onSubmitEvent = e => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      return;
    }
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={onSubmitEvent}>
        <input
          className={css.serchInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Enter text to find"
          value={searchQuery}
          onChange={handleChangeSearchQuery}
        />
        <button type="submit" className={css.searchBtn}>
          <FcSearch />
        </button>
      </form>
    </header>
  );
};
Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
