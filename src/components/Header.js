import React from 'react';
import styled from 'styled-components';

const Header = ({ query, setQuery, gettingFilms }) => {
  return (
    <SearchBar onSubmit={gettingFilms}>
      <input 
        type="text" 
        placeholder="Найти фильм" 
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Поиск</button>
    </SearchBar>
  );
};

export default Header;

const SearchBar = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  
  input {
    width: 300px;
    padding: 10px;
    margin-right: 10px;
    border: 1px solid #444;
    border-radius: 4px;
    background-color: #333;
    color: #fff;
    outline: none;

    &::placeholder {
      color: #aaa;
    }
  }

  button {
    padding: 10px 20px;
    border: none;
    background-color: #ff9f00;
    color: white;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
      background-color: #ffa726;
    }
  }
`;
