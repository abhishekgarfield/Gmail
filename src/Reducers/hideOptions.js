import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  hidden: false,
};

const hideoptions = createSlice({
  name: "hider",
  initialState,
  reducers: {
    setIsHiddden: (state, action) => {
      state.hidden = action.payload;
    },
  },
});

export const { setIsHiddden } = hideoptions.actions;
export default hideoptions.reducer;
