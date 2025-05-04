import { createSlice } from "@reduxjs/toolkit";
import { toast, Bounce } from "react-toastify";

const toastOptions = {
  position: "top-right",
  autoClose: 4000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: 0,
  theme: "colored",
  transition: Bounce,
};

const itemAddedToast = () =>
  toast.success("Item added to the cart!", toastOptions);

const itemRemovedToast = () =>
  toast.success("Item removed from the cart!", toastOptions);

const itemAlreadyInTheCartToast = () =>
  toast.info("Item already in the cart!", toastOptions);

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const doesItemExist = state.cartItems.find(
        (d) => d._id === action.payload._id
      );

      if (doesItemExist) {
        itemAlreadyInTheCartToast();
      } else {
        state.cartItems.push(action.payload);
        itemAddedToast();
        console.log("Item added to cart!");
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      itemRemovedToast();
    },
    clearCart: (state) => (state.cartItems = []),
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
