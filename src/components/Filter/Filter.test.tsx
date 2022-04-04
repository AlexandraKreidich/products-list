import { screen, render, cleanup } from '@testing-library/react';
import { ReactNode } from 'react'
import { Filter } from './Filter';
import { State } from '../../app/types';
import { AppContext, defaultState, defaultUpdate } from '../../app/context';

afterEach(cleanup);

describe('test filters', () => {
  test('Gender shows default value', () => {
    render(<Filter />);
    let options = screen.getAllByTestId('select-option');
    expect((options[0] as HTMLOptionElement).selected).toBeTruthy();
    expect((options[1] as HTMLOptionElement).selected).toBeFalsy();
    expect((options[2] as HTMLOptionElement).selected).toBeFalsy();
    expect((options[3] as HTMLOptionElement).selected).toBeFalsy();
  })

  test('Sale price checkbox shows default value', () => {
    render(<Filter />);
    expect(screen.getByTestId('sale-price-check')).not.toBeChecked();
  })

  const customRender = (ui: ReactNode, { providerProps }: { providerProps: Partial<State> }) => {
    return render(
      <AppContext.Provider value={
        { state: { ...defaultState, ...providerProps }, dispatch: defaultUpdate }
      }>
        {ui}
      </AppContext.Provider>
    )
  }

  test('Sale price checkbox shows value from provider', () => {
    const providerProps: Partial<State> = {
      filter: {
        ...defaultState.filter,
        salePrice: true
      },
    }
    customRender(<Filter />, { providerProps })
    expect(screen.getByTestId('sale-price-check')).toBeChecked();
  })

  test('Gender select shows value from provider', () => {
    const providerValue = 'female';
    const providerProps: Partial<State> = {
      filter: {
        ...defaultState.filter,
        gender: providerValue
      },
    }
    customRender(<Filter />, { providerProps })
    expect((screen.getByText(providerValue) as HTMLOptionElement).selected).toBeTruthy();
  })
});