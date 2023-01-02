import { configureStore } from '@reduxjs/toolkit'
import languageSice from '../features/languageSice'
import userReducer from '../features/userSlice'

export default configureStore({
  reducer: {
    user: userReducer,
    language: languageSice
  },
})