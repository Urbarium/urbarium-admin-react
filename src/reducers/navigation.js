const initialState = {
  key: 'home',
  id: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
  case 'PRODUCT_NAV_SET':
    return { ...initialState, ...action.payload };
  default:
    return { ...state };
  }
};
