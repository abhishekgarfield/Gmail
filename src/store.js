import { configureStore } from "@reduxjs/toolkit";
import hideOptions from "./Reducers/hideOptions";
import loaderSlice from "./Reducers/loaderSlice";
import showEmail from "./Reducers/showEmail";
import userSlice from "./Reducers/userSlice";
import Composemessage from "./Reducers/Compose"

const Store = configureStore({
  reducer: {
    userreducer: userSlice,
    loader: loaderSlice,
    hidoptions: hideOptions,
    showemail: showEmail,
    composemessage:Composemessage
  },
});

export default Store;
