import { createSlice } from '@reduxjs/toolkit'


export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'light',
  },
  reducers: {
    setTheme: (state, actions) => {
        state.theme = actions.payload
    },
  },
})

export const { setTheme } = themeSlice.actions

export default themeSlice.reducer;