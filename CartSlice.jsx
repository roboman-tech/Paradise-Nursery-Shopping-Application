import { createSlice } from '@reduxjs/toolkit';

// Initial state for the cart
const initialState = {
  items: [],
};

// Create the cart slice using createSlice from Redux Toolkit
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add item to cart
    addItem: (state, action) => {
      const item = action.payload;
      // Check if item already exists in the cart
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        // If the item already exists, just increment the quantity
        existingItem.quantity += 1;
      } else {
        // If the item doesn't exist, add it to the cart with quantity 1
        state.items.push({ ...item, quantity: 1 });
      }
    },
    
    // Remove item from cart
    removeItem: (state, action) => {
      const itemId = action.payload;
      // Filter out the item to remove it from the cart
      state.items = state.items.filter((item) => item.id !== itemId);
    },
    
    // Update quantity of an item
    updateQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const item = state.items.find((i) => i.id === itemId);
      if (item) {
        // Update the item's quantity
        item.quantity = quantity;
      }
    },
  },
});

// Export actions to use in components
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Export the reducer to be included in the store
export default cartSlice.reducer;