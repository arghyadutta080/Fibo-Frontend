'use client'

import { configureStore } from '@reduxjs/toolkit'
import goalCounterReducer from '@/lib/redux/features/goalCounter/goalCounterSlice'

export const store = configureStore({
    reducer: {
        counter: goalCounterReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch