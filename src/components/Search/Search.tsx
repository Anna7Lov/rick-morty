import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { selectAreCharactersFailed } from '../../store/characters/selectors';
import { searchCharactersThunk } from '../../store/characters/thunks';
import './Search.css';

export const Search = (): JSX.Element => {
  const dispatch = useDispatch();
  const error = useSelector(selectAreCharactersFailed);
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputText, setInputText] = useState<string>(
    searchParams.get('query') ?? localStorage.getItem('localQuery') ?? ''
  );
  const [query, setQuery] = useState<string>(
    searchParams.get('query') ?? localStorage.getItem('localQuery') ?? '');

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
    if (query !== localStorage.getItem('localQuery') || error) {
      dispatch(searchCharactersThunk(query));
    }
    localStorage.setItem('localQuery', query);
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
