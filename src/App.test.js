import { render, cleanup } from '@testing-library/react';
import App from './App';


afterEach(cleanup);
test('renders learn react link', () => {
  render(<App />);
});
