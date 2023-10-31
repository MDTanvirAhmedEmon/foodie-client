import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addLogInUser: (state, action) => {
      state.user = action.payload
    },
  },
})


export const { addLogInUser } = userSlice.actions

export default userSlice.reducer