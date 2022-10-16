import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sent: false,
};

const sent = createSlice({
  name: "sent",
  initialState,
  reducers: {
    setIssent: (state, action) => {
      state.sent = action.payload;
    },
  },
});

export const { setIssent } = sent.actions;
export default sent.reducer;
