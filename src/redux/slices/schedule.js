import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "../../axios"

export const fetchSchedule = createAsyncThunk('cards/fetchSchedule', async () => {
    const { data } = await axios.get(`/title/schedule`);
    return data;
})

const initialState = {
    schedule: {
        items: [],
        status: 'loading',
    }
}

const scheduleSlice = createSlice({
    name: 'schedule',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchSchedule.pending]: (state) => {
            state.schedule.items = []
            state.schedule.status = 'loading'
        },
        [fetchSchedule.fulfilled]: (state, action) => {
            state.schedule.items = action.payload;
            state.schedule.status = 'loaded'
        },
        [fetchSchedule.rejected]: (state) => {
            state.schedule.items = []
            state.schedule.status = 'error'
        }
    }
})

export const scheduleReducer = scheduleSlice.reducer;