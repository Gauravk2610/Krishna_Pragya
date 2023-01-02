import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: null,
    subscription: null,
  },
  reducers: {
    login: (state, action) => {
        state.value = action.payload.user;
        }
    ,
    logout: (state) => {
        state.value = null;
        }
    ,
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions

export default userSlice.reducer