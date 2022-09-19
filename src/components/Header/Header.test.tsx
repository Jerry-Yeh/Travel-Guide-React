import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Header from './Header';

describe('Header Test', () => {
  test('', async () => {
    render(<Header />);
    const user = userEvent.setup();

    await user.click(screen.getByText(/探索景點/i));
    expect(screen.getByText(/探索景點/i));
  });
});
