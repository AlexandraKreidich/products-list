import { createContext } from 'react';
import { AppContextType, State } from './types';

export const defaultState: State = {
  searchValue: '',
  items: []
}

export const AppContext = createContext<Partial<AppContextType>>({
  state: defaultState
});