import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard } from '../src';

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ProductCard product={{
        title: 'Test',
        image: '',
        id: '1'
      }}>
      </ProductCard>, 
    div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
