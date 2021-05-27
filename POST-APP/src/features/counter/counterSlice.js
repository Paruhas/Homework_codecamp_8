import { createSlice } from "@reduxjs/toolkit"

export const counterSlice = createSlice({  
    name: "counter",
    initialState: {
        counter: 0
    },
    reducers :{ // action ที่เราจะไป dispat มา
        increment: (state) => { 
            state.counter = state.counter + 1 // ทำได้เพราะ redux toolkit === มีชื่อว่า immer
        },
        decrement: (state) => {
            (state.counter === 0) ? state.counter : state.counter - 1
        },
        reset: (state) => {
            state.counter = 0
        },
        addN: (state, amount) => {
            console.log(amount) // { type: ,payload:valueที่ส่งเข้ามา}
            state.counter = state.counter + amount.payload
        }
    }
});

// console.log(counterSlice)

// export action และ reducer ออกมา
export const { increment, decrement, reset, addN } = counterSlice.actions
export default counterSlice.reducer 