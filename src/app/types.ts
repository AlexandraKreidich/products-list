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
  unknownGenderNumber: number
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
    payload: GENDER;
  }
  | {
    type: 'setSalePrice',
    payload: boolean;
  } | {
    type: 'setUnknownGenders',
    payload: number;
  };

export type UpdateType = React.Dispatch<Action>;

export type AppContextType = {
  state: State;
  dispatch: UpdateType;
}