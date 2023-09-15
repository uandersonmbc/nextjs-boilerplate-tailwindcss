/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  it('renders correctly', () => {
    render(<Input />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
