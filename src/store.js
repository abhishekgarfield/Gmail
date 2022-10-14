import { configureStore } from "@reduxjs/toolkit";
import loaderSlice from "./Reducers/loaderSlice";
import userSlice from "./Reducers/userSlice";

const Store=configureStore({
    reducer:{
        userreducer:userSlice,
        loader:loaderSlice
    }
})

export default Store;