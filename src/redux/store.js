import { configureStore } from '@reduxjs/toolkit'
import { cardsReducer } from './slices/cards';
import { scheduleReducer } from './slices/schedule';

const store = configureStore({
    reducer: {
        cards: cardsReducer,
        schedule: scheduleReducer,
    },
})

export default store;
