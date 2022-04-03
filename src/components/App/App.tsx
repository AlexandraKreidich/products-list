import { useContext } from 'react';
import { AppContext } from '../../app/context';
import Filter from '../Filter';
import Search from '../Search';
import Table from '../Table';
import styles from './App.module.css';

export function App() {
  const { state } = useContext(AppContext);

  return (
    <div data-testid='app-container' className={styles.container}>
      <div className={styles.controls}>
        <Search></Search>
        <Filter></Filter>
      </div>
      {
        state.unknownGenderNumber > 0 && <div className={`alert alert-warning ${styles.appWarning}`} role="alert">
          There are {state.unknownGenderNumber} unknown genders that won`t be included in filtering.
        </div>
      }
      <Table></Table>
    </div>
  );
}