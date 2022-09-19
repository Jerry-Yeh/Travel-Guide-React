import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Button from './Button';

describe('Button test', () => {
  test('mock function invoked when button clicked', () => {
    const mockFunc = jest.fn();
    const mockText = 'Test';

    render(<Button onClick={mockFunc}>{mockText}</Button>);
    const button = screen.getByText(mockText);

    userEvent.click(button);

    expect(mockFunc).toBeCalledTimes(1);
  });
});
