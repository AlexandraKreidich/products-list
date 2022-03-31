import { Filter } from './../../app/types';
import { ProductItem } from './../models/ProductItem';

export const filterItems = (items: ProductItem[], filter: Filter): ProductItem[] => {
  const filteredItems = items.filter((item: ProductItem) => {
    const genderFilter: boolean = filter.gender ? item.gender === filter.gender : true;
    const searchFilter: boolean = filter.searchValue ? (item.gtin.includes(filter.searchValue) || item.title.includes(filter.searchValue)) : true;
    const salePriceFilter: boolean = filter.salePrice ? item.salePrice < item.price : true;
    return genderFilter && searchFilter && salePriceFilter;
  });
  return filteredItems;
}