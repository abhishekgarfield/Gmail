import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isloading: false,
};

const loader = createSlice({
  name: "loader",
  initialState,
  reducers: {
    setIsloading: (state, action) => {
      state.isloading = action.payload;
    },
  },
});

export const { setIsloading } = loader.actions;
export default loader.reducer;
