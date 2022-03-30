import { useContext, useEffect } from 'react';
import { AppContext } from '../../app/context';
import { ProductItemsService } from '../../services/productItemsService';
import { countUnknownGenders } from '../../shared/utilities/countUnknownGender';
import Filter from '../Filter';
import Search from '../Search';
import styles from './App.module.css';

export function App() {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    ProductItemsService.fetchItems()
      .then((res) => {
        dispatch({
          type: 'setUnknownGenders',
          payload: countUnknownGenders(res)
        })
      });
  }, [dispatch])


  return (
    <div className={styles.container}>
      <Search></Search>
      <Filter></Filter>
    </div>
  );
}