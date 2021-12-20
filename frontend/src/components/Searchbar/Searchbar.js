import React from 'react';
import { InputBase } from '@material-ui/core';
import { Search } from '@material-ui/icons';

export default function Searchbar() {
  return (
    <div className='searchbar'>
      <Search className='searchIcon' />
      <InputBase
        className='searchInput'
        placeholder='Cerca amici, corsi, eventi...'
        inputProps={{ 'aria-label': 'search' }}
      />
    </div>
  );
}
