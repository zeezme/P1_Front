import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const test = createAsyncThunk('apps/findApp', async (data) => {
  return data
})

const initialState = {
  fields: {},
  sidebar: false
}

export const appsSlice = createSlice({
  name: 'apps',
  initialState,
  reducers: {
    setFieldsValues: (state, action) => {
      state.fields[action.payload.field] = action.payload.value
    },
    setSidebar: (state) => {
      state.sidebar = !state.sidebar
    },
    reset: () => initialState
  },
  extraReducers: (builder) => {
    builder.addCase(test.fulfilled, (state, action) => {
      state.test = action.payload
    })
  }
})

export const { setFilterValues, setFieldsValues, setSidebar, reset } = appsSlice.actions

export default appsSlice.reducer
