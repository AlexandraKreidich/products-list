import { filterItems } from './../shared/utilities/filter';
import { Action, State } from './types';

export function AppReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'filter':
      const items = filterItems(state.items, state.filter);
      return {
        ...state,
        items: items
      }
    case 'setItems':
      return {
        ...state,
        items: action.payload
      }
    case 'setSearchValue':
      return {
        ...state,
        filter: {
          ...state.filter,
          searchValue: action.payload
        }
      }
    case 'setGender':
      return {
        ...state,
        filter: {
          ...state.filter,
          gender: action.payload
        }
      }
    case 'setSalePrice':
      return {
        ...state,
        filter: {
          ...state.filter,
          salePrice: action.payload
        }
      }
    case 'setUnknownGenders':
      return {
        ...state,
        unknownGenderNumber: action.payload
      }
    default:
      throw new Error();
  }
}

