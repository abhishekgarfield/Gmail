import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSelected: false,
  emailData: null,
};

const showEmail = createSlice({
  name: "emailshow",
  initialState,
  reducers: {
    setIsselected: (state, action) => {
      state.isSelected = action.payload;
    },
    setemaildata: function (state, action) {
      state.emailData = action.payload;
    },
    removeemaildata(state, action) {
      state.emailData = null;
    },
  },
});

export const { setIsselected, setemaildata, removeemaildata } =
  showEmail.actions;
export default showEmail.reducer;
