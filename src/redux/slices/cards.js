import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "../../axios"

export const fetchCards = createAsyncThunk('cards/fetchCards', async () => {
    const { data } = await axios.get('/title/updates');
    return data;
})

const initialState = {
    cards: {
        items: [],
        status: 'loading',
    }
}

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchCards.pending]: (state) => {
            state.cards.items = []
            state.cards.status = 'loading'
        },
        [fetchCards.fulfilled]: (state, action) => {
            state.cards.items = action.payload;
            state.cards.status = 'loaded'
        },
        [fetchCards.rejected]: (state) => {
            state.cards.items = []
            state.cards.status = 'erroe'
        }
    }
})

export const cardsReducer = cardsSlice.reducer;