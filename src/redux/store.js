// ** Redux Imports
import rootReducer from "./rootReducer"
import { configureStore } from "@reduxjs/toolkit"
import apiService from "../api/api"


const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
      thunk: {
        extraArgument: apiService
      }
    })
  }
})

export { store }
