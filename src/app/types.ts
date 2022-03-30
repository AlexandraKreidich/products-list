import { ProductItem } from '../shared/models/ProductItem'

export type State = {
  searchValue: string,
  items: ProductItem[]
}

export type Action =
  {
    type: 'setItems';
    payload: {
      key: string;
      value: ProductItem[];
    };
  }
  | {
    type: 'search';
    payload: {
      key: string;
      value: string;
    };
  };

export type UpdateType = React.Dispatch<Action>;

export type AppContextType = {
  state: State;
  dispatch: UpdateType;
}