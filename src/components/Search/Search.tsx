import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { searchCharactersThunk } from '../../store/characters/thunks';
import './Search.css';

export const Search = (): JSX.Element => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputText, setInputText] = useState<string>(
    searchParams.get('query') ?? ''
  );
  const [query, setQuery] = useState<string>(searchParams.get('query') ?? '');

  const onSearchFormSubmit = useCallback(
    (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      setQuery(inputText);
    },
    [inputText]
  );

  const onInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputText(e.target.value);
    },
    []
  );

  useEffect(() => {
    setSearchParams(`${query === '' ? '' : `query=${query}`}`);
    dispatch(searchCharactersThunk(query));
  }, [query, dispatch]);

  return (
    <form className="search" onSubmit={onSearchFormSubmit}>
      <button className="search__button"></button>
      <input
        value={inputText}
        placeholder="Filter by name..."
        type="search"
        className="search__input"
        onChange={onInputChange}
      />
    </form>
  );
};
