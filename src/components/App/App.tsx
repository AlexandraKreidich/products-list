import Filter from '../Filter';
import Search from '../Search';
import Table from '../Table';
import styles from './App.module.css';

export function App() {
  return (
    <div className={styles.container}>
      <Search></Search>
      <Filter></Filter>
      <Table></Table>
    </div>
  );
}