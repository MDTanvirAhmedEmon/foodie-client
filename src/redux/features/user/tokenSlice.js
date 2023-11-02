import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null,
}

export const tokenSlice = createSlice({
  name: 'userToken',
  initialState,
  reducers: {
    addToken: (state, action) => {
      state.token = action.payload
    },
    removeToken: (state) => {
      state.token = null;
    },
  },
})


export const { addToken, removeToken } = tokenSlice.actions

export default tokenSlice.reducer;