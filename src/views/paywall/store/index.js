import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import Api from '../../../services/api'
import { show } from '../../../@core/components/modals/utils'

export const createPatient = createAsyncThunk('home/createPatient', async (data) => {
  const response = await Api.post('/patient/create', data)
  if (response.status === 200) {
    show.toast(response.data.message, 'success')
    const update = await Api.post('/patient/get', { parent_id: data.parent_id })
    return update.data
  }
})

export const getPatients = createAsyncThunk('home/getPatients', async (data) => {
  const response = await Api.post('/patient/get', data)

  if (response.status === 200) {
    return response.data
  }
})

const initialState = {
  fields: {
    name: '',
    email: '',
    phone: '',
    cpf: '',
    address: '',
    price: ''
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
    builder.addCase(createPatient.fulfilled, (state, action) => {
      state.patients = action.payload
    })
    builder.addCase(getPatients.fulfilled, (state, action) => {
      state.patients = action.payload
    })
  }
})

export const { setFieldsValues, reset } = homeSlice.actions

export default homeSlice.reducer
