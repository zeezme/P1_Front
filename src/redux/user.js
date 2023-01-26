import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const test = createAsyncThunk('apps/findApp', async (data) => {
  return data
})

const initialState = {
  fields: {}
}

export const appsSlice = createSlice({
  name: 'apps',
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

export const { setFilterValues, setFieldsValues, reset } = appsSlice.actions

export default appsSlice.reducer
