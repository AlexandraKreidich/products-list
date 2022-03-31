import { ReactNode, useEffect, useReducer } from 'react';
import { ProductItemsService } from '../services/productItemsService';
import { countUnknownGenders } from '../shared/utilities/countUnknownGender';
import { AppContext, defaultState } from './context';
import { AppReducer } from './reducer';

export function ContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(AppReducer, defaultState);

  useEffect(() => {
    ProductItemsService.fetchItems()
      .then((res) => {
        dispatch({
          type: 'setUnknownGenders',
          payload: countUnknownGenders(res)
        });
        dispatch({
          type: 'setItems',
          payload: res
        })
      });
  }, [dispatch])

  useEffect(() => {
    if (state.items.length > 0) {
      dispatch({
        type: 'filter'
      })
    }
  }, [state.filter, state.items.length])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}