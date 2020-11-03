import React from 'react';
import { render } from '@testing-library/react';
import BookSearch from './../BookSearch'

test('renders Search component', () => {
  const { container } = render(<BookSearch />);
  const searchParams = container.querySelector('.search-params');
  expect(searchParams).toBeInTheDocument();
});
