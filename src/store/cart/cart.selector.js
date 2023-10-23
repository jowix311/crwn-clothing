import { createSelector } from "reselect";
//creating memoized state
const selectCartReducer = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCartReducer],
  (cart) => cart.cartItems
);

export const selectIsCartOpen = createSelector(
  [selectCartReducer],
  (cart) => cart.isCartOpen
);
//end creating memoized state

//using the memoized selector
export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, carItem) => total + carItem.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (total, carItem) => total + carItem.quantity * carItem.price,
    0
  )
);
