import { GENDER } from '../models/Gender';
import { ProductItem } from '../models/ProductItem';

export const countUnknownGenders = (items: ProductItem[]): number => {
  const array = items.filter(item => {
    return Object.values(GENDER).findIndex(e => e === item.gender) === -1
  })
  return array.length;
}