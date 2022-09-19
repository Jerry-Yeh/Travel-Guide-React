import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Input from './Input';

describe('Input test', () => {
  test('should able to type in input correctly', () => {
    const ref = {
      current: {
        focus: jest.fn(),
      },
    };
    const onChange = jest.fn();
    const mockText = 'some text';

    render(<Input ref={ref} onChange={onChange} />);
    const textbox = screen.getByRole('textbox');

    userEvent.type(textbox, mockText);

    expect(onChange).toHaveBeenCalled();
    expect(textbox).toHaveValue(mockText);
  });
});
