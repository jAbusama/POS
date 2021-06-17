import React from 'react';
import { Search } from '@material-ui/icons';
import './style.scss';

const SearchForm = () => {
  return (
    <form className='search__form elevation rounded'>
      <div className='search__icon'>
        <Search fontSize='large' />
      </div>
      <div className='input__search'>
        <input type='text' className='input' placeholder='Search' />
      </div>
    </form>
  );
};

export default SearchForm;
