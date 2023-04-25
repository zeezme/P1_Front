import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import Api from '../../../services/api'

export const test = createAsyncThunk('home/test', async (data) => {
  const response = await Api.get('/patient/get')

  console.log(response)
  return data
})

const initialState = {
  fields: {
    test: '',
    porta: ''
  }
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    setFieldsValues: (state, action) => {
      state.fields[action.payload.field] = action.payload.value
    },
    reset: () => initialState
  },
  extraReducers: (builder) => {
    builder.addCase(test.fulfilled, (state, action) => {
      state.test = action.payload
    })
  }
})

export const { setFieldsValues, reset } = homeSlice.actions

export default homeSlice.reducer
