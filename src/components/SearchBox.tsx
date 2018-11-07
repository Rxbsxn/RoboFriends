import * as React from 'react';

interface ISearchBoxProps {
  onSearchChange(event: React.SyntheticEvent<HTMLInputElement>): void
}

const SearchBox = ({ onSearchChange }: ISearchBoxProps) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--green bg-lightest-blue'
        aria-label='Search robots'
        type='search'
        placeholder='search for robots'
        onChange={onSearchChange}
      />
    </div>
  );
}

export default SearchBox;
