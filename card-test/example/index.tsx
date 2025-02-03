import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard } from '../src';

const App = () => {
  return (
    <div>
      <ProductCard 
        product={{
          id: '1',
          title: 'Hey',
          image: '',
        }}
      >
      </ProductCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
