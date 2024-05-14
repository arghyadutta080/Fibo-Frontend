'use client'

import { Goal } from '@/lib/types/goal'
import { goals } from '@/utils/constants/goals'
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface goalCounterState {
    goals: Goal[] | []
}

const initialState: goalCounterState = {
    goals: [],
}

export const goalCounterSlice = createSlice({
    name: 'goalCounter',
    initialState,
    reducers: {
        addGoal: (state, action: PayloadAction<Goal>) => {
            state.goals = [...state.goals, action.payload]
        },
        deleteGoal: (state, action: PayloadAction<number>) => {
            state.goals = state.goals.filter((goal) => goal.id !== action.payload)
        },
    },
})

export const { addGoal, deleteGoal } = goalCounterSlice.actions

export const goalCompletion = (state: { counter: goalCounterState }) => {
    const percent = (state.counter.goals.length / goals.length) * 100
    return percent
}


export default goalCounterSlice.reducer