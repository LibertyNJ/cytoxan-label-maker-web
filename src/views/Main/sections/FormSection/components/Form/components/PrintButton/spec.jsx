'use-strict';

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup, render } from '@testing-library/react';

import PrintButton, { BASE_CLASS_NAME } from './index';

beforeEach(cleanup);

describe('<PrintButton />', () => {
  test('Displays the word "Print".', () => {
    const { queryByText } = render(<PrintButton />);
    expect(queryByText('Print')).toBeInTheDocument();
  });

  test('Handles className prop.', () => {
    const testClass = 'foo';
    const { queryByTestId } = render(<PrintButton className={testClass} data-testid="target" />);
    expect(queryByTestId('target')).toHaveClass(BASE_CLASS_NAME, testClass);
  });
});
