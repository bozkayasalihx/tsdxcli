import { select } from '../src';

describe('selection', () => {
  it('choosed selection', () => {
    expect(select.start()).toContainEqual(['node', 'react', 'react_native']);
  });
});
