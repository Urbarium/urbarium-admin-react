import React from 'react';

export const ProductNavContext = React.createContext({
  toggleView: (id) => {},
});

export default ProductNavContext;