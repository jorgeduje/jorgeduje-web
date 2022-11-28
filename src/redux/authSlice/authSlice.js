// ** Redux Imports
import { createSlice} from "@reduxjs/toolkit"

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    errorMessage: null,
    status: "idle",
    token: null
  },
  reducers: {
    getLoggedIn: (state, action) => {
        state.token = action.payload.user.stsTokenManager.accessToken
        state.status = "success"
        state.errorMessage = null
    },
    getLoggedInError: (state, { payload }) => {
        const displayError = payload.code === "auth/user-not-found" ? "Su usuario no tiene permisos" : payload.code
        state.errorMessage = displayError
        state.status = "failed"
        state.token = null
    },
    ResetState: (state) => {
        state.errorMessage = null
        state.status = "idle"
    },
    LogOut: (state) => {
        state.token = null
    }
},
  extraReducers:{
    
}
})

export const { getLoggedIn, getLoggedInError, ResetState, LogOut } = authSlice.actions

export default authSlice.reducer
