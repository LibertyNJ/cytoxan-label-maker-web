'use-strict';

import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  cleanup, fireEvent, render, wait,
} from '@testing-library/react';

import App from './App';

beforeEach(cleanup);

describe('<App />', () => {
  test('Disables and enables medication label and form section when toggling medication checkbox.', () => {
    const { queryAllByText, queryByLabelText } = render(<App />);
    fireEvent.change(queryByLabelText(/cyclophosphamide/i));
    wait(() => expect(queryAllByText(/cyclophosphamide/i)).toHaveLength(1));
    fireEvent.change(queryByLabelText(/cyclophosphamide/i));
    wait(() => expect(queryAllByText(/cyclophosphamide/i)).toHaveLength(4));
  });

  test('Enables and disables "Infusion time" field when toggling override checkbox.', () => {
    const { queryAllByLabelText } = render(<App />);
    fireEvent.change(queryAllByLabelText('Override')[0]);
    wait(() => expect(queryAllByLabelText('Infusion time')[0]).toBeEnabled());
    fireEvent.change(queryAllByLabelText('Override')[0]);
    wait(() => expect(queryAllByLabelText('Infusion time')[0]).toBeDisabled());
  });

  test('Prints when pressing the "Print" button.', () => {
    window.print = jest.fn();
    const { queryByText } = render(<App />);
    fireEvent.click(queryByText('Print'));
    expect(window.print).toHaveBeenCalled();
  });

  test('Updates labels when changing the "Date of birth" field.', () => {
    const { queryAllByText, queryByLabelText } = render(<App />);
    fireEvent.change(queryByLabelText('Date of birth'), { target: { value: '2019-10-02' } });
    wait(() => expect(queryAllByText('10/02/2019')).toHaveLength(7));
  });

  test('Updates labels when changing the "First" field.', () => {
    const { queryAllByText, queryByLabelText } = render(<App />);
    fireEvent.change(queryByLabelText('First'), { target: { value: 'John' } });
    wait(() => expect(queryAllByText('John')).toHaveLength(7));
  });

  test('Updates labels when changing the "Infusion time" field.', () => {
    const { queryByText, queryAllByLabelText } = render(<App />);
    fireEvent.change(queryAllByLabelText('Infusion time')[0], {
      target: { value: '12345' },
    });
    wait(() => expect(queryByText('12,345')).toBeInTheDocument());
  });

  test('Updates labels when changing the "Last" field.', () => {
    const { queryAllByText, queryByLabelText } = render(<App />);
    fireEvent.change(queryByLabelText('Last'), { target: { value: 'Doe' } });
    wait(() => expect(queryAllByText('Doe')).toHaveLength(7));
  });

  test('Updates labels when changing the "MRN" field.', () => {
    const { queryAllByText, queryByLabelText } = render(<App />);
    fireEvent.change(queryByLabelText('MRN'), { target: { value: '12345678' } });
    wait(() => expect(queryAllByText('12345678')).toHaveLength(7));
  });

  test('Updates labels when changing the "M.I." field.', () => {
    const { queryAllByText, queryByLabelText } = render(<App />);
    fireEvent.change(queryByLabelText('M.I.'), { target: { value: 'G' } });
    wait(() => expect(queryAllByText('G')).toHaveLength(7));
  });

  test('Updates labels when changing the "Preparation date and time" field.', () => {
    const { queryAllByText, queryByLabelText } = render(<App />);
    fireEvent.change(queryByLabelText('Preparation date and time'), {
      target: { value: '2019-10-02T13:13:00' },
    });
    wait(() => expect(queryAllByText('10/02/2019 13:13')).toHaveLength(7));
  });

  test('Updates labels when changing the "Special instructions" field.', () => {
    const { queryAllByText, queryAllByLabelText } = render(<App />);
    fireEvent.change(queryAllByLabelText('Special instructions')[0], {
      target: { value: 'Foo bar baz.' },
    });
    wait(() => expect(queryAllByText('Foo bar baz.')).toHaveLength(2));
  });

  test('Updates labels when changing the "Strength" field.', () => {
    const { queryByText, queryAllByLabelText } = render(<App />);
    fireEvent.change(queryAllByLabelText('Strength')[0], {
      target: { value: '12345' },
    });
    wait(() => expect(queryByText('12,345')).toBeInTheDocument());
  });

  test('Updates labels when changing the "Verifier" field.', () => {
    const { queryAllByText, queryByLabelText } = render(<App />);
    fireEvent.change(queryByLabelText('Verifier'), { target: { value: 'AB' } });
    wait(() => expect(queryAllByText('AB')).toHaveLength(7));
  });
});
