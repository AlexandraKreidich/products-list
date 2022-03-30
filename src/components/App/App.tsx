import { ContextProvider } from '../../app/contextProvider';
import Search from '../Search';
import styles from './App.module.css';

export function App() {
  return (
    <ContextProvider>
      <div className={styles.container}>
        <Search></Search>
      </div>
    </ContextProvider>
  );
}