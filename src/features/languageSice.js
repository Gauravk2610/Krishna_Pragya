import { createSlice } from '@reduxjs/toolkit'

export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    value: 'English',
  },
  reducers: {
    setLanguage: (state, action) => {
        state.value = action.payload.language;
    }
  },
})

// Action creators are generated for each case reducer function
export const { setLanguage } = languageSlice.actions

export default languageSlice.reducer