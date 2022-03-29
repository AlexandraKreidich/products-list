import { Action, State } from './types';

export function AppReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'setItems':
      return {
        ...state,
        items: action.payload.value
      }
    case 'search':
      return {
        ...state,
        searchValue: action.payload.value
      }
    default:
      throw new Error();
  }
}

