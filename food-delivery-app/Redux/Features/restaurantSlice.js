import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurant: {
    id: null,
    title: null,
    imgUrl: null,
    rating: null,
    short_desc: null,
    address: null,
    dishes: null,
  },
};

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers.
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setRestaurant } = restaurantSlice.actions;

//Selector Allow us to access the store
export const selectRestaurant = (state) => state.restaurant.restaurant;

export default restaurantSlice.reducer;
