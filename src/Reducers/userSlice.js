import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      
    },
    removeUser(state, action) {
      state.user = action.payload;
    },
  },
});
export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
