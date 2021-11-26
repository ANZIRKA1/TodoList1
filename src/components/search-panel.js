import React from 'react';

const text = ['search', 'panel'];

const searchStyle = {
  fontSize: '20px'
};

const SearchPanel = () => {
  return <input
  style = {searchStyle}
  placeholder={text[0]} />;
};

export default SearchPanel;