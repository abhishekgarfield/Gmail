import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./Components/userSlice";

const Store=configureStore({
    reducer:{
        userreducer:userSlice,
    }
})

export default Store;