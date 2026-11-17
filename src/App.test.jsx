import { render, screen } from '@testing-library/react';
import App from './App';

// The app asks hurdle-backend (localhost:8080) for words; stand in for it here.
function mockBackend(words) {
  globalThis.fetch = vi.fn(() => Promise.resolve({ json: () => Promise.resolve(words) }));
}

afterEach(() => {
  vi.restoreAllMocks();
});

test('renders the title and an empty 6x5 grid', () => {
  mockBackend([]);
  const { container } = render(<App />);
  expect(screen.getByRole('heading', { name: /Hurdle/ })).toBeInTheDocument();
  expect(container.querySelectorAll('.grid-container .row-container')).toHaveLength(6);
  expect(container.querySelectorAll('.grid-container .square-container')).toHaveLength(30);
  expect(screen.getByText(/just a short sprint behind wordle/i)).toBeInTheDocument();
  expect(screen.getByText(/Keep after it/i)).toBeInTheDocument();
});

test('shows the loading state until the backend sends words', async () => {
  mockBackend([{ word: 'grand', id: 0 }]);
  render(<App />);
  expect(screen.getByText(/Loading hurdle/i)).toBeInTheDocument();
  expect(await screen.findByText(/Loaded hurdle/i)).toBeInTheDocument();
  expect(globalThis.fetch).toHaveBeenCalledWith('http://localhost:8080/apiv1/');
});

test('stays on the loading state when the backend sends no words', async () => {
  mockBackend([]);
  render(<App />);
  await Promise.resolve();
  expect(screen.getByText(/Loading hurdle/i)).toBeInTheDocument();
});
