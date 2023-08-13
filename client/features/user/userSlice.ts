import { createSlice } from '@reduxjs/toolkit'
import { User } from 'interfaces/user.interface';

const userData: User = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    gender: 'male',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: userData,
  },
  reducers: {
    setUser: (state, actions) => {
        state.user = actions.payload
    },
  },
})

export const { setUser } = userSlice.actions

export default userSlice.reducer;