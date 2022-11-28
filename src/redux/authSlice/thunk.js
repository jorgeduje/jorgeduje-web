// import { createAsyncThunk } from "@reduxjs/toolkit"
import { getLoggedIn, getLoggedInError } from "./authSlice"
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../firebaseConfig"

// export const getData = createAsyncThunk(
//     "getData",
//     async (argument, thunkAPI) => {
//       try {
//         const res = await thunkAPI.extra.products.getProducts()
//         return res.data
//       } catch (err) {
//         if (!err.response) {
//           throw err
//         }
//         return thunkAPI.rejectWithValue(err.response.data.error_messages)
//       }
//     }
//   )

export const onLogin = ({ email, password }) => async (dispatch) => {
    try {
        const userLoggedIn = await signInWithEmailAndPassword(
            auth,
            email,
            password
        )
        if (userLoggedIn) {
            console.log("se logio", userLoggedIn)
            dispatch(getLoggedIn(userLoggedIn))
        }
    } catch (error) {
        console.log("nose logio")

       dispatch(getLoggedInError(error))
    }
}