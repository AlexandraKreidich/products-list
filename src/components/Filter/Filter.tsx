import { useContext } from 'react';
import { AppContext } from '../../app/context';

export function Filter() {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div>
      {
        state.unknownGenderNumber > 0 && <div className="alert alert-warning" role="alert">
          There are {state.unknownGenderNumber} unknown genders that won`t be included in filtering.
        </div>
      }
    </div>
  )
}