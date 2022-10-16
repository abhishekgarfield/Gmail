import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hidden: false,
};

const Composemessage = createSlice({
  name: "composemessage",
  initialState,
  reducers: {
    setIsHiddden: (state, action) => {
      state.hidden = action.payload;
    },
  },
});

export const { setIsHiddden } = Composemessage.actions;
export default Composemessage.reducer;
