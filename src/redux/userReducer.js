import { createSlice } from "@reduxjs/toolkit";

export const userReducer = createSlice({
  name: "user",
  initialState: { name: "", surname: "", email: "" },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setSurname: (state, action) => {
      state.surname = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    resetUser: (state, action) => {
      state.name = "";
      state.surname = "";
      state.email = "";
    },
  },
});

export const { setName, setSurname, setEmail, resetUser } = userReducer.actions;
export default userReducer.reducer;
