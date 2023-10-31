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
  },
})


export const { addToken } = tokenSlice.actions

export default tokenSlice.reducer