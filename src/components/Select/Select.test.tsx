import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Select from './Select';

describe('Select test', () => {
  test('select options', () => {
    const ref = {
      current: {},
    };
    const mockOptions = [
      { label: 'A', value: '1' },
      { label: 'B', value: '2' },
      { label: 'C', value: '3' },
    ];

    render(<Select ref={ref} options={mockOptions} />);
    const listbox = screen.getByRole('combobox');

    userEvent.selectOptions(listbox, ['2']);

    expect(screen.getByRole<HTMLOptionElement>('option', { name: 'B' }).selected).toBe(true);
  });
});
