import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const signin = createAsyncThunk('login/signin', async (data) => {
  const res = await axios.post('http://localhost:8080/api/auth/signin', {
    username: data.email,
    password: data.password
  })
  if (res.status === 200) {
    localStorage.setItem('user', JSON.stringify(res.data))

    return res.data
  }
})
export const logout = createAsyncThunk('login/logout', async () => {
  localStorage.removeItem('user')
})

const initialState = {
  fields: {
    email: '',
    password: ''
  },
  login: false,
  user: {}
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setFieldsValues: (state, action) => {
      console.log(state, action)
      state.fields[action.payload.field] = action.payload.value
    },
    reset: () => initialState
  },
  extraReducers: (builder) => {
    builder.addCase(signin.fulfilled, (state, action) => {
      state.login = true
      state.user = action.payload
    })
  }
})

export const { setFieldsValues, reset } = loginSlice.actions

export default loginSlice.reducer
