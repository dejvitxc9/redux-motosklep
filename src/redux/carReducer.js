import { createSlice } from "@reduxjs/toolkit";

export const carReducer = createSlice({
  name: "carReducer",
  initialState: [
    { brand: "Volkswagen", price: 40000, type: "Kombi", supplier: "MSWiA" },
  ],
  reducers: {
    addCar: (state, action) => {
      const { brand, price, type, supplier } = action.payload;
      state.push({
        brand: brand,
        price: price,
        type: type,
        supplier: supplier,
      });
    },
  },
});

export const { addCar } = carReducer.actions;
export default carReducer.reducer;
