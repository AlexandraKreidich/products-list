import { filterItems } from './../shared/utilities/filter';
import { Action, State } from './types';

export function AppReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'filter':
      const items = filterItems(state.items, state.filter);
      return {
        ...state,
        filteredItems: items
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
    case 'setImage':
      state.images.set(action.payload.key, action.payload.value);
      return {
        ...state
      }
    default:
      throw new Error();
  }
}

