import { GENDER } from './../shared/models/Gender';
import { ProductItem } from '../shared/models/ProductItem';

export type Filter = {
  searchValue: string,
  gender: GENDER | null,
  salePrice: boolean
}

export type State = {
  filter: Filter,
  items: ProductItem[],
  filteredItems: ProductItem[],
  unknownGenderNumber: number,
  images: Map<string, string>
}

export type Action =
  {
    type: 'filter';
  }
  | {
    type: 'setItems';
    payload: ProductItem[]
  }
  | {
    type: 'setSearchValue',
    payload: string;
  }
  | {
    type: 'setGender',
    payload: GENDER | null;
  }
  | {
    type: 'setSalePrice',
    payload: boolean;
  } | {
    type: 'setUnknownGenders',
    payload: number;
  } | {
    type: 'setImage',
    payload: { key: string, value: string }
  };

export type UpdateType = React.Dispatch<Action>;

export type AppContextType = {
  state: State;
  dispatch: UpdateType;
}