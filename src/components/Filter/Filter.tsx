import { ChangeEvent, useContext } from 'react';
import { AppContext } from '../../app/context';
import { GENDER } from '../../shared/models/Gender';
import styles from './Filter.module.css';

export function Filter() {
  const { state, dispatch } = useContext(AppContext);

  const onSalePriceChange = () => {
    dispatch({
      type: 'setSalePrice',
      payload: !state.filter.salePrice
    });
  }

  const onGenderSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const gender = Object.keys(GENDER).find((key: string) => {
      return GENDER[key] === e.currentTarget.value
    }) || null;
    dispatch({
      type: 'setGender',
      payload: gender ? GENDER[gender] : null
    });
  }

  return (
    <div className={styles.container}>
      <select
        className="form-select"
        onChange={onGenderSelectChange}
        value={state.filter.gender || ''}
      >
        <option value=''>all genders</option>
        {Object.values(GENDER).map((gender, index) => {
          return <option value={gender} key={index}>{gender}</option>
        })}
      </select>
      <div className={styles.formCheck}>
        <input
          className="form-check-input"
          onChange={onSalePriceChange}
          type="checkbox" checked={state.filter.salePrice}
          id='salePriceCheck' />
        <label className="form-check-label" html-for="salePriceCheck">
          Sale price
        </label>
      </div>
    </div>
  )
}