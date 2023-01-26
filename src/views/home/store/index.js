import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const test = createAsyncThunk('home/test', async (data) => {
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
