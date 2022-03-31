import { useContext } from 'react';
import { AppContext } from '../../app/context';
import styles from './Filter.module.css';

export function Filter() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div className={styles.container}>
      {
        state.unknownGenderNumber > 0 && <div className="alert alert-warning" role="alert">
          There are {state.unknownGenderNumber} unknown genders that won`t be included in filtering.
        </div>
      }
    </div>
  )
}