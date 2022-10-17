import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  emails: null,
};

const emails = createSlice({
  name: "emails",
  initialState,
  reducers: {
    setemailsdata: function (state, action) {
        console.log(action.payload);
        state.emails=  action.payload.sort((a, b) => b.timestamp.localeCompare(a.timestamp));
        
    
    },
    removeemailsdata(state, action) {
      state.emails = null;
    },
  },
});

export const { setemailsdata, removeemailsdata } = emails.actions;
export default emails.reducer;
