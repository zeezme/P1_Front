import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const logout = createAsyncThunk('login/logout', async () => {
  localStorage.removeItem('user')
})

const initialState = {
  fields: {
    email: '',
    password: ''
  },
  login: false,
  user: []
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setFieldsValues: (state, action) => {
      state.fields[action.payload.field] = action.payload.value
    },
    setUser: (state, action) => {
      state.login = true
      state.user = action.payload
    },
    reset: () => initialState
  }
})

export const { setFieldsValues, setUser, reset } = loginSlice.actions

export default loginSlice.reducer
