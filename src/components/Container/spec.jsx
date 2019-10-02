'use-strict';

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup, render } from '@testing-library/react';

import Container from './index';

afterEach(cleanup);

describe('<Container>{children}</Container>', () => {
  test('Renders passed children.', () => {
    const { queryByTestId } = render(
      <Container>
        <div data-testid="target" />
      </Container>,
    );
    expect(queryByTestId('target')).toBeInTheDocument();
  });

  test('Handles className prop.', () => {
    const { queryByTestId } = render(
      <Container data-testid="target" className="foo">
        <div />
      </Container>,
    );
    expect(queryByTestId('target')).toHaveClass('container', 'foo');
  });

  test('Has class "container" when fluid prop is false.', () => {
    const { queryByTestId } = render(
      <Container data-testid="target">
        <div />
      </Container>,
    );
    expect(queryByTestId('target')).toHaveClass('container');
  });

  test('Has class "container-fluid" when fluid prop is true.', () => {
    const { queryByTestId } = render(
      <Container data-testid="target" fluid>
        <div />
      </Container>,
    );
    expect(queryByTestId('target')).toHaveClass('container-fluid');
  });
});
