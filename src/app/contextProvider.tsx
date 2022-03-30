import { ReactNode, useEffect, useReducer } from 'react';
import { AppContext, defaultState } from './context';
import { AppReducer } from './reducer';

export function ContextProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(AppReducer, defaultState);

  useEffect(() => {
    dispatch({
      type: 'filter'
    })
  }, [state.filter])


  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}