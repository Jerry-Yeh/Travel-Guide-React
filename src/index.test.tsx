import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import { RouterProvider } from 'react-router-dom';

import router from 'router';

describe('full app test', () => {
  test('full app rendering', async () => {
    render(<RouterProvider router={router} />);

    const textElement = screen.getByText(/探索台灣之美/i);

    expect(textElement).toBeInTheDocument();
  });
});
