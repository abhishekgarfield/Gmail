import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  emails: null,
};

const emails = createSlice({
  name: "emails",
  initialState,
  reducers: {
    setemailsdata: function (state, action) {
      state.emails = action.payload;
    },
    removeemailsdata(state, action) {
      state.emails = null;
    },
  },
});

export const { setemailsdata, removeemailsdata } = emails.actions;
export default emails.reducer;
