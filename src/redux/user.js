import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const test = createAsyncThunk('apps/findApp', async (data) => {
  return data
})

const initialState = {
  fields: {},
  sidebar: false,
  sidebar_responsive: false
}

export const appsSlice = createSlice({
  name: 'apps',
  initialState,
  reducers: {
    setFieldsValues: (state, action) => {
      state.fields[action.payload.field] = action.payload.value
    },
    setSidebar: (state, action) => {
      state.sidebar = action.payload
    },
    setSidebarResponsive: (state, action) => {
      state.sidebar_responsive = action.payload
    },
    togleSidebar: (state) => {
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

export const {
  setFilterValues,
  setFieldsValues,
  setSidebar,
  setSidebarResponsive,
  togleSidebar,
  reset
} = appsSlice.actions

export default appsSlice.reducer
