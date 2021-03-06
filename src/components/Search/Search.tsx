import React, { useContext } from 'react'
import { AppContext } from '../../app/context'
import { debounce } from '../../shared/utilities/debounce';
import styles from './Search.module.css';

export function Search() {
  const { state, dispatch } = useContext(AppContext);

  const handleInput = debounce((value: string) => {
    dispatch({
      type: 'setSearchValue',
      payload: value[0]
    });
  });

  return (<div className={styles.container}>
    <label html-for="search">Enter ID ot Title</label>
    <input
      type="text"
      className="form-control"
      data-testid='search'
      id='search'
      placeholder="ID/Email"
      onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => handleInput(e.currentTarget.value)}></input>
  </div>)
}