import { createContext } from 'react';
import { AppContextType, State, UpdateType } from './types';

export const defaultState: State = {
  searchValue: '',
  items: []
}

export const defaultUpdate: UpdateType = () => defaultState;

export const AppContext = createContext<AppContextType>({
  state: defaultState,
  dispatch: defaultUpdate
});