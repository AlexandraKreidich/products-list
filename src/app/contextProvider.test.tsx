import { cleanup } from '@testing-library/react';
import { defaultState } from './context';
import { AppReducer } from './reducer';

afterEach(cleanup)

describe('test the reducer and actions', () => {
  test('should return the initial state', () => {
    expect(defaultState).toEqual({
      filter: {
        searchValue: '',
        gender: null,
        salePrice: false,
      },
      filteredItems: [],
      items: [],
      unknownGenderNumber: 0
    })
  })

  test('should change saleprice from false to true', () => {
    expect(AppReducer(defaultState, { type: 'setSalePrice', payload: true }))
      .toEqual({
        filter: {
          searchValue: '',
          gender: null,
          salePrice: true,
        },
        filteredItems: [],
        items: [],
        unknownGenderNumber: 0
      })
  })
})