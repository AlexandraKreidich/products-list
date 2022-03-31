import { createContext } from 'react';
import { AppContextType, State, UpdateType } from './types';

export const defaultState: State = {
  filter: {
    searchValue: '',
    gender: null,
    salePrice: false,
  },
  filteredItems: [],
  items: [],
  unknownGenderNumber: 0
}

export const defaultUpdate: UpdateType = () => defaultState;

export const AppContext = createContext<AppContextType>({
  state: defaultState,
  dispatch: defaultUpdate
});